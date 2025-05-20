"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/utils/cn"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  {
    code: "es",
    name: "Español",
    flag: "🇲🇽",
  },
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
];

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = React.useState<Language>(languages[0])

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    // Aquí puedes agregar la lógica para cambiar el idioma en tu aplicación
    console.log(`Idioma cambiado a: ${language.code}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden lg:inline-block">{currentLanguage.name}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={cn("flex items-center gap-2 px-3 py-2", currentLanguage.code === language.code && "bg-accent")}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {currentLanguage.code === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
