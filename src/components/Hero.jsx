import React from "react";

function WaveSVG() {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="wave-svg"
    >
      <path
        d="M0,64 C160,160 320,0 480,80 C640,160 800,48 960,96 C1120,144 1280,32 1440,96 L1440 200 L0 200 Z"
        fill="#ffffff"
        opacity="1"
      ></path>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <div className="trust-pill">
            <i
              className="fa-solid fa-shield-check"
              style={{ marginRight: 8 }}
              aria-hidden
            ></i>
            Trusted by 10,000+ teams worldwide
          </div>
          <h1>
            The Modern Way to
            <br />
            Manage Support Tickets
          </h1>
          <p className="hero-sub">
            Streamline your support workflow, collaborate with your team, and
            deliver exceptional customer service with TicketFlow.
          </p>

          <div className="cta-row">
            <button className="btn-primary">
              Get Started Free{" "}
              <i
                className="fa-solid fa-arrow-right"
                style={{ marginLeft: 8 }}
                aria-hidden
              ></i>
            </button>
            <button className="btn-ghost">
              <i
                className="fa-regular fa-right-to-bracket"
                style={{ marginRight: 8 }}
                aria-hidden
              ></i>
              Login
            </button>
          </div>
          <div className="hero-note">
            No credit card required · Free 14-day trial
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <div className="visual-circle" />
        </div>
      </div>

      <div className="hero-wave">
        <WaveSVG />
      </div>
    </section>
  );
}
