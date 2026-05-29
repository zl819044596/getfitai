"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function WilksCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [bodyWeight, setBodyWeight] = useState(70);
  const [totalLifted, setTotalLifted] = useState(300);
  const [unit, setUnit] = useState("kg");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const bw = unit === "kg" ? bodyWeight : bodyWeight * 0.453592;
    const total = unit === "kg" ? totalLifted : totalLifted * 0.453592;

    const coefficients =
      gender === "male"
        ? {
            a: -216.0475144,
            b: 16.2606339,
            c: -0.002388645,
            d: -0.00113732,
            e: 7.01863e-6,
            f: -1.291e-8,
          }
        : {
            a: 594.31747775582,
            b: -27.23842536447,
            c: 0.82112226871,
            d: -0.00930733913,
            e: 4.731582e-5,
            f: -9.054e-8,
          };

    const { a, b, c, d, e, f } = coefficients;
    const denom =
      a +
      b * bw +
      c * Math.pow(bw, 2) +
      d * Math.pow(bw, 3) +
      e * Math.pow(bw, 4) +
      f * Math.pow(bw, 5);

    const wilks = (500 / denom) * total;
    setResult(Math.round(wilks * 100) / 100);
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
            <Label>Unit</Label>
            <RadioGroup value={unit} onValueChange={setUnit} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="kg" id="kg" />
                <Label htmlFor="kg">Kilograms</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lb" id="lb" />
                <Label htmlFor="lb">Pounds</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Body Weight: {bodyWeight} {unit}</Label>
            <Slider
              value={[bodyWeight]}
              onValueChange={(v) => setBodyWeight(v[0])}
              min={30}
              max={200}
              step={0.5}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Total Lifted (SBD): {totalLifted} {unit}</Label>
            <Slider
              value={[totalLifted]}
              onValueChange={(v) => setTotalLifted(v[0])}
              min={50}
              max={1000}
              step={2.5}
              className="mt-2"
            />
          </div>

          <Button onClick={calculate} className="w-full">
            Calculate Wilks Score
          </Button>
        </div>
      </Card>

      {result !== null && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Wilks Score</h3>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-5xl font-bold">{result}</div>
            <div className="text-muted-foreground mt-2">Wilks Score</div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            The Wilks score normalizes strength across different body weights, allowing fair comparison between lifters.
          </p>
        </Card>
      )}
    </div>
  );
}
