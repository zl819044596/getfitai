"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function MacroCalculatorClient() {
  const [weight, setWeight] = useState(70);
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState<{
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  } | null>(null);

  const calculate = () => {
    const bmr = 10 * weight + 6.25 * 170 - 5 * 30 + 5;
    const tdee = bmr * 1.55;

    let calories = tdee;
    if (goal === "lose") calories -= 500;
    if (goal === "gain") calories += 300;

    const protein = weight * (goal === "gain" ? 2.2 : 2.0);
    const fat = (calories * 0.25) / 9;
    const carbs = (calories - protein * 4 - fat * 9) / 4;

    setResult({
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat),
    });
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <Label>Weight (kg): {weight}</Label>
            <Slider
              value={[weight]}
              onValueChange={(v) => setWeight(v[0])}
              min={40}
              max={150}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Goal</Label>
            <RadioGroup value={goal} onValueChange={setGoal} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lose" id="lose" />
                <Label htmlFor="lose">Lose Fat</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maintain" id="maintain" />
                <Label htmlFor="maintain">Maintain</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gain" id="gain" />
                <Label htmlFor="gain">Build Muscle</Label>
              </div>
            </RadioGroup>
          </div>

          <Button onClick={calculate} className="w-full">
            Calculate Macros
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Daily Macros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.calories}</div>
              <div className="text-sm text-muted-foreground">Calories</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.protein}g</div>
              <div className="text-sm text-muted-foreground">Protein</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.carbs}g</div>
              <div className="text-sm text-muted-foreground">Carbs</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.fat}g</div>
              <div className="text-sm text-muted-foreground">Fat</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
