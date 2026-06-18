"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_CLOSE_KEY = "worktree:auto-close";
const COUNTDOWN_SECONDS = 10;

export function useAutoClose(active: boolean) {
  const [autoClose, setAutoClose] = useState(true);
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    setCountdown(COUNTDOWN_SECONDS);
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearTimer();
          window.close();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clearTimer]);

  useEffect(() => {
    const stored = localStorage.getItem(AUTO_CLOSE_KEY);
    setAutoClose(stored === null ? true : stored === "true");
  }, []);

  useEffect(() => {
    if (active && autoClose) {
      startTimer();
    } else {
      clearTimer();
      if (active) setCountdown(COUNTDOWN_SECONDS);
    }
    return clearTimer;
  }, [active, autoClose, startTimer, clearTimer]);

  const handleToggle = useCallback((value: boolean) => {
    setAutoClose(value);
    localStorage.setItem(AUTO_CLOSE_KEY, String(value));
  }, []);

  return { autoClose, countdown, handleToggle };
}
