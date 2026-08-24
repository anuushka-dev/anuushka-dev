import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Mail, Github, Linkedin, FileText } from "lucide-react";
import "./fade.css";

export default function Home() {
  const [fade, setFade] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const fadeValue = Math.min(window.scrollY / maxScroll, 1);
      setFade(fadeValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden scroll-smooth"
      style={{ backgroundColor: `rgba(3, 6, 55, ${fade * 0.75})` }}
    >

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0C1A2B]/70 border-b border-white/10 py-4 px-8 flex justify-between items-center text-[#98A1BC]">
        <h1 className="text-2xl font-bold tracking-wide">Anushka</h1>
        <div className="flex gap-8 text-lg">
          <a href="#home" className="hover:text-[#50577A] transition">Home</a>
          <a href="#about" className="hover:text-[#50577A] transition">About</a>
          <a href="#featured" className="hover:text-[#50577A] transition">Featured</a>
          <a href="#projects" className="hover:text-[#50577A] transition">Projects</a>
          <a href="#skills" className="hover:text-[#50577A] transition">Skills</a>
          <a href="#contact" className="hover:text-[#50577A] transition">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0C1A2B] text-[#98A1BC] pt-20 relative">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <Cpu className="w-28 h-28 mb-6 mx-auto" />
          <h1 className="text-7xl font-extrabold leading-tight">Full Stack Machine Learning Engineer</h1>
          <p className="text-4xl max-w-3xl opacity-100 mt-20 mx-auto">
            “I build, I experiment, I learn.”
          </p>
          <a href="/public/My-Resume.pdf" className="inline-flex items-center mt-20 gap-4 px-10 py-5 bg-[#6B728E] text-[#0C1A2B] rounded-2xl text-xl font-semibold hover:bg-[#50577A] transition shadow-xl">
            <FileText /> Download Resume
          </a>
        </motion.div>
        <div className="fade-bottom"></div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="min-h-screen py-30 px-20 text-center bg-[#7B8794] text-[#0C1A2B]">
        <h2 className="text-6xl font-bold mb-10 ">About Me</h2>
        <div className="grid md:grid-cols-1 gap-30 max-w-6xl mx-auto">
          <p className="max-w-4xl mx-auto text-3xl mt-10 opacity-100 leading-relaxed">
             Hi, I’m Anushka — a CSE (AI/ML) student who loves building things that actually work. I enjoy working across the full ML pipeline: cleaning data, training models, optimizing performance, and turning them into interactive applications.
             I’ve built projects like Deepfake Detection, Sign Language Translation, and Route Optimization — each teaching me something different about model behavior and real-world constraints.
             I’m currently sharpening my DSA and ML engineering skills with the goal of creating reliable and scalable AI systems. I believe in learning through experiments, failures, and iteration — and that’s what keeps me excited about this field.
          </p>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="min-h-screen py-24 px-10 text-center bg-[#0C1A2B] text-[#98A1BC]">
        <h2 className="text-6xl font-bold mb-30">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-20 max-w-6xl mx-auto">
          {/* LEFT TRAPEZOID */}
          <div
            className="p-20 bg-[#6B728E] rounded-3xl shadow-xl text-[#0C1A2B] text-3xl font-semibold"
          >
            Full Stack Development
            <br />
            <span className="text-lg opacity-100">React · Node · APIs · Deployment</span>
          </div>

          {/* MIDDLE PERFECT RECTANGLE */}
          <div className="p-20 bg-[#6B728E] rounded-3xl shadow-xl text-[#0C1A2B] text-3xl font-semibold">
            Machine Learning
            <br />
            <span className="text-lg opacity-100">Deep Learning · CV · NLP · Models</span>
          </div>

          {/* RIGHT TRAPEZOID */}
          <div
            className="p-20 bg-[#6B728E] rounded-3xl shadow-xl text-[#0C1A2B] text-3xl font-semibold"
          >
            Problem Solving
            <br />
            <span className="text-lg opacity-100">DSA · Optimization · Graphs</span>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */} 
      <section id="featured" className="min-h-screen py-24 px-15 text-center bg-[#7B8794] text-[#0C1A2B]">
        <h2 className="text-5xl font-bold mb-30">Featured Project</h2>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto p-12 bg-[#6B728E] rounded-3xl text-[#0C1A2B] shadow-2xl">
          <h3 className="text-4xl font-bold mb-10">Deepfake Image Detection</h3>
          <p className="text-2xl opacity-100 mb-15">A deep learning system using CNN + ResNet to detect manipulated faces with high accuracy.</p>      
          <a href="/project/deepfake" className="inline-flex items-center gap-0 mt-10 px-8 py-4 bg-[#0C1A2B] text-[#98A1BC] rounded-2xl text-xl font-semibold hover:bg-[#0c1a2bdc] transition shadow-xl">
            <FileText /> View Full Case Study
          </a>
        </motion.div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="min-h-screen py-24 px-10 text-center bg-[#0C1A2B] text-[#98A1BC]">
  <h2 className="text-6xl font-bold mb-16">Projects</h2>

  <div className="grid md:grid-cols-3 mt-20 gap-16">

    {/* Deepfake Image Detection */}
    <Link to="/deepfake">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 min-h-[400px] rounded-3xl bg-[#6B728E] text-[#0C1A2B] shadow-xl 
        hover:scale-105 transition cursor-pointer"
      >
        <h3 className="text-3xl font-bold mb-4">Deepfake Image Detection</h3>
        <p className="opacity-90 text-xl text-[#0C1A2B] leading-relaxed">
          Hybrid CNN + ResNet50 trained on 141K images with CUDA GPU (WSL2). 
          Achieved 99.5% accuracy, revealing dataset bias & real-world failure 
          insights — ethical AI & research-focused development.
          Tech Stack: Python · ResNet50 · Grad-CAM++ · Streamlit · CUDA 
        </p>
          <button className="mt-6 px-6 py-3 bg-[#0C1A2B] text-[#98A1BC] rounded-xl font-semibold 
              hover:bg-[#0c1a2bdc] transition">
                View Project →
          </button>
      </motion.div>
    </Link>

    {/* Sign Language Translator */}
    <Link to="/sign-language">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 min-h-[400px] rounded-3xl bg-[#6B728E] text-[#0C1A2B] shadow-xl 
        hover:scale-105 transition cursor-pointer"
      >
        <h3 className="text-3xl font-bold mb-4">Sign Language Translator</h3>
        <p className="opacity-90 text-xl leading-relaxed">
          Real-time sign detection using MediaPipe & TensorFlow — converts ASL hand gestures
          to text & voice output.
        </p>
            <button className="mt-6 px-6 py-3 bg-[#0C1A2B] text-[#98A1BC] rounded-xl font-semibold 
              hover:bg-[#0c1a2bdc] transition">
              View Project →
            </button>
      </motion.div>
    </Link>

    {/* Route Optimizer */}
    <Link to="/route-optimizer">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 min-h-[400px] rounded-3xl bg-[#6B728E] text-[#0C1A2B] shadow-xl 
        hover:scale-105 transition cursor-pointer"
      >
        <h3 className="text-3xl font-bold mb-4">Route Optimizer</h3>
        <p className="opacity-90 text-xl leading-relaxed">
          Shortest path solver with A* & Dijkstra to reduce travel cost and time.
        </p>
            <button className="mt-6 px-6 py-3 bg-[#0C1A2B] text-[#98A1BC] rounded-xl font-semibold 
              hover:bg-[#0c1a2bdc] transition">
              View Project →
            </button>
      </motion.div>
    </Link>

  </div>
</section>


      {/* SKILLS */}
      <section id="skills" className="min-h-screen py-24 px-10 text-center bg-[#7B8794] text-[#0C1A2B]">
        <h2 className="text-5xl font-bold mb-16">Skills</h2>
        <div className="grid md:grid-cols-3 gap-16 mt-12 max-w-6xl mx-auto">
          {["TensorFlow","PyTorch","Deep Learning","CNN / RNN","DSA","React + Tailwind","Node.js","Computer Vision","Optimization"]
            .map((skill,i)=>(
              <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}
                className="p-10 rounded-3xl bg-[#6B728E] shadow-xl text-2xl font-semibold text-[#0C1A2B]">
                {skill}
              </motion.div>
            ))}
        </div>
      </section>

      {/* TECH STACK ICONS */} 
      <section className="min-h-screen py-24 px-10 text-center bg-[#0C1A2B] text-[#98A1BC]">
        <h2 className="text-6xl font-bold mb-16">Tech Stack</h2>
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {["Python","PyTorch","Tensorflow","React","Node.js","Tailwind","Docker","AWS"]
            .map((skill,i)=>(
              <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}
                className="p-10 rounded-3xl bg-[#6B728E] shadow-xl text-2xl font-semibold text-[#0C1A2B]">
                {skill}
              </motion.div>
            ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="min-h-screen py-24 px-10 text-center bg-[#7B8794] text-[#0C1A2B]">
        <h2 className="text-6xl font-bold mb-16">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="p-15 bg-[#6B728E] rounded-3xl shadow-xl">
            <p className="text-xl opacity-100">“Anushka doesn’t stop at errors — she fixes them and comes back stronger.”</p>
            <h4 className="mt-6 bg-[#6B728E] text-2xl font-bold">— Mentor</h4>
          </div>
          <div className="p-15 bg-[#6B728E] rounded-3xl shadow-xl">
            <p className="text-xl opacity-100">“She learns by building and experimenting, turning ideas into real ML applications.”</p>
            <h4 className="mt-6 bg-[#6B728E] text-2xl font-bold">— Senior Developer</h4>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-70 px-10 text-center bg-[#0C1A2B] text-[#98A1BC]">
        <h2 className="text-6xl font-bold mb-10">Contact Me</h2>
        <p className="opacity-100 mb-8 text-xl">Let’s connect and build something amazing.</p>
        <div className="flex justify-center gap-20 text-3xl">
          <motion.a whileHover={{ scale: 1.3 }} href="anuushka27@gmail.com"><Mail /></motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/anuushka27-maker"><Github /></motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="#"><Linkedin /></motion.a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm opacity-80 bg-[#7B8794] text-[#0C1A2B]">
        © 2025 Anushka  — MY Portfolio
      </footer>

      <div className="global-fade-bottom"></div>
    </div>
  );
}

      {/* PROJECTS */}
<section id="projects" className="min-h-screen py-24 px-10 text-center bg-[#0C1A2B] text-[#98A1BC]">
  <h2 className="text-6xl font-bold mb-16">Projects</h2>

  <div className="grid md:grid-cols-3 mt-20 gap-16">

    {/* Deepfake Image Detection */}
    <Link to="/deepfake">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 min-h-[400px] rounded-3xl bg-[#6B728E] text-[#0C1A2B] shadow-xl 
        hover:scale-105 transition cursor-pointer"
      >
        <h3 className="text-3xl font-bold mb-4">Deepfake Image Detection</h3>
        <p className="opacity-90 text-xl text-[#0C1A2B] leading-relaxed">
          Hybrid CNN + ResNet50 trained on 141K images with CUDA GPU (WSL2). 
          Achieved 99.5% accuracy, revealing dataset bias & real-world failure 
          insights — ethical AI & research-focused development.
          Tech Stack: Python · ResNet50 · Grad-CAM++ · Streamlit · CUDA 
        </p>
          <button className="mt-6 px-6 py-3 bg-[#0C1A2B] text-[#98A1BC] rounded-xl font-semibold 
              hover:bg-[#0c1a2bdc] transition">
                View Project →
          </button>
      </motion.div>
    </Link>

    {/* Sign Language Translator */}
    <Link to="/sign-language">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 min-h-[400px] rounded-3xl bg-[#6B728E] text-[#0C1A2B] shadow-xl 
        hover:scale-105 transition cursor-pointer"
      >
        <h3 className="text-3xl font-bold mb-4">Sign Language Translator</h3>
        <p className="opacity-90 text-xl leading-relaxed">
          Real-time sign detection using MediaPipe & TensorFlow — converts ASL hand gestures
          to text & voice output.
        </p>
            <button className="mt-6 px-6 py-3 bg-[#0C1A2B] text-[#98A1BC] rounded-xl font-semibold 
              hover:bg-[#0c1a2bdc] transition">
              View Project →
            </button>
      </motion.div>
    </Link>

    {/* Route Optimizer */}
    <Link to="/route-optimizer">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 min-h-[400px] rounded-3xl bg-[#6B728E] text-[#0C1A2B] shadow-xl 
        hover:scale-105 transition cursor-pointer"
      >
        <h3 className="text-3xl font-bold mb-4">Route Optimizer</h3>
        <p className="opacity-90 text-xl leading-relaxed">
          Shortest path solver with A* & Dijkstra to reduce travel cost and time.
        </p>
            <button className="mt-6 px-6 py-3 bg-[#0C1A2B] text-[#98A1BC] rounded-xl font-semibold 
              hover:bg-[#0c1a2bdc] transition">
              View Project →
            </button>
      </motion.div>
    </Link>

  </div>
</section>