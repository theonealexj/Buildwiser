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
          <h1 className="interior-headline reveal reveal-delay-1">Five practice areas.<br />One focus: growth.</h1>
          <p className="interior-sub reveal reveal-delay-2">We focus on core drivers. Each maps to specific constraints.</p>

          {/* Capability Nav */}

        </div>
      </section>


      {/* ═══ 1. GTM STRATEGY ═══ */}
      <section className="cap-section page-section" id="gtm">
        <div className="container cap-section-inner">
          <div className="cap-section-left reveal">
            <div className="cap-section-number">01</div>
            <div className="section-label">GTM Strategy</div>
            <h2 className="section-headline">Go-to-Market Strategy</h2>
            <p className="wwd-body">Defining how businesses enter and scale markets.</p>
            <p className="wwd-body">Unclear entry logic leads to inefficient spend. We identify the right channels and sustainable economics.</p>

            <div className="problem-solved-block">
              <div className="psb-label">Applies When</div>
              <p>Channel selection is unclear. Acquisition costs are rising rapidly. The business lacks a defined model.</p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-sm">Get GTM Help <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
          <div className="cap-section-right reveal reveal-delay-2">
            <div className="cap-detail-card">
              <h4>What We Deliver</h4>
              <ul className="cap-deep-list">
                <li>
                  <strong>Market entry design</strong>
                  <span>Identify segments, sequence, and offers based on economics.</span>
                </li>
                <li>
                  <strong>Channel architecture</strong>
                  <span>Identify and sequence channels based on CAC potential.</span>
                </li>
                <li>
                  <strong>Launch plan</strong>
                  <span>A plan covering channel activation and conversion infrastructure.</span>
                </li>
                <li>
                  <strong>Acquisition framework</strong>
                  <span>Define logic for acquiring customers and CAC targets.</span>
                </li>
              </ul>
              <div className="cap-outcome-strip">
                <div className="cap-outcome-item"><span className="co-val">Repeatable</span><span className="co-label">Acquisition</span></div>
                <div className="cap-outcome-item"><span className="co-val">Clear</span><span className="co-label">CAC Logic</span></div>
                <div className="cap-outcome-item"><span className="co-val">Structured</span><span className="co-label">Channel Mix</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ 2. POSITIONING ═══ */}
      <section className="cap-section page-section section-dark-alt" id="positioning">
        <div className="container cap-section-inner cap-section-inner-rev">
          <div className="cap-section-right reveal">
            <div className="cap-detail-card">
              <h4>What We Deliver</h4>
              <ul className="cap-deep-list">
                <li>
                  <strong>Competitive differentiation mapping</strong>
                  <span>Find clear positions based on customer decisions.</span>
                </li>
                <li>
                  <strong>Messaging architecture</strong>
                  <span>Build consistent messaging from core value propositions.</span>
                </li>
                <li>
                  <strong>Offer restructuring</strong>
                  <span>Redesign product tiers to improve transaction value.</span>
                </li>
                <li>
                  <strong>Price alignment</strong>
                  <span>Align price to perceived value through research.</span>
                </li>
              </ul>
              <div className="cap-outcome-strip">
                <div className="cap-outcome-item"><span className="co-val">Higher</span><span className="co-label">Perceived Value</span></div>
                <div className="cap-outcome-item"><span className="co-val">Sharper</span><span className="co-label">Differentiation</span></div>
                <div className="cap-outcome-item"><span className="co-val">Better</span><span className="co-label">Price Defence</span></div>
              </div>
            </div>
          </div>
          <div className="cap-section-left reveal reveal-delay-2">
            <div className="cap-section-number">02</div>
            <div className="section-label">Product & Positioning</div>
            <h2 className="section-headline">How you're positioned<br />determines what you can charge.</h2>
            <p className="wwd-body">Positioning is not just branding. It answers why customers choose your product over alternatives.</p>
            <p className="wwd-body">We rebuild positioning based on competitive context. This ensures you compete on pure value.</p>
            <div className="problem-solved-block">
              <div className="psb-label">Problem This Solves</div>
              <p>Products competing on price. High-quality offerings lacking premium pricing. Generic messaging across the category.</p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-sm">Get Positioning Help <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
        </div>
      </section>


      {/* ═══ 3. SUPPLY CHAIN ═══ */}
      <section className="cap-section page-section" id="supplychain">
        <div className="container cap-section-inner">
          <div className="cap-section-left reveal">
            <div className="cap-section-number">03</div>
            <div className="section-label">Supply Chain & Operations</div>
            <h2 className="section-headline">Margin leaks quietly<br />from operational disorder.</h2>
            <p className="wwd-body">Supply chain is often your largest cost structure. Inefficiencies here lead to real EBITDA compression.</p>
            <p className="wwd-body">We audit operations to identify margin loss. Then we redesign your core cost systems.</p>
            <div className="problem-solved-block">
              <div className="psb-label">Problem This Solves</div>
              <p>Margin erosion despite strong revenue. Unpredictable fulfilment damages experience. Vendor relationships lack real leverage.</p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-sm">Get Supply Chain Help <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
          <div className="cap-section-right reveal reveal-delay-2">
            <div className="cap-detail-card">
              <h4>What We Deliver</h4>
              <ul className="cap-deep-list">
                <li>
                  <strong>Supply chain audit</strong>
                  <span>Review vendors, inventory, and fulfillment for risks.</span>
                </li>
                <li>
                  <strong>Vendor structure redesign</strong>
                  <span>Rationalise vendors and renegotiate better pricing structures.</span>
                </li>
                <li>
                  <strong>Inventory optimisation</strong>
                  <span>Build reorder logic to reduce working capital.</span>
                </li>
                <li>
                  <strong>Fulfilment design</strong>
                  <span>Redesign fulfillment flows to reduce order costs.</span>
                </li>
              </ul>
              <div className="cap-outcome-strip">
                <div className="cap-outcome-item"><span className="co-val">Better</span><span className="co-label">EBITDA</span></div>
                <div className="cap-outcome-item"><span className="co-val">Lower</span><span className="co-label">Cost Per Order</span></div>
                <div className="cap-outcome-item"><span className="co-val">Resilient</span><span className="co-label">Operations</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ 4. PRICING ═══ */}
      <section className="cap-section page-section section-dark-alt" id="pricing">
        <div className="container cap-section-inner cap-section-inner-rev">
          <div className="cap-section-right reveal">
            <div className="cap-detail-card">
              <h4>What We Deliver</h4>
              <ul className="cap-deep-list">
                <li>
                  <strong>Price sensitivity analysis</strong>
                  <span>Identify elastic demand to unlock new segments.</span>
                </li>
                <li>
                  <strong>Margin architecture</strong>
                  <span>Build cost models to improve contribution margins.</span>
                </li>
                <li>
                  <strong>LTV / CAC modelling</strong>
                  <span>Model cohorts to maximize customer lifetime value.</span>
                </li>
                <li>
                  <strong>Bundle and tier design</strong>
                  <span>Design bundles to increase average order value.</span>
                </li>
              </ul>
              <div className="cap-outcome-strip">
                <div className="cap-outcome-item"><span className="co-val">Higher</span><span className="co-label">LTV</span></div>
                <div className="cap-outcome-item"><span className="co-val">Improved</span><span className="co-label">Margins</span></div>
                <div className="cap-outcome-item"><span className="co-val">Clear</span><span className="co-label">Unit Economics</span></div>
              </div>
            </div>
          </div>
          <div className="cap-section-left reveal reveal-delay-2">
            <div className="cap-section-number">04</div>
            <div className="section-label">Pricing & Unit Economics</div>
            <h2 className="section-headline">Fix the economics<br />before you scale the spend.</h2>
            <p className="wwd-body">Scaling with broken unit economics amplifies problems. Wrong pricing structures accelerate loss, not growth.</p>
            <p className="wwd-body">We fix numbers before channels. We model LTV and margins to compound real value.</p>
            <div className="problem-solved-block">
              <div className="psb-label">Problem This Solves</div>
              <p>Poor LTV:CAC ratios at scale. Pricing based on intuition. High revenue with thin margins.</p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-sm">Get Pricing Help <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
        </div>
      </section>


      {/* ═══ 5. EXECUTION SYSTEMS ═══ */}
      <section className="cap-section page-section" id="execution">
        <div className="container cap-section-inner">
          <div className="cap-section-left reveal">
            <div className="cap-section-number">05</div>
            <div className="section-label">Execution Systems</div>
            <h2 className="section-headline">Strategy without infrastructure<br />is theater.</h2>
            <p className="wwd-body">Great strategies fail without proper decision frameworks. This is a systems problem, not people.</p>
            <p className="wwd-body">We build the core execution layer. This turns strategic intent into operational reality.</p>
            <div className="problem-solved-block">
              <div className="psb-label">Problem This Solves</div>
              <p>Strategy trapped in decks. Teams lack clear goals. Management lacks reliable performance visibility.</p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-sm">Build Your System <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
          <div className="cap-section-right reveal reveal-delay-2">
            <div className="cap-detail-card">
              <h4>What We Deliver</h4>
              <ul className="cap-deep-list">
                <li>
                  <strong>KPI framework design</strong>
                  <span>Define metrics governing performance by core functions.</span>
                </li>
                <li>
                  <strong>OKR structure</strong>
                  <span>Build quarterly goals connecting strategy to execution.</span>
                </li>
                <li>
                  <strong>SOPs and decision frameworks</strong>
                  <span>Document operating logic for consistent team actions.</span>
                </li>
                <li>
                  <strong>Execution roadmap</strong>
                  <span>Translate strategy into sequenced, measurable action plans.</span>
                </li>
              </ul>
              <div className="cap-outcome-strip">
                <div className="cap-outcome-item"><span className="co-val">Aligned</span><span className="co-label">Teams</span></div>
                <div className="cap-outcome-item"><span className="co-val">Clear</span><span className="co-label">Accountability</span></div>
                <div className="cap-outcome-item"><span className="co-val">Visible</span><span className="co-label">Performance</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container cta-inner">
          <div className="cta-eyebrow reveal">Next Step</div>
          <h2 className="cta-headline reveal reveal-delay-1">Every engagement begins<br />with an honest conversation.</h2>
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
