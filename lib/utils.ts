import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ThemeMode = "light" | "dark"

const THEME_STORAGE_KEY = "sneakers-theme"

export const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "light"
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
  if (stored === "light" || stored === "dark") {
    return stored
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  return prefersDark ? "dark" : "light"
}

export const setDocumentTheme = (theme: ThemeMode) => {
  if (typeof document === "undefined") {
    return
  }

  const root = document.documentElement
  if (theme === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
  root.dataset.theme = theme

  if (typeof window !== "undefined") {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }
}