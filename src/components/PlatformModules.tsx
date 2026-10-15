import React, { useState } from 'react';
import { PLATFORM_MODULES } from '../data/content';
import { ProductModal } from './ProductModal';
import {
  ClipboardCheck,
  Target,
  Sparkles,
  BookOpen,
  Dumbbell,
  HeartHandshake,
  BarChart3,
  Building2,
  MessageCircle,
  Users2,
  ArrowRight
} from 'lucide-react';

interface PlatformModulesProps {
  onSelectModule?: (moduleId: string) => void;
  onOpenDemo: (topic?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  Target,
  Sparkles,
  BookOpen,
  Dumbbell,
  HeartHandshake,
  BarChart3,
  Building2,
  MessageCircle,
  Users2
};

export const PlatformModules: React.FC<PlatformModulesProps> = ({ onSelectModule, onOpenDemo }) => {
  const [modalActiveModuleId, setModalActiveModuleId] = useState<string>(PLATFORM_MODULES[0].id);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModuleModal = (moduleId: string) => {
    setModalActiveModuleId(moduleId);
    setIsModalOpen(true);
    if (onSelectModule) {
      onSelectModule(moduleId);
    }
  };

  return (
    <section
      id="platform"
      className="section-wrapper"
      style={{
        backgroundColor: 'var(--cloud)',
        borderBottom: '1px solid var(--line-light)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(3rem, 5vw, 4.5rem) auto' }}>
          <div className="eyebrow-container" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
            <span className="eyebrow-text eyebrow-text-slate">THE CONNECTED ECOSYSTEM</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--section-title-size)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: 'var(--nebula)',
              marginBottom: '0.75rem'
            }}
          >
            The <span className="text-gradient">Platform.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.125rem, 1.8vw, 1.35rem)',
              fontWeight: 700,
              marginBottom: '1.25rem'
            }}
          >
            <span className="text-gradient">Learn. Create. Belong</span>
          </p>

          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
              color: 'var(--slate)',
              lineHeight: 1.65,
              maxWidth: '740px',
              margin: '0 auto'
            }}
          >
            GameUp AcademicOS is an AI-powered academic platform for schools, bringing together a suite of specialised tools that schools can adopt individually and expand as they grow.
          </p>
        </div>

        {/* 10 Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '3rem'
          }}
        >
          {PLATFORM_MODULES.map((module) => {
            const IconComp = iconMap[module.icon] || Sparkles;

            return (
              <div
                key={module.id}
                onClick={() => handleOpenModuleModal(module.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModuleModal(module.id);
                  }
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid var(--line-light)',
                  padding: '1.625rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--purple)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(19, 26, 61, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--line-light)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        backgroundColor: 'var(--nebula)',
                        color: 'var(--sun)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(19, 26, 61, 0.15)'
                      }}
                    >
                      <IconComp size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        backgroundColor: 'var(--cloud)',
                        color: 'var(--slate)',
                        border: '1px solid var(--line-light)'
                      }}
                    >
                      {module.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--nebula)',
                      lineHeight: 1.25,
                      marginBottom: '6px'
                    }}
                  >
                    {module.name}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--coral)',
                      lineHeight: 1.35,
                      marginBottom: '10px'
                    }}
                  >
                    {module.tagline}
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--slate)',
                      lineHeight: 1.55,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {module.shortDesc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--line-light)'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--slate)'
                    }}
                  >
                    {module.features.length} Highlights
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.8125rem',
                      fontWeight: 800,
                      color: 'var(--purple)'
                    }}
                  >
                    Explore Product
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Product Details Popup Modal with scrollable sidebar of all products */}
      <ProductModal
        isOpen={isModalOpen}
        activeModuleId={modalActiveModuleId}
        onClose={() => setIsModalOpen(false)}
        onSelectModule={(id) => setModalActiveModuleId(id)}
        onOpenDemo={onOpenDemo}
      />
    </section>
  );
};
