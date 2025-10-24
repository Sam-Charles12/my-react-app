import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-logo">
        <div className="logo-mark" aria-hidden>
          <i
            className="fa-solid fa-ticket"
            style={{ color: "white" }}
            aria-hidden
          ></i>
        </div>
        <span className="logo-text">TicketFlow</span>
      </div>

      <nav className="site-nav">
        <button className="nav-link">
          <i className="fa-regular fa-user" style={{ marginRight: 8 }}></i>Log
          in
        </button>
        <button className="btn-primary signup">
          <i className="fa-solid fa-user-plus" style={{ marginRight: 8 }}></i>
          Sign up
        </button>
      </nav>

      {/* hamburger for small screens */}
      <button
        className={`hamburger ${open ? "is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      {/* mobile nav panel */}
      <div id="mobile-nav" className={`mobile-nav ${open ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          <button
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="mobile-links">
            <button
              className="nav-link mobile-link"
              onClick={() => setOpen(false)}
            >
              <i className="fa-regular fa-user" style={{ marginRight: 8 }}></i>
              Log in
            </button>
            <button
              className="btn-primary signup mobile-link"
              onClick={() => setOpen(false)}
            >
              <i
                className="fa-solid fa-user-plus"
                style={{ marginRight: 8 }}
              ></i>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
