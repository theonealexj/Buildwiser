import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════════
       1. HERO
  ═══════════════════════════════════════════════ */}
      <section className="hero-v2" id="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow"></div>
        <div className="container hero-v2-inner">

          <div className="hero-v2-left reveal reveal-delay-1">
            <h1 className="hero-v2-headline">
              The Strategy of Tommorow
            </h1>

            <div className="hero-v2-actions">
              <a href="https://cal.com/growwithalex/audit" target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="hero-cta-btn">
                Book a free audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </a>
              <Link to="/services" className="btn btn-ghost">Explore Services</Link>
            </div>
          </div>

          <div className="hero-v2-right reveal reveal-delay-2">
            <div className="hero-flow-diagram" id="hero-flow">
              {/* Animated SVG Flow: Business → AI → Growth */}
              <svg viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="flow-svg">
                {/* Connection lines */}
                <line x1="200" y1="95" x2="200" y2="155" className="low-line flow-line-1" strokeDasharray="4 4" />
                <line x1="200" y1="255" x2="200" y2="315" className="flow-line flow-line-2" strokeDasharray="4 4" />

                {/* Animated particles on lines */}
                <circle r="3" fill="#6C8CFF" className="flow-particle flow-particle-1">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M200,95 L200,155" />
                </circle>
                <circle r="3" fill="#6C8CFF" className="flow-particle flow-particle-2">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M200,255 L200,315" begin="0.5s" />
                </circle>

                {/* Node 1: Business */}
                <g className="flow-node flow-node-1">
                  <rect x="100" y="20" width="200" height="75" rx="16" className="flow-node-bg" />
                  <rect x="100" y="20" width="200" height="75" rx="16" className="flow-node-border" />
                  {/* Building icon */}
                  <rect x="155" y="42" width="16" height="20" rx="2" stroke="#6C8CFF" strokeWidth="1.5" fill="none" />
                  <rect x="161" y="47" width="4" height="4" rx="0.5" fill="#6C8CFF" opacity="0.6" />
                  <rect x="161" y="53" width="4" height="4" rx="0.5" fill="#6C8CFF" opacity="0.6" />
                  <line x1="163" y1="58" x2="163" y2="62" stroke="#6C8CFF" strokeWidth="1.5" />
                  <text x="182" y="57" className="flow-node-text">Business</text>
                </g>

                {/* Node 2: AI Integration */}
                <g className="flow-node flow-node-2">
                  <rect x="75" y="160" width="250" height="90" rx="16" className="flow-node-bg flow-node-bg-active" />
                  <rect x="75" y="160" width="250" height="90" rx="16" className="flow-node-border flow-node-border-active" />
                  {/* AI brain icon */}
                  <circle cx="100" cy="205" r="14" stroke="#6C8CFF" strokeWidth="1.5" fill="none" />
                  <path d="M92 205 Q96 195 100 205 Q104 215 108 205" stroke="#6C8CFF" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                  <circle cx="96" cy="200" r="1.5" fill="#6C8CFF" />
                  <circle cx="104" cy="200" r="1.5" fill="#6C8CFF" />
                  <text x="124" y="201" className="flow-node-text flow-node-text-accent">Our Strategy</text>
                  <text x="124" y="218" className="flow-node-subtext">Consulting · Agents · Automation</text>
                </g>

                {/* Node 3: Scalable Growth */}
                <g className="flow-node flow-node-3">
                  <rect x="85" y="320" width="230" height="75" rx="16" className="flow-node-bg" />
                  <rect x="85" y="320" width="230" height="75" rx="16" className="flow-node-border" />
                  {/* Growth arrow icon */}
                  <path d="M122 370 L130 350 L138 360" stroke="#6C8CFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M126 352 L130 350 L134 354" stroke="#6C8CFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="148" y="362" className="flow-node-text">Scalable Growth</text>
                </g>

                {/* Arrow heads */}
                <polygon points="196,152 200,160 204,152" fill="#6C8CFF" className="flow-arrow flow-arrow-1" />
                <polygon points="196,312 200,320 204,312" fill="#6C8CFF" className="flow-arrow flow-arrow-2" />
              </svg>
            </div>
          </div>

        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-line"></div>
          <span>Trusted by Growth-Stage Businesses</span>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       2. TRUSTED EXPERIENCE
  ═══════════════════════════════════════════════ */}
      <section className="metrics-section" id="metrics">
        <div className="container">
          <div className="metrics-grid reveal">
            <div className="metric-card">
              <div className="metric-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="8" width="8" height="14" rx="2" stroke="#6C8CFF" strokeWidth="1.5" />
                  <rect x="13" y="4" width="8" height="18" rx="2" stroke="#6C8CFF" strokeWidth="1.5" />
                  <rect x="23" y="10" width="2" height="12" rx="1" stroke="#6C8CFF" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="metric-value credential-number">50+</span>
              <span className="metric-label">Projects Delivered</span>
            </div>

            <div className="metric-card">
              <div className="metric-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="10" stroke="#6C8CFF" strokeWidth="1.5" />
                  <path d="M14 8V14L18 16" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="metric-value credential-number">70+</span>
              <span className="metric-label">Years Combined Experience</span>
            </div>
            <div className="metric-card">
              <div className="metric-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 22V10L14 4L22 10V22H18V16H10V22H6Z" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="metric-value credential-number">30+</span>
              <span className="metric-label">Businesses Advised</span>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       3. WHAT WE SOLVE
  ═══════════════════════════════════════════════ */}
      <section className="solve-section" id="solve">
        <div className="container">
          <div className="section-label reveal">The Challenge</div>
          <h2 className="section-headline reveal reveal-delay-1">Problems we solve.</h2>
          <div className="solve-grid reveal reveal-delay-2">
            <div className="solve-card">
              <div className="solve-card-accent"></div>
              <div className="solve-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17L8 12L12 15L19 7" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="19" cy="7" r="2.5" stroke="#6C8CFF" strokeWidth="1.5" />
                </svg>
              </div>
              <h3>Sales Bottlenecks</h3>
              <p>Revenue stalls when outreach depends on manual effort.</p>
            </div>
            <div className="solve-card">
              <div className="solve-card-accent"></div>
              <div className="solve-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="#6C8CFF" strokeWidth="1.5" />
                  <path d="M8 12H16M12 8V16" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Manual Processes</h3>
              <p>Teams spend hours on tasks AI handles in seconds.</p>
            </div>
            <div className="solve-card">
              <div className="solve-card-accent"></div>
              <div className="solve-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#6C8CFF" strokeWidth="1.5" />
                  <path d="M12 8V12" stroke="#6C8CFF" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="16" r="1" fill="#6C8CFF" />
                </svg>
              </div>
              <h3>Poor Visibility</h3>
              <p>No single view of pipeline, operations, or performance.</p>
            </div>
            <div className="solve-card">
              <div className="solve-card-accent"></div>
              <div className="solve-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#6C8CFF" strokeWidth="1.5" />
                  <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Founder Dependency</h3>
              <p>Growth halts when every decision needs one person.</p>
            </div>
            <div className="solve-card">
              <div className="solve-card-accent"></div>
              <div className="solve-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="8" height="7" rx="2" stroke="#6C8CFF" strokeWidth="1.5" />
                  <rect x="14" y="13" width="8" height="7" rx="2" stroke="#6C8CFF" strokeWidth="1.5" />
                  <path d="M10 7.5H14M14 7.5V13M10 16.5H14" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
                </svg>
              </div>
              <h3>Disconnected Systems</h3>
              <p>Tools that don't talk create data gaps and rework.</p>
            </div>
            <div className="solve-card">
              <div className="solve-card-accent"></div>
              <div className="solve-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Operational Inefficiencies</h3>
              <p>Margins erode from repeated friction in daily workflows.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       4. OUR EXPERTISE
  ═══════════════════════════════════════════════ */}
      <section className="expertise-section" id="services">
        <div className="container">
          <div className="section-label reveal">What We Do</div>
          <h2 className="section-headline reveal reveal-delay-1">Our expertise.</h2>
          <div className="pillars-grid reveal reveal-delay-2">

            {/* Pillar 1: AI Strategy */}
            <div className="pillar-card">
              <div className="pillar-card-glow"></div>
              <div className="pillar-illustration">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="pillar-svg">
                  {/* Neural network / AI brain illustration */}
                  <circle cx="100" cy="40" r="18" stroke="#6C8CFF" strokeWidth="1.2" opacity="0.3" />
                  <circle cx="100" cy="40" r="10" stroke="#6C8CFF" strokeWidth="1.5" className="pillar-anim-pulse" />
                  <circle cx="100" cy="40" r="3" fill="#6C8CFF" opacity="0.6" className="pillar-anim-pulse" />
                  {/* Connection nodes */}
                  <circle cx="60" cy="70" r="6" stroke="#6C8CFF" strokeWidth="1.2" opacity="0.5" />
                  <circle cx="100" cy="85" r="6" stroke="#6C8CFF" strokeWidth="1.2" opacity="0.5" />
                  <circle cx="140" cy="70" r="6" stroke="#6C8CFF" strokeWidth="1.2" opacity="0.5" />
                  {/* Connecting lines */}
                  <line x1="93" y1="49" x2="65" y2="65" stroke="#6C8CFF" strokeWidth="1" opacity="0.25" strokeDasharray="3 3">
                    <animate attributeName="strokeDashoffset" from="0" to="-6" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="100" y1="50" x2="100" y2="79" stroke="#6C8CFF" strokeWidth="1" opacity="0.25" strokeDasharray="3 3">
                    <animate attributeName="strokeDashoffset" from="0" to="-6" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="107" y1="49" x2="135" y2="65" stroke="#6C8CFF" strokeWidth="1" opacity="0.25" strokeDasharray="3 3">
                    <animate attributeName="strokeDashoffset" from="0" to="-6" dur="2s" repeatCount="indefinite" />
                  </line>
                  {/* Data flow dots */}
                  <circle r="2" fill="#6C8CFF" opacity="0.7">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M93,49 L65,65" />
                  </circle>
                  <circle r="2" fill="#6C8CFF" opacity="0.7">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M100,50 L100,79" begin="0.4s" />
                  </circle>
                  <circle r="2" fill="#6C8CFF" opacity="0.7">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M107,49 L135,65" begin="0.8s" />
                  </circle>
                  {/* Outer ring arcs */}
                  <path d="M70 30 Q100 10 130 30" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.15" fill="none" />
                  <path d="M50 80 Q100 110 150 80" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.15" fill="none" />
                </svg>
              </div>
              <h3 className="pillar-title">AI Strategy</h3>
              <p className="pillar-desc">Helping businesses identify, prioritize and implement AI where it creates measurable business value.</p>
              <div className="pillar-divider"></div>
              <div className="pillar-caps-label">Capabilities</div>
              <div className="pillar-caps">
                <span className="pillar-cap-tag">AI Consulting</span>
                <span className="pillar-cap-tag">AI Roadmaps</span>
                <span className="pillar-cap-tag">AI Agents</span>
                <span className="pillar-cap-tag">Knowledge Bases</span>
                <span className="pillar-cap-tag">Workflow Automation</span>
                <span className="pillar-cap-tag">Sales Automation</span>
              </div>
            </div>

            {/* Pillar 2: Business Strategy */}
            <div className="pillar-card">
              <div className="pillar-card-glow"></div>
              <div className="pillar-illustration">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="pillar-svg">
                  {/* Growth chart illustration */}
                  <line x1="30" y1="95" x2="170" y2="95" stroke="#6C8CFF" strokeWidth="1" opacity="0.2" />
                  <line x1="30" y1="95" x2="30" y2="20" stroke="#6C8CFF" strokeWidth="1" opacity="0.2" />
                  {/* Grid lines */}
                  <line x1="30" y1="75" x2="170" y2="75" stroke="#6C8CFF" strokeWidth="0.5" opacity="0.08" />
                  <line x1="30" y1="55" x2="170" y2="55" stroke="#6C8CFF" strokeWidth="0.5" opacity="0.08" />
                  <line x1="30" y1="35" x2="170" y2="35" stroke="#6C8CFF" strokeWidth="0.5" opacity="0.08" />
                  {/* Growth curve */}
                  <path d="M35 85 Q60 80 80 65 Q100 50 120 38 Q140 28 165 22" stroke="#6C8CFF" strokeWidth="2" fill="none" strokeLinecap="round" className="pillar-anim-draw" />
                  {/* Area fill */}
                  <path d="M35 85 Q60 80 80 65 Q100 50 120 38 Q140 28 165 22 L165 95 L35 95 Z" fill="url(#growthGrad)" opacity="0.08" />
                  {/* Data points */}
                  <circle cx="80" cy="65" r="3" fill="#6C8CFF" opacity="0.6" className="pillar-anim-pulse" />
                  <circle cx="120" cy="38" r="3" fill="#6C8CFF" opacity="0.6" className="pillar-anim-pulse" />
                  <circle cx="165" cy="22" r="4" fill="#6C8CFF" opacity="0.8" className="pillar-anim-pulse" />
                  {/* Arrow at end */}
                  <path d="M160 26 L165 20 L168 28" stroke="#6C8CFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                  <defs>
                    <linearGradient id="growthGrad" x1="100" y1="22" x2="100" y2="95" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6C8CFF" />
                      <stop offset="1" stopColor="#6C8CFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="pillar-title">Business Strategy</h3>
              <p className="pillar-desc">Designing scalable growth strategies that improve revenue, execution and long term competitiveness.</p>
              <div className="pillar-divider"></div>
              <div className="pillar-caps-label">Capabilities</div>
              <div className="pillar-caps">
                <span className="pillar-cap-tag">Growth Strategy</span>
                <span className="pillar-cap-tag">Sales Strategy</span>
                <span className="pillar-cap-tag">Go To Market</span>
                <span className="pillar-cap-tag">Market Expansion</span>
                <span className="pillar-cap-tag">Business Transformation</span>
              </div>
            </div>

            {/* Pillar 3: Operations & Technology */}
            <div className="pillar-card">
              <div className="pillar-card-glow"></div>
              <div className="pillar-illustration">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="pillar-svg">
                  {/* System architecture / gear illustration */}
                  {/* Central gear */}
                  <circle cx="100" cy="55" r="16" stroke="#6C8CFF" strokeWidth="1.5" opacity="0.4" className="pillar-anim-rotate" style={{}} />
                  <circle cx="100" cy="55" r="8" stroke="#6C8CFF" strokeWidth="1.2" opacity="0.6" />
                  <circle cx="100" cy="55" r="3" fill="#6C8CFF" opacity="0.4" />
                  {/* Gear teeth */}
                  <line x1="100" y1="37" x2="100" y2="33" stroke="#6C8CFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  <line x1="100" y1="73" x2="100" y2="77" stroke="#6C8CFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  <line x1="82" y1="55" x2="78" y2="55" stroke="#6C8CFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  <line x1="118" y1="55" x2="122" y2="55" stroke="#6C8CFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  {/* Connected system boxes */}
                  <rect x="40" y="25" width="24" height="16" rx="3" stroke="#6C8CFF" strokeWidth="1" opacity="0.35" />
                  <rect x="136" y="25" width="24" height="16" rx="3" stroke="#6C8CFF" strokeWidth="1" opacity="0.35" />
                  <rect x="40" y="75" width="24" height="16" rx="3" stroke="#6C8CFF" strokeWidth="1" opacity="0.35" />
                  <rect x="136" y="75" width="24" height="16" rx="3" stroke="#6C8CFF" strokeWidth="1" opacity="0.35" />
                  {/* Connection lines */}
                  <line x1="64" y1="33" x2="84" y2="47" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3">
                    <animate attributeName="strokeDashoffset" from="0" to="-6" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="136" y1="33" x2="116" y2="47" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3">
                    <animate attributeName="strokeDashoffset" from="0" to="-6" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="64" y1="83" x2="84" y2="63" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3">
                    <animate attributeName="strokeDashoffset" from="0" to="-6" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="136" y1="83" x2="116" y2="63" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3">
                    <animate attributeName="strokeDashoffset" from="0" to="-6" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  {/* Mini icons inside boxes */}
                  <rect x="47" y="30" width="10" height="6" rx="1" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.3" />
                  <rect x="143" y="30" width="10" height="6" rx="1" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.3" />
                  <rect x="47" y="80" width="10" height="6" rx="1" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.3" />
                  <rect x="143" y="80" width="10" height="6" rx="1" stroke="#6C8CFF" strokeWidth="0.8" opacity="0.3" />
                </svg>
              </div>
              <h3 className="pillar-title">Operations & Technology</h3>
              <p className="pillar-desc">Optimizing operations through better processes, systems and technology implementation.</p>
              <div className="pillar-divider"></div>
              <div className="pillar-caps-label">Capabilities</div>
              <div className="pillar-caps">
                <span className="pillar-cap-tag">Operational Excellence</span>
                <span className="pillar-cap-tag">Process Mapping</span>
                <span className="pillar-cap-tag">SOP Development</span>
                <span className="pillar-cap-tag">CRM Systems</span>
                <span className="pillar-cap-tag">Digital Transformation</span>
                <span className="pillar-cap-tag">Technology Implementation</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       5. HOW WE WORK
  ═══════════════════════════════════════════════ */}
      <section className="timeline-section" id="timeline">
        <div className="container">
          <div className="section-label reveal">Our Process</div>
          <h2 className="section-headline reveal reveal-delay-1">How we work.</h2>
          <div className="timeline-wrapper reveal reveal-delay-2">
            <div className="timeline-track">
              <div className="timeline-line">
                <div className="timeline-line-fill" id="timeline-fill"></div>
              </div>
              <div className="timeline-nodes">
                <div className="timeline-node" data-step="1">
                  <div className="timeline-dot"><span>01</span></div>
                  <div className="timeline-label">Discover</div>
                  <div className="timeline-desc">Map current state</div>
                </div>
                <div className="timeline-node" data-step="2">
                  <div className="timeline-dot"><span>02</span></div>
                  <div className="timeline-label">Diagnose</div>
                  <div className="timeline-desc">Identify highest impact</div>
                </div>
                <div className="timeline-node" data-step="3">
                  <div className="timeline-dot"><span>03</span></div>
                  <div className="timeline-label">Design</div>
                  <div className="timeline-desc">Architect the solution</div>
                </div>
                <div className="timeline-node" data-step="4">
                  <div className="timeline-dot"><span>04</span></div>
                  <div className="timeline-label">Implement</div>
                  <div className="timeline-desc">Build and deploy</div>
                </div>
                <div className="timeline-node" data-step="5">
                  <div className="timeline-dot"><span>05</span></div>
                  <div className="timeline-label">Optimize</div>
                  <div className="timeline-desc">Measure, iterate, improve</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       6. BUSINESS IMPACT
  ═══════════════════════════════════════════════ */}
      <section className="impact-section" id="impact">
        <div className="container">
          <div className="section-label reveal">Outcomes</div>
          <h2 className="section-headline reveal reveal-delay-1">Business impact, not features.</h2>
          <div className="impact-grid reveal reveal-delay-2">
            <div className="impact-card">
              <div className="impact-visual">
                <span className="impact-metric">73%</span>
                <span className="impact-metric-label">Faster</span>
              </div>
              <h3>Faster Sales Cycles</h3>
              <p>From first touch to close.</p>
            </div>
            <div className="impact-card">
              <div className="impact-visual">
                <span className="impact-metric">68%</span>
                <span className="impact-metric-label">Reduction</span>
              </div>
              <h3>Reduced Manual Work</h3>
              <p>Automated repetitive tasks.</p>
            </div>
            <div className="impact-card">
              <div className="impact-visual">
                <span className="impact-metric">Real-time</span>
                <span className="impact-metric-label">Visibility</span>
              </div>
              <h3>Better Visibility</h3>
              <p>Unified operational dashboard.</p>
            </div>
            <div className="impact-card">
              <div className="impact-visual">
                <span className="impact-metric">97%</span>
                <span className="impact-metric-label">Adherence</span>
              </div>
              <h3>Consistent Execution</h3>
              <p>SOP compliance across teams.</p>
            </div>
            <div className="impact-card">
              <div className="impact-visual">
                <span className="impact-metric">3x</span>
                <span className="impact-metric-label">Capacity</span>
              </div>
              <h3>Scalable Processes</h3>
              <p>Grow without adding headcount.</p>
            </div>
            <div className="impact-card">
              <div className="impact-visual">
                <span className="impact-metric">+14pt</span>
                <span className="impact-metric-label">Margin</span>
              </div>
              <h3>Higher Margins</h3>
              <p>Operational efficiency gains.</p>
            </div>
          </div>
        </div>
      </section>





      {/* ═══════════════════════════════════════════════
       8. CLIENT RESULTS
  ═══════════════════════════════════════════════ */}
      <section className="results-section" id="results">
        <div className="container">
          <div className="section-label reveal">Our Work</div>
          <h2 className="section-headline reveal reveal-delay-1">Client results.</h2>
          <div className="results-grid reveal reveal-delay-2">
            <div className="result-card">
              <div className="result-tag">Sales Automation</div>
              <h3 className="result-title">Pipeline acceleration for a $4M services firm</h3>
              <div className="result-comparison">
                <div className="result-before">
                  <span className="result-comp-label">Before</span>
                  <span className="result-comp-value">45 day sales cycles</span>
                </div>
                <div className="result-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="result-after">
                  <span className="result-comp-label">After</span>
                  <span className="result-comp-value">12 day avg close</span>
                </div>
              </div>
              <div className="result-timeline-badge">90 Days</div>
            </div>
            <div className="result-card">
              <div className="result-tag">CRM & Pipeline</div>
              <h3 className="result-title">Visibility overhaul for a B2B manufacturer</h3>
              <div className="result-comparison">
                <div className="result-before">
                  <span className="result-comp-label">Before</span>
                  <span className="result-comp-value">23% pipeline visibility</span>
                </div>
                <div className="result-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="result-after">
                  <span className="result-comp-label">After</span>
                  <span className="result-comp-value">94% full visibility</span>
                </div>
              </div>
              <div className="result-timeline-badge">60 Days</div>
            </div>
            <div className="result-card">
              <div className="result-tag">Workflow Automation</div>
              <h3 className="result-title">Reporting automation for a tech company</h3>
              <div className="result-comparison">
                <div className="result-before">
                  <span className="result-comp-label">Before</span>
                  <span className="result-comp-value">12 hrs/week manual reporting</span>
                </div>
                <div className="result-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="result-after">
                  <span className="result-comp-label">After</span>
                  <span className="result-comp-value">Fully automated</span>
                </div>
              </div>
              <div className="result-timeline-badge">45 Days</div>
            </div>
            <div className="result-card">
              <div className="result-tag">Knowledge Base AI</div>
              <h3 className="result-title">Onboarding acceleration for a services firm</h3>
              <div className="result-comparison">
                <div className="result-before">
                  <span className="result-comp-label">Before</span>
                  <span className="result-comp-value">4 hr onboarding queries</span>
                </div>
                <div className="result-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="result-after">
                  <span className="result-comp-label">After</span>
                  <span className="result-comp-value">Instant AI answers</span>
                </div>
              </div>
              <div className="result-timeline-badge">30 Days</div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
       9. FINAL CTA
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
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
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

export default Home;
