"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/cn";
import { useRouter, usePathname } from "next/navigation";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages = {
  en: {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
  "es-mx": {
    code: "es-mx",
    name: "Spanish",
    flag: "🇲🇽",
  },
};

type keyType = keyof typeof languages;

export function LanguageSelector() {
  const pathname = usePathname() as string;
  const router = useRouter();

  const currentPathname = pathname.slice(1) as keyType;

  const [currentLanguage, setCurrentLanguage] = React.useState<Language>(
    languages[currentPathname] || languages.en
  );

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    const langsToCheck = ["en", "es-mx"];
    let newPath = pathname;

    const foundLang = langsToCheck.find((lang) => pathname.includes(lang));
    if (foundLang && foundLang !== language.code) {
      newPath = pathname.replace(foundLang, language.code);
    }

    router.push(`${newPath}`);
  };

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
        {Object.keys(languages).map((key) => {
          const languageCode = key as keyType;
          const language = languages[languageCode];
          return (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 cursor-pointer",
                currentLanguage.code === language.code && "bg-accent"
              )}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="flex-1">{language.name}</span>
              {currentLanguage.code === language.code && (
                <Check className="h-4 w-4" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
