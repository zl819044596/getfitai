"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CalorieCalculatorClient() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    target: number;
  } | null>(null);

  const calculate = () => {
    let bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const multipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const tdee = bmr * (multipliers[activity] || 1.55);

    let target = tdee;
    if (goal === "lose") target -= 500;
    if (goal === "gain") target += 300;

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
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
              min={30}
              max={200}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Height (cm): {height}</Label>
            <Slider
              value={[height]}
              onValueChange={(v) => setHeight(v[0])}
              min={100}
              max={250}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Age: {age}</Label>
            <Slider
              value={[age]}
              onValueChange={(v) => setAge(v[0])}
              min={10}
              max={100}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Gender</Label>
            <RadioGroup value={gender} onValueChange={setGender} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Activity Level</Label>
            <RadioGroup value={activity} onValueChange={setActivity} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sedentary" id="sedentary" />
                <Label htmlFor="sedentary">Sedentary (desk job)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light">Light (1-2 days/week)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="moderate" />
                <Label htmlFor="moderate">Moderate (3-5 days/week)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="active" id="active" />
                <Label htmlFor="active">Active (6-7 days/week)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="veryActive" id="veryActive" />
                <Label htmlFor="veryActive">Very Active (physical job)</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Goal</Label>
            <RadioGroup value={goal} onValueChange={setGoal} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lose" id="lose" />
                <Label htmlFor="lose">Lose Weight (-500 cal)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maintain" id="maintain" />
                <Label htmlFor="maintain">Maintain Weight</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gain" id="gain" />
                <Label htmlFor="gain">Gain Weight (+300 cal)</Label>
              </div>
            </RadioGroup>
          </div>

          <Button onClick={calculate} className="w-full">
            Calculate Calories
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Calorie Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.bmr}</div>
              <div className="text-sm text-muted-foreground">BMR (resting)</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.tdee}</div>
              <div className="text-sm text-muted-foreground">TDEE (maintenance)</div>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">{result.target}</div>
              <div className="text-sm text-muted-foreground">Target (with goal)</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
