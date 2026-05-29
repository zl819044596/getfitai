"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function ProteinCalculatorClient() {
  const [weight, setWeight] = useState(70);
  const [goal, setGoal] = useState("maintain");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState<{
    minProtein: number;
    maxProtein: number;
    target: number;
  } | null>(null);

  const calculate = () => {
    const multipliers: Record<string, Record<string, number>> = {
      sedentary: { lose: 1.6, maintain: 1.2, gain: 1.8 },
      light: { lose: 1.8, maintain: 1.4, gain: 2.0 },
      moderate: { lose: 2.0, maintain: 1.6, gain: 2.2 },
      active: { lose: 2.2, maintain: 1.8, gain: 2.4 },
      veryActive: { lose: 2.4, maintain: 2.0, gain: 2.6 },
    };

    const base = multipliers[activity]?.[goal] || 1.6;
    const target = weight * base;

    setResult({
      minProtein: Math.round(target * 0.9),
      maxProtein: Math.round(target * 1.1),
      target: Math.round(target),
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
            <Label>Activity Level</Label>
            <RadioGroup value={activity} onValueChange={setActivity} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sedentary" id="sedentary" />
                <Label htmlFor="sedentary">Sedentary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light">Light Activity</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="moderate" />
                <Label htmlFor="moderate">Moderate Activity</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="active" id="active" />
                <Label htmlFor="active">Very Active</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="veryActive" id="veryActive" />
                <Label htmlFor="veryActive">Athlete</Label>
              </div>
            </RadioGroup>
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
            Calculate Protein
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Daily Protein Target</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.minProtein}g</div>
              <div className="text-sm text-muted-foreground">Minimum</div>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">{result.target}g</div>
              <div className="text-sm text-muted-foreground">Target</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.maxProtein}g</div>
              <div className="text-sm text-muted-foreground">Maximum</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
