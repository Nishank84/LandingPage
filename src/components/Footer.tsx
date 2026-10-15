import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FOOTER_CONTENT } from '../data/content';
import { BrandLogo } from './BrandLogo';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDemo: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href === '#demo') {
      onOpenDemo('Footer Link');
      return;
    }
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--nebula)',
        color: '#FFFFFF',
        borderTop: '1px solid var(--line)',
        padding: 'clamp(3.5rem, 6vw, 5rem) 0 3rem 0'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--line)'
          }}
        >
          {/* Brand Info Left */}
          <div style={{ maxWidth: '380px' }}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ display: 'inline-flex' }}
              aria-label="GameUp Home"
            >
              <BrandLogo variant="dark" showTagline={false} size="md" />
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '1.25rem' }}>
              <a
                href={FOOTER_CONTENT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GameUp LinkedIn Page"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--blue)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href={`mailto:${FOOTER_CONTENT.email}`}
                aria-label="Email GameUp Support"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--coral)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links Center/Right */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--sun)',
                  marginBottom: '1.25rem'
                }}
              >
                NAVIGATION
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {FOOTER_CONTENT.navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        color: 'var(--mist)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        transition: 'color 0.2s ease',
                        background: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mist)')}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--sun)',
                  marginBottom: '1.25rem'
                }}
              >
                CONTACT
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={`mailto:${FOOTER_CONTENT.email}`}
                  style={{
                    color: 'var(--mist)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--coral)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mist)')}
                >
                  {FOOTER_CONTENT.email}
                </a>
                <span style={{ color: 'var(--mist)', fontSize: '0.875rem' }}>
                  Coimbatore, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8125rem',
            color: 'var(--mist)'
          }}
        >
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--mist)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mist)')}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
