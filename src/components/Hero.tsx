import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Trophy, ShieldCheck, MessageCircle, Flame } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

interface HeroProps {
  onOpenDemo: (topic?: string) => void;
  onExplorePlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onExplorePlatform }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--nebula)',
        color: '#FFFFFF',
        overflow: 'hidden',
        paddingTop: 'calc(var(--nav-height) + 50px)',
        paddingBottom: '5rem',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Decorative Vector Rays & Gradient Mesh from Brand System */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '60%',
          pointerEvents: 'none',
          overflow: 'hidden',
          opacity: 0.95
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 900 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', right: '-10%', top: '5%' }}
        >
          <defs>
            <linearGradient id="hero-stream" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B4D" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.85" />
            </linearGradient>
            <radialGradient id="hero-glow" cx="40%" cy="60%" r="70%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#131A3D" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Ambient Glow */}
          <rect width="900" height="800" fill="url(#hero-glow)" />

          {/* Upward Energy Vectors */}
          <path d="M120 780 L820 120" stroke="url(#hero-stream)" strokeWidth="48" strokeLinecap="round" opacity="0.6" />
          <path d="M300 820 L920 220" stroke="url(#hero-stream)" strokeWidth="28" strokeLinecap="round" opacity="0.45" />
          <path d="M40 700 L560 180" stroke="url(#hero-stream)" strokeWidth="16" strokeLinecap="round" opacity="0.3" />

          {/* Concentric Geometric Planets */}
          <circle cx="140" cy="740" r="90" fill="#3A4386" opacity="0.35" />
          <circle cx="60" cy="700" r="60" fill="#565EA6" opacity="0.25" />
          <circle cx="260" cy="760" r="75" fill="#29316A" opacity="0.4" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Hero Left Content */}
          <div style={{ maxWidth: '640px' }}>
            <div className="eyebrow-container">
              <span className="eyebrow-bar" />
              <span className="eyebrow-text">{HERO_CONTENT.eyebrow}</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--hero-title-size)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: '#FFFFFF',
                marginBottom: '1.75rem'
              }}
            >
              Make Education{' '}
              <span className="text-gradient">Exciting.</span>
              <br />
              Effortless.
              <br />
              Efficient.
              <br />
              Easy.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'var(--mist)',
                maxWidth: '560px',
                marginBottom: '2.5rem'
              }}
            >
              {HERO_CONTENT.supporting}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <button
                onClick={() => onOpenDemo('Hero Demo Booking')}
                className="btn-primary"
                style={{ height: '54px', padding: '0 32px', fontSize: '1rem' }}
              >
                {HERO_CONTENT.primaryCta}
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onExplorePlatform}
                className="btn-secondary"
                style={{ height: '54px', padding: '0 28px', fontSize: '1rem' }}
              >
                {HERO_CONTENT.secondaryCta}
              </button>
            </div>

            {/* Quick Stakeholder Assurance Micro-bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                color: 'var(--mist)',
                fontSize: '0.875rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--mint)" />
                <span>Modular AcademicOS</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--sun)" />
                <span>CBSE &amp; ICSE Grounded</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--coral)" />
                <span>Zero Onboarding Friction</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: The Operating System for Schools Floating Ecosystem */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Ambient Backing Card */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                background: 'linear-gradient(145deg, rgba(29, 37, 82, 0.85) 0%, rgba(19, 26, 61, 0.95) 100%)',
                borderRadius: '24px',
                border: '1px solid var(--line)',
                padding: '2rem',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* OS Status Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--line)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--coral)',
                      border: '1px solid var(--line)'
                    }}
                  >
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700 }}>
                      AcademicOS Live
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--mist)' }}>Connected School Ecosystem</div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(16, 199, 161, 0.15)',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: '1px solid rgba(16, 199, 161, 0.3)'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--mint)'
                    }}
                  />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--mint)' }}>4 STAKEHOLDERS ACTIVE</span>
                </div>
              </div>

              {/* Ecosystem Grid Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* 1. Student Quests Card */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '16px',
                    padding: '1rem 1.25rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #FF6B4D, #FFC44B)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--nebula)'
                      }}
                    >
                      <Trophy size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>
                        Mission: Photosynthesis Model
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--mist)' }}>Task Master · Grade 9 Biology</div>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 107, 77, 0.2)',
                      color: 'var(--coral)',
                      fontWeight: 800,
                      fontSize: '0.8125rem',
                      padding: '4px 10px',
                      borderRadius: '999px'
                    }}
                  >
                    +150 XP
                  </div>
                </div>

                {/* 2. Teacher Blind Exam Correction Card */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '16px',
                    padding: '1rem 1.25rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(59, 130, 246, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--blue)'
                      }}
                    >
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>
                        Anonymous Evaluation
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--mist)' }}>Exam Management · Blind Review #481</div>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.15)',
                      color: '#93C5FD',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      padding: '4px 8px',
                      borderRadius: '6px'
                    }}
                  >
                    Secured
                  </div>
                </div>

                {/* 3. AI Academic Assistant Query Prompt */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                    borderRadius: '16px',
                    padding: '1rem 1.25rem',
                    border: '1px solid rgba(139, 92, 246, 0.3)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Sparkles size={14} color="#C4B5FD" />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C4B5FD', letterSpacing: '0.05em' }}>
                      AI ACADEMIC ASSISTANT
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#FFFFFF', fontStyle: 'italic' }}>
                    “Generate 5 adaptive practice questions based on Newton’s 3rd Law for Aarav...”
                  </div>
                </div>
              </div>

              {/* Progress Level Footer */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Flame size={16} color="var(--sun)" />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--mist)' }}>Class Streak:</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#FFFFFF' }}>14 Days Active</span>
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--sun)' }}>
                  Level 4 · Lift-off
                </div>
              </div>
            </div>

            {/* Floating Satellite Card 1: WhatsApp Parent Notification */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-24px',
                backgroundColor: '#FFFFFF',
                color: 'var(--nebula)',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                maxWidth: '260px',
                zIndex: 20
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MessageCircle size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#128C7E' }}>WhatsApp Assistant</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--nebula)', lineHeight: 1.25 }}>
                  Rohan scored 94% in Algebra quiz! 🚀
                </div>
              </div>
            </div>

            {/* Floating Satellite Card 2: Anonymous Correction Verified */}
            <div
              className="animate-float-reverse"
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-20px',
                backgroundColor: 'var(--deep)',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                maxWidth: '280px',
                zIndex: 20
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(16, 199, 161, 0.2)',
                  color: 'var(--mint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <CheckCircle2 size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--mint)' }}>Exam Integrity</div>
                <div style={{ fontSize: '0.75rem', color: '#FFFFFF', fontWeight: 500 }}>
                  Blind evaluation completed in 4 mins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
