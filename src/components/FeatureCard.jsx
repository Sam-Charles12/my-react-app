import React from "react";

export default function FeatureCard({ icon, title, children }) {
  return (
    <article className="feature-box">
      <div className="feature-icon" aria-hidden>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
