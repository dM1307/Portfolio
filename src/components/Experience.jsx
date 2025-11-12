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
        padding: "140px 0",
        background: "transparent", // keeps the cinematic background visible
        color: "var(--text-primary)",
        backdropFilter: "brightness(1.05) blur(6px)",
        transition: "all 1s ease",
      }}
    >
      {/* Subtle Cinematic Background Glow */}
      <div
        className="about-bg"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 60% 40%, rgba(163,177,138,0.15), transparent 70%), radial-gradient(circle at 20% 80%, rgba(170,120,255,0.1), transparent 70%)",
          opacity: isVisible ? 1 : 0.9,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
          transition: "all 1.2s ease-out",
          zIndex: 0,
        }}
      />

      {/* Main Content Container */}
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
          {/* LEFT — Heading */}
          <div
            className={`reveal ${isVisible ? "active" : ""}`}
            style={{
              position: "sticky",
              top: "120px",
              alignSelf: "start",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              filter: isVisible ? "blur(0px)" : "blur(10px)",
              transition: "all 1s ease-out",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "var(--accent)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Profile
            </p>

            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: "700",
                lineHeight: "1.1",
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "24px",
              }}
            >
              About Me
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                marginTop: "16px",
                maxWidth: "420px",
                lineHeight: "1.7",
              }}
            >
              I’m a backend engineer focused on crafting scalable, distributed systems 
              and infrastructure that quietly powers modern applications.  
              My passion lies in designing efficient architectures that scale 
              effortlessly and deliver reliability at massive scale.
            </p>
          </div>

          {/* RIGHT — Square Stat Tiles */}
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "28px",
              justifyContent: "center",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card stat-card"
                style={{
                  aspectRatio: "1 / 1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  backdropFilter: "blur(25px)",
                  WebkitBackdropFilter: "blur(25px)",
                  boxShadow:
                    "0 6px 20px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.05)",
                  transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${
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
                    "0 12px 32px rgba(0,0,0,0.25), 0 0 25px rgba(102,204,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.05)";
                }}
              >
                <h3
                  style={{
                    fontSize: "42px",
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
