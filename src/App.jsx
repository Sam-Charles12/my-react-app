import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-wrapper">
      <div className="site-inner" id="root">
        <Header />

        <main>
          <Hero />
          <section className="section-intro">
            <div className="intro-inner">
              <p className="kicker">Everything You Need</p>
              <h2>Powerful features to help you manage tickets efficiently</h2>
            </div>
          </section>

          <Features />

          <section className="why-choose">
            <div className="choose-inner">
              <div className="choose-left">
                <h3>
                  Why Teams Choose
                  <br />
                  TicketFlow
                </h3>
                <p className="muted">
                  Join thousands of teams who have transformed their support
                  workflow with our comprehensive ticket management solution.
                </p>
                <button className="btn-primary" style={{ marginTop: 12 }}>
                  Start Your Free Trial →
                </button>
              </div>

              <div className="choose-right">
                <ul className="check-list">
                  <li>Unlimited tickets and team members</li>
                  <li>Priority support and training</li>
                  <li>Advanced reporting and analytics</li>
                  <li>Custom workflows and automation</li>
                  <li>API access for integrations</li>
                </ul>
              </div>
            </div>
          </section>

          <CTASection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
