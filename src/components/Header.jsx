import React from "react";

export default function Header() {
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
    </header>
  );
}
