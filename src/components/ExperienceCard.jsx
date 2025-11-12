import React from "react";

const ExperienceCard = ({ exp }) => {
  return (
    <div
      className="card backdrop-blur-sm"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "32px",
        transition: "transform 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "8px",
          color: "var(--accent)",
        }}
      >
        {exp.role}
      </h3>
      <p
        style={{
          fontSize: "18px",
          marginBottom: "8px",
          color: "var(--text-secondary)",
        }}
      >
        {exp.company}
      </p>
      <p
        style={{
          fontSize: "14px",
          color: "var(--text-secondary)",
          marginBottom: "16px",
        }}
      >
        {exp.period}
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          color: "var(--text-secondary)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {exp.points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
