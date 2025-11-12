import React, { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.25);
  const canvasRef = useRef(null);

  // 🪄 Scroll to Projects
  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector(".projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 🎆 Floating particle lights (background energy)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 200, 150, ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(200,220,200,0.05)");
      gradient.addColorStop(1, "rgba(180,200,180,0.1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hero-section ${isVisible ? "active" : ""}`}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 0",
        color: "var(--text-primary)",
        textAlign: "center",
        transition: "all 1s ease",
        perspective: "1000px",
      }}
    >
      {/* 🎇 Animated Gradient Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(210,230,210,0.5) 0%, rgba(180,200,180,0.4) 40%, rgba(150,170,150,0.4) 100%)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 12s ease-in-out infinite alternate",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* 🌌 Canvas Particle Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ✨ Text Layer */}
      <div className="container relative z-10">
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            filter: isVisible ? "blur(0px)" : "blur(8px)",
            transition:
              "opacity 1s ease, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), filter 1s ease",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              letterSpacing: "2px",
              color: "var(--accent)",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            BACKEND ENGINEER
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: "800",
              marginBottom: "28px",
              lineHeight: 1.1,
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dinesh Maharana
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "var(--text-secondary)",
              lineHeight: "1.8",
              marginBottom: "56px",
              maxWidth: "700px",
              margin: "0 auto 56px",
            }}
          >
            I specialize in designing distributed systems, scalable APIs, and
            fault-tolerant architectures — powering millions of users with
            precision and reliability.
          </p>

          {/* Buttons and Links */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            <button
              className="btn-primary"
              onClick={handleScrollToProjects}
              style={{
                animation: isVisible ? "float 3s ease-in-out infinite" : "none",
              }}
            >
              View Projects <ArrowDown size={18} />
            </button>

            <div style={{ display: "flex", gap: "14px" }}>
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    border: "1px solid rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    color: "var(--accent)",
                    background: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.background =
                      "rgba(0,113,227,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(0,0,0,0.1)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <ArrowDown
              size={32}
              className="animate-bounce"
              style={{
                opacity: 0.6,
                color: "var(--accent)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ✨ Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
