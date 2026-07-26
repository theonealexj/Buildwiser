import React from 'react';
import { Link } from 'react-router-dom';

const HowWeWork = () => {
  return (
    <>


      {/* ═══ HERO ═══ */}
      <section className="interior-hero">
        <div className="interior-hero-glow"></div>
        <div className="container">
          <div className="breadcrumb reveal"><Link to="/">Home</Link> <span>/</span> How We Work</div>
          <h1 className="interior-headline reveal reveal-delay-1">How We Build.</h1>
          <p className="interior-sub reveal reveal-delay-2">Four phases. Clear deliverables at every stage. We don't hand over a report and leave  we build alongside your team until the systems work.</p>
        </div>
      </section>


      {/* ═══ OVERVIEW ═══ */}
      <section className="page-section hww-overview">
        <div className="container hww-overview-grid">
          <div className="hww-overview-left reveal" style={{ textAlign: 'center' }}>
            <div className="section-label">Our Approach</div>
            <h2 className="section-headline">Structured from<br />the first conversation.</h2>

          </div>
          <div className="hww-overview-right reveal reveal-delay-2">
            <div className="hww-principles">
              <div className="hww-principle">
                <div className="hww-p-tag">01</div>
                <p>Every engagement begins with a diagnostic. We review the business before we recommend.</p>
              </div>
              <div className="hww-principle">
                <div className="hww-p-tag">02</div>
                <p>We recommend only what the business requires. If we are not the right firm for a given problem, we will say so.</p>
              </div>
              <div className="hww-principle">
                <div className="hww-p-tag">03</div>
                <p>We remain involved through implementation, not just through the strategy phase.</p>
              </div>
              <div className="hww-principle">
                <div className="hww-p-tag">04</div>
                <p>We measure success by what changes in the business, not by engagement satisfaction ratings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ PROCESS BREAKDOWN ═══ */}
      <section className="page-section section-dark-alt hww-process-section">
        <div className="container">
          <div className="section-label reveal">The Engagement Process</div>
          <h2 className="section-headline reveal reveal-delay-1">Four phases to scale.</h2>
          <p className="section-sub reveal reveal-delay-2">Clear deliverables at every stage. We build alongside your team until the systems work.</p>

          <div className="hww-process-grid reveal reveal-delay-3">

            <div className="hww-phase-card" id="phase-1">
              <div className="hww-phase-header">
                <div className="hww-phase-num">01</div>
                <div className="hww-phase-meta">
                  <span className="hww-phase-title">Diagnostic</span>
                  <span className="hww-phase-time">2 to 4 Weeks</span>
                </div>
              </div>
              <p className="hww-phase-desc">Understand Before We Prescribe. We begin with a rigorous diagnostic  mapping your revenue architecture, operational constraints, organizational design, and execution patterns. Most firms skip this step. We don't.</p>
              <div className="hww-phase-output">
                <div className="hww-output-label">Deliverables</div>
                <p>Business diagnostic report  Constraint mapping  Commercial assessment  Priority opportunity list</p>
              </div>
            </div>

            <div className="hww-phase-card" id="phase-2">
              <div className="hww-phase-header">
                <div className="hww-phase-num">02</div>
                <div className="hww-phase-meta">
                  <span className="hww-phase-title">Blueprint</span>
                  <span className="hww-phase-time">3 to 5 Weeks</span>
                </div>
              </div>
              <p className="hww-phase-desc">Design the Architecture. Based on the diagnostic, we design the specific systems, structures, and processes your business needs. Not a generic framework  a plan built for your constraints, your team, and your growth goals.</p>
              <div className="hww-phase-output">
                <div className="hww-output-label">Deliverables</div>
                <p>Transformation blueprint  Systems design specs  Role &amp; org redesign  Roadmap with milestones</p>
              </div>
            </div>

            <div className="hww-phase-card" id="phase-3">
              <div className="hww-phase-header">
                <div className="hww-phase-num">03</div>
                <div className="hww-phase-meta">
                  <span className="hww-phase-title">Build</span>
                  <span className="hww-phase-time">8 to 16 Weeks</span>
                </div>
              </div>
              <p className="hww-phase-desc">Build What Matters. We work inside your business  alongside your team  to build the systems. Sales processes. Operational structures. Governance frameworks. This is where the work gets done, not handed over.</p>
              <div className="hww-phase-output">
                <div className="hww-output-label">Deliverables</div>
                <p>Live system builds  Process documentation  Team enablement  Performance dashboards</p>
              </div>
            </div>

            <div className="hww-phase-card" id="phase-4">
              <div className="hww-phase-header">
                <div className="hww-phase-num">04</div>
                <div className="hww-phase-meta">
                  <span className="hww-phase-title">Embed</span>
                  <span className="hww-phase-time">4 to 6 Weeks</span>
                </div>
              </div>
              <p className="hww-phase-desc">Make It Stick. Systems don't scale themselves  people do. The final phase focuses on capability transfer, leadership coaching, and accountability structures that ensure performance continues after we step back.</p>
              <div className="hww-phase-output">
                <div className="hww-output-label">Deliverables</div>
                <p>Leadership coaching  Capability handover  Governance setup  90-day post-engagement review</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══ ENGAGEMENT MODELS ═══ */}
      <section className="page-section hww-models">
        <div className="container">
          <div className="section-label reveal">Engagement Models</div>
          <h2 className="section-headline reveal reveal-delay-1">Delivered through<br />structured engagements.</h2>
          <p className="section-sub reveal reveal-delay-2">Scope, deliverables, and expected outcomes are defined before work begins. Clients know what to expect.</p>

          <div className="model-cards reveal reveal-delay-3">
            <div className="model-card" id="model-project">
              <div className="model-tag">Project-Based</div>
              <h3>Defined Scope. Defined Outcome.</h3>
              <p>A structured engagement built around a specific problem with clear deliverables, a fixed timeline, and a measurable result.</p>
              <ul className="model-list">
                <li>6 to 12 week engagements</li>
                <li>Defined deliverables and milestones</li>
                <li>Fixed scope with change management</li>
                <li>Ideal for first-time clients</li>
              </ul>
            </div>
            <div className="model-card model-card-featured" id="model-retainer">
              <div className="model-featured-badge">Most Common</div>
              <div className="model-tag">Retainer</div>
              <h3>Ongoing Strategic Support.</h3>
              <p>A monthly retainer providing continued access to structural thinking and implementation support as the business evolves.</p>
              <ul className="model-list">
                <li>Monthly engagement with weekly rhythms</li>
                <li>Covers multiple practice areas as needed</li>
                <li>Priority access for critical decisions</li>
                <li>Performance reviewed quarterly</li>
              </ul>
            </div>
            <div className="model-card" id="model-advisory">
              <div className="model-tag">Advisory</div>
              <h3>Senior Input. Defined Access.</h3>
              <p>Lighter-touch engagement for leadership teams that need structured outside perspective at a senior level without full implementation support.</p>
              <ul className="model-list">
                <li>Monthly strategy sessions</li>
                <li>Decision support and review</li>
                <li>Advisor-level access to our network</li>
                <li>Best for later-stage businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container cta-inner">
          <div className="cta-eyebrow reveal">Next Step</div>
          <h2 className="cta-headline reveal reveal-delay-1">Begin with an<br />honest conversation.</h2>
          <p className="cta-sub reveal reveal-delay-2">Share context on your situation. We will respond with an honest assessment of what we believe the primary constraint is, and whether we are the right firm to address it.</p>
          <div className="cta-buttons reveal reveal-delay-3">
            <a href="https://cal.com/growwithalex/audit" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Book a free audit <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
        </div>
      </section>


    </>
  );
};

export default HowWeWork;
