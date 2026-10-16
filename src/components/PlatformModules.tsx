import React, { useState } from 'react';
import { PLATFORM_MODULES } from '../data/content';
import { ProductModal } from './ProductModal';
import {
  ClipboardCheck,
  ListTodo,
  Bot,
  Library,
  Brain,
  Award,
  BarChart3,
  School,
  MessageCircle,
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface PlatformModulesProps {
  onSelectModule?: (moduleId: string) => void;
  onOpenDemo: (topic?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  ListTodo,
  Bot,
  Library,
  Brain,
  Award,
  BarChart3,
  School,
  MessageCircle,
  Users
};

const MODULE_AUDIENCE_MAP: Record<string, {
  tileClass: string;
  accent: string;
  ink: string;
  bgTint: string;
  audience: string;
}> = {
  'exam-management': {
    tileClass: 'icon-tile-coral',
    accent: 'var(--coral)',
    ink: 'var(--ink-coral)',
    bgTint: 'var(--tile-coral)',
    audience: 'Teachers'
  },
  'task-management': {
    tileClass: 'icon-tile-blue',
    accent: 'var(--blue)',
    ink: 'var(--ink-blue)',
    bgTint: 'var(--tile-blue)',
    audience: 'Students'
  },
  'ai-assistant': {
    tileClass: 'icon-tile-blue',
    accent: 'var(--blue)',
    ink: 'var(--ink-blue)',
    bgTint: 'var(--tile-blue)',
    audience: 'Students'
  },
  'library': {
    tileClass: 'icon-tile-purple',
    accent: 'var(--purple)',
    ink: 'var(--ink-purple)',
    bgTint: 'var(--tile-purple)',
    audience: 'Everyone'
  },
  'training-centre': {
    tileClass: 'icon-tile-blue',
    accent: 'var(--blue)',
    ink: 'var(--ink-blue)',
    bgTint: 'var(--tile-blue)',
    audience: 'Students'
  },
  'behaviour-management': {
    tileClass: 'icon-tile-coral',
    accent: 'var(--coral)',
    ink: 'var(--ink-coral)',
    bgTint: 'var(--tile-coral)',
    audience: 'Teachers'
  },
  'analytics': {
    tileClass: 'icon-tile-mint',
    accent: 'var(--mint)',
    ink: 'var(--ink-mint)',
    bgTint: 'var(--tile-mint)',
    audience: 'Administrators'
  },
  'administration-management': {
    tileClass: 'icon-tile-mint',
    accent: 'var(--mint)',
    ink: 'var(--ink-mint)',
    bgTint: 'var(--tile-mint)',
    audience: 'Administrators'
  },
  'whatsapp-assistant': {
    tileClass: 'icon-tile-sun',
    accent: 'var(--sun)',
    ink: 'var(--ink-sun)',
    bgTint: 'var(--tile-sun)',
    audience: 'Parents'
  },
  'communities': {
    tileClass: 'icon-tile-purple',
    accent: 'var(--purple)',
    ink: 'var(--ink-purple)',
    bgTint: 'var(--tile-purple)',
    audience: 'Everyone'
  }
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
            The Platform.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.125rem, 1.8vw, 1.35rem)',
              fontWeight: 700,
              color: 'var(--nebula)',
              marginBottom: '1.25rem'
            }}
          >
            Learn. Create. Belong.
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
            Game Up AcademicOS is an AI-powered academic platform for schools, bringing together a suite of specialised tools that schools can adopt individually and expand as they grow.
          </p>
        </div>

        {/* 10 Product Cards 5x2 Grid */}
        <div className="grid-5x2">
          {PLATFORM_MODULES.map((module) => {
            const IconComp = iconMap[module.icon] || Sparkles;
            const audience = MODULE_AUDIENCE_MAP[module.id] || {
              tileClass: 'icon-tile-blue',
              accent: 'var(--blue)',
              ink: 'var(--ink-blue)',
              bgTint: 'var(--tile-blue)',
              audience: 'Academic'
            };

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
                  borderRadius: '16px',
                  border: '1px solid var(--line-light)',
                  padding: '1.35rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = audience.accent;
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(19, 26, 61, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--line-light)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    {/* Official Audience-Tinted Icon Tile */}
                    <div className={`icon-tile ${audience.tileClass}`}>
                      <IconComp size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        backgroundColor: audience.bgTint,
                        color: audience.ink
                      }}
                    >
                      {audience.audience}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
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
                      fontFamily: 'var(--font-text)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--slate)',
                      lineHeight: 1.45
                    }}
                  >
                    {module.tagline}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--line-light)'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: audience.ink
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
