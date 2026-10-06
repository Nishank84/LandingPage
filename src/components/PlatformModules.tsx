import React, { useState } from 'react';
import { PLATFORM_MODULES } from '../data/content';
import {
  Sparkles,
  BookOpen,
  Dumbbell,
  Target,
  ClipboardCheck,
  HeartHandshake,
  Building2,
  BarChart3,
  MessageCircle,
  Users,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface PlatformModulesProps {
  onSelectModule: (moduleId: string) => void;
  onOpenDemo: (topic?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  BookOpen,
  Dumbbell,
  Target,
  ClipboardCheck,
  HeartHandshake,
  Building2,
  BarChart3,
  MessageCircle,
  Users
};

export const PlatformModules: React.FC<PlatformModulesProps> = ({ onSelectModule, onOpenDemo }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(PLATFORM_MODULES[0].id);

  const activeModule = PLATFORM_MODULES.find((m) => m.id === activeModuleId) || PLATFORM_MODULES[0];
  const ActiveIcon = iconMap[activeModule.icon] || Sparkles;

  return (
    <section
      id="modules"
      className="section-wrapper"
      style={{
        backgroundColor: 'var(--cloud)',
        borderBottom: '1px solid var(--line-light)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto clamp(3rem, 5vw, 4.5rem) auto' }}>
          <div className="eyebrow-container" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-bar eyebrow-bar-slate" />
            <span className="eyebrow-text eyebrow-text-slate">THE CONNECTED ECOSYSTEM</span>
            <span className="eyebrow-bar eyebrow-bar-slate" />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--section-title-size)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: 'var(--nebula)',
              marginBottom: '1.25rem'
            }}
          >
            Everything schools need in{' '}
            <span className="text-gradient">one connected platform.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
              color: 'var(--slate)',
              lineHeight: 1.65
            }}
          >
            Adopt individual modules when you need them, or deploy the complete AcademicOS.
            Every tool connects into a single unified school graph.
          </p>
        </div>

        {/* Central Hub & Ecosystem Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
            marginBottom: '4rem'
          }}
        >
          {/* Interactive Module Grid (Left / Top) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '16px'
            }}
          >
            {PLATFORM_MODULES.map((module) => {
              const IconComp = iconMap[module.icon] || Sparkles;
              const isActive = module.id === activeModuleId;

              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveModuleId(module.id);
                  }}
                  style={{
                    backgroundColor: isActive ? 'var(--nebula)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--nebula)',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    border: isActive
                      ? '1px solid var(--purple)'
                      : '1px solid var(--line-light)',
                    boxShadow: isActive
                      ? '0 12px 28px rgba(19, 26, 61, 0.2)'
                      : 'var(--shadow-sm)',
                    textAlign: 'left',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'var(--line-light)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'var(--cloud)',
                        color: isActive ? 'var(--sun)' : 'var(--purple)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComp size={20} />
                    </div>

                    {isActive && (
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          backgroundColor: 'var(--coral)',
                          color: 'var(--nebula)',
                          padding: '3px 8px',
                          borderRadius: '999px'
                        }}
                      >
                        Viewing
                      </span>
                    )}
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        lineHeight: 1.3,
                        marginBottom: '4px'
                      }}
                    >
                      {module.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: isActive ? 'var(--mist)' : 'var(--slate)',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {module.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Module Focused Preview / Central Node Reveal (Right) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid var(--line-light)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: 'var(--shadow-lg)',
              position: 'sticky',
              top: 'calc(var(--nav-height) + 24px)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  backgroundColor: 'var(--nebula)',
                  color: 'var(--sun)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 20px rgba(19, 26, 61, 0.2)'
                }}
              >
                <ActiveIcon size={32} />
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--purple)'
                  }}
                >
                  ACADEMICOS MODULE
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                    fontWeight: 800,
                    color: 'var(--nebula)',
                    lineHeight: 1.2
                  }}
                >
                  {activeModule.name}
                </h3>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: 'var(--coral)',
                marginBottom: '1rem',
                lineHeight: 1.4
              }}
            >
              {activeModule.tagline}
            </p>

            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--slate)',
                marginBottom: '1.75rem'
              }}
            >
              {activeModule.fullDesc}
            </p>

            {/* Stakeholder Value Props for this Module */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--slate)',
                  marginBottom: '10px'
                }}
              >
                Value for Stakeholders
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeModule.stakeholders.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '8px',
                      backgroundColor: 'var(--cloud)',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span style={{ fontWeight: 700, color: 'var(--nebula)', whiteSpace: 'nowrap' }}>
                      {s.role} →
                    </span>
                    <span style={{ color: 'var(--slate)' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities Checklist */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--slate)',
                  marginBottom: '10px'
                }}
              >
                Module Highlights
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                {activeModule.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem' }}>
                    <CheckCircle2 size={14} color="var(--mint)" />
                    <span style={{ color: 'var(--nebula)', fontWeight: 600 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tagline & Deep Dive Jump */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--line-light)',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--purple)'
                }}
              >
                {activeModule.endTagline}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                  onClick={() => onOpenDemo(`Module: ${activeModule.name}`)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--nebula)',
                    backgroundColor: 'var(--cloud)',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    border: '1px solid var(--line-light)',
                    cursor: 'pointer'
                  }}
                >
                  Book Demo
                </button>

                <button
                  onClick={() => {
                    onSelectModule(activeModule.id);
                    const el = document.getElementById(activeModule.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--coral)',
                    background: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Explore Details
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
