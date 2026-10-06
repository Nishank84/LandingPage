import React, { useState } from 'react';
import {
  ClipboardCheck,
  ShieldCheck,
  Target,
  Trophy,
  Sparkles,
  BookOpen,
  Dumbbell,
  HeartHandshake,
  BarChart3,
  Building2,
  MessageCircle,
  Send,
  CheckCircle2,
  Award,
  TrendingUp,
  Bot
} from 'lucide-react';

export const FeatureDeepDives: React.FC = () => {
  // AI Assistant active prompt state
  const [aiActiveQuery, setAiActiveQuery] = useState<number>(0);
  const aiQueries = [
    {
      q: "Explain Kepler's laws of planetary motion using a bicycle wheel analogy",
      response: "Imagine pedaling along an oval velodrome: when you whip around the tight curve nearest the center of gravity, you speed up instinctively (Kepler's Second Law: equal areas in equal intervals of time)...",
      tag: "Concept Explainer"
    },
    {
      q: "Generate a 3-question diagnostic quiz on Grade 9 Indian Constitution (Articles 14-19)",
      response: "1. Under Article 14, what constitutes 'reasonable classification'?\n2. Which fundamental freedom under Article 19 is suspended automatically during an emergency?\n3. How does Article 16 protect equality of opportunity in public employment?",
      tag: "Practice Quiz"
    },
    {
      q: "Create a 5-point teacher revision note for Class 10 Periodic Table trends",
      response: "• Atomic Radius decreases across a period (increasing nuclear charge).\n• Ionization Energy increases across a period, decreases down a group.\n• Electronegativity peaks at Fluorine.\n• Metallic character increases down each group.\n• Valency matches group electrons for s-block.",
      tag: "Teacher Lesson Notes"
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* ========================================================
          1. EXAM MANAGEMENT SYSTEM
          ======================================================== */}
      <section
        id="exam-management"
        className="section-wrapper"
        style={{ borderBottom: '1px solid var(--line-light)' }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Copy */}
            <div>
              <div className="eyebrow-container">
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">ACADEMIC INTEGRITY</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--section-title-size)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem'
                }}
              >
                Exam Management System
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                  fontWeight: 600,
                  color: 'var(--blue)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.4
                }}
              >
                Make every assessment simpler, smarter and more secure.
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--slate)',
                  marginBottom: '1.75rem'
                }}
              >
                From building question banks to creating examinations, evaluating submissions and resolving
                student doubts, Game Up brings the entire assessment journey into one place. Administrators
                can create personalised question papers for individual students, while anonymous correction ensures
                that teachers evaluate papers without knowing whose work they are reviewing—helping create a
                more consistent and impartial assessment process.
              </p>

              {/* Stakeholder values from PDF */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '12px',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ backgroundColor: 'var(--cloud)', padding: '12px 16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>Teachers</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>Quicker Conduct of Exams</div>
                </div>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '12px 16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>School Administrators</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>Birds eye view of exam conduct</div>
                </div>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '12px 16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>Parents</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>Complete knowledge of child’s performance</div>
                </div>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '12px 16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>Students</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>Instant feedback</div>
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  letterSpacing: '0.04em'
                }}
              >
                Create. Assess. Correct. Improve.
              </div>
            </div>

            {/* Right Mock UI: Blind Correction & Question Bank Studio */}
            <div
              className="card-base"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid var(--line-light)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--line-light)',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ClipboardCheck size={20} color="var(--blue)" />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700 }}>
                    Evaluation Console · Mid-Term Assessment
                  </span>
                </div>
                <span
                  style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: 'var(--blue)',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}
                >
                  Blind Review Active
                </span>
              </div>

              {/* Anonymous Paper Preview */}
              <div
                style={{
                  backgroundColor: 'var(--cloud)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--slate)' }}>
                    CANDIDATE ID: <strong style={{ color: 'var(--nebula)' }}>#ANON-7821-X</strong> (Identity Masked)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--mint)', fontSize: '0.75rem', fontWeight: 700 }}>
                    <ShieldCheck size={14} /> Impartial Verified
                  </div>
                </div>

                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)', marginBottom: '4px' }}>
                  Question 4 (8 Marks): “Derive the Lens Formula for a concave lens and state its sign convention.”
                </div>
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--slate)',
                    backgroundColor: '#FFFFFF',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--line-light)',
                    marginTop: '8px',
                    fontFamily: 'monospace'
                  }}
                >
                  Student derivation: 1/f = 1/v - 1/u. Applying cartesian sign convention where u is negative and focal length f is negative...
                </div>
              </div>

              {/* Rubric Evaluation Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '10px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--slate)' }}>QUESTION BANK</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--nebula)' }}>1,420 Items</div>
                </div>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '10px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--slate)' }}>AVG CORRECTION</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--mint)' }}>3.2 Mins/Paper</div>
                </div>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '10px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--slate)' }}>INSTANT DOUBTS</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--purple)' }}>Resolved (100%)</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8125rem',
                  color: 'var(--slate)'
                }}
              >
                <span>Automated Rubric Validation</span>
                <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Score: 7.5 / 8.0 Marks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. TASK MANAGEMENT SYSTEM
          ======================================================== */}
      <section
        id="task-management"
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--cloud)',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Mock UI: Gamification Mission & XP Hub */}
            <div
              style={{
                backgroundColor: 'var(--nebula)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--line)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Target size={20} color="var(--sun)" />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700 }}>
                    Mission Log · Class 8B
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--sun)', fontWeight: 800, fontSize: '0.875rem' }}>
                  <Trophy size={16} /> Rank #2 on Leaderboard
                </div>
              </div>

              {/* Mission Progression Bar */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--mist)' }}>Weekly XP Goal: 850 / 1000 XP</span>
                  <span style={{ fontWeight: 700, color: 'var(--sun)' }}>85%</span>
                </div>
                <div style={{ width: '100%', height: '10px', backgroundColor: 'var(--deep)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #FF6B4D, #FFC44B)', borderRadius: '999px' }} />
                </div>
              </div>

              {/* Active Missions Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '14px',
                    padding: '12px 16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>
                      Quest: The Solar System Cartographer
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--mist)' }}>Assigned by Mrs. Iyer · Due Tomorrow</div>
                  </div>
                  <span style={{ backgroundColor: 'rgba(255, 107, 77, 0.2)', color: 'var(--coral)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
                    +200 XP
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '14px',
                    padding: '12px 16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>
                      Parent Exchange: Weekend Science Museum
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--mist)' }}>Requires 500 XP Unlocked · Approved by Dad</div>
                  </div>
                  <span style={{ backgroundColor: 'rgba(16, 199, 161, 0.2)', color: 'var(--mint)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
                    Unlocked
                  </span>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.75rem', color: 'var(--mist)', textAlign: 'center' }}>
                AI-Powered Storytelling Layer transforms assignments into adventures
              </div>
            </div>

            {/* Right Copy */}
            <div>
              <div className="eyebrow-container">
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">GAMIFIED PROGRESS</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--section-title-size)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem'
                }}
              >
                Task Management System
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                  fontWeight: 600,
                  color: 'var(--coral)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.4
                }}
              >
                Turn everyday assignments into missions worth completing.
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--slate)',
                  marginBottom: '1.75rem'
                }}
              >
                Game Up transforms routine academic tasks into engaging quests. Teachers assign missions
                to students, attach XP rewards to successful completion, and track progress as students work
                their way forward. Students can use their XP to climb leaderboards, unlock achievements and
                participate in reward exchanges with their parents. An AI-powered storytelling layer turns ordinary
                assignments into meaningful missions within an evolving adventure.
              </p>

              {/* Value For User */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '12px',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--line-light)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>Teachers</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>Seamlessly manage assignments</div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--line-light)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>School Administrators</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>Peak into day-to-day academic activity</div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--line-light)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>Parents</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>Ensure kids don’t miss out on tasks</div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--line-light)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>Students</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>Homework made into a game</div>
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--coral)',
                  letterSpacing: '0.04em'
                }}
              >
                Every task is a mission. Every mission moves you up.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. AI ACADEMIC ASSISTANT
          ======================================================== */}
      <section
        id="ai-assistant"
        className="section-wrapper"
        style={{
          borderBottom: '1px solid var(--line-light)',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Copy */}
            <div>
              <div className="eyebrow-container">
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">CURRICULUM INTELLIGENCE</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--section-title-size)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem'
                }}
              >
                AI Academic Assistant
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                  fontWeight: 600,
                  color: 'var(--purple)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.4
                }}
              >
                A curriculum-aware AI assistant for every learner.
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--slate)',
                  marginBottom: '1.25rem'
                }}
              >
                Game Up’s AI chatbot is grounded in each user’s specific curriculum, giving teachers and
                students an academic assistant that understands the context of their learning environment.
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--slate)',
                  marginBottom: '1.75rem'
                }}
              >
                Teachers can create notes and questions, correct answers, generate variations of topics and
                automate tasks across the platform. Students can ask questions, explore concepts, generate practice
                quizzes and receive explanations adapted to the way they learn. The assistant also keeps track
                of relevant in-platform activity, helping users stay on top of what needs to be done.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--cloud)',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  marginBottom: '1.75rem',
                  border: '1px solid var(--line-light)'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>
                  Value for Everyone
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--nebula)', marginTop: '4px' }}>
                  “The entire school, just an ask away.”
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--purple)',
                  letterSpacing: '0.04em'
                }}
              >
                Ask. Learn. Create. Keep moving up.
              </div>
            </div>

            {/* Right Interactive AI Chat UI */}
            <div
              className="card-base"
              style={{
                borderRadius: '24px',
                padding: '1.75rem',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: '#FFFFFF'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--line-light)',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(139, 92, 246, 0.15)',
                      color: 'var(--purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Bot size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700 }}>
                      Academic Assistant
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Grounded in NCERT / CBSE Class 9 &amp; 10</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--mint)' }}>● Online</span>
              </div>

              {/* Sample Query Switchers */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem', overflowX: 'auto', paddingBottom: '4px' }}>
                {aiQueries.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAiActiveQuery(idx)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: aiActiveQuery === idx ? 'var(--purple)' : 'var(--cloud)',
                      color: aiActiveQuery === idx ? '#FFFFFF' : 'var(--slate)',
                      border: '1px solid var(--line-light)',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer'
                    }}
                  >
                    {item.tag}
                  </button>
                ))}
              </div>

              {/* Chat Message Stream */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '1.5rem' }}>
                {/* User Prompt */}
                <div style={{ alignSelf: 'flex-end', maxWidth: '85%' }}>
                  <div
                    style={{
                      backgroundColor: 'var(--nebula)',
                      color: '#FFFFFF',
                      padding: '12px 16px',
                      borderRadius: '16px 16px 4px 16px',
                      fontSize: '0.875rem',
                      lineHeight: 1.5
                    }}
                  >
                    {aiQueries[aiActiveQuery].q}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--slate)', textAlign: 'right', marginTop: '4px' }}>
                    Student Inquiry · Just now
                  </div>
                </div>

                {/* Assistant Output */}
                <div style={{ alignSelf: 'flex-start', maxWidth: '92%' }}>
                  <div
                    style={{
                      backgroundColor: 'var(--cloud)',
                      color: 'var(--nebula)',
                      padding: '14px 18px',
                      borderRadius: '16px 16px 16px 4px',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                      border: '1px solid var(--line-light)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--purple)', fontWeight: 700, fontSize: '0.75rem' }}>
                      <Sparkles size={14} /> Curriculum-Grounded Response
                    </div>
                    {aiQueries[aiActiveQuery].response}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--slate)', marginTop: '4px' }}>
                    Generated with verified syllabus mapping
                  </div>
                </div>
              </div>

              {/* Input Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'var(--cloud)',
                  borderRadius: '14px',
                  padding: '6px 8px 6px 16px',
                  border: '1px solid var(--line-light)'
                }}
              >
                <input
                  type="text"
                  readOnly
                  value="Ask any doubt or request custom revision notes..."
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '0.875rem',
                    color: 'var(--slate)',
                    flexGrow: 1,
                    outline: 'none'
                  }}
                />
                <button
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--purple)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. LIBRARY & 5. TRAINING CENTRE (2-Column Rhythm)
          ======================================================== */}
      <section
        id="library"
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--cloud)',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {/* Library Card */}
            <div
              className="card-base"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#E7F0FE',
                  color: 'var(--blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <BookOpen size={26} />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0.5rem' }}>
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">SHARED KNOWLEDGE</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}
              >
                Library
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--blue)',
                  marginBottom: '1rem'
                }}
              >
                Everything you need to learn, create and share.
              </p>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                The Library gives teachers and students a shared space for the academic resources they create
                and use. Create mind maps, flowcharts, whiteboards, rich-text pages, flashcards, documents
                and links. Teachers can build resources and assign them to students, while students can create
                and organise resources for themselves.
              </p>

              {/* Workspace Visualisation Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.75rem' }}>
                {[
                  'Mind maps',
                  'Flowcharts',
                  'Whiteboards',
                  'Rich-text pages',
                  'Flashcards',
                  'Documents',
                  'Links'
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      backgroundColor: 'var(--cloud)',
                      border: '1px solid var(--line-light)',
                      borderRadius: '999px',
                      padding: '6px 14px',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--nebula)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--line-light)' }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '4px' }}>
                  <strong>Teachers:</strong> Ensure important knowledge is passed down · <strong>Students:</strong> Never lose important info
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--blue)', marginTop: '8px' }}>
                  One place for every idea, resource and learning artefact.
                </div>
              </div>
            </div>

            {/* Training Centre Card */}
            <div
              id="training-centre"
              className="card-base"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#E2F8F4',
                  color: 'var(--mint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Dumbbell size={26} />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0.5rem' }}>
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">SKILL ACCELERATION</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}
              >
                Training Centre
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--mint)',
                  marginBottom: '1rem'
                }}
              >
                Build skills beyond the classroom.
              </p>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                The Training Centre gives students a space to practise, experiment and strengthen the skills
                behind effective learning. Students can generate personalised quizzes based on their areas
                of weakness, learn concepts through AI-generated rhymes built around themes they enjoy, and
                play activities designed to strengthen foundational study skills.
              </p>

              {/* Training Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="var(--mint)" />
                  <span>Personalised quizzes generated from weak points</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="var(--mint)" />
                  <span>AI-generated rhymes tailored to student interests</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="var(--mint)" />
                  <span>Foundational cognitive study exercises</span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--line-light)' }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '4px' }}>
                  <strong>Students:</strong> Practice made into a game..
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--mint)', marginTop: '8px' }}>
                  Practise your weak points. Strengthen your skills. Level up.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BEHAVIOUR MANAGEMENT & 7. ANALYTICS (2-Column Rhythm)
          ======================================================== */}
      <section
        id="behaviour-management"
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
              gap: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {/* Behaviour Management */}
            <div
              className="card-cloud"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#FFF8E9',
                  color: 'var(--sun)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <HeartHandshake size={26} color="#906100" />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0.5rem' }}>
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">COMMUNITY CULTURE</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}
              >
                Behaviour Management
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: '#906100',
                  marginBottom: '1rem'
                }}
              >
                Make good behaviour visible.
              </p>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                Teachers can recognise and reward positive student behaviour directly through Game Up.
                When a student receives a reward, the recognition is visible to the class—creating opportunities
                for positive behaviour to be noticed, celebrated and encouraged within the school community.
              </p>

              {/* Feed Preview */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1rem',
                  border: '1px solid var(--line-light)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={20} color="var(--sun)" />
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)' }}>
                      Class Recognition Broadcast
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>
                      “Priya helped clean the chemistry lab equipment without asking.” · +50 Karma Points
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--line-light)' }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '4px' }}>
                  <strong>Teachers:</strong> Encourage good behaviour · <strong>Students:</strong> Motivated to exhibit goodness
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: '#906100', marginTop: '8px' }}>
                  Recognise good behaviour. Celebrate progress.
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div
              id="analytics"
              className="card-cloud"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#E7F0FE',
                  color: 'var(--blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <BarChart3 size={26} />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0.5rem' }}>
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">REAL-TIME TELEMETRY</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}
              >
                Analytics
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--blue)',
                  marginBottom: '1rem'
                }}
              >
                Turn every activity into actionable insight.
              </p>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                Game Up captures student activity across the platform in real time and turns it into meaningful
                insights for the people who support each learner. Teachers and administrators get actionable
                visibility into student activity and performance, while parents receive timely insight into
                their child’s academic journey.
              </p>

              {/* Analytics Abstract Visualization */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1rem',
                  border: '1px solid var(--line-light)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--slate)' }}>
                    Continuous Academic Trajectory
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--mint)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <TrendingUp size={14} /> Real-time active
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '54px', paddingTop: '8px' }}>
                  <div style={{ flex: 1, height: '40%', backgroundColor: 'var(--blue)', borderRadius: '4px' }} />
                  <div style={{ flex: 1, height: '65%', backgroundColor: 'var(--purple)', borderRadius: '4px' }} />
                  <div style={{ flex: 1, height: '55%', backgroundColor: 'var(--blue)', borderRadius: '4px' }} />
                  <div style={{ flex: 1, height: '80%', backgroundColor: 'var(--mint)', borderRadius: '4px' }} />
                  <div style={{ flex: 1, height: '95%', backgroundColor: 'var(--coral)', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--line-light)' }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '4px' }}>
                  <strong>Everyone:</strong> No need to wait for the report card to understand the state of things.
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--blue)', marginTop: '8px' }}>
                  From activity to insight. From insight to action.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. ADMINISTRATION MANAGEMENT & 9. WHATSAPP ASSISTANT (2-Column Rhythm)
          ======================================================== */}
      <section
        id="administration-management"
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--cloud)',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {/* Administration Management */}
            <div
              className="card-base"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#E2F8F4',
                  color: 'var(--mint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Building2 size={26} />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0.5rem' }}>
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">CAMPUS OPERATIONS</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}
              >
                Administration Management
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--mint)',
                  marginBottom: '1rem'
                }}
              >
                Keep the school moving.
              </p>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                Game Up extends beyond the classroom to streamline the operational side of running a school.
                From transportation and facilities to other administrative activities, the platform brings
                school operations into a more connected environment—helping administrators coordinate the
                moving parts that keep a school running smoothly.
              </p>

              {/* Connected Operational View Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1.5rem' }}>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '10px 14px', borderRadius: '12px', fontSize: '0.8125rem', fontWeight: 600 }}>
                  🚌 Fleet &amp; Transport
                </div>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '10px 14px', borderRadius: '12px', fontSize: '0.8125rem', fontWeight: 600 }}>
                  🏫 Facility Dispatch
                </div>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '10px 14px', borderRadius: '12px', fontSize: '0.8125rem', fontWeight: 600 }}>
                  📋 Admin Coordination
                </div>
                <div style={{ backgroundColor: 'var(--cloud)', padding: '10px 14px', borderRadius: '12px', fontSize: '0.8125rem', fontWeight: 600 }}>
                  ⚡ One-Click Workflows
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--line-light)' }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '4px' }}>
                  <strong>Administrator:</strong> The entire school is manageable in a click
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--mint)', marginTop: '8px' }}>
                  One school. One connected operational view.
                </div>
              </div>
            </div>

            {/* WhatsApp Assistant for Parents */}
            <div
              id="whatsapp-assistant"
              className="card-base"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#DCF8C6',
                  color: '#075E54',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <MessageCircle size={26} />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0.5rem' }}>
                <span className="eyebrow-bar eyebrow-bar-slate" />
                <span className="eyebrow-text eyebrow-text-slate">INSTANT PARENT CONNECTION</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}
              >
                WhatsApp Assistant for Parents
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: '#075E54',
                  marginBottom: '1rem'
                }}
              >
                Keep parents close to the learning journey.
              </p>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                Parents can interact with Game Up through WhatsApp to access real-time information about
                their child’s academic activity and performance. The system can also automatically reach out
                when a student’s activity requires parental attention or intervention, helping parents stay
                informed without requiring them to constantly check another platform.
              </p>

              {/* WhatsApp Message Preview */}
              <div
                style={{
                  backgroundColor: '#ECE5DD',
                  borderRadius: '16px',
                  padding: '1rem',
                  border: '1px solid #D1D7DB',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ alignSelf: 'flex-start', backgroundColor: '#FFFFFF', padding: '8px 12px', borderRadius: '8px', fontSize: '0.8125rem', color: '#111B21', maxWidth: '88%' }}>
                  “Hi Mrs. Sharma! Aarav completed all tasks for Math Unit 4 and earned 250 XP today. Next assessment is on Friday.”
                  <div style={{ fontSize: '0.625rem', color: '#667781', textAlign: 'right', marginTop: '2px' }}>12:45 PM</div>
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--line-light)' }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '4px' }}>
                  <strong>Teachers &amp; Admins:</strong> Inform parents in just a click · <strong>Parents:</strong> Updates whenever, wherever
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: '#075E54', marginTop: '8px' }}>
                  The right update. At the right time. Right where parents already are.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. COMMUNITIES
          ======================================================== */}
      <section
        id="communities"
        className="section-wrapper"
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--nebula)',
              color: '#FFFFFF',
              borderRadius: '28px',
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              border: '1px solid var(--line)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
              <div className="eyebrow-container">
                <span className="eyebrow-bar" />
                <span className="eyebrow-text">EXPANDING HORIZONS</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--section-title-size)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem'
                }}
              >
                Communities
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                  fontWeight: 600,
                  color: 'var(--sun)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.4
                }}
              >
                Take learning beyond the school gates.
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--mist)',
                  marginBottom: '2rem'
                }}
              >
                Game Up connects students, teachers, parents and administrators with communities beyond their
                own schools. Communities are organised around skills and interests, giving users opportunities
                to learn from experts, connect with like-minded people, access courses, organise guest lectures
                and workshops, and participate in interschool competitions. For students, community activity
                remains visible to their parents, creating greater transparency around their experiences beyond
                the classroom.
              </p>

              {/* 4 Community Stakeholder Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '14px',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sun)', textTransform: 'uppercase' }}>Students</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>Learn beyond the classroom</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sun)', textTransform: 'uppercase' }}>Teachers</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>Learn from the best in the world</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sun)', textTransform: 'uppercase' }}>Administrators</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>Network of experts to enhance performance</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sun)', textTransform: 'uppercase' }}>Parents</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>No need to limit your child’s dreams</div>
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--sun)',
                  letterSpacing: '0.04em'
                }}
              >
                Meet people. Discover skills. Learn beyond your school.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
