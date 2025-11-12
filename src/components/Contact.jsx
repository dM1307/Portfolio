import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.25);

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${isVisible ? "active" : ""}`}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "140px 0",
        background: "transparent", // ✅ Matches cinematic background
        color: "var(--text-primary)",
        backdropFilter: "brightness(1.05) blur(8px)",
        transition: "all 1s ease",
      }}
    >
      {/* Subtle background light */}
      <div
        className="contact-bg"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(170,200,180,0.2), transparent 70%)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
          transition: "all 1.2s ease-out",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 80px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            filter: isVisible ? "blur(0)" : "blur(10px)",
            transition: "all 1s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "var(--accent)",
              marginBottom: "16px",
              letterSpacing: "1px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </p>

          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              marginBottom: "24px",
              fontWeight: "700",
              lineHeight: "1.1",
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Build Something Amazing Together
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              lineHeight: "1.7",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Whether you have a project, an idea, or just want to say hello — I'm
            always open to connecting and collaborating on meaningful work.
          </p>
        </div>

        {/* Contact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {[
            {
              icon: <Mail size={28} color="var(--accent)" />,
              title: "Email",
              subtitle: "your.email@example.com",
              link: "mailto:your.email@example.com",
            },
            {
              icon: <Linkedin size={28} color="var(--accent)" />,
              title: "LinkedIn",
              subtitle: "Connect with me",
              link: "https://linkedin.com/in/yourprofile",
            },
          ].map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                padding: "32px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                transform: isVisible
                  ? "translateY(0)"
                  : `translateY(${40 + index * 10}px)`,
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? "blur(0)" : "blur(8px)",
                transition: `all 1s ease ${index * 0.2}s`,
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(180,200,180,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "4px",
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  {card.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div
          className="card"
          style={{
            textAlign: "left",
            background: "rgba(255,255,255,0.4)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "20px",
            padding: "40px",
            backdropFilter: "blur(10px)",
            transform: isVisible ? "translateY(0)" : "translateY(80px)",
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? "blur(0)" : "blur(10px)",
            transition: "all 1.2s ease-out 0.4s",
          }}
        >
          <h3
            style={{
              marginBottom: "24px",
              fontSize: "24px",
              color: "var(--accent)",
              fontWeight: "600",
            }}
          >
            Send a Message
          </h3>
          <form onSubmit={(e) => e.preventDefault()}>
            {["Your Name", "Your Email"].map((placeholder, i) => (
              <div key={i} style={{ marginBottom: "16px" }}>
                <input
                  type={placeholder.includes("Email") ? "email" : "text"}
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "rgba(255,255,255,0.3)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "12px",
                    color: "var(--text-primary)",
                    fontSize: "17px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.3)")
                  }
                />
              </div>
            ))}

            <div style={{ marginBottom: "24px" }}>
              <textarea
                placeholder="Your Message"
                rows="5"
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "rgba(255,255,255,0.3)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "12px",
                  color: "var(--text-primary)",
                  fontSize: "17px",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.3s ease",
                  fontFamily: "inherit",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--accent)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.3)")
                }
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                fontSize: "17px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-light))",
              }}
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "80px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.3)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(60px)",
            filter: isVisible ? "blur(0px)" : "blur(8px)",
            transition: "all 1s ease-out 0.6s",
          }}
        >
          <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
            © 2025 Backend Engineer. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
