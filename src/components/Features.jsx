import React from "react";
import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    title: "Lightning Fast",
    body: "Create and manage tickets in seconds with our intuitive interface.",
  },
  {
    title: "Team Collaboration",
    body: "Assign tickets to team members and track progress together.",
  },
  {
    title: "Powerful Analytics",
    body: "Get insights into ticket trends and team performance.",
  },
  {
    title: "Secure & Reliable",
    body: "Your data is protected with enterprise-grade security.",
  },
  {
    title: "Real-time Updates",
    body: "Stay informed with instant notifications and updates.",
  },
  {
    title: "Smart Automation",
    body: "Automate repetitive tasks and focus on what matters.",
  },
];

export default function Features() {
  return (
    <section className="features" aria-label="features">
      {FEATURES.map((f, i) => (
        <FeatureCard
          key={i}
          title={f.title}
          icon={
            i === 0 ? (
              <i className="fa-solid fa-bolt"></i>
            ) : i === 1 ? (
              <i className="fa-solid fa-users"></i>
            ) : i === 2 ? (
              <i className="fa-solid fa-chart-line"></i>
            ) : i === 3 ? (
              <i className="fa-solid fa-shield"></i>
            ) : i === 4 ? (
              <i className="fa-regular fa-clock"></i>
            ) : (
              <i className="fa-solid fa-gear"></i>
            )
          }
        >
          {f.body}
        </FeatureCard>
      ))}
    </section>
  );
}
