import React from "react";

export default function CTASection() {
  return (
    <section className="cta-hero" aria-labelledby="cta-heading">
      <div className="cta-inner">
        <div className="cta-small">Ready to Get Started?</div>
        <h2 id="cta-heading">
          Join thousands of teams managing their tickets with TicketFlow
        </h2>
        <div style={{ marginTop: 18 }}>
          <button className="btn-ghost" style={{ marginRight: 12 }}>
            <i
              className="fa-solid fa-user-plus"
              style={{ marginRight: 8 }}
              aria-hidden
            ></i>
            Create Free Account
          </button>
          <button className="btn-primary">
            Sign In{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ marginLeft: 8 }}
              aria-hidden
            ></i>
          </button>
        </div>
      </div>
    </section>
  );
}
