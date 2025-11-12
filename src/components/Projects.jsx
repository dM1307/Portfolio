import React from "react";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Projects = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.25);

  const projects = [
    {
      title: "Distributed Message Queue",
      category: "System Architecture",
      description:
        "Built a scalable message queue with partitioning, replication, and exactly-once delivery semantics. Handles 100K+ messages per second.",
      tech: ["Go", "Kafka", "Redis", "Docker"],
      impact: "100K msg/sec",
    },
    {
      title: "Real-time Analytics Pipeline",
      category: "Data Engineering",
      description:
        "Designed an ETL pipeline processing 10TB of data daily with sub-second query latency using distributed stream processing.",
      tech: ["Python", "Apache Spark", "PostgreSQL", "AWS"],
      impact: "10TB daily",
    },
    {
      title: "Microservices API Gateway",
      category: "Cloud Infrastructure",
      description:
        "Developed a high-performance API gateway with intelligent routing, rate limiting, and authentication for 50+ microservices.",
      tech: ["Node.js", "Express", "MongoDB", "Kubernetes"],
      impact: "5M requests/day",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`projects-section ${isVisible ? "active" : ""}`}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "140px 0",
        background: "transparent", // 🔥 blend with cinematic global background
        color: "var(--text-primary)",
        backdropFilter: "brightness(1.05) blur(8px)",
        transition: "all 1s ease",
      }}
    >
      {/* Subtle background glow */}
      <div
        className="projects-bg"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, rgba(150,180,160,0.15), transparent 70%)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
          transition: "all 1.2s ease-out",
          zIndex: 0,
        }}
      />

      {/* Container */}
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
              Featured Work
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
              Selected Projects
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
              A curated collection of backend systems, distributed pipelines, and
              microservices architectures engineered for reliability and scale.
            </p>
          </div>

          {/* RIGHT — Project Cards */}
          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : `translateY(${60 + index * 20}px)`,
                  filter: isVisible ? "blur(0)" : "blur(10px)",
                  transition: `all 0.8s ease ${index * 0.2}s`,
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
