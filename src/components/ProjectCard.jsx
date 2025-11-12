import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="card backdrop-blur-sm"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
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
      <p
        style={{
          fontSize: "14px",
          color: "var(--accent)",
          letterSpacing: "1px",
          marginBottom: "8px",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {project.category}
      </p>

      <h3
        style={{
          fontSize: "28px",
          marginBottom: "12px",
          background:
            "linear-gradient(135deg, var(--accent), var(--accent-light))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: "var(--text-secondary)",
          marginBottom: "16px",
          lineHeight: "1.6",
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {project.tech.map((tech, i) => (
          <span
            key={i}
            style={{
              padding: "6px 12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              fontSize: "14px",
              color: "var(--text-secondary)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        style={{
          marginTop: "24px",
          display: "inline-block",
          padding: "8px 16px",
          borderRadius: "20px",
          border: "1px solid var(--accent)",
          background: "rgba(0,113,227,0.1)",
          color: "var(--accent)",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        {project.impact}
      </div>
    </div>
  );
};

export default ProjectCard;
