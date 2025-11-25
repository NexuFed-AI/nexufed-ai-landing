import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Track page views on route changes
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if user has consented to analytics
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) return;

    try {
      const preferences = JSON.parse(consent);
      if (!preferences.analytics) return;
    } catch (e) {
      return;
    }

    // Track page view if gtag is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-S8T8X439TL', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  // Check if user has consented to analytics
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return;

  try {
    const preferences = JSON.parse(consent);
    if (!preferences.analytics) return;
  } catch (e) {
    return;
  }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
