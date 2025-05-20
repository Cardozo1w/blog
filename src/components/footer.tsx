import React from "react";
import SocialMedia from "./social-media";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Oscar Cardoso</h2>
            <p className="text-slate-400 mt-2">{t("description")}</p>
          </div>
          <SocialMedia />
        </div>
        <div className="md:max-w-5xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Oscar Cardoso. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
