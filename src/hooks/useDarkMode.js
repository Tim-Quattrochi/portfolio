import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export function useDarkMode() {
  return useContext(DarkModeContext);
}
