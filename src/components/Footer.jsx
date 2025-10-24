import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="logo-mark small" aria-hidden />
          <p className="muted">
            The modern way to manage support tickets and deliver exceptional
            customer service.
          </p>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Documentation</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <div className="footer-icon" style={{ display: "flex", gap: 12 }}>
            <a href="#" aria-label="email">
              <i className="fa-regular fa-envelope fa-lg"></i>
            </a>
            <a href="#" aria-label="github">
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
            <a href="#" aria-label="linkedin">
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TicketFlow. All rights reserved.
      </div>
    </footer>
  );
}
