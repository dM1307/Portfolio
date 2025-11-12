import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Skills = () => {
  const [setSection, isVisible] = useScrollReveal(0.2);

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Go", "Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      category: "Frameworks",
      skills: ["Django", "Flask", "Spring Boot", "Express.js", "FastAPI"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "Elasticsearch"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS", "GCP", "Jenkins", "Terraform"],
    },
    {
      category: "Architecture",
      skills: [
        "Microservices",
        "Event-Driven",
        "CQRS",
        "DDD",
        "API Design",
        "System Design",
      ],
    },
    {
      category: "Tools",
      skills: ["Git", "Kafka", "RabbitMQ", "GraphQL", "gRPC", "REST"],
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect - Professional",
    "Google Cloud Professional Cloud Architect",
    "Certified Kubernetes Administrator (CKA)",
    "MongoDB Certified Developer Associate",
  ];

  return (
    <section
      ref={setSection}
      className={`skills-section ${isVisible ? "active" : ""}`}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "140px 0",
        background: "transparent", // 🔥 blend with global background
        color: "var(--text-primary)",
        backdropFilter: "brightness(1.05) blur(8px)", // soft depth layer
        transition: "all 1s ease",
      }}
    >
      {/* Subtle background glow */}
      <div
        className="skills-bg"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, rgba(120,160,130,0.15), transparent 70%)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
          transition: "all 1.2s ease-out",
          zIndex: 0,
        }}
      />

      {/* Main container */}
      <div className="container relative z-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Heading */}
          <div
            style={{
              position: "sticky",
              top: "120px",
              alignSelf: "start",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              filter: isVisible ? "blur(0px)" : "blur(8px)",
              transition: "all 0.9s ease",
            }}
          >
            <p
              style={{
                color: "var(--accent)",
                fontSize: "14px",
                letterSpacing: "2px",
                marginBottom: "12px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Technical Expertise
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                margin: 0,
                lineHeight: 1.1,
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills & Technologies
            </h2>
            <p
              style={{
                marginTop: "20px",
                color: "var(--text-secondary)",
                maxWidth: 420,
                fontSize: 17,
                lineHeight: 1.7,
              }}
            >
              A blend of languages, tools, and frameworks I use to design
              scalable, distributed systems that handle millions of requests
              daily.
            </p>
          </div>

          {/* RIGHT — Skills and Certifications */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Skill Categories */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 24,
              }}
            >
              {skillCategories.map((category, idx) => {
                const delay = `${idx * 0.08}s`;
                return (
                  <div
                    key={category.category}
                    className="card"
                    style={{
                      padding: 24,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(28px)",
                      filter: isVisible ? "blur(0px)" : "blur(6px)",
                      transition: `all 0.7s cubic-bezier(.2,.9,.2,1) ${delay}`,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      background: "rgba(255, 255, 255, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "16px",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "var(--accent)",
                        fontSize: 18,
                        fontWeight: 600,
                      }}
                    >
                      {category.category}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        marginTop: 8,
                      }}
                    >
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            padding: "8px 12px",
                            borderRadius: 999,
                            background: "rgba(255,255,255,0.3)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            fontSize: 14,
                            color: "var(--text-secondary)",
                            transition: "all 0.25s ease",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent)";
                            e.currentTarget.style.background =
                              "rgba(200,230,210,0.5)";
                            e.currentTarget.style.color = "var(--text-primary)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                              "rgba(255,255,255,0.3)";
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.3)";
                            e.currentTarget.style.color =
                              "var(--text-secondary)";
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Certifications Section */}
            <div>
              <h3
                style={{
                  color: "var(--accent)",
                  margin: "16px 0",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                Certifications
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 12,
                }}
              >
                {certifications.map((cert, idx) => {
                  const delay = `${idx * 0.06}s`;
                  return (
                    <div
                      key={cert}
                      className="card"
                      style={{
                        padding: 16,
                        textAlign: "center",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(28px)",
                        filter: isVisible ? "blur(0px)" : "blur(6px)",
                        transition: `all 0.7s cubic-bezier(.2,.9,.2,1) ${delay}`,
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "var(--text-secondary)",
                          fontSize: 15,
                        }}
                      >
                        {cert}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
