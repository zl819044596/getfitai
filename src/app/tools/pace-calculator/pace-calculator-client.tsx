"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function PaceCalculatorClient() {
  const [distance, setDistance] = useState(5);
  const [unit, setUnit] = useState("km");
  const [timeMinutes, setTimeMinutes] = useState(25);
  const [result, setResult] = useState<{
    pacePerKm: string;
    pacePerMile: string;
    speedKmh: number;
    speedMph: number;
  } | null>(null);

  const calculate = () => {
    const totalSeconds = timeMinutes * 60;
    const distKm = unit === "km" ? distance : distance * 1.60934;
    const distMile = unit === "mile" ? distance : distance / 1.60934;

    const paceSecPerKm = totalSeconds / distKm;
    const paceSecPerMile = totalSeconds / distMile;

    const formatPace = (sec: number) => {
      const m = Math.floor(sec / 60);
      const s = Math.round(sec % 60);
      return `${m}:${s.toString().padStart(2, "0")}`;
    };

    setResult({
      pacePerKm: formatPace(paceSecPerKm),
      pacePerMile: formatPace(paceSecPerMile),
      speedKmh: Math.round((distKm / (timeMinutes / 60)) * 10) / 10,
      speedMph: Math.round((distMile / (timeMinutes / 60)) * 10) / 10,
    });
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <Label>Distance: {distance} {unit}</Label>
            <Slider
              value={[distance]}
              onValueChange={(v) => setDistance(v[0])}
              min={1}
              max={42}
              step={0.5}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Unit</Label>
            <RadioGroup value={unit} onValueChange={setUnit} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="km" id="km" />
                <Label htmlFor="km">Kilometers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mile" id="mile" />
                <Label htmlFor="mile">Miles</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Time: {timeMinutes} minutes</Label>
            <Slider
              value={[timeMinutes]}
              onValueChange={(v) => setTimeMinutes(v[0])}
              min={5}
              max={300}
              step={1}
              className="mt-2"
            />
          </div>

          <Button onClick={calculate} className="w-full">
            Calculate Pace
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Running Pace</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.pacePerKm}</div>
              <div className="text-sm text-muted-foreground">/km</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.pacePerMile}</div>
              <div className="text-sm text-muted-foreground">/mile</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.speedKmh}</div>
              <div className="text-sm text-muted-foreground">km/h</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.speedMph}</div>
              <div className="text-sm text-muted-foreground">mph</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
