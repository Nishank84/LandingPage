import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenDemo: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollYRef = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const scrollDiff = currentScrollY - lastScrollY;

      // At top of page: always visible and un-scrolled styling
      if (currentScrollY <= 20) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);

        // If mobile menu is open and user scrolls down significantly, close it
        if (mobileMenuOpen && scrollDiff > 15) {
          setMobileMenuOpen(false);
        }

        if (!mobileMenuOpen) {
          // Scrolling down: disappear
          if (scrollDiff > 5 && currentScrollY > 60) {
            setIsVisible(false);
          } else if (scrollDiff < -5) {
            // Scrolling up: reappear
            setIsVisible(true);
          }
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'The Platform', path: '/platform' },
    { label: 'The Crucible', path: '/crucible' },
    { label: 'The Thought', path: '/thought' }
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: isScrolled
            ? 'rgba(19, 26, 61, 0.94)'
            : 'rgba(19, 26, 61, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(43, 52, 112, 0.8)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled
            ? '0 10px 30px rgba(0, 0, 0, 0.25)'
            : 'none',
          padding: isScrolled ? '10px 0' : '16px 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Game Up Home"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <BrandLogo variant="dark" showTagline={false} size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px'
            }}
            className="desktop-nav"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(255, 255, 255, 0.06)',
                padding: '4px 6px',
                borderRadius: '999px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {location.pathname !== '/' && (
                <button
                  onClick={() => handleNavClick('/')}
                  style={{
                    fontFamily: 'var(--font-text)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--mist)',
                    padding: '8px 14px',
                    borderRadius: '999px',
                    transition: 'all 0.2s ease',
                    background: 'transparent',
                    border: '1px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--mist)';
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>Home</span>
                </button>
              )}
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    style={{
                      fontFamily: 'var(--font-text)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? 'var(--sun)' : '#FFFFFF',
                      padding: '8px 18px',
                      borderRadius: '999px',
                      transition: 'all 0.2s ease',
                      background: isActive ? 'rgba(255, 255, 255, 0.16)' : 'transparent',
                      border: isActive ? '1px solid rgba(255, 178, 36, 0.35)' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => onOpenDemo('General Platform Demo')}
              className="btn-primary"
              style={{
                height: '42px',
                padding: '0 20px',
                fontSize: '0.875rem',
                marginLeft: '12px'
              }}
            >
              Book a Demo
              <ArrowUpRight size={16} />
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--nebula)',
            borderBottom: '1px solid var(--line)',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
            zIndex: 899,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            animation: 'fadeIn 0.2s ease'
          }}
          className="mobile-drawer"
        >
          {location.pathname !== '/' && (
            <button
              onClick={() => handleNavClick('/')}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--mist)',
                textAlign: 'left',
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
          )}
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--sun)' : '#FFFFFF',
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  border: isActive ? '1px solid rgba(255, 178, 36, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo('General Demo');
            }}
            className="btn-primary"
            style={{
              width: '100%',
              height: '48px',
              marginTop: '8px'
            }}
          >
            Book a Demo
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
