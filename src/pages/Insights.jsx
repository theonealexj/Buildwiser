import React from 'react';
import { Link } from 'react-router-dom';

const Insights = () => {
  return (
    <>


  {/* ═══ HERO ═══ */}
  <section className="interior-hero">
    <div className="interior-hero-glow"></div>
    <div className="container">
      <div className="breadcrumb reveal"><Link to="/">Home</Link> <span>/</span> Insights</div>
      <h1 className="interior-headline reveal reveal-delay-1">Selected engagements.</h1>
      <p className="interior-sub reveal reveal-delay-2">All client work is confidential. The following are illustrative examples of the problems we address and the approaches we take.</p>
    </div>
  </section>


  {/* ═══ CASE STUDIES ═══ */}
  <section className="page-section case-studies-section">
    <div className="container">
      <div className="section-label reveal">Representative Work</div>
      <h2 className="section-headline reveal reveal-delay-1">Illustrative engagements.</h2>
      <p className="section-sub reveal reveal-delay-2">All engagements are confidential. The following are representative of the type of work we undertake.</p>

      {/* CASE STUDY 1 */}
      <div className="cs-card reveal" id="cs-1">
        <div className="cs-card-header">
          <div className="cs-tag-group">
            <span className="cs-tag">Sales Infrastructure</span>
            <span className="cs-tag cs-tag-cat">B2B Services · $4M Revenue</span>
          </div>
          <div className="cs-duration">Timeline: 12 months</div>
        </div>
        <h3 className="cs-headline">Rebuilt sales infrastructure to break a 3-year revenue plateau, driving 40% growth in 12 months.</h3>
        <div className="cs-body-grid">
          <div className="cs-block">
            <div className="cs-block-label">The Problem</div>
            <p>Revenue was heavily founder-dependent. The "sales team" functioned as order-takers rather than pipeline builders. Growth had flatlined because the founder ran out of bandwidth to close deals personally.</p>
          </div>
          <div className="cs-block">
            <div className="cs-block-label">What We Did</div>
            <p>Extracted the founder’s sales methodology into a repeatable playbook. Re-segmented the target market into three distinct tiers. Built a structured CRM process with mandatory pipeline stages and redesigned the compensation model to reward outbound origination.</p>
          </div>
          <div className="cs-block">
            <div className="cs-block-label">The Result</div>
            <p>The firm broke its 3-year plateau. Founder involvement in sales dropped from 80% to 20%. The newly structured team drove a 40% increase in topline revenue within the first year of implementation.</p>
          </div>
        </div>
        <div className="cs-metrics-bar">
          <div className="cs-metric"><span className="cs-metric-val">+40%</span><span className="cs-metric-lbl">Revenue Growth</span></div>
          <div className="cs-metric"><span className="cs-metric-val">–75%</span><span className="cs-metric-lbl">Founder Sales Dependency</span></div>
          <div className="cs-metric"><span className="cs-metric-val">12 Mo</span><span className="cs-metric-lbl">To Target</span></div>
        </div>
      </div>

      {/* CASE STUDY 2 */}
      <div className="cs-card reveal reveal-delay-1" id="cs-2">
        <div className="cs-card-header">
          <div className="cs-tag-group">
            <span className="cs-tag">Business Structure</span>
            <span className="cs-tag cs-tag-cat">B2B SaaS · $8M ARR</span>
          </div>
        </div>
        <h3 className="cs-headline">Redesigned organizational structure and KPIs to align product development with enterprise sales.</h3>
        <div className="cs-body-grid">
          <div className="cs-block">
            <div className="cs-block-label">The Problem</div>
            <p>Engineering was building features that sales couldn't sell. Sales was promising functionality that engineering hadn't built. The disconnect led to missed enterprise deals and rising churn among mid-market clients.</p>
          </div>
          <div className="cs-block">
            <div className="cs-block-label">What We Did</div>
            <p>Rebuilt the product-marketing bridge. Implemented a strict 'commercial justification' framework for the product roadmap. Restructured the enterprise sales motion to sell structural value rather than feature lists.</p>
          </div>
          <div className="cs-block">
            <div className="cs-block-label">The Result</div>
            <p>Alignment restored. Enterprise win-rates doubled. Product velocity increased because engineering was no longer distracted by ad-hoc sales requests.</p>
          </div>
        </div>
        <div className="cs-metrics-bar">
          <div className="cs-metric"><span className="cs-metric-val">2x</span><span className="cs-metric-lbl">Enterprise Win Rate</span></div>
          <div className="cs-metric"><span className="cs-metric-val">–30%</span><span className="cs-metric-lbl">Reduction in Churn</span></div>
          <div className="cs-metric"><span className="cs-metric-val">1</span><span className="cs-metric-lbl">Integrated Workflow</span></div>
        </div>
      </div>

      {/* CASE STUDY 3 */}
      <div className="cs-card reveal reveal-delay-2" id="cs-3">
        <div className="cs-card-header">
          <div className="cs-tag-group">
            <span className="cs-tag">Operational Excellence</span>
            <span className="cs-tag cs-tag-cat">B2C E-Commerce · $6M Revenue</span>
          </div>
          <div className="cs-duration">Timeline: 2 Quarters</div>
        </div>
        <h3 className="cs-headline">Fixed broken unit economics and redesigned supply chain to restore profitability.</h3>
        <div className="cs-body-grid">
          <div className="cs-block">
            <div className="cs-block-label">The Problem</div>
            <p>Revenue was growing, but EBITDA was shrinking. The brand was aggressively discounting to maintain top-line growth, while logistics costs had crept up by 14% year-over-year.</p>
          </div>
          <div className="cs-block">
            <div className="cs-block-label">What We Did</div>
            <p>Mapped the entire P&L at the SKU level. Identified that 30% of products were unprofitable after shipping and marketing costs. Restructured the pricing model, renegotiated 3PL contracts, and implemented a strict margin-floor for promotional campaigns.</p>
          </div>
          <div className="cs-block">
            <div className="cs-block-label">The Result</div>
            <p>Gross margin improved by 12 points. The company stopped losing money on high-velocity items and returned to double-digit EBITDA profitability within two quarters.</p>
          </div>
        </div>
        <div className="cs-metrics-bar">
          <div className="cs-metric"><span className="cs-metric-val">+12%</span><span className="cs-metric-lbl">Gross Margin</span></div>
          <div className="cs-metric"><span className="cs-metric-val">2 Qtrs</span><span className="cs-metric-lbl">To Profitability</span></div>
          <div className="cs-metric"><span className="cs-metric-val">$1.2M</span><span className="cs-metric-lbl">Run-Rate Savings</span></div>
        </div>
      </div>

      {/* CASE STUDY 4 */}
      <div className="cs-card reveal reveal-delay-3" id="cs-4">
        <div className="cs-card-header">
          <div className="cs-tag-group">
            <span className="cs-tag">Growth Systems &amp; Execution</span>
            <span className="cs-tag cs-tag-cat">B2B Manufacturing · $10M Revenue</span>
          </div>
          <div className="cs-duration">Timeline: 6 Months</div>
        </div>
        <h3 className="cs-headline">Transitioned from an opportunistic sales model to a predictable revenue engine.</h3>
        <div className="cs-body-grid">
          <div className="cs-block">
            <div className="cs-block-label">The Problem</div>
            <p>Sales were unpredictable—huge months followed by dry spells. The business relied entirely on incoming RFPs and had zero outbound capability, making revenue forecasting impossible.</p>
          </div>
          <div className="cs-block">
            <div className="cs-block-label">What We Did</div>
            <p>Built an outbound sales motion from scratch. Defined the ideal customer profile (ICP) based on historical margin data. Implemented a 90-day rolling pipeline review and trained the commercial team on consultative selling.</p>
          </div>
          <div className="cs-block">
            <div className="cs-block-label">The Result</div>
            <p>Pipeline visibility increased from 3 weeks to 6 months. Revenue stabilized, allowing operations to plan capacity efficiently and reduce overtime labor costs.</p>
          </div>
        </div>
        <div className="cs-metrics-bar">
          <div className="cs-metric"><span className="cs-metric-val">6 Mo</span><span className="cs-metric-lbl">Pipeline Visibility</span></div>
          <div className="cs-metric"><span className="cs-metric-val">Stable</span><span className="cs-metric-lbl">Monthly Revenue</span></div>
          <div className="cs-metric"><span className="cs-metric-val">Zero</span><span className="cs-metric-lbl">Overtime Costs</span></div>
        </div>
      </div>

    </div>
  </section>


  {/* ═══ CTA ═══ */}
  <section className="cta-section">
    <div className="cta-glow"></div>
    <div className="container cta-inner">
      <div className="cta-eyebrow reveal">Next Step</div>
      <h2 className="cta-headline reveal reveal-delay-1">Every engagement begins<br/>with an honest conversation.</h2>
      <p className="cta-sub reveal reveal-delay-2">Share context on your situation. We will respond with an honest assessment of what we believe the primary constraint is, and whether we are the right firm to address it.</p>
      <div className="cta-buttons reveal reveal-delay-3">
        <a href="https://cal.com/growwithalex/audit" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Book a free audit <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
    </div>
  </section>

  
</>
  );
};

export default Insights;
