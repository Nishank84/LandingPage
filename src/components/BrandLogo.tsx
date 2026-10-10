import React, { useId } from 'react';

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
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '');
  const clipId = `gu-clip-${id}`;
  const gradId = `gu-grad-${id}`;

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
        style={{
          flexShrink: 0,
          borderRadius: '22.5%',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.18)'
        }}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width="100" height="100" rx="22.5" ry="22.5" />
          </clipPath>
          <linearGradient id={gradId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF6B4D" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect width="100" height="100" fill="#FFFFFF" />
          <path d="M-6,98 L68,24" stroke={`url(#${gradId})`} strokeWidth="12" strokeLinecap="round" fill="none" opacity="1.0" />
          <path d="M12,112 L80,44" stroke={`url(#${gradId})`} strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M-12,80 L46,22" stroke={`url(#${gradId})`} strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.6" />
          {/* White halo outline around glyph */}
          <path
            d="M68.824 52.652Q68.668 56.084 67.42 59.282Q66.172 62.48 63.78 65.002Q61.388 67.524 57.748 68.954Q54.108 70.384 49.22 70.384Q44.644 70.384 40.64 69.058Q36.636 67.732 33.568 65.158Q30.5 62.584 28.758 58.788Q27.016 54.992 27.016 50Q27.016 45.008 28.758 41.212Q30.5 37.416 33.646 34.842Q36.792 32.268 40.926 30.942Q45.06 29.616 49.844 29.616Q56.448 29.616 61.206 31.592Q65.964 33.568 68.876 37.052Q71.788 40.536 72.62 45.06H60.452Q59.984 43.344 58.502 42.122Q57.02 40.9 54.836 40.25Q52.652 39.6 49.948 39.6Q46.62 39.6 44.202 40.744Q41.784 41.888 40.484 44.176Q39.184 46.464 39.184 50Q39.184 53.536 40.614 55.928Q42.044 58.32 44.722 59.516Q47.4 60.712 51.04 60.712Q54.576 60.712 57.306 59.776Q60.036 58.84 61.7 57.02Q63.364 55.2 63.676 52.496ZM51.768 56.292V48.752H72.984V69.5H64.508L62.74 54.316L64.976 56.292Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          {/* Navy G glyph */}
          <path
            d="M68.824 52.652Q68.668 56.084 67.42 59.282Q66.172 62.48 63.78 65.002Q61.388 67.524 57.748 68.954Q54.108 70.384 49.22 70.384Q44.644 70.384 40.64 69.058Q36.636 67.732 33.568 65.158Q30.5 62.584 28.758 58.788Q27.016 54.992 27.016 50Q27.016 45.008 28.758 41.212Q30.5 37.416 33.646 34.842Q36.792 32.268 40.926 30.942Q45.06 29.616 49.844 29.616Q56.448 29.616 61.206 31.592Q65.964 33.568 68.876 37.052Q71.788 40.536 72.62 45.06H60.452Q59.984 43.344 58.502 42.122Q57.02 40.9 54.836 40.25Q52.652 39.6 49.948 39.6Q46.62 39.6 44.202 40.744Q41.784 41.888 40.484 44.176Q39.184 46.464 39.184 50Q39.184 53.536 40.614 55.928Q42.044 58.32 44.722 59.516Q47.4 60.712 51.04 60.712Q54.576 60.712 57.306 59.776Q60.036 58.84 61.7 57.02Q63.364 55.2 63.676 52.496ZM51.768 56.292V48.752H72.984V69.5H64.508L62.74 54.316L64.976 56.292Z"
            fill="#131A3D"
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
