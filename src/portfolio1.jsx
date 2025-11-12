import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, ChevronDown } from "lucide-react";
import * as THREE from "three";

const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / height);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking (parallax)
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // THREE.js background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    camera.position.z = 30;

    const geometry = new THREE.PlaneGeometry(80, 80, 128, 128);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: { time: { value: 0 } },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vElevation;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float elevation = sin(pos.x * 0.3 + time) * 2.0;
          elevation += sin(pos.y * 0.2 + time * 0.5) * 2.0;
          elevation += sin(pos.x * 0.15 + pos.y * 0.1 + time * 0.7) * 3.0;
          pos.z = elevation;
          vElevation = elevation;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform float time;
        void main() {
          vec3 color1 = vec3(0.36, 0.0, 0.78);
          vec3 color2 = vec3(0.0, 0.65, 1.0);
          vec3 color3 = vec3(0.85, 0.0, 0.65);
          float mixValue = (vElevation + 5.0) / 10.0;
          vec3 finalColor = mix(color1, color2, mixValue);
          finalColor = mix(finalColor, color3, sin(time + vUv.x * 3.14) * 0.5 + 0.5);
          gl_FragColor = vec4(finalColor, 0.25); // softer waves
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 3;
    scene.add(mesh);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;
      material.uniforms.time.value = time;
      camera.position.x = mousePos.current.x * 2;
      camera.position.y = -mousePos.current.y * 2;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Three.js background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-[0] pointer-events-none"
      />

      {/* Gradient overlay to match reference */}
      <div className="fixed top-0 left-0 w-full h-full z-[5]
                      bg-gradient-to-b from-black/90 via-black/70 to-[#0b0018]/90
                      backdrop-blur-[1px]" />

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-[80]">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-[90] px-6 md:px-12 py-8 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/10">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Backend Engineer
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition">
              Work
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition">
              About
            </a>
            <button className="px-6 py-2 border border-white/20 rounded-full hover:border-purple-400 hover:bg-purple-400/10 transition">
              Contact
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6
                            bg-gradient-to-b from-transparent via-black/20 to-black/40">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 border border-white/20 rounded-full text-sm backdrop-blur-sm">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block">CRAFTING</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              SCALABLE
            </span>
            <span className="block">SYSTEMS</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Backend engineer specializing in distributed systems, microservices architecture, and high-performance solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-400 hover:bg-purple-400/10"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-400 hover:bg-purple-400/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-400 hover:bg-purple-400/10"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-gray-500" />
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-[90] border-t border-white/10 px-6 py-12 text-center text-gray-500 bg-black/80">
          © 2025 All rights reserved
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
