import React from 'react';
import './FeaturedPlans.css'; // Import the CSS file

const FeaturedPlans = () => (
  <div className="featured-plans">
    <div className="header">
      <h2>Featured Plans</h2>
      <h3 className="explore-all">Explore All</h3>
    </div>
    <div className="plans">
      <div className="plan-card1">
        <h6 className="strategy-plans">STRATEGY</h6>
        <h2>Money Momentum</h2>
        <p>
          Tract Premium helps you start saver investment insights covering.
        </p>
        <hr />
        <h6 className="strategy-plans">3yrs CAGR</h6>
        <div className="percentage-container">
          <h2 className="percentage-number">7.20%</h2>
          <i className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M7.25 12a.75.75 0 0 1 .75-.75h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1-.75-.75"/>
            </svg>
          </i>
        </div>
      </div>

      <div className="plan-card2">
        <h6 className="strategy-plans">PLANS</h6>
        <h2>Long-Term</h2>
        <p>
          Create a vision. To get started, imagine your dream life
        </p>
        <hr />
        <h6 className="strategy-plans">25yrs CAGR</h6>
        <div className="percentage-container">
          <h2 className="percentage-number">14.20%</h2>
          <i className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M7.25 12a.75.75 0 0 1 .75-.75h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1-.75-.75"/>
            </svg>
          </i>
        </div>
      </div>

      <div className="plan-card3">
        <h6 className="strategy-plans">STRATEGY</h6>
        <h2>Focussed</h2>
        <p>
          Be focussed Life planning, however, can, serve as a roadmap or guide.
        </p>
        <hr />
        <h6 className="strategy-plans">1yr returns</h6>
        <div className="percentage-container">
          <h2 className="percentage-number">11.20%</h2>
          <i className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M7.25 12a.75.75 0 0 1 .75-.75h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1-.75-.75"/>
            </svg>
          </i>
        </div>
      </div>

      <div className="plan-card4">
        <h6 className="strategy-plans">PLANS</h6>
        <h2>Fixed Income</h2>
        <p>
          Get multiple benefits, and lumpsum option & Guaranteed Returns
        </p>
        <hr />
        <h6 className="strategy-plans">5yrs CAGR</h6>
        <div className="percentage-container">
          <h2>8.20%</h2>
          <i className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M7.25 12a.75.75 0 0 1 .75-.75h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1-.75-.75"/>
            </svg>
          </i>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedPlans;