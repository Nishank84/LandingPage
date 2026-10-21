export const CALENDLY_URL = 'https://calendly.com/admin-gameup';

export interface CalendlyUtm {
  utmCampaign?: string;
  utmSource?: string;
  utmMedium?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface CalendlyPopupOptions {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
    guests?: string[];
    customAnswers?: Record<string, string>;
  };
  utm?: CalendlyUtm;
}

export interface CalendlyBadgeOptions {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: CalendlyPopupOptions) => void;
      closePopupWidget: () => void;
      initBadgeWidget: (options: CalendlyBadgeOptions) => void;
      destroyBadgeWidget: () => void;
      showPopupWidget: (url: string, embedType?: string, options?: Record<string, unknown>) => void;
    };
  }
}

/**
 * Ensures Calendly script is loaded exactly once without creating duplicate script tags.
 */
export const loadCalendlyScript = (): Promise<void> => {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.Calendly) return Promise.resolve();

  return new Promise((resolve) => {
    // Check if script tag is already in DOM
    const existingScript = document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      if (window.Calendly) {
        resolve();
      } else {
        existingScript.addEventListener('load', () => resolve(), { once: true });
        // Fallback timeout in case load event already triggered
        setTimeout(() => resolve(), 800);
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      console.warn('Failed to load Calendly widget script from CDN.');
      resolve();
    };
    document.head.appendChild(script);
  });
};

/**
 * Opens Calendly in a popup modal overlay.
 */
export const openCalendly = async (topic?: string, options?: CalendlyPopupOptions): Promise<void> => {
  if (typeof window === 'undefined') return;

  if (!window.Calendly) {
    await loadCalendlyScript();
  }

  const url = options?.url || CALENDLY_URL;

  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({
      url,
      prefill: options?.prefill,
      utm: {
        utmSource: 'website',
        utmMedium: 'book_a_demo_button',
        utmCampaign: topic ? topic.replace(/\s+/g, '_').toLowerCase() : 'demo_booking',
        utmContent: topic || 'general_demo',
        ...options?.utm
      }
    });
  } else {
    // Graceful fallback if third-party script is blocked by browser extensions/firewalls
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Initializes Calendly floating badge widget matching user profile & configuration.
 */
export const initCalendlyBadge = async (badgeConfig?: CalendlyBadgeOptions): Promise<void> => {
  if (typeof window === 'undefined') return;

  if (!window.Calendly) {
    await loadCalendlyScript();
  }

  if (window.Calendly?.initBadgeWidget) {
    window.Calendly.initBadgeWidget({
      url: badgeConfig?.url || CALENDLY_URL,
      text: badgeConfig?.text || 'Schedule time with me',
      color: badgeConfig?.color || '#0069ff',
      textColor: badgeConfig?.textColor || '#ffffff',
      branding: badgeConfig?.branding !== undefined ? badgeConfig.branding : true
    });
  }
};

/**
 * Closes any active Calendly popup widget.
 */
export const closeCalendly = (): void => {
  if (typeof window !== 'undefined' && window.Calendly?.closePopupWidget) {
    window.Calendly.closePopupWidget();
  }
};
