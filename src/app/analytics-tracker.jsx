'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Esperamos a que el script de GA esté disponible
    const handleRouteChange = () => {
      gtag.pageview(pathname);
    };

    // Esperamos unos milisegundos para asegurarnos que gtag ya cargó
    const timeout = setTimeout(handleRouteChange, 500); // puedes ajustar a 200ms o 1000ms si es necesario

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
