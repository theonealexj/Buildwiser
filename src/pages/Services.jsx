import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      {/* ═══ INTERIOR HERO ═══ */}
      <section className="interior-hero">
        <div className="interior-hero-glow"></div>
        <div className="container">
          <div className="breadcrumb reveal"><Link to="/">Home</Link> <span>/</span> Capabilities</div>
          <div className="section-label reveal" style={{ marginTop: '20px' }}>HOW WE HELP BUSINESSES SCALE</div>
          <h1 className="interior-headline reveal reveal-delay-1">Strategy First.<br />Execution Always.</h1>
        </div>
      </section>

      {/* ═══ 1. AI STRATEGY ═══ */}
      <section className="cap-section page-section" id="ai-strategy">
        <div className="container cap-section-inner">
          <div className="cap-section-left reveal">
            <div className="cap-section-number">01</div>
            <div className="section-label">AI Strategy</div>
            <h2 className="section-headline">Identify AI opportunities.</h2>
            <p className="wwd-body">Integrating artificial intelligence to remove friction and accelerate performance across the entire business.</p>

            <Link to="/contact" className="btn btn-primary btn-sm">Get AI Strategy Help <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
          <div className="cap-section-right reveal reveal-delay-2">
            <div className="cap-detail-card">
              <h4>What We Deliver</h4>
              <ul className="cap-deep-list">
                <li>
                  <strong>AI Roadmaps</strong>
                  <span>Strategic planning for AI integration.</span>
                </li>
                <li>
                  <strong>AI Agents</strong>
                  <span>Autonomous systems for specialized workflows.</span>
                </li>
                <li>
                  <strong>Automation</strong>
                  <span>Removing manual bottlenecks securely.</span>
                </li>
                <li>
                  <strong>Knowledge AI</strong>
                  <span>Intelligent systems to capture institutional data.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. BUSINESS STRATEGY ═══ */}
      <section className="cap-section page-section section-dark-alt" id="business-strategy">
        <div className="container cap-section-inner cap-section-inner-rev">
          <div className="cap-section-right reveal">
            <div className="cap-detail-card">
              <h4>What We Deliver</h4>
              <ul className="cap-deep-list">
                <li>
                  <strong>GTM Strategy</strong>
                  <span>Designing efficient paths to market.</span>
                </li>
                <li>
                  <strong>Sales Strategy</strong>
                  <span>Building predictable revenue engines.</span>
                </li>
                <li>
                  <strong>Market Expansion</strong>
                  <span>Systematic scaling into new territories.</span>
                </li>
                <li>
                  <strong>Business Audits</strong>
                  <span>Comprehensive review of operations.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="cap-section-left reveal reveal-delay-2">
            <div className="cap-section-number">02</div>
            <div className="section-label">Business Strategy</div>
            <h2 className="section-headline">Design scalable growth.</h2>
            <p className="wwd-body">Building strong foundations and strategies that drive predictable, long-term revenue and market capture.</p>

            <Link to="/contact" className="btn btn-primary btn-sm">Get Business Help <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
        </div>
      </section>

      {/* ═══ 3. OPERATIONS & TECH ═══ */}
      <section className="cap-section page-section" id="operations-tech">
        <div className="container cap-section-inner">
          <div className="cap-section-left reveal">
            <div className="cap-section-number">03</div>
            <div className="section-label">Operations & Tech</div>
            <h2 className="section-headline">Build scalable systems.</h2>
            <p className="wwd-body">Optimizing your underlying processes and technology stack so growth doesn't break the business.</p>

            <Link to="/contact" className="btn btn-primary btn-sm">Build Your System <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
          <div className="cap-section-right reveal reveal-delay-2">
            <div className="cap-detail-card">
              <h4>What We Deliver</h4>
              <ul className="cap-deep-list">
                <li>
                  <strong>Process Mapping</strong>
                  <span>Visualizing and streamlining operations.</span>
                </li>
                <li>
                  <strong>SOPs</strong>
                  <span>Documenting the operating standard.</span>
                </li>
                <li>
                  <strong>CRM Systems</strong>
                  <span>Centralizing customer data logic.</span>
                </li>
                <li>
                  <strong>Dashboards</strong>
                  <span>Providing clear performance visibility.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ UNIFIED OUTCOME ═══ */}
      <section className="page-section" style={{ paddingTop: '0px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', opacity: 0.5 }}>
             <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
               <path d="M12 4v32m0 0l-8-8m8 8l8-8" stroke="#6C8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
          <div className="reveal" style={{ background: 'rgba(108, 140, 255, 0.05)', border: '1px solid rgba(108, 140, 255, 0.2)', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '2px', color: '#fff', margin: 0, textTransform: 'uppercase' }}>ONE SCALABLE BUSINESS OPERATING SYSTEM</h2>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container cta-inner">
          <div className="cta-eyebrow reveal">Next Step</div>
          <h2 className="cta-headline reveal reveal-delay-1">Begin with an<br />honest conversation.</h2>
          <p className="cta-sub reveal reveal-delay-2">Share your context. We will assess your constraints honestly.</p>
          <div className="cta-buttons reveal reveal-delay-3">
            <a href="https://cal.com/growwithalex/audit" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Book a free audit <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
