import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>


  {/* ═══ HERO ═══ */}
  <section className="contact-hero">
    <div className="interior-hero-glow"></div>
    <div className="container">
      <div className="breadcrumb reveal"><Link to="/">Home</Link> <span>/</span> Contact</div>
      <h1 className="interior-headline reveal reveal-delay-1">Let's Talk About<br/>What You're Building.</h1>
      <p className="interior-sub reveal reveal-delay-2">We work with a small number of businesses at any time. Tell us where you are  and where you're trying to get.</p>
    </div>
  </section>


  {/* ═══ MAIN CONTACT SECTION ═══ */}
  <section className="contact-main page-section">
    <div className="container contact-grid" id="diagnostic">
      
      {/* FORM SIDE */}
      <div className="contact-form-side reveal">
        <div className="form-header">
          <h2>Start the conversation</h2>
          <p>We review every submission personally and respond within 48 hours.</p>
        </div>

        <form className="contact-form" id="contact-form" novalidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">First Name <span className="required">*</span></label>
              <input type="text" id="contact-name" name="first_name" placeholder="First name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-lastname">Last Name <span className="required">*</span></label>
              <input type="text" id="contact-lastname" name="last_name" placeholder="Last name" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-company">Company <span className="required">*</span></label>
            <input type="text" id="contact-company" name="company" placeholder="Your company name" required />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Business Email <span className="required">*</span></label>
            <input type="email" id="contact-email" name="email" placeholder="name@company.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="contact-revenue">Annual Revenue <span className="required">*</span></label>
            <select id="contact-revenue" name="revenue" required>
              <option value="" disabled selected>Select revenue range</option>
              <option value="1-3m">$1M to $3M</option>
              <option value="3-6m">$3M to $6M</option>
              <option value="6-10m">$6M to $10M</option>
              <option value="10m+">$10M+</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-category">Primary Challenge <span className="required">*</span></label>
            <select id="contact-category" name="challenge" required>
              <option value="" disabled selected>Select your primary challenge</option>
              <option value="sales">Sales Infrastructure</option>
              <option value="ops">Operational Efficiency</option>
              <option value="org">Organisational Structure</option>
              <option value="growth">Growth &amp; Execution Systems</option>
              <option value="transformation">Business Transformation</option>
              <option value="gtm">Go-to-Market Strategy</option>
              <option value="unsure">Not Sure Yet</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-problem">Tell Us More <span className="form-optional">(optional)</span></label>
            <textarea id="contact-problem" name="problem" placeholder="Anything else you'd like us to know about your situation, goals, or timeline." rows="4"></textarea>
          </div>

          <div className="form-group form-group-checkbox">
            <label className="checkbox-label">
              <input type="checkbox" id="contact-consent" name="consent" required />
              <span className="checkbox-custom"></span>
              <span>I understand BuildWiser will review my submission and respond within 48 hours.</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-large form-submit" id="form-submit-btn">
            <span className="btn-text">Request a Conversation</span>
            <span className="btn-loading" style={{}}>Submitting...</span>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="btn-arrow"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <p className="form-note">30-min discovery call  no obligation.</p>
        </form>

        {/* Success State */}
        <div className="form-success" id="form-success" style={{}}>
          <div className="success-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#6C8CFF" strokeWidth="2"/><path d="M10 16L14.5 20.5L22 12" stroke="#6C8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3>We'll be in touch. Expect a reply within 48 hours.</h3>
          <p>We look forward to learning about your business and exploring how we can help.</p>
          <Link to="/insights" className="btn btn-ghost btn-sm" style={{}}>Read our insights while you wait →</Link>
        </div>
      </div>

      {/* INFO SIDE */}
      <div className="contact-info-side reveal reveal-delay-2">
        <div className="contact-info-card">
          <h3>What to expect</h3>
          <div className="expect-list">
            <div className="expect-item">
              <div className="expect-num">01</div>
              <div>
                <strong>30-minute discovery call</strong>
                <p>We use this time to understand your business, your numbers, and the core challenge you're trying to solve. No pitch. No obligation.</p>
              </div>
            </div>
            <div className="expect-item">
              <div className="expect-num">02</div>
              <div>
                <strong>Honest assessment</strong>
                <p>We tell you clearly whether we think we can help  and if not, we'll point you toward something more relevant.</p>
              </div>
            </div>
            <div className="expect-item">
              <div className="expect-num">03</div>
              <div>
                <strong>Proposed next step</strong>
                <p>If there's a fit, we outline what an engagement would look like  scope, phases, and expected outcomes. No surprises.</p>
              </div>
            </div>
            <div className="expect-item">
              <div className="expect-num">04</div>
              <div>
                <strong>You decide</strong>
                <p>There's no pressure. Every engagement starts with mutual agreement on the problem, the scope, and what success looks like.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-direct-card">
          <h3>Direct contact</h3>
          <div className="direct-contact-row">
            <div className="direct-contact-icon">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="#6C8CFF" strokeWidth="1.5"/><path d="M3 7l7 5 7-5" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="direct-label">Email</div>
              <a href="mailto:hello@buildwiser.in" className="direct-value">hello@buildwiser.in</a>
            </div>
          </div>
          <div className="direct-contact-row">
            <div className="direct-contact-icon">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="3" stroke="#6C8CFF" strokeWidth="1.5"/><path d="M7 10h6M7 7h3M7 13h4" stroke="#6C8CFF" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="direct-label">LinkedIn</div>
              <a href="#" className="direct-value">BuildWiser Consulting</a>
            </div>
          </div>
          <p className="contact-note">We respond to all direct emails within one business day. For time-sensitive matters, please indicate urgency in the subject line.</p>
        </div>

        <div className="contact-qualifier-card">
          <h3>Best for</h3>
          <p>We work best with businesses that have:</p>
          <ul>
            <li><span className="q-check">✓</span> Annual revenue between $1M and $10M</li>
            <li><span className="q-check">✓</span> A founder or CEO who is actively involved in the business</li>
            <li><span className="q-check">✓</span> A structural growth challenge  not a one-off tactical problem</li>
            <li><span className="q-check">✓</span> Openness to outside perspective and structured change</li>
          </ul>
          <p className="qualifier-note">If you're outside this range, we'll tell you honestly  and suggest a more relevant resource.</p>
        </div>
      </div>

    </div>
  </section>


  {/* ═══ BOTTOM TRUST ═══ */}
  <section className="page-section section-dark-alt contact-trust">
    <div className="container">
      <div className="trust-grid reveal">
        <div className="trust-item">
          <div className="trust-val">40+</div>
          <div className="trust-lbl">Consulting Engagements</div>
        </div>
        <div className="trust-item">
          <div className="trust-val">₹200Cr+</div>
          <div className="trust-lbl">Revenue Influenced</div>
        </div>
        <div className="trust-item">
          <div className="trust-val">5</div>
          <div className="trust-lbl">Practice Areas</div>
        </div>
        <div className="trust-item">
          <div className="trust-val">B2C · D2C · SME</div>
          <div className="trust-lbl">Sectors We Work In</div>
        </div>
      </div>
      <div className="motto-block reveal reveal-delay-2">
        <div className="motto-line"></div>
        <span className="motto-text">Precise. Assured. Substantive.</span>
        <div className="motto-line"></div>
      </div>
    </div>
  </section>


  
</>
  );
};

export default Contact;
