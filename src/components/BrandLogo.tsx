import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  iconOnly?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'auto',
  showTagline = false,
  size = 'md',
  className = '',
  iconOnly = false
}) => {
  const heights = {
    sm: 28,
    md: 36,
    lg: 44
  };

  const height = heights[size];
  const isDark = variant === 'dark' || variant === 'auto';

  let logoSrc = isDark
    ? '/brand/logos/logo-lockup-horizontal-reversed-nebula-and-dark.svg'
    : '/brand/logos/logo-lockup-horizontal-full-colour-primary.svg';

  if (iconOnly) {
    logoSrc = '/brand/logos/logo-symbol-the-symbol-a-g.svg';
  } else if (showTagline && !isDark) {
    logoSrc = '/brand/logos/logo-lockup-horizontal-with-tagline-website-decks.svg';
  }

  return (
    <div
      className={`brand-logo-container ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <img
        src={logoSrc}
        alt="Game Up"
        height={height}
        style={{
          height: `${height}px`,
          width: iconOnly ? `${height}px` : 'auto',
          display: 'block',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};
