import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, School, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'GameUp AcademicOS'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    role: 'School Administrator',
    interest: defaultTopic,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(19, 26, 61, 0.75)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          boxShadow: '0 24px 64px rgba(11, 16, 32, 0.25)',
          border: '1px solid var(--line-light)',
          overflow: 'hidden',
          padding: '2.5rem'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--cloud)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--slate)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E3E7EE';
            e.currentTarget.style.color = 'var(--nebula)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--cloud)';
            e.currentTarget.style.color = 'var(--slate)';
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div className="eyebrow-container" style={{ marginBottom: '0.75rem' }}>
                <span className="eyebrow-text eyebrow-text-slate">GET STARTED</span>
              </div>
              <h2
                id="modal-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}
              >
                Book a platform demo.
              </h2>
              <p style={{ color: 'var(--slate)', fontSize: '0.9375rem', marginTop: '0.5rem' }}>
                See how GameUp AcademicOS and The Crucible can transform your school.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)', marginBottom: '6px' }}>
                  Your Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Sunita Sharma"
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 16px 0 42px',
                      borderRadius: '12px',
                      border: '1px solid var(--line-light)',
                      backgroundColor: 'var(--cloud)',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--line-light)'}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)', marginBottom: '6px' }}>
                    Work Email *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sunita@school.org"
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 16px 0 42px',
                        borderRadius: '12px',
                        border: '1px solid var(--line-light)',
                        backgroundColor: 'var(--cloud)',
                        fontSize: '0.9375rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 16px 0 42px',
                        borderRadius: '12px',
                        border: '1px solid var(--line-light)',
                        backgroundColor: 'var(--cloud)',
                        fontSize: '0.9375rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)', marginBottom: '6px' }}>
                    School / Institution *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <School size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
                    <input
                      type="text"
                      required
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      placeholder="e.g. Modern Public School"
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 16px 0 42px',
                        borderRadius: '12px',
                        border: '1px solid var(--line-light)',
                        backgroundColor: 'var(--cloud)',
                        fontSize: '0.9375rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)', marginBottom: '6px' }}>
                    Your Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 14px',
                      borderRadius: '12px',
                      border: '1px solid var(--line-light)',
                      backgroundColor: 'var(--cloud)',
                      fontSize: '0.875rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      color: 'var(--nebula)'
                    }}
                  >
                    <option value="School Administrator">Principal / Trustee / Admin</option>
                    <option value="Teacher">Teacher / Academic Head</option>
                    <option value="Parent">Parent</option>
                    <option value="Crucible Partner">Crucible Workshop Partner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)', marginBottom: '6px' }}>
                  What would you like to explore?
                </label>
                <div style={{ position: 'relative' }}>
                  <MessageSquare size={18} style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--slate)' }} />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your student strength, grades, or specific modules..."
                    style={{
                      width: '100%',
                      padding: '12px 16px 12px 42px',
                      borderRadius: '12px',
                      border: '1px solid var(--line-light)',
                      backgroundColor: 'var(--cloud)',
                      fontSize: '0.875rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', height: '52px', marginTop: '0.5rem', fontSize: '1rem' }}
              >
                Schedule Interactive Demo
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'var(--mint)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle size={38} />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--nebula)',
                marginBottom: '0.75rem'
              }}
            >
              Demo request received!
            </h3>
            <p style={{ color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 1.75rem auto' }}>
              Thank you, <strong>{formData.name}</strong>. Our academic team will reach out to schedule an exploration for <strong>{formData.schoolName}</strong> within 24 hours.
            </p>
            <button onClick={handleReset} className="btn-secondary-light">
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
