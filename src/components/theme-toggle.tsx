"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <div className="flex items-center">
        <Sun className="h-4 w-4 text-zinc-500 mr-2" />
        <div className="w-12 h-6 bg-zinc-200 rounded-full flex items-center p-1">
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <Moon className="h-4 w-4 text-zinc-500 ml-2" />
      </div>
    )
  }

  return (
    <div className="flex items-center">
      <Sun className="h-4 w-4 text-zinc-500 mr-2" />
      <button
        onClick={toggleTheme}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          theme === "dark" ? "bg-indigo-600" : "bg-zinc-200"
        }`}
        aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        <span className="sr-only">{theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}</span>
        <div
          className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <Moon className="h-4 w-4 text-zinc-500 ml-2" />
    </div>
  )
}
