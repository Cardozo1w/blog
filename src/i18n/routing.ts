import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es-mx'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localeDetection: true
});