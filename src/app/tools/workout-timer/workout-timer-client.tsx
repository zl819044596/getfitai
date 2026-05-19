"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Timer, Play, Pause, RotateCcw, Volume2, VolumeX, Plus, Minus } from "lucide-react";
import { Nav } from "@/components/nav";

const PRESETS = [
  { name: "Tabata", work: 20, rest: 10, rounds: 8 },
  { name: "HIIT 30/30", work: 30, rest: 30, rounds: 10 },
  { name: "HIIT 40/20", work: 40, rest: 20, rounds: 8 },
  { name: "EMOM", work: 60, rest: 0, rounds: 10 },
  { name: "Circuit", work: 45, rest: 15, rounds: 12 },
];

type TimerPhase = "idle" | "work" | "rest" | "done";

export function WorkoutTimerClient() {
  const [workTime, setWorkTime] = useState(30);
  const [restTime, setRestTime] = useState(30);
  const [rounds, setRounds] = useState(10);
  const [currentRound, setCurrentRound] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [phase, setPhase] = useState<TimerPhase>("idle");
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const playBeep = useCallback((freq = 800, duration = 0.3) => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      gain.gain.value = 0.3;
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio not supported
    }
  }, [soundEnabled]);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startWorkout = useCallback(() => {
    setCurrentRound(1);
    setTimeLeft(workTime);
    setPhase("work");
    setIsRunning(true);
    playBeep(600, 0.2);
  }, [workTime, playBeep]);

  const pauseWorkout = useCallback(() => {
    setIsRunning(false);
    clearTimer();
  }, [clearTimer]);

  const resumeWorkout = useCallback(() => {
    setIsRunning(true);
  }, []);

  const resetWorkout = useCallback(() => {
    clearTimer();
    setIsRunning(false);
    setPhase("idle");
    setCurrentRound(0);
    setTimeLeft(0);
  }, [clearTimer]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Phase complete
            return 0;
          }
          if (prev <= 4 && prev > 1) {
            playBeep(1000, 0.15);
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearTimer();
    }

    return () => clearTimer();
  }, [isRunning, timeLeft, clearTimer, playBeep]);

  // Handle phase transitions
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      if (phase === "work") {
        if (restTime > 0) {
          setPhase("rest");
          setTimeLeft(restTime);
          playBeep(400, 0.5);
        } else {
          // No rest, go to next round
          if (currentRound >= rounds) {
            setPhase("done");
            setIsRunning(false);
            playBeep(1200, 0.8);
          } else {
            setCurrentRound((r) => r + 1);
            setTimeLeft(workTime);
            setPhase("work");
            playBeep(600, 0.2);
          }
        }
      } else if (phase === "rest") {
        if (currentRound >= rounds) {
          setPhase("done");
          setIsRunning(false);
          playBeep(1200, 0.8);
        } else {
          setCurrentRound((r) => r + 1);
          setTimeLeft(workTime);
          setPhase("work");
          playBeep(600, 0.2);
        }
      }
    }
  }, [timeLeft, isRunning, phase, currentRound, rounds, workTime, restTime, playBeep]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const totalTime = (workTime + restTime) * rounds;
  const elapsedTime = phase === "idle"
    ? 0
    : (currentRound - 1) * (workTime + restTime) + (phase === "work" ? workTime - timeLeft : workTime + restTime - timeLeft);
  const progress = totalTime > 0 ? (elapsedTime / totalTime) * 100 : 0;

  const phaseColor = phase === "work" ? "text-orange-600" : phase === "rest" ? "text-blue-600" : phase === "done" ? "text-green-600" : "text-gray-600";
  const phaseBg = phase === "work" ? "bg-orange-50" : phase === "rest" ? "bg-blue-50" : phase === "done" ? "bg-green-50" : "bg-gray-50";

  const loadPreset = (preset: typeof PRESETS[0]) => {
    setWorkTime(preset.work);
    setRestTime(preset.rest);
    setRounds(preset.rounds);
    resetWorkout();
  };

  const adjust = (setter: React.Dispatch<React.SetStateAction<number>>, value: number, delta: number, min = 1) => {
    setter(Math.max(min, value + delta));
  };

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-6">
              <Timer className="w-4 h-4" />
              <span>Workout Timer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Interval Timer
            </h1>
            <p className="text-lg text-gray-500">
              HIIT, Tabata, and circuit training timer.
            </p>
          </div>

          {/* Presets */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => loadPreset(preset)}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* Timer Display */}
          <div className={`${phaseBg} rounded-3xl p-8 mb-8 text-center transition-colors duration-500`}>
            {phase !== "idle" && (
              <div className="mb-4">
                <span className={`text-sm font-semibold uppercase tracking-wider ${phaseColor}`}>
                  {phase === "done" ? "Complete!" : `${phase} — Round ${currentRound}/${rounds}`}
                </span>
              </div>
            )}

            <div className={`text-7xl md:text-8xl font-bold font-mono mb-6 ${phaseColor} transition-colors duration-500`}>
              {phase === "idle" ? formatTime(workTime) : formatTime(timeLeft)}
            </div>

            {/* Progress bar */}
            {phase !== "idle" && (
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    phase === "work" ? "bg-orange-500" : phase === "rest" ? "bg-blue-500" : "bg-green-500"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              {phase === "idle" || phase === "done" ? (
                <button
                  onClick={startWorkout}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  {phase === "done" ? "Restart" : "Start"}
                </button>
              ) : (
                <>
                  <button
                    onClick={isRunning ? pauseWorkout : resumeWorkout}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    {isRunning ? "Pause" : "Resume"}
                  </button>
                  <button
                    onClick={resetWorkout}
                    className="p-4 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </>
              )}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-4 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              >
                {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Settings */}
          {phase === "idle" && (
            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              <h3 className="font-semibold text-center">Timer Settings</h3>

              <div className="grid sm:grid-cols-3 gap-6">
                {/* Work */}
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-500 mb-3">Work (sec)</label>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => adjust(setWorkTime, workTime, -5)}
                      className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold w-16">{workTime}</span>
                    <button
                      onClick={() => adjust(setWorkTime, workTime, 5)}
                      className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Rest */}
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-500 mb-3">Rest (sec)</label>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => adjust(setRestTime, restTime, -5, 0)}
                      className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold w-16">{restTime}</span>
                    <button
                      onClick={() => adjust(setRestTime, restTime, 5)}
                      className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Rounds */}
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-500 mb-3">Rounds</label>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => adjust(setRounds, rounds, -1)}
                      className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold w-16">{rounds}</span>
                    <button
                      onClick={() => adjust(setRounds, rounds, 1)}
                      className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
