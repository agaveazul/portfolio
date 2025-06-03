"use client";
import { useEffect, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}

export function useCountUp({
  target,
  duration = 2,
  delay = 0,
  suffix = "",
}: UseCountUpOptions) {
  const [hasStarted, setHasStarted] = useState(false);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  });

  const latest = useTransform(
    springValue,
    (value) => Math.round(value) + suffix
  );

  const [displayValue, setDisplayValue] = useState("0" + suffix);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
      motionValue.set(target);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [target, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = latest.on("change", (value) => {
      setDisplayValue(value);
    });

    return unsubscribe;
  }, [latest]);

  return { displayValue, hasStarted };
}
