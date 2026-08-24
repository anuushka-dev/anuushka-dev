import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  Hand,
  Route,
  Mail,
  Github,
  Linkedin,
  FileText,
  Shield,
  Network,
  Brain,
  Server,
  Database,
  Activity,
  Workflow,
  BarChart3,
  Code2,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";
import "./fade.css";

export default function Home() {
  const [fade, setFade] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );

      const fadeValue = Math.min(window.scrollY / maxScroll, 1);
      setFade(fadeValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "CityRoute",
      subtitle: "Route Optimization & Dispatch Platform",
      description:
        "Production-oriented routing and dispatch platform combining A*, Bidirectional A*, Source-Dijkstra, VRP optimization, 2-Opt, LNS, Hungarian assignment, Redis caching, resilience, observability, and a React engineering console.",
      route: "/route-optimizer",
      icon: <Route className="w-12 h-12 mb-5" />,
      accent: "bg-blue-500/10",
      tags: ["A*", "VRP", "2-Opt", "LNS", "FastAPI", "Redis"],
    },
    {
      title: "Network Intrusion Detection System",
      subtitle: "With Physical Context Awareness",
      description:
        "End-to-end security monitoring pipeline using Scapy, CICIDS2017, a canonical 45-feature schema, XGBoost inference, physical-context fusion, persistent alert handling, and FastAPI.",
      route: "/network-intrusion-detection",
      icon: <Shield className="w-12 h-12 mb-5" />,
      accent: "bg-red-500/10",
      tags: ["XGBoost", "Scapy", "45 Features", "OpenCV", "FastAPI"],
    },
    {
      title: "Multimodal Sign Language Translator",
      subtitle: "Real-Time Computer Vision & Deep Learning",
      description:
        "Multimodal sign recognition combining EfficientNet-B0 RGB features with a dedicated skeleton CNN, followed by feature fusion, temporal stabilization, prediction locking, sentence construction, and text-to-speech.",
      route: "/sign-language",
      icon: <Hand className="w-12 h-12 mb-5" />,
      accent: "bg-purple-500/10",
      tags: [
        "PyTorch",
        "EfficientNet-B0",
        "MediaPipe",
        "WebSockets",
        "TTS",
      ],
    },
    {
      title: "Deepfake Image Detection",
      subtitle: "ResNet50-Based Image Classification",
      description:
        "Computer-vision pipeline covering dataset cleaning, augmentation, stratified splitting, ResNet50 transfer learning, and structured classification evaluation.",
      route: "/deepfake",
      icon: <Cpu className="w-12 h-12 mb-5" />,
      accent: "bg-fuchsia-500/10",
      tags: ["ResNet50", "TensorFlow", "Computer Vision", "ROC / PR"],
    },
  ];

  const skills = [
    {
      icon: <Code2 />,
      title: "Python Backend",
      description: "FastAPI · APIs · Pydantic · WebSockets · Services",
    },
    {
      icon: <Brain />,
      title: "Machine Learning",
      description: "PyTorch · XGBoost · TensorFlow · scikit-learn",
    },
    {
      icon: <Route />,
      title: "Algorithms & Optimization",
      description: "A* · Dijkstra · VRP · 2-Opt · LNS · Hungarian",
    },
    {
      icon: <Activity />,
      title: "Computer Vision",
      description: "OpenCV · MediaPipe · CNNs · Image Processing",
    },
    {
      icon: <Server />,
      title: "Systems Engineering",
      description: "Redis · Docker · Concurrency · Resilience · Observability",
    },
    {
      icon: <BarChart3 />,
      title: "Model Evaluation",
      description: "Confusion Matrices · Classification Reports · Benchmarking",
    },
  ];

  const techStack = [
    "Python",
    "TypeScript",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "XGBoost",
    "scikit-learn",
    "OpenCV",
    "MediaPipe",
    "NetworkX",
    "OSMnx",
    "Redis",
    "Docker",
    "Prometheus",
    "React",
    "Vite",
    "Tailwind CSS",
    "WebSockets",
    "Git",
    "Linux",
  ];

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden scroll-smooth"
      style={{
        backgroundColor: `rgba(3, 6, 55, ${fade * 0.75})`,
      }}
    >
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0C1A2B]/75 border-b border-white/10 py-4 px-6 md:px-8 flex justify-between items-center text-[#98A1BC]">
        <h1 className="text-2xl font-bold tracking-wide">Anushka</h1>

        <div className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-lg">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#featured" className="hover:text-white transition">
            Featured
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <a
          href="/public/Anushka_CV.pdf"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B728E] text-[#0C1A2B] font-semibold hover:bg-[#7b819a] transition"
        >
          <FileText size={17} />
          Resume
        </a>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0C1A2B] text-[#98A1BC] pt-24 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="flex justify-center mb-7">
            <div className="p-5 rounded-3xl bg-[#6B728E]/10 border border-white/10">
              <Brain className="w-20 h-20 md:w-24 md:h-24" />
            </div>
          </div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#6B728E] mb-5">
            Computer Science · AI/ML · Systems Engineering
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            AI/ML & Software Engineer
          </h1>

          <p className="text-xl md:text-3xl max-w-4xl opacity-100 mt-10 mx-auto leading-relaxed">
            I build, I experiment, I learn.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#6B728E] text-[#0C1A2B] rounded-2xl text-lg font-semibold hover:bg-[#7d849c] transition shadow-xl"
            >
              <Workflow size={20} />
              Explore Projects
            </a>

            <a
              href="/public/Anushka_CV.pdf"
              className="inline-flex items-center gap-3 px-7 py-4 border border-white/15 bg-white/[0.04] text-[#98A1BC] rounded-2xl text-lg font-semibold hover:bg-white/[0.08] transition"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="fade-bottom"></div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen py-28 px-6 md:px-20 text-center bg-[#7B8794] text-[#0C1A2B]"
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-sm font-semibold opacity-70 mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            Building systems, not just models.
          </h2>

          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-3xl leading-relaxed">
              Hi, I’m Anushka — a CSE (AI/ML) student who enjoys building
              systems that actually work. I work across the full ML pipeline:
              data preparation, model development, evaluation, backend
              integration, optimization, and interactive applications.
            </p>

            <p className="text-lg md:text-2xl leading-relaxed mt-9 opacity-85">
              My projects span graph routing and dispatch, network intrusion
              detection, multimodal computer vision, and deepfake detection.
              Each project is an opportunity to learn how algorithms behave
              under real engineering constraints.
            </p>

            <p className="text-lg md:text-2xl leading-relaxed mt-9 opacity-85">
              I’m particularly interested in reliable AI systems where
              algorithmic correctness, performance, observability, and
              practical deployment matter just as much as the model itself.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="min-h-screen py-28 px-6 md:px-10 text-center bg-[#0C1A2B] text-[#98A1BC]">
        <p className="uppercase tracking-[0.25em] text-sm text-[#6B728E] mb-4">
          Engineering Focus
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-20">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ y: -8 }}
            className="p-10 md:p-12 bg-[#6B728E] rounded-3xl shadow-xl text-[#0C1A2B]"
          >
            <Server className="w-12 h-12 mx-auto mb-6" />

            <h3 className="text-3xl font-semibold mb-4">
              Backend & Systems
            </h3>

            <p className="text-lg opacity-90 leading-7">
              FastAPI · APIs · WebSockets · Redis · Docker · reliability ·
              concurrency
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="p-10 md:p-12 bg-[#6B728E] rounded-3xl shadow-xl text-[#0C1A2B]"
          >
            <Brain className="w-12 h-12 mx-auto mb-6" />

            <h3 className="text-3xl font-semibold mb-4">
              Machine Learning
            </h3>

            <p className="text-lg opacity-90 leading-7">
              Deep learning · Computer vision · XGBoost · evaluation ·
              inference
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="p-10 md:p-12 bg-[#6B728E] rounded-3xl shadow-xl text-[#0C1A2B]"
          >
            <Route className="w-12 h-12 mx-auto mb-6" />

            <h3 className="text-3xl font-semibold mb-4">
              Algorithms & Optimization
            </h3>

            <p className="text-lg opacity-90 leading-7">
              Graph algorithms · VRP · 2-Opt · LNS · Hungarian assignment ·
              benchmarking
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECT - CITYROUTE */}
      <section
        id="featured"
        className="min-h-screen py-28 px-6 md:px-10 bg-[#7B8794] text-[#0C1A2B]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm font-semibold opacity-70 mb-4">
              Featured Project
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              CityRoute
            </h2>

            <p className="text-xl md:text-2xl mt-4 opacity-80">
              Route Optimization & Dispatch Platform
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-12 bg-[#6B728E] rounded-3xl shadow-2xl"
          >
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-center">
              <div>
                <div className="flex items-center gap-4 mb-7">
                  <div className="p-4 rounded-2xl bg-[#0C1A2B] text-[#98A1BC]">
                    <Route size={34} />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] opacity-60">
                      Production-Oriented Engineering Project
                    </p>

                    <h3 className="text-3xl md:text-4xl font-bold mt-1">
                      CityRoute
                    </h3>
                  </div>
                </div>

                <p className="text-lg md:text-xl leading-8 opacity-90">
                  A route optimization and dispatch platform built over real
                  OpenStreetMap road data. The system combines shortest-path
                  algorithms, graph snapping, distance matrices, vehicle
                  routing optimization, driver assignment, caching,
                  concurrency controls, resilience mechanisms, observability,
                  and a React engineering console.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "A*",
                    "Bidirectional A*",
                    "Source-Dijkstra",
                    "VRP",
                    "2-Opt",
                    "LNS",
                    "Hungarian",
                    "Redis",
                    "FastAPI",
                    "React",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2 rounded-lg bg-[#0C1A2B]/10 border border-[#0C1A2B]/10 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-9">
                  <Link
                    to="/route-optimizer"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-[#0C1A2B] text-[#98A1BC] rounded-xl text-lg font-semibold hover:bg-[#111a34] transition"
                  >
                    <Route size={20} />
                    View CityRoute
                  </Link>

                  <a
                    href="https://github.com/anuushka-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 border border-[#0C1A2B]/20 rounded-xl text-lg font-semibold hover:bg-[#0C1A2B]/5 transition"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#0C1A2B] text-[#98A1BC]">
                  <div className="text-3xl font-extrabold">
                    12,969
                  </div>
                  <div className="text-sm mt-2 opacity-75">
                    Historical OSM graph nodes
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0C1A2B] text-[#98A1BC]">
                  <div className="text-3xl font-extrabold">
                    34,996
                  </div>
                  <div className="text-sm mt-2 opacity-75">
                    Historical graph edges
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0C1A2B] text-[#98A1BC]">
                  <div className="text-3xl font-extrabold">
                    22.7%
                  </div>
                  <div className="text-sm mt-2 opacity-75">
                    Median 2-Opt improvement
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0C1A2B] text-[#98A1BC]">
                  <div className="text-3xl font-extrabold">
                    13.6%
                  </div>
                  <div className="text-sm mt-2 opacity-75">
                    Median LNS improvement
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0C1A2B] text-[#98A1BC]">
                  <div className="text-3xl font-extrabold">
                    80/80
                  </div>
                  <div className="text-sm mt-2 opacity-75">
                    Successful Docker road cases
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0C1A2B] text-[#98A1BC]">
                  <div className="text-3xl font-extrabold">
                    480/480
                  </div>
                  <div className="text-sm mt-2 opacity-75">
                    Successful load requests
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen py-28 px-6 md:px-10 bg-[#0C1A2B] text-[#98A1BC]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="uppercase tracking-[0.25em] text-sm text-[#6B728E] mb-4">
              Selected Work
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Projects
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-[#727b96]">
              Four projects across optimization, cybersecurity, multimodal
              vision, and deepfake detection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 mt-20 gap-8">
            {projects.map((project, index) => (
              <Link to={project.route} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -10 }}
                  className="p-8 min-h-[560px] h-full rounded-3xl bg-[#6B728E] text-[#0C1A2B] shadow-xl transition cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-16 h-16 rounded-2xl ${project.accent} flex items-center justify-center mb-6`}
                    >
                      {project.icon}
                    </div>

                    <p className="text-xs uppercase tracking-[0.18em] font-semibold opacity-60 mb-3">
                      {project.subtitle}
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold mb-5">
                      {project.title}
                    </h3>

                    <p className="opacity-90 text-base leading-7">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-7">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1.5 rounded-lg bg-[#0C1A2B]/10 border border-[#0C1A2B]/10 text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#0C1A2B] text-[#98A1BC] rounded-xl font-semibold hover:bg-[#111a34] transition">
                    {project.title === "CityRoute" && (
                      <Route className="w-5 h-5" />
                    )}

                    {project.title === "Network Intrusion Detection System" && (
                      <Shield className="w-5 h-5" />
                    )}

                    {project.title === "Multimodal Sign Language Translator" && (
                      <Hand className="w-5 h-5" />
                    )}

                    {project.title === "Deepfake Image Detection" && (
                      <Cpu className="w-5 h-5" />
                    )}

                    View Project
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen py-28 px-6 md:px-10 bg-[#7B8794] text-[#0C1A2B]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="uppercase tracking-[0.25em] text-sm font-semibold opacity-70 mb-4">
              Technical Expertise
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-[#6B728E] shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0C1A2B]/10 flex items-center justify-center mb-5">
                  {React.cloneElement(skill.icon, {
                    size: 25,
                  })}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {skill.title}
                </h3>

                <p className="text-lg opacity-80 leading-7">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-28 px-6 md:px-10 bg-[#0C1A2B] text-[#98A1BC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="uppercase tracking-[0.25em] text-sm text-[#6B728E] mb-4">
              Tools & Technologies
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Tech Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {techStack.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.06,
                }}
                className="p-6 rounded-2xl bg-[#6B728E] shadow-xl text-center text-lg font-semibold text-[#0C1A2B]"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING HIGHLIGHTS */}
      <section className="py-28 px-6 md:px-10 bg-[#7B8794] text-[#0C1A2B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm font-semibold opacity-70 mb-4">
              How I Build
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Engineering Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
            {[
              {
                icon: <Terminal />,
                title: "Evidence First",
                text: "Benchmark claims against actual experiments, tests and recorded artifacts.",
              },
              {
                icon: <Zap />,
                title: "Performance",
                text: "Treat algorithmic efficiency, latency and resource behavior as engineering concerns.",
              },
              {
                icon: <Shield />,
                title: "Reliability",
                text: "Design for timeouts, failure recovery, bounded resources and operational edge cases.",
              },
              {
                icon: <Layers />,
                title: "Modularity",
                text: "Separate interfaces, business logic, model inference, infrastructure and supporting services.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="p-8 rounded-3xl bg-[#6B728E] shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0C1A2B]/10 flex items-center justify-center mb-5">
                  {React.cloneElement(item.icon, {
                    size: 25,
                  })}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-lg opacity-80 leading-7">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 text-center bg-[#0C1A2B] text-[#98A1BC]"
      >
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-sm text-[#6B728E] mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let’s build something useful.
          </h2>

          <p className="opacity-100 mb-10 text-xl text-[#727b96]">
            I’m interested in machine learning engineering, backend systems,
            computer vision, algorithms, and projects where AI meets real
            engineering constraints.
          </p>

          <div className="flex justify-center gap-10 md:gap-16 text-3xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:anuushka27@gmail.com"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <Mail />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/anuushka-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <Github />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/anushka-s-ba1060428/skills/edit/forms/new?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_add_skill_associations%3B99F%2FnGcvQkufE2EOGuJe4g%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <Linkedin />
            </motion.a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm opacity-80 bg-[#7B8794] text-[#0C1A2B]">
        © 2026 Anushka — My Portfolio
      </footer>

      <div className="global-fade-bottom"></div>
    </div>
  );
}