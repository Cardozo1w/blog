// lib/gtag.js
export const GA_TRACKING_ID = 'G-3WJHMT4J4Z';

export const pageview = (url) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
