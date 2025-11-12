import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const About = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.25);

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "25+" },
    { label: "Daily Requests", value: "5M+" },
    { label: "System Uptime", value: "99.99%" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`about-section ${isVisible ? "active" : ""}`}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 0",
        background: "transparent",
        transition: "all 1s ease",
      }}
    >
      {/* Subtle dynamic glow background */}
      <div
        className="about-bg"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 70% 30%, rgba(180,200,180,0.25), transparent 70%), radial-gradient(circle at 20% 80%, rgba(220,230,220,0.25), transparent 70%)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
          transition: "opacity 1.2s ease-out, transform 1.4s ease-out",
          zIndex: 0,
        }}
      />

      {/* Main Container */}
      <div className="container relative z-10">
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Heading Section */}
          <div
            className={`reveal ${isVisible ? "active" : ""}`}
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
                fontSize: "14px",
                letterSpacing: "2px",
                color: "var(--accent)",
                marginBottom: "16px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              About Me
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: "700",
                lineHeight: "1.1",
                marginBottom: "24px",
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Crafting the Invisible Infrastructure
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                marginTop: "12px",
                maxWidth: "400px",
                lineHeight: "1.8",
              }}
            >
              I’m a backend engineer passionate about designing scalable,
              fault-tolerant systems. With experience in distributed architecture
              and system optimization, I focus on building the invisible layer
              that makes everything else possible.
            </p>
          </div>

          {/* RIGHT — Stats Grid (2 per row, square cards) */}
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              justifyContent: "center",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card stat-card"
                style={{
                  aspectRatio: "1 / 1", // square shape
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "18px",
                  backdropFilter: "blur(20px)",
                  boxShadow:
                    "0 6px 20px rgba(0,0,0,0.08), inset 0 0 20px rgba(255,255,255,0.05)",
                  transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${
                    index * 0.1
                  }s`,
                  transform: isVisible
                    ? "translateY(0) scale(1)"
                    : `translateY(${40 + index * 10}px) scale(0.95)`,
                  opacity: isVisible ? 1 : 0,
                  filter: isVisible ? "blur(0px)" : "blur(10px)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0,0,0,0.15), 0 0 25px rgba(120,160,130,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.08), inset 0 0 20px rgba(255,255,255,0.05)";
                }}
              >
                <h3
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-light))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "10px",
                  }}
                >
                  {stat.value}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontWeight: "500",
                    maxWidth: "120px",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
