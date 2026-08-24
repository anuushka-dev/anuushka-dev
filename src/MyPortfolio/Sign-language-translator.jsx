import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  ArrowLeft,
  Camera,
  Cpu,
  Brain,
  Server,
  Languages,
  Workflow,
  LineChart,
  Video,
  Layers,
  Activity,
  ShieldCheck,
  Database,
  Code2,
  Terminal,
  Mic2,
  Hand,
  Network,
  Target,
  CheckCircle2,
  Zap,
  GitBranch,
  FileText,
  ExternalLink,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65 },
};

const sectionClass = "max-w-6xl mx-auto px-4 md:px-6";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <p className="text-purple-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-gray-300 leading-7 text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

function MetricCard({ value, label, description }) {
  return (
    <GlassCard className="p-6">
      <div className="text-2xl md:text-3xl font-extrabold text-white mb-2">
        {value}
      </div>
      <div className="text-purple-200 font-semibold text-sm mb-2">
        {label}
      </div>
      <p className="text-gray-400 text-sm leading-6">{description}</p>
    </GlassCard>
  );
}

export default function SignLanguageTranslatorPage() {
  const features = [
    {
      icon: <Camera size={28} />,
      title: "Real-Time Webcam Inference",
      desc: "OpenCV captures live webcam frames while MediaPipe extracts hand landmarks for continuous inference.",
    },
    {
      icon: <Cpu size={28} />,
      title: "EfficientNet-B0 RGB Branch",
      desc: "A pretrained EfficientNet-B0 backbone extracts visual features from RGB frames before multimodal fusion.",
    },
    {
      icon: <Hand size={28} />,
      title: "Dedicated Skeleton CNN",
      desc: "Hand-skeleton representations are processed through a dedicated CNN branch instead of relying only on RGB appearance.",
    },
    {
      icon: <Layers size={28} />,
      title: "Multimodal Feature Fusion",
      desc: "The RGB and skeleton branches produce learned features that are concatenated and passed through a joint classifier.",
    },
    {
      icon: <Activity size={28} />,
      title: "Temporal Stabilization",
      desc: "Recent predictions are buffered and filtered to reduce unstable frame-to-frame predictions.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Prediction Locking",
      desc: "Stable dominant predictions can be locked temporarily to prevent repeated or noisy character generation.",
    },
    {
      icon: <Languages size={28} />,
      title: "Sentence Construction",
      desc: "Recognized signs can be assembled into a running sentence with controls for spaces, deletion, clearing, and addition.",
    },
    {
      icon: <Mic2 size={28} />,
      title: "Text-to-Speech",
      desc: "The generated sentence can be spoken using pyttsx3 for a complete sign-to-text-to-speech interaction.",
    },
    {
      icon: <Server size={28} />,
      title: "FastAPI WebSocket Backend",
      desc: "Live model inference is exposed through a FastAPI WebSocket interface for streaming-style interaction.",
    },
  ];

  const techGroups = [
    {
      title: "Machine Learning",
      icon: <Brain size={22} />,
      items: [
        "Python",
        "PyTorch",
        "TorchVision",
        "EfficientNet-B0",
        "CNN",
        "scikit-learn",
      ],
    },
    {
      title: "Computer Vision",
      icon: <Camera size={22} />,
      items: [
        "OpenCV",
        "MediaPipe",
        "Pillow",
        "NumPy",
      ],
    },
    {
      title: "Real-Time Application",
      icon: <Video size={22} />,
      items: [
        "FastAPI",
        "WebSockets",
        "Streamlit",
        "pyttsx3",
        "Pydantic",
      ],
    },
    {
      title: "Evaluation",
      icon: <LineChart size={22} />,
      items: [
        "Confusion Matrix",
        "Classification Report",
        "Precision",
        "Recall",
        "F1 Score",
        "Matplotlib",
        "Seaborn",
      ],
    },
  ];

  const pipeline = [
    {
      step: "01",
      title: "Capture",
      icon: <Camera size={23} />,
      text: "Capture a live RGB frame from the webcam using OpenCV.",
    },
    {
      step: "02",
      title: "Hand Detection",
      icon: <Hand size={23} />,
      text: "MediaPipe detects hand landmarks and produces the geometric hand representation.",
    },
    {
      step: "03",
      title: "RGB Branch",
      icon: <Video size={23} />,
      text: "The RGB input is passed through the EfficientNet-B0 visual branch.",
    },
    {
      step: "04",
      title: "Skeleton Branch",
      icon: <GitBranch size={23} />,
      text: "The hand-skeleton representation is processed through its dedicated CNN branch.",
    },
    {
      step: "05",
      title: "Feature Fusion",
      icon: <Workflow size={23} />,
      text: "Features from both branches are concatenated into a multimodal representation.",
    },
    {
      step: "06",
      title: "Classification",
      icon: <Target size={23} />,
      text: "The fused representation is passed to the final classifier for sign prediction.",
    },
    {
      step: "07",
      title: "Temporal Filtering",
      icon: <Activity size={23} />,
      text: "Recent predictions are stabilized using a prediction buffer and dominance logic.",
    },
    {
      step: "08",
      title: "Output",
      icon: <Languages size={23} />,
      text: "Stable predictions become sentence text and can be converted to speech.",
    },
  ];

  const trainingSteps = [
    {
      title: "Multimodal Learning",
      text: "The model is trained jointly on RGB information and hand-skeleton information rather than depending on a single visual representation.",
    },
    {
      title: "Curriculum-Style Training",
      text: "The supplied training pipeline progresses through staged class groups before training across the complete class set.",
    },
    {
      title: "Auxiliary Supervision",
      text: "Training includes additional group-level and finger-structure supervision alongside the primary sign-classification objective.",
    },
    {
      title: "Canonicalized Hand Orientation",
      text: "Training preprocessing includes left-hand handling so that equivalent hand configurations can be represented consistently.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b12] via-[#151126] to-[#2b1c3d] text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-[35%] -right-40 w-[34rem] h-[34rem] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[35%] w-[30rem] h-[20rem] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/45 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1b1d2b] hover:bg-[#272a3d] transition text-sm font-semibold text-[#d8daea]"
          >
            <ArrowLeft size={17} />
            <span className="hidden sm:inline">Back to Portfolio</span>
          </Link>

          <div className="flex-1" />

          <div className="hidden xl:flex items-center gap-6 text-sm text-gray-300">
            <a href="#overview" className="hover:text-white transition">
              Overview
            </a>
            <a href="#architecture" className="hover:text-white transition">
              Architecture
            </a>
            <a href="#pipeline" className="hover:text-white transition">
              Pipeline
            </a>
            <a href="#training" className="hover:text-white transition">
              Training
            </a>
            <a href="#evaluation" className="hover:text-white transition">
              Evaluation
            </a>
            <a href="#stack" className="hover:text-white transition">
              Stack
            </a>
            <a href="#future" className="hover:text-white transition">
              Future
            </a>
          </div>

          <a
            href="https://github.com/anuushka-dev/Sign-Language-translator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-purple-900/20 transition"
          >
            <Github size={17} />
            <span>View Code</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="overview" className="relative pt-36 pb-24">
        <div className={sectionClass}>
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-200 text-sm mb-6">
                <Hand size={16} />
                Computer Vision + Multimodal ML + Real-Time Inference
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
                Multimodal
                <span className="block bg-gradient-to-r from-purple-300 via-fuchsia-200 to-blue-300 bg-clip-text text-transparent">
                  Sign Language Translator
                </span>
              </h1>

              <p className="mt-7 text-xl text-gray-300 leading-8 max-w-3xl">
                A real-time sign language recognition system combining RGB
                visual features from EfficientNet-B0 with hand-skeleton
                features from a dedicated CNN branch, followed by multimodal
                feature fusion and temporal prediction stabilization.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "PyTorch",
                  "EfficientNet-B0",
                  "MediaPipe",
                  "OpenCV",
                  "FastAPI",
                  "WebSockets",
                  "Streamlit",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 rounded-lg bg-white/[0.06] border border-white/10 text-sm text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold"
                >
                  Explore Architecture
                  <Workflow size={18} />
                </a>

                <a
                  href="#evaluation"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition font-semibold"
                >
                  View Evaluation
                  <LineChart size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <p className="text-sm text-gray-400">Core Model</p>
                    <h3 className="text-xl font-bold mt-1">
                      Dual-Branch Fusion
                    </h3>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-300">
                    <Brain size={26} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-purple-400/20 bg-purple-500/[0.08] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Video size={19} className="text-purple-300" />
                      <span className="font-semibold">RGB Branch</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      RGB frame → EfficientNet-B0 → learned visual features
                    </p>
                  </div>

                  <div className="text-center text-gray-600">
                    +
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-500/[0.08] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Hand size={19} className="text-blue-300" />
                      <span className="font-semibold">Skeleton Branch</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Hand representation → dedicated CNN → skeletal features
                    </p>
                  </div>

                  <div className="flex justify-center text-gray-600">
                    ↓
                  </div>

                  <div className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-500/[0.08] p-4 text-center">
                    <div className="font-semibold text-fuchsia-200">
                      Feature Fusion
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Joint multimodal representation → classifier
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT SUMMARY */}
      <section className="relative pb-20">
        <div className={sectionClass}>
          <motion.div {...fadeUp}>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              <MetricCard
                value="2"
                label="Learning Branches"
                description="RGB visual representation plus dedicated hand-skeleton representation."
              />
              <MetricCard
                value="Real-Time"
                label="Inference Mode"
                description="Webcam-based processing with MediaPipe and OpenCV."
              />
              <MetricCard
                value="WebSocket"
                label="Live Backend"
                description="FastAPI WebSocket endpoint for live inference communication."
              />
              <MetricCard
                value="Class-Level"
                label="Evaluation"
                description="Confusion matrices, classification reports, precision, recall and F1."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="relative py-20 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="System Capabilities"
            title="Built as a real-time multimodal system"
            description="The project goes beyond a single image classifier by combining two visual modalities with inference-time stabilization and an application layer."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...fadeUp}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                }}
              >
                <GlassCard className="h-full p-6 hover:border-purple-400/20 hover:bg-white/[0.08] transition">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-300 mb-5">
                    {feature.icon}
                  </div>

                  <h3 className="text-lg font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    {feature.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Architecture"
            title="Two complementary representations, one classifier"
            description="The model uses RGB appearance and hand-skeleton structure as complementary sources of information."
          />

          <GlassCard className="p-6 md:p-10">
            <div className="grid lg:grid-cols-5 gap-6 items-center">
              <div className="lg:col-span-2 space-y-5">
                <div className="rounded-2xl border border-purple-400/20 bg-purple-500/[0.07] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="text-purple-300" size={24} />
                    <h3 className="text-xl font-bold">RGB Feature Branch</h3>
                  </div>

                  <div className="text-gray-300 text-sm leading-7">
                    Webcam RGB input
                    <span className="text-purple-300"> → </span>
                    EfficientNet-B0
                    <span className="text-purple-300"> → </span>
                    feature projection
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Hand className="text-blue-300" size={24} />
                    <h3 className="text-xl font-bold">Skeleton Feature Branch</h3>
                  </div>

                  <div className="text-gray-300 text-sm leading-7">
                    Hand landmarks
                    <span className="text-blue-300"> → </span>
                    skeleton representation
                    <span className="text-blue-300"> → </span>
                    dedicated CNN
                    <span className="text-blue-300"> → </span>
                    feature projection
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center text-4xl text-gray-600">
                →
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/[0.08] p-7 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-200 mb-5">
                    <Layers size={30} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    Multimodal Feature Fusion
                  </h3>

                  <p className="text-gray-300 mt-4 text-sm leading-7">
                    The projected features from the RGB and skeleton branches
                    are concatenated and fed into the final PyTorch
                    classification head.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-black/20 border border-white/10">
                    <code className="text-sm text-fuchsia-200">
                      concat(RGB_features, skeleton_features)
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="text-purple-300 mb-4">
                <Code2 size={25} />
              </div>
              <h3 className="font-bold text-lg mb-2">EfficientNet-B0</h3>
              <p className="text-sm text-gray-400 leading-6">
                A pretrained TorchVision EfficientNet-B0 backbone provides the
                RGB visual representation.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-blue-300 mb-4">
                <GitBranch size={25} />
              </div>
              <h3 className="font-bold text-lg mb-2">Skeleton CNN</h3>
              <p className="text-sm text-gray-400 leading-6">
                A separate convolutional branch processes the hand-skeleton
                representation instead of treating it as ordinary RGB input.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-fuchsia-300 mb-4">
                <Workflow size={25} />
              </div>
              <h3 className="font-bold text-lg mb-2">PyTorch Fusion</h3>
              <p className="text-sm text-gray-400 leading-6">
                Learned features from both branches are merged before the
                classification layers.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section id="pipeline" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Inference Pipeline"
            title="From webcam frame to spoken sentence"
            description="The runtime pipeline combines computer vision preprocessing, multimodal model inference, temporal filtering and application-level output handling."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {pipeline.map((item, index) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.07,
                }}
              >
                <GlassCard className="h-full p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-5 text-xs text-gray-600 font-mono">
                    {item.step}
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-purple-300 mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-6">
                    {item.text}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <GlassCard className="mt-10 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
              <span className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-400/20">
                Webcam
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10">
                MediaPipe
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-400/20">
                RGB + Skeleton
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-4 py-2 rounded-lg bg-fuchsia-500/10 border border-fuchsia-400/20">
                Multimodal Model
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
                Stabilization
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10">
                Sentence
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-400/20">
                TTS
              </span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Training"
            title="Training designed around multimodal representation"
            description="The training code includes more than the basic supervised classification loop."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {trainingSteps.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <GlassCard className="p-7 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 border border-purple-400/15 flex items-center justify-center text-purple-300 font-bold">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-7">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <GlassCard className="mt-8 p-7">
            <div className="flex items-center gap-3 mb-5">
              <Terminal size={23} className="text-purple-300" />
              <h3 className="text-xl font-bold">Training objective</h3>
            </div>

            <p className="text-gray-300 leading-7 text-sm md:text-base">
              The supplied training pipeline combines the primary sign
              classification objective with auxiliary group-level and
              finger-structure supervision. This gives the model additional
              structure beyond the final class label while training the
              multimodal representation.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* EVALUATION */}
      <section id="evaluation" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Evaluation"
            title="Evaluation beyond a single accuracy number"
            description="The project includes class-level evaluation artifacts rather than relying only on one aggregate score."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            <GlassCard className="p-7">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-300 mb-5">
                <LineChart size={25} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Classification Reports
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Evaluation scripts generate precision, recall, F1 and support
                values at the class level using scikit-learn.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300 mb-5">
                <Target size={25} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Confusion Matrices
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Raw and normalized confusion matrices are generated to inspect
                class-to-class model behavior.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-300 mb-5">
                <CheckCircle2 size={25} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Per-Class Analysis
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                The evaluation artifacts include individual class-level
                accuracy and precision/recall/F1 measurements.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="mt-10 p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-300 shrink-0">
                <FileText size={25} />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Evidence note
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  The supplied evaluation package contains a checkpoint named
                  <span className="text-gray-200 font-mono mx-1">
                    epoch10_acc0.9677.pth
                  </span>
                  and detailed per-class evaluation artifacts. The checkpoint
                  filename alone is not treated here as a final validated
                  headline accuracy, so no unsupported overall accuracy claim
                  is displayed.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Technology"
            title="Technology stack"
            description="The implementation spans model development, computer vision, real-time serving and evaluation."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {techGroups.map((group, index) => (
              <motion.div
                key={group.title}
                {...fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <GlassCard className="p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-300">
                      {group.icon}
                    </div>

                    <h3 className="text-xl font-bold">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL-TIME APPLICATION */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Application Layer"
            title="From model to usable real-time application"
            description="The project includes both an inference backend and an interactive application layer."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300">
                  <Server size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">FastAPI WebSocket Backend</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Live inference transport
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-400 leading-7">
                <p>
                  The backend exposes live inference through a FastAPI
                  WebSocket endpoint.
                </p>

                <p>
                  Image/frame data can be sent to the backend, processed with
                  the computer-vision and PyTorch pipeline, and returned as
                  inference output.
                </p>

                <div className="p-4 rounded-xl bg-black/20 border border-white/10 font-mono text-xs text-blue-200">
                  WebSocket → frame → preprocessing → model → prediction
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-300">
                  <Workflow size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Streamlit Application</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Interactive user interface
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-400 leading-7">
                <p>
                  The Streamlit interface connects the webcam inference loop
                  with the prediction and sentence-building experience.
                </p>

                <p>
                  The application includes prediction display, sentence
                  controls and text-to-speech functionality.
                </p>

                <div className="p-4 rounded-xl bg-black/20 border border-white/10 font-mono text-xs text-purple-200">
                  Webcam → recognition → sentence → speech
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ENGINEERING DETAILS */}
      <section className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Engineering Details"
            title="The inference system is designed for stability"
            description="Frame-level prediction is not directly appended to the sentence. Several controls are used to make the interaction more stable."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <GlassCard className="p-6">
              <Activity className="text-purple-300 mb-5" size={27} />
              <h3 className="font-bold text-lg mb-2">
                Prediction Buffer
              </h3>
              <p className="text-sm text-gray-400 leading-6">
                Recent predictions are retained to evaluate short-term
                temporal consistency.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <Zap className="text-yellow-300 mb-5" size={27} />
              <h3 className="font-bold text-lg mb-2">
                Dominance Gating
              </h3>
              <p className="text-sm text-gray-400 leading-6">
                A prediction must dominate the recent frame window before it
                can become a stable output.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <ShieldCheck className="text-blue-300 mb-5" size={27} />
              <h3 className="font-bold text-lg mb-2">
                Prediction Lock
              </h3>
              <p className="text-sm text-gray-400 leading-6">
                Stable predictions can be temporarily locked to prevent
                repeated unstable character insertion.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <Languages className="text-fuchsia-300 mb-5" size={27} />
              <h3 className="font-bold text-lg mb-2">
                Output Construction
              </h3>
              <p className="text-sm text-gray-400 leading-6">
                Stable signs feed the sentence buffer instead of directly
                converting every frame into text.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section id="future" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Future Direction"
            title="Where the system can go next"
            description="The existing architecture provides a foundation for expanding recognition, language understanding and deployment."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <GlassCard className="p-7">
              <Network className="text-purple-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Continuous Sign Sequences
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Extend isolated-sign recognition toward continuous signing and
                richer temporal sequence understanding.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Languages className="text-blue-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Language-Level Decoding
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Add language-model or sequence-decoding layers to improve
                sentence-level interpretation beyond character recognition.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Database className="text-fuchsia-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Larger Multimodal Dataset
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Expand the training data to cover more signers, environments,
                hand orientations and continuous signing conditions.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Zap className="text-yellow-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Inference Optimization
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Optimize the model and serving pipeline for lower resource
                usage and smoother real-time deployment.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Video className="text-green-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Browser-Based Inference
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Explore browser-side inference or a production web client to
                reduce deployment friction for end users.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Mic2 className="text-pink-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Richer Speech Output
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Extend the speech layer toward configurable voices, languages
                and sentence-level output.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* RESEARCH / REPORT */}
      <section id="research" className="relative py-24">
        <div className={sectionClass}>
          <GlassCard className="p-8 md:p-10">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-purple-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
                  Research & Documentation
                </p>

                <h2 className="text-3xl font-bold mb-4">
                  Explore the implementation and evaluation
                </h2>

                <p className="text-gray-400 leading-7 text-sm md:text-base max-w-3xl">
                  The project repository contains the multimodal model,
                  training pipeline, evaluation scripts, real-time inference
                  components and application layer.
                </p>
              </div>

              <a
                href="https://github.com/anuushka-dev/Sign-Language-translator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold whitespace-nowrap"
              >
                Open Repository
                <ExternalLink size={18} />
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SUMMARY */}
      <section id="summary" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-4">
              Project Summary
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-7">
              Multimodal recognition built for real-time interaction
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-8">
              This project combines computer vision, multimodal deep learning,
              temporal inference logic and real-time application engineering
              into one sign-language interaction system. Instead of relying on
              a single visual signal, it combines RGB information with a
              dedicated hand-skeleton branch, stabilizes predictions across
              time and exposes inference through a practical application
              interface.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-9">
              {[
                "Multimodal CNN",
                "EfficientNet-B0",
                "Skeleton Features",
                "MediaPipe",
                "Temporal Stabilization",
                "Prediction Locking",
                "FastAPI",
                "WebSockets",
                "Streamlit",
                "Text-to-Speech",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="https://github.com/anuushka-dev/Sign-Language-translator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-purple-900/20"
              >
                <Github size={20} />
                View Sign Language Translator on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026{" "}
            <span className="text-purple-300 font-semibold">Anushka</span>
            {" "}— Multimodal Sign Language Translator
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Computer Vision • Multimodal Deep Learning • Real-Time Inference
          </p>
        </div>
      </footer>
    </div>
  );
}