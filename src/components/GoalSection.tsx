import React from 'react';
import { GOAL_CONTENT } from '../data/content';
import { GraduationCap, Users, HeartHandshake, School2, ArrowRight } from 'lucide-react';

export const GoalSection: React.FC = () => {
  const stakeholderIcons = [
    { icon: GraduationCap, color: '#3B82F6', bg: '#E7F0FE' },
    { icon: Users, color: '#CF2300', bg: '#FFEDEA' },
    { icon: HeartHandshake, color: '#0A7760', bg: '#E2F8F4' },
    { icon: School2, color: '#7841F5', bg: '#F1EBFE' }
  ];

  return (
    <section
      className="section-wrapper"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--line-light)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center'
          }}
        >
          {/* Editorial Statement Left */}
          <div style={{ maxWidth: '620px' }}>
            <div className="eyebrow-container">
              <span className="eyebrow-bar eyebrow-bar-slate" />
              <span className="eyebrow-text eyebrow-text-slate">{GOAL_CONTENT.eyebrow}</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--section-title-size)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--nebula)',
                marginBottom: '1rem'
              }}
            >
              {GOAL_CONTENT.headline}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 600,
                letterSpacing: '-0.015em',
                color: 'var(--purple)',
                lineHeight: 1.35,
                marginBottom: '1.5rem'
              }}
            >
              {GOAL_CONTENT.subheadline}
            </p>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.75,
                color: 'var(--slate)',
                maxWidth: '540px'
              }}
            >
              {GOAL_CONTENT.description}
            </p>
          </div>

          {/* Connected Stakeholder Progression Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--slate)',
                marginBottom: '8px'
              }}
            >
              One unified circle of support
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {GOAL_CONTENT.stakeholders.map((s, idx) => {
                const IconComponent = stakeholderIcons[idx].icon;
                return (
                  <div
                    key={s.title}
                    className="card-cloud"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem 1.75rem',
                      borderRadius: '18px',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(6px)';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      e.currentTarget.style.borderColor = stakeholderIcons[idx].color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.backgroundColor = 'var(--cloud)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.borderColor = 'rgba(227, 231, 238, 0.6)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '14px',
                          backgroundColor: stakeholderIcons[idx].bg,
                          color: stakeholderIcons[idx].color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: 'var(--nebula)',
                            marginBottom: '2px'
                          }}
                        >
                          {s.title}
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--slate)' }}>
                          {s.role}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          color: stakeholderIcons[idx].color,
                          letterSpacing: '0.02em'
                        }}
                      >
                        {s.count}
                      </span>
                      <ArrowRight size={14} color={stakeholderIcons[idx].color} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
