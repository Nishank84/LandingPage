import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'auto',
  showTagline = false,
  size = 'md',
  className = ''
}) => {
  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 48
  };

  const textSizes = {
    sm: '1.25rem',
    md: '1.5rem',
    lg: '2rem'
  };

  const isDarkVariant = variant === 'dark';
  const textColor = isDarkVariant ? '#FFFFFF' : 'var(--nebula)';

  return (
    <div className={`brand-logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      {/* Official GameUp Icon Mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={iconSizes[size]}
        height={iconSizes[size]}
        role="img"
        aria-label="GameUp Logo"
        style={{ flexShrink: 0, borderRadius: '22.5%', overflow: 'hidden' }}
      >
        <defs>
          <clipPath id="gu-clip">
            <rect x="0" y="0" width="100" height="100" rx="22.5" ry="22.5" />
          </clipPath>
          <linearGradient id="gu-grad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF6B4D" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <g clipPath="url(#gu-clip)">
          <rect width="100" height="100" fill="#131A3D" />
          <path d="M-6,98 L68,24" stroke="url(#gu-grad)" strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M12,112 L80,44" stroke="url(#gu-grad)" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M-12,80 L46,22" stroke="url(#gu-grad)" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.6" />
          {/* G Glyph */}
          <path
            d="M68.8 52.65 Q68.6 56.08 67.4 59.28 Q66.1 62.48 63.7 65 Q61.3 67.5 57.7 68.9 Q54.1 70.3 49.2 70.3 Q44.6 70.3 40.6 69 Q36.6 67.7 33.5 65.1 Q30.5 62.5 28.7 58.7 Q27 54.9 27 50 Q27 45 28.7 41.2 Q30.5 37.4 33.6 34.8 Q36.7 32.2 40.9 30.9 Q45 29.6 49.8 29.6 Q56.4 29.6 61.2 31.5 Q65.9 33.5 68.8 37 Q71.7 40.5 72.6 45 H60.4 Q59.9 43.3 58.5 42.1 Q57 40.9 54.8 40.2 Q52.6 39.6 49.9 39.6 Q46.6 39.6 44.2 40.7 Q41.7 41.8 40.4 44.1 Q39.1 46.4 39.1 50 Q39.1 53.5 40.6 55.9 Q42 58.3 44.7 59.5 Q47.4 60.7 51 60.7 Q54.5 60.7 57.3 59.7 Q60 58.8 61.7 57 Q63.3 55.2 63.6 52.4 Z M51.7 56.2 V48.7 H72.9 V69.5 H64.5 L62.7 54.3 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: textSizes[size],
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: textColor,
              lineHeight: 1
            }}
          >
            Game<span style={{ color: 'var(--coral)' }}>Up</span>
          </span>
        </div>
        {showTagline && (
          <span
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: isDarkVariant ? 'var(--mist)' : 'var(--slate)',
              marginTop: '4px'
            }}
          >
            AcademicOS
          </span>
        )}
      </div>
    </div>
  );
};
