import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>


      {/* ═══════════════════════════════════════════════
       1. HERO
  ═══════════════════════════════════════════════ */}
      <section className="about-hero" id="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow"></div>
        <div className="container hero-v2-inner">
          <div className="hero-v2-left reveal reveal-delay-1">
            <div className="section-label">Our Story</div>
            <h1 className="hero-v2-headline">We bridge<br />strategy &amp;<br />execution.</h1>
            <p className="hero-v2-sub">We are operators who consult. Not consultants who theorise.</p>
          </div>
          <div className="hero-v2-right reveal reveal-delay-2">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="flow-svg">
              {/* Abstract structural network */}
              <circle cx="200" cy="200" r="160" stroke="#6C8CFF" strokeWidth="1" opacity="0.1" strokeDasharray="4 8" />
              <circle cx="200" cy="200" r="100" stroke="#6C8CFF" strokeWidth="1" opacity="0.2" />

              <path d="M40 200 Q200 100 360 200 Q200 300 40 200" stroke="#6C8CFF" strokeWidth="1" opacity="0.15" fill="none" />
              <path d="M200 40 Q300 200 200 360 Q100 200 200 40" stroke="#6C8CFF" strokeWidth="1" opacity="0.15" fill="none" />

              {/* Nodes */}
              <circle cx="200" cy="200" r="12" fill="#111" stroke="#6C8CFF" strokeWidth="2" />
              <circle cx="200" cy="200" r="4" fill="#6C8CFF" className="anim-pulse" />

              <circle cx="200" cy="100" r="8" fill="#111" stroke="#6C8CFF" strokeWidth="1.5" />
              <circle cx="200" cy="300" r="8" fill="#111" stroke="#6C8CFF" strokeWidth="1.5" />
              <circle cx="100" cy="200" r="8" fill="#111" stroke="#6C8CFF" strokeWidth="1.5" />
              <circle cx="300" cy="200" r="8" fill="#111" stroke="#6C8CFF" strokeWidth="1.5" />

              {/* Connecting Lines */}
              <line x1="200" y1="108" x2="200" y2="188" stroke="#6C8CFF" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4">
                <animate attributeName="strokeDashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="200" y1="292" x2="200" y2="212" stroke="#6C8CFF" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4">
                <animate attributeName="strokeDashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="108" y1="200" x2="188" y2="200" stroke="#6C8CFF" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4">
                <animate attributeName="strokeDashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="292" y1="200" x2="212" y2="200" stroke="#6C8CFF" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4">
                <animate attributeName="strokeDashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>
        </div>
        <div className="hero-scroll-hint reveal reveal-delay-3">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       2. WHO WE ARE
  ═══════════════════════════════════════════════ */}
      <section className="about-who page-section" id="who">
        <div className="container about-who-grid">
          <div className="about-who-left reveal">
            <div className="oversized-label">Who<br />We<br />Are.</div>
          </div>
          <div className="about-who-right reveal reveal-delay-2">
            <h2 className="section-headline">We are a transformation firm for growth-stage businesses.</h2>
            <p className="about-who-desc">We exist because growing businesses often hit structural breaking points where effort no longer translates to revenue.</p>
            <p className="about-who-desc">We engage with operational bottlenecks and design AI-native systems to permanently solve them.</p>
          </div>
        </div>
      </section>





      {/* ═══════════════════════════════════════════════
       4 & 5. VISION & MISSION
  ═══════════════════════════════════════════════ */}
      <section className="vision-mission-section page-section" id="vision-mission">
        <div className="container">
          <div className="vm-grid reveal" style={{ gridTemplateColumns: '1fr' }}>
            <div className="vm-card">
              <div className="vm-glow"></div>
              <div className="section-label">Our Mission and Vision</div>
              <h2 className="vm-headline">Precise. Assured. substantive</h2>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       6. CORE VALUES
  ═══════════════════════════════════════════════ */}
      <section className="values-section page-section" id="values">
        <div className="container">
          <div className="section-label reveal">Core Values</div>
          <h2 className="section-headline reveal reveal-delay-1">What drives us.</h2>
          <div className="values-grid reveal reveal-delay-2">
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#6C8CFF" strokeWidth="1.5" /><circle cx="16" cy="16" r="4" fill="#6C8CFF" /><path d="M16 4V1M16 31V28M4 16H1M31 16H28" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <h3>Precision</h3>
              <p>We measure twice and cut once. Guesswork has no place in operations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 16H12L14 10L18 22L20 16H28" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Execution</h3>
              <p>Strategy without implementation is just expensive poetry.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="10" height="10" rx="2" stroke="#6C8CFF" strokeWidth="1.5" /><rect x="18" y="18" width="10" height="10" rx="2" stroke="#6C8CFF" strokeWidth="1.5" /><path d="M14 9H23V18M18 23H9V14" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" /></svg>
              </div>
              <h3>Systems-Thinking</h3>
              <p>We don't solve symptoms. We fix the underlying machinery.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4L2 11L16 18L30 11L16 4Z" stroke="#6C8CFF" strokeWidth="1.5" strokeLinejoin="round" /><path d="M2 21L16 28L30 21" stroke="#6C8CFF" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
              <h3>Pragmatism</h3>
              <p>We prioritize tools that work today over theoretical perfection tomorrow.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       7. OUR CONSULTING PHILOSOPHY
  ═══════════════════════════════════════════════ */}
      <section className="philosophy-section page-section" id="philosophy">
        <div className="container">
          <div className="section-label reveal">Philosophy</div>
          <h2 className="section-headline reveal reveal-delay-1">Theory vs. Practice.</h2>

          <div className="philosophy-graphic reveal reveal-delay-2">
            <div className="phil-box phil-left">
              <div className="phil-title">The Industry Standard</div>
              <div className="phil-diagram">
                <svg viewBox="0 0 100 60" fill="none" className="phil-svg">
                  {/* Report icon */}
                  <rect x="35" y="10" width="30" height="40" stroke="#8A8A8A" strokeWidth="1.5" rx="2" />
                  <line x1="42" y1="20" x2="58" y2="20" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="42" y1="28" x2="58" y2="28" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="42" y1="36" x2="50" y2="36" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p>Hand over a 100-page slide deck and leave you to figure out how to execute it.</p>
            </div>

            <div className="phil-vs">
              <div className="vs-line"></div>
              <div className="vs-circle">VS</div>
            </div>

            <div className="phil-box phil-right">
              <div className="phil-title">BuildWiser</div>
              <div className="phil-diagram">
                <svg viewBox="0 0 100 60" fill="none" className="phil-svg">
                  {/* Built system icon */}
                  <rect x="25" y="15" width="50" height="30" stroke="#6C8CFF" strokeWidth="1.5" rx="4" />
                  <circle cx="40" cy="30" r="4" fill="#6C8CFF" />
                  <line x1="50" y1="30" x2="65" y2="30" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M60 25L65 30L60 35" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p>Design the strategy, build the automated system, and train your team.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       11. WHY BUILDWISER
  ═══════════════════════════════════════════════ */}
      <section className="why-us-section page-section" id="why-us">
        <div className="container">
          <div className="section-label reveal">Why BuildWiser</div>
          <h2 className="section-headline reveal reveal-delay-1">Traditional Consulting vs. Us</h2>

          <div className="comparison-table reveal reveal-delay-2">
            <div className="comp-row comp-header">
              <div className="comp-col comp-feature"></div>
              <div className="comp-col comp-them">Traditional Agency</div>
              <div className="comp-col comp-us">BuildWiser</div>
            </div>

            <div className="comp-row">
              <div className="comp-col comp-feature">Deliverable</div>
              <div className="comp-col comp-them">Strategy presentation deck</div>
              <div className="comp-col comp-us">Functioning operational systems</div>
            </div>
            <div className="comp-row">
              <div className="comp-col comp-feature">AI Approach</div>
              <div className="comp-col comp-them">"ChatGPT wrappers"</div>
              <div className="comp-col comp-us">Deep workflow integration</div>
            </div>
            <div className="comp-row">
              <div className="comp-col comp-feature">Pricing</div>
              <div className="comp-col comp-them">Billable hours</div>
              <div className="comp-col comp-us">Fixed project scopes</div>
            </div>
            <div className="comp-row">
              <div className="comp-col comp-feature">Execution</div>
              <div className="comp-col comp-them">Handed to your team</div>
              <div className="comp-col comp-us">Built alongside your team</div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       12. FINAL CTA
  ═══════════════════════════════════════════════ */}
      <section className="cta-section" id="cta">
        <div className="cta-glow"></div>
        <div className="container cta-inner">
          <div className="cta-eyebrow reveal">Next Step</div>
          <h2 className="cta-headline reveal reveal-delay-1">Ready to Build<br />Smarter Operations?</h2>
          <div className="cta-buttons reveal reveal-delay-2">
            <a href="https://cal.com/growwithalex/audit" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large" id="cta-book-btn">
          Book a free audit
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
            <Link to="/services" className="btn btn-ghost btn-large">Explore Services</Link>
          </div>
          <p className="cta-reassurance reveal reveal-delay-3">We respond within 24 hours.</p>
        </div>
      </section>


    </>
  );
};

export default About;
