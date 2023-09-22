import React, { useEffect, useCallback, useMemo } from "react";
import { DarkModeContext } from "./DarkModeContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function DarkModeProvider({ children }) {
  const [darkmode, setDarkmode] = useLocalStorage("dark", false);

  const toggleDarkMode = useCallback(() => {
    setDarkmode((prev) => !prev);
  }, [setDarkmode]);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  const value = useMemo(
    () => ({ darkmode, toggleDarkMode }),
    [darkmode, toggleDarkMode]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
