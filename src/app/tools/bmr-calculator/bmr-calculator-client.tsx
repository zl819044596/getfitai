"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function BmrCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [unit, setUnit] = useState("metric");
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null);

  const calculate = () => {
    let w = weight;
    let h = height;

    if (unit === "imperial") {
      w = weight * 0.453592;
      h = height * 2.54;
    }

    let bmr: number;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * age + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * age - 161;
    }

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(bmr * 1.55),
    });
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="space-y-6">
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
            <Label>Unit System</Label>
            <RadioGroup value={unit} onValueChange={setUnit} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="metric" id="metric" />
                <Label htmlFor="metric">Metric (kg, cm)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <Label htmlFor="imperial">Imperial (lb, in)</Label>
              </div>
            </RadioGroup>
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
            <Label>Weight: {weight} {unit === "metric" ? "kg" : "lb"}</Label>
            <Slider
              value={[weight]}
              onValueChange={(v) => setWeight(v[0])}
              min={unit === "metric" ? 30 : 66}
              max={unit === "metric" ? 200 : 440}
              step={unit === "metric" ? 0.5 : 1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Height: {height} {unit === "metric" ? "cm" : "in"}</Label>
            <Slider
              value={[height]}
              onValueChange={(v) => setHeight(v[0])}
              min={unit === "metric" ? 100 : 39}
              max={unit === "metric" ? 250 : 98}
              step={unit === "metric" ? 1 : 0.5}
              className="mt-2"
            />
          </div>

          <Button onClick={calculate} className="w-full">
            Calculate BMR & TDEE
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold">{result.bmr}</div>
              <div className="text-sm text-muted-foreground">BMR (calories/day)</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold">{result.tdee}</div>
              <div className="text-sm text-muted-foreground">TDEE (moderate activity)</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
