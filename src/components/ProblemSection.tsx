import React from 'react';
import { PROBLEM_CONTENT } from '../data/content';
import { AlertTriangle, ArrowUpRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="problem"
      className="section-wrapper"
      style={{
        backgroundColor: 'var(--nebula)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)'
      }}
    >
      {/* Subtle Tension Background Texture */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 77, 0.08) 0%, transparent 45%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 45%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
          <div className="eyebrow-container">
            <span className="eyebrow-bar" style={{ backgroundColor: 'var(--coral)' }} />
            <span className="eyebrow-text eyebrow-text-coral">{PROBLEM_CONTENT.eyebrow}</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--section-title-size)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}
          >
            {PROBLEM_CONTENT.title}
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              color: 'var(--mist)',
              lineHeight: 1.6
            }}
          >
            {PROBLEM_CONTENT.lead}
          </p>
        </div>

        {/* Split Layout: Visually Huge Numbers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '4rem'
          }}
        >
          {PROBLEM_CONTENT.stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(160deg, rgba(29, 37, 82, 0.9) 0%, rgba(19, 26, 61, 0.95) 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 107, 77, 0.3)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                position: 'relative',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--coral)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 107, 77, 0.3)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--coral)',
                  marginBottom: '1.25rem'
                }}
              >
                <AlertTriangle size={18} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {stat.strainNumber}
                </span>
              </div>

              {/* Huge Stat Number */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4.5rem, 10vw, 7.5rem)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                  textShadow: '0 8px 30px rgba(255, 107, 77, 0.25)'
                }}
              >
                {stat.figure}
              </div>

              {/* Exact Statement from PDF */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  marginBottom: '1rem'
                }}
              >
                {stat.label}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'var(--mist)',
                  marginBottom: '1.5rem'
                }}
              >
                {stat.context}
              </p>

              <a
                href={stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--mist)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'var(--coral)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'var(--mist)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <span>{stat.source}</span>
                <ArrowUpRight size={13} style={{ flexShrink: 0, opacity: 0.8 }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
