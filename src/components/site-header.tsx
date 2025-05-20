import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { LanguageSelector } from "./language-selector";
import { useTranslations } from "next-intl";

export function SiteHeader() {
  const t = useTranslations("Navigation");

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
              {t("home")}
            </Link>
            <Link
              href="/#posts"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("posts")}
            </Link>
            <Link
              href="#about-me"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("about")}
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("portfolio")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("contact")}
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
