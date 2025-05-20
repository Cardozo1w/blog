import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { LanguageSelector } from "./language-selector";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Oscar Cardoso
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex lg:gap-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Inicio
            </Link>
            <Link
              href="/#posts"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Posts
            </Link>
            <Link
              href="#about-me"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sobre mí
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Portafolio
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contacto
            </Link>
          </div>
          <div className="mr-4 lg:mr-0 flex gap-4">
            <ThemeToggle />
            <LanguageSelector />
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
