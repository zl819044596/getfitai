"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function IdealWeightCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(175);
  const [unit, setUnit] = useState("metric");
  const [result, setResult] = useState<{
    bmiRange: string;
    robinson: string;
    miller: string;
    devine: string;
    hamwi: string;
  } | null>(null);

  const calculate = () => {
    const h = unit === "metric" ? height : height * 2.54;
    const hInches = h / 2.54;

    const minBMI = 18.5 * Math.pow(h / 100, 2);
    const maxBMI = 24.9 * Math.pow(h / 100, 2);

    let robinson: number, miller: number, devine: number, hamwi: number;

    if (gender === "male") {
      robinson = 52 + 1.9 * (hInches - 60);
      miller = 56.2 + 1.41 * (hInches - 60);
      devine = 50 + 2.3 * (hInches - 60);
      hamwi = 48 + 2.7 * (hInches - 60);
    } else {
      robinson = 49 + 1.7 * (hInches - 60);
      miller = 53.1 + 1.36 * (hInches - 60);
      devine = 45.5 + 2.3 * (hInches - 60);
      hamwi = 45.5 + 2.2 * (hInches - 60);
    }

    setResult({
      bmiRange: `${Math.round(minBMI)} - ${Math.round(maxBMI)} kg`,
      robinson: `${Math.round(robinson)} kg`,
      miller: `${Math.round(miller)} kg`,
      devine: `${Math.round(devine)} kg`,
      hamwi: `${Math.round(hamwi)} kg`,
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
                <Label htmlFor="metric">Metric (cm)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <Label htmlFor="imperial">Imperial (in)</Label>
              </div>
            </RadioGroup>
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
            Calculate Ideal Weight
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Ideal Weight Estimates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.bmiRange}</div>
              <div className="text-sm text-muted-foreground">BMI Healthy Range</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.robinson}</div>
              <div className="text-sm text-muted-foreground">Robinson (1983)</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.miller}</div>
              <div className="text-sm text-muted-foreground">Miller (1983)</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.devine}</div>
              <div className="text-sm text-muted-foreground">Devine (1974)</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg md:col-span-2">
              <div className="text-2xl font-bold">{result.hamwi}</div>
              <div className="text-sm text-muted-foreground">Hamwi (1964)</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
