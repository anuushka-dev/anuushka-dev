import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";

import {
  Github, Play, ArrowLeft, Cpu, BarChart, Rocket, Wrench,
  FolderOpen, ArrowRight, CircuitBoard, FileLock, FileText, Download
} from "lucide-react";


export default function DeepfakeProjectPage() {
  const [showModal, setShowModal] = useState(false);
  const [unlockTarget, setUnlockTarget] = useState(null);
  const [unlockedFiles, setUnlockedFiles] = useState({
    research: false,
    report: false,
  });

  const [showImageModal, setShowImageModal] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleAccessSubmit = (e) => {
    e.preventDefault();
    setUnlockedFiles((prev) => ({ ...prev, [unlockTarget]: true }));
    setShowModal(false);
  };

  const openImage = (src) => {
    setPreviewImage(src);
    setShowImageModal(true);
  };

  const handleDownload = (file) => {
    window.open(`/files/${file}.pdf`, "_blank");
  };

  const handleResumeDownload = () => {
    window.open("/files/Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-[#0C1A2B] text-[#98A1BC] px-6 md:px-16 py-16 relative overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#0C1A2B]/80 border-b border-white/10 px-8 py-4 flex items-center">
        <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1d2031] hover:bg-[#23273a] transition text-sm font-semibold whitespace-nowrap">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <div className="flex-1" />
        <div className="flex items-center gap-8 text-lg whitespace-nowrap">
          <a href="#overview" className="hover:text-white transition">Overview</a>
          <a href="#dataset" className="hover:text-white transition">Dataset</a>
          <a href="#pipeline" className="hover:text-white transition">Pipeline</a>
          <a href="#tech" className="hover:text-white transition">Tech Stack</a>
          <a href="#training" className="hover:text-white transition">Training</a>
          <a href="#evaluation" className="hover:text-white transition">Evaluation</a>
          <a href="#future" className="hover:text-white transition">Future</a>
          <a href="#research" className="hover:text-white transition">Research&Report</a>
          <a href="#summary" className="hover:text-white transition">Summary</a>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto pt-32 relative pb-28">

        {/* TITLE */}
        <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-6xl font-extrabold text-center mb-6">
          Deepfake Image Detection
        </motion.h1>

        {/* TAGLINE */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl text-center text-[#b7c2dd] mt-20 font-medium mb-16">
          Because truth matters — detecting what isn’t real.
        </motion.h2>

        {/* OVERVIEW */}
        <Reveal>
        <section id="overview" className="mb-20 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-4">Overview</h2>
          <p className="text-xl leading-relaxed mt-10">
            Deepfakes are becoming increasingly realistic and harder to detect — and that genuinely
            concerns me. Not just technically, but for what it means to identity, dignity, public trust
            and safety. This project is my journey into understanding deepfake detection honestly — not
            pretending this problem is solved, but exploring why it’s difficult. I built a Hybrid CNN +
            ResNet50-based model trained on CUDA GPU via WSL2, exploring dataset bias and real-world failures.
          </p>
        </section>
        </Reveal>

        {/* DATASET */}
        <Reveal>
        <section id="dataset" className="scroll-mt-32 mb-20">
          <h2 className="text-4xl font-bold mb-4">Dataset</h2>
          <p className="text-xl mt-10 mb-6">Balanced dataset of <b>141,000 images</b> (real + fake) from CelebA & Kaggle/GAN sources.</p>

          <div className="grid grid-cols-2 gap-4 mt-10 mb-8">
            <img src="/REAL.avif" onClick={() => openImage("/REAL.avif")}
              className="rounded-xl shadow-lg cursor-pointer max-w-full h-64 object-cover brightness-80 hover:brightness-100 hover:scale-[1.03] transition" />
            <img src="/FAKE.jpg" onClick={() => openImage("/FAKE.jpg")}
              className="rounded-xl shadow-lg cursor-pointer max-w-full h-64 object-cover brightness-80 hover:brightness-100 hover:scale-[1.03] transition" />
          </div>

          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>80% Train / 15% Validation / 5% Test</li>
            <li>Augmentation: blur, noise, rotation, brightness, compression artifacts</li>
            <li>Resolution standardized to 128×128</li>
          </ul>
        </section>
        </Reveal>

        {/* PIPELINE SECTION */}
          <section id="pipeline" className="mb-24 max-w-5xl scroll-mt-32 mx-auto">

        {/* LEFT ALIGNED TITLE */}
          <h2 className="text-4xl font-bold mb-4 text-left">Data Pipeline & Workflow</h2>

        {/* LEFT ALIGNED DESCRIPTION */}
          <p className="text-xl mt-10 leading-relaxed mb-6 text-left max-w-4xl">
            A simplified view of how data flows through the system from raw images to deployed predictions.
          </p>

        {/* LEFT ALIGNED BULLET POINTS */}
          <ul className="list-disc pl-6 text-lg space-y-2 mb-10 text-left max-w-4xl">
            <li>Structured sequential pipeline ensures smooth movement from data collection to deployment.</li>
            <li>Modular stages allow rapid experimentation and easy architectural upgrades.</li>
          </ul>

        {/* CENTERED WORKFLOW ICONS */}
          <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap mb-12">

            {[ 
              { label: "Dataset", tip: "CelebA (Real) + GAN / Kaggle (Fake)", icon: <FolderOpen /> },
              { label: "Preprocess", tip: "Resize, Normalize, Augment", icon: <Wrench /> },
              { label: "Model", tip: "Hybrid CNN + ResNet50", icon: <CircuitBoard /> },
              { label: "Training", tip: "CUDA GPU, FP16, Fine-tuning", icon: <Cpu /> },
              { label: "Evaluate", tip: "ROC / PR / Confusion Matrix", icon: <BarChart /> },
              { label: "Deploy", tip: "Streamlit Real-Time App", icon: <Rocket /> },
            ].map((step, i) => (
            <React.Fragment key={i}>
          <div className="group flex flex-col items-center relative">
          <div className="p-3 bg-[#111a2b] border border-white/10 rounded-2xl shadow-md
            group-hover:shadow-blue-400/20 group-hover:scale-[1.07] transition">
            {React.cloneElement(step.icon, {
              className: "w-10 h-10 text-[#b6c5e3] group-hover:text-white transition"
            })}
          </div>
          <span className="text-sm opacity-80 mt-2">{step.label}</span>

          <div className="absolute hidden group-hover:block mt-16 px-3 py-2 text-sm bg-black/90 rounded-lg shadow-lg whitespace-nowrap z-50">
            {step.tip}
          </div>
        </div>

        {i < 5 && (
          <ArrowRight className="text-[#9BA8C9] w-6 h-6 opacity-60 shrink-0" />
        )}
          </React.Fragment>
        ))}
        </div>

        {/* CENTERED BUTTON */}
          <div className="flex justify-center">
            <button
              onClick={() => openImage("/DPK DATA-PIPELINE.png")}
              className="px-6 py-3 rounded-xl bg-[#2D3142] hover:bg-[#1d2031] text-lg font-semibold shadow-md shadow-black/40 transition"
            >
              🔍 View Full Pipeline Diagram
            </button>
          </div>

        </section>



        {/* TECH STACK */}
        <Reveal>
        <section id="tech" className="mb-20 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-4 text-center">
            {["TensorFlow / Keras","Python","CUDA + WSL2 GPU","Streamlit","ResNet50"].map((t) => (
              <div key={t} className="bg-[#2D3142] p-4 rounded-xl text-lg shadow hover:scale-[1.03] transition">
                {t}
              </div>
            ))}
          </div>
        </section>
        </Reveal>

        {/* TRAINING */}
        <Reveal>
        <section id="training" className="scroll-mt-32 mb-20">
          <h2 className="text-4xl font-bold mb-4">Training Analysis</h2>

          <div className="grid md:grid-cols-2 mt-10 gap-6">
            <img src="/images/initial_epoch_15.png" onClick={() => openImage("/images/initial_epoch_15.png")}
              className="rounded-xl shadow-lg max-h-72 w-full object-cover brightness-80 hover:brightness-100 hover:scale-[1.03] transition" />
            <img src="/images/finetune_epoch_5.png" onClick={() => openImage("/images/finetune_epoch_5.png")}
              className="rounded-xl shadow-lg max-h-72 w-full object-cover brightness-80 hover:brightness-100 hover:scale-[1.03] transition" />
          </div>
        </section>
        </Reveal>

        {/* RESULTS */}
        <Reveal>
        <section id="evaluation" className="scroll-mt-32 mb-20">
          <h2 className="text-4xl font-bold mb-4">Evaluation & Findings</h2>

          <ul className="list-disc pl-5 mt-10 text-lg space-y-2 mb-8">
            <li>Accuracy: 99.5%</li>
            <li>F1 Score: 1.000</li>
            <li>ROC-AUC & PR-AUC: 1.00</li>
          </ul>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {["conf_matrix","roc_curve","pr_curve"].map((img) => (
              <img key={img} src={`/images/${img}.png`} onClick={() => openImage(`/images/${img}.png`)}
                className="rounded-xl shadow-lg max-h-56 w-full object-cover brightness-80 hover:brightness-100 hover:scale-[1.03] transition" />
            ))}
          </div>

          <p className="text-xl leading-relaxed">
            These perfect metrics are misleading: real-world performance was weak. The model
            struggled with unseen deepfakes — likely due to dataset bias and leakage. This was my
            biggest learning: **research honesty matters more than perfect numbers.**
          </p>
        </section>
        </Reveal>

        {/* FUTURE */}
        <Reveal>
        <section id="future" className="scroll-mt-32 mb-20">
          <h2 className="text-4xl font-bold mb-4">Future Work</h2>
          <ul className="list-disc pl-5 mt-10 text-lg space-y-2">
            <li>Vision Transformers (ViT / Swin-T)</li>
            <li>Frequency domain analysis (FFT / DCT)</li>
            <li>Temporal deepfake detection</li>
            <li>Explainable AI (Grad-CAM)</li>
          </ul>
        </section>
        </Reveal>

        {/* RESEARCH */}
        <Reveal>
        <section id="research" className="scroll-mt-32 mb-20">
          <h2 className="text-4xl font-bold mb-4">Research Paper & Project Report</h2>
            <p className="text-xl mt-10 mb-6">
              Contains full architecture breakdowns, experiments and analysis. Restricted to prevent misuse.
            </p>

            <p className="text-lg italic mb-6 flex gap-2 items-center justify-center text-[#3B4C6E]">
              <FileLock className="w-5 h-5" />
              Access requires verification
            </p>

          <div className="flex gap-4 justify-center mb-4">
            <button
              onClick={() => {
                setUnlockTarget("research");
                setShowModal(true);
                }}
              className="px-6 py-3 bg-[#2D3142] rounded-xl flex gap-2 
                   hover:bg-[#1B202E] hover:scale-105 transition duration-200 cursor-pointer"
           >
              <FileLock className="w-5 h-5" />
                  Unlock Research Paper
            </button>
            <button
              onClick={() => {
                setUnlockTarget("report");
                setShowModal(true);
              }}
                className="px-6 py-3 bg-[#2D3142] rounded-xl flex gap-2 
               hover:bg-[#1B202E] hover:scale-105 transition duration-200 cursor-pointer"
            >
            <FileLock className="w-5 h-5" />
              Unlock Project Report
            </button>
    </div>

          {unlockedFiles.research && (
  <div className="mt-6 flex flex-wrap gap-4">
    
    {/* VIEW RESEARCH PAPER */}
    <a
      href="/public/Report for Deepfake Image Detection.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-[#1d2031] hover:bg-[#2D3142] hover:scale-[1.06] 
                transition duration-200 rounded-xl flex items-center gap-2"
    >
      📄 View Research Paper
    </a>
  </div>
)}

{unlockedFiles.report && (
  <div className="mt-6 flex flex-wrap gap-4">

    {/* VIEW PROJECT REPORT */}
    <a
      href="/public/DEEPFAKE IMAGE DETECTION.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-[#1d2031] hover:bg-[#2D3142] hover:scale-[1.06] 
                 transition duration-200 rounded-xl flex items-center gap-2"
    >
      📘 View Project Report
    </a>
  </div>
    )}

  </section>
</Reveal>


        {/* SUMMARY */}
        <Reveal>
        <section id="summary" className="mb-40">
          <h2 className="text-4xl mt-10 font-bold mb-4">Summary — In Simple Words</h2>
          <p className="text-xl mt-14 leading-loose text-[#d2d7e6]">
            I built an AI model to detect whether a face is real or AI-generated. It looked perfect in evaluation
            scores, but failed in real life — teaching me more than success ever could. This project shaped both
            my technical and research mindset.
          </p>
        </section>
        </Reveal>
          
              {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-6 mt-16 mb-32 flex-wrap"
        >
          {/* GitHub */}
          <div className="group relative">
            <a
              href="https://github.com/anuushka-dev/Deepfake-Image-Detection"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2D3142] shadow-lg shadow-black/50
              hover:bg-[#1d2031] hover:scale-[1.06] transition duration-300 cursor-pointer backdrop-blur-md"
            >
              <Github className="w-5 h-5" /> Source Code
            </a>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
              transition bg-black/80 px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              View full project repository
            </span>
          </div>

          {/* Live Demo */}
          <div className="group relative">
            <a
              href="https://your-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2D3142] shadow-lg shadow-black/50
              hover:bg-[#1d2031] hover:scale-[1.06] transition duration-300 cursor-pointer backdrop-blur-md"
            >
              <Play className="w-5 h-5" /> Live Demo
            </a>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
              transition bg-black/80 px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              Interactive real-time test | On Hold
            </span>
          </div>

          {/* Resume */}
          <div className="group relative">
          {/* VIEW RESUME */}
          <a
            href="/public/MYRESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#2D3142] hover:bg-[#1d2031] hover:scale-[1.06]
             transition duration-200 rounded-xl flex items-center gap-2"
          >
            <FileText size={20} />
              View Resume
          </a>

          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
            transition bg-black/80 px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              View my latest resume
          </span>
          </div>
        </motion.div>

      </motion.div> {/* closes main content container */}

      {/* IMAGE MODAL */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black/80 z-[999] backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowImageModal(false)}
        >
          <img
            src={previewImage}
            className="max-w-[90vw] max-h-[85vh] rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}

      {/* ACCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-[#1d2031] p-8 rounded-2xl max-w-lg w-full shadow-xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Request Access</h3>
            <p className="mb-6">Enter details to unlock document</p>

            <form className="space-y-4" onSubmit={handleAccessSubmit}>
              <input type="text" placeholder="Your Name" required className="w-full p-3 rounded-xl bg-[#0C1A2B]" />
              <input type="email" placeholder="Email" required className="w-full p-3 rounded-xl bg-[#0C1A2B]" />
              <textarea placeholder="Reason (optional)" className="w-full p-3 rounded-xl bg-[#0C1A2B]" />
              <button type="submit" className="w-full py-3 bg-blue-600 rounded-xl">Unlock</button>
            </form>

            <button className="mt-4 w-full py-2 bg-gray-700 rounded-xl" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM FADE FIXED LINE */}
      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent" />

    </div>
  );
}
