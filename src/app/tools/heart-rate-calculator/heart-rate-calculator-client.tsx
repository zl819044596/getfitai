"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export function HeartRateCalculatorClient() {
  const [age, setAge] = useState(30);
  const [result, setResult] = useState<{
    maxHR: number;
    resting: number;
    fatBurn: string;
    cardio: string;
    peak: string;
  } | null>(null);

  const calculate = () => {
    const maxHR = 220 - age;
    const resting = 60 + Math.floor(age / 10);
    
    setResult({
      maxHR,
      resting,
      fatBurn: `${Math.round(maxHR * 0.6)} - ${Math.round(maxHR * 0.7)}`,
      cardio: `${Math.round(maxHR * 0.7)} - ${Math.round(maxHR * 0.8)}`,
      peak: `${Math.round(maxHR * 0.8)} - ${Math.round(maxHR * 0.95)}`,
    });
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="space-y-6">
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

          <Button onClick={calculate} className="w-full">
            Calculate Heart Rate Zones
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Heart Rate Zones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.maxHR}</div>
              <div className="text-sm text-muted-foreground">Max Heart Rate</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.resting}</div>
              <div className="text-sm text-muted-foreground">Est. Resting HR</div>
            </div>
            <div className="text-center p-4 bg-green-500/10 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{result.fatBurn}</div>
              <div className="text-sm text-muted-foreground">Fat Burn Zone</div>
            </div>
            <div className="text-center p-4 bg-orange-500/10 rounded-lg">
              <div className="text-2xl font-bold text-orange-400">{result.cardio}</div>
              <div className="text-sm text-muted-foreground">Cardio Zone</div>
            </div>
            <div className="text-center p-4 bg-red-500/10 rounded-lg md:col-span-2">
              <div className="text-2xl font-bold text-red-400">{result.peak}</div>
              <div className="text-sm text-muted-foreground">Peak Zone</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
