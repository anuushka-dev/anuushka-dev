import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  ArrowLeft,
  Shield,
  ShieldAlert,
  Network,
  Activity,
  Database,
  Server,
  Brain,
  Cpu,
  Camera,
  Bell,
  Clock,
  Layers,
  Workflow,
  LineChart,
  Terminal,
  Radio,
  RefreshCw,
  HardDrive,
  Lock,
  Target,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Code2,
  Zap,
  Eye,
  Send,
  BarChart3,
  Route,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65 },
};

const sectionClass = "max-w-6xl mx-auto px-4 md:px-6";

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <p className="text-red-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
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

function MetricCard({ value, label, description, accent = "red" }) {
  const accents = {
    red: "text-red-300",
    orange: "text-orange-300",
    blue: "text-blue-300",
    purple: "text-purple-300",
    green: "text-green-300",
  };

  return (
    <GlassCard className="p-6">
      <div className={`text-2xl md:text-3xl font-extrabold ${accents[accent]}`}>
        {value}
      </div>

      <div className="text-white font-semibold text-sm mt-2 mb-2">
        {label}
      </div>

      <p className="text-gray-400 text-sm leading-6">{description}</p>
    </GlassCard>
  );
}

export default function NetworkIntrusionDetectionPage() {
  const pipeline = [
    {
      step: "01",
      title: "Packet Capture",
      icon: <Radio size={23} />,
      text: "Scapy captures network packets from the live monitoring interface.",
    },
    {
      step: "02",
      title: "Flow Construction",
      icon: <Network size={23} />,
      text: "Packets are grouped into bidirectional flows using flow keys and lifecycle rules.",
    },
    {
      step: "03",
      title: "Flow Expiration",
      icon: <Clock size={23} />,
      text: "Idle timeout, FIN/RST handling, packet limits and eviction prevent flows from remaining indefinitely.",
    },
    {
      step: "04",
      title: "Feature Extraction",
      icon: <Layers size={23} />,
      text: "The live flow is converted into the same 45-feature schema used by the trained model.",
    },
    {
      step: "05",
      title: "XGBoost Inference",
      icon: <Brain size={23} />,
      text: "The serialized XGBoost classifier predicts the network event class.",
    },
    {
      step: "06",
      title: "Context Fusion",
      icon: <Eye size={23} />,
      text: "Network severity can be combined with physical-context information from the environment.",
    },
    {
      step: "07",
      title: "Event Persistence",
      icon: <Database size={23} />,
      text: "Security events and notification failure state are persisted for reliability and recovery.",
    },
    {
      step: "08",
      title: "Alert Delivery",
      icon: <Bell size={23} />,
      text: "A dedicated notification pipeline processes alerts asynchronously and retries failures.",
    },
  ];

  const features = [
    {
      icon: <Radio size={28} />,
      title: "Live Packet Monitoring",
      desc: "Scapy-based packet capture provides the foundation for real-time network monitoring.",
    },
    {
      icon: <Network size={28} />,
      title: "Flow Construction",
      desc: "Packets are aggregated into flow records so the model operates on meaningful network conversations rather than isolated packets.",
    },
    {
      icon: <Layers size={28} />,
      title: "45-Feature Representation",
      desc: "The inference pipeline follows the project's canonical 45-feature schema.",
    },
    {
      icon: <Brain size={28} />,
      title: "XGBoost Classification",
      desc: "A trained XGBoost model performs multi-class intrusion detection inference.",
    },
    {
      icon: <Eye size={28} />,
      title: "Physical Context",
      desc: "OpenCV-based human and motion context is incorporated into contextual severity processing.",
    },
    {
      icon: <Bell size={28} />,
      title: "Asynchronous Alerts",
      desc: "Alert processing is decoupled from packet processing through a bounded queue and worker pipeline.",
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Retry & Recovery",
      desc: "Failed notification batches are persisted and retried instead of being silently discarded.",
    },
    {
      icon: <HardDrive size={28} />,
      title: "Memory Bounds",
      desc: "The flow table enforces bounded memory usage and evicts old flow state when limits are reached.",
    },
    {
      icon: <Server size={28} />,
      title: "FastAPI Inference",
      desc: "The trained model is exposed through FastAPI prediction endpoints for programmatic inference.",
    },
  ];

  const contextFeatures = [
    {
      icon: <Camera size={23} />,
      title: "OpenCV Processing",
      text: "The physical-context subsystem uses OpenCV for camera/video processing.",
    },
    {
      icon: <Eye size={23} />,
      title: "Human Detection",
      text: "The implementation includes face and person detection mechanisms for environmental context.",
    },
    {
      icon: <Activity size={23} />,
      title: "Motion Analysis",
      text: "Motion information is extracted from camera frames and contributes to contextual interpretation.",
    },
    {
      icon: <ShieldAlert size={23} />,
      title: "Severity Fusion",
      text: "Network-derived severity can be combined with physical context before an alert is delivered.",
    },
  ];

  const reliability = [
    {
      title: "Bounded Flow Memory",
      icon: <HardDrive size={24} />,
      text: "The monitoring layer enforces a maximum number of active flows and evicts older records when necessary.",
    },
    {
      title: "Flow Expiration",
      icon: <Clock size={24} />,
      text: "Idle flows are expired and connection termination signals can close a flow early.",
    },
    {
      title: "Asynchronous Notification",
      icon: <Bell size={24} />,
      text: "Alerts are processed through a bounded queue and worker rather than blocking the primary monitoring loop.",
    },
    {
      title: "Failed-Batch Persistence",
      icon: <Database size={24} />,
      text: "Failed notification batches can be written to persistent storage for subsequent retry.",
    },
    {
      title: "Retry Handling",
      icon: <RefreshCw size={24} />,
      text: "Notification delivery has retry behavior so transient external failures do not immediately lose alerts.",
    },
    {
      title: "Structured Event Logging",
      icon: <FileText size={24} />,
      text: "The project produces structured event and monitoring logs for later inspection.",
    },
  ];

  const techGroups = [
    {
      title: "Machine Learning",
      icon: <Brain size={22} />,
      items: [
        "Python",
        "XGBoost",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "Joblib",
      ],
    },
    {
      title: "Network Monitoring",
      icon: <Network size={22} />,
      items: [
        "Scapy",
        "Packet Capture",
        "Flow Construction",
        "Flow Expiration",
        "Feature Extraction",
      ],
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      items: [
        "FastAPI",
        "Uvicorn",
        "REST APIs",
        "Async Processing",
        "Structured Logging",
      ],
    },
    {
      title: "Physical Context",
      icon: <Camera size={22} />,
      items: [
        "OpenCV",
        "Camera Capture",
        "Motion Detection",
        "Human Detection",
      ],
    },
    {
      title: "Persistence",
      icon: <Database size={22} />,
      items: [
        "SQLite",
        "JSONL",
        "Failed Notification Storage",
        "Event Persistence",
      ],
    },
    {
      title: "Evaluation",
      icon: <BarChart3 size={22} />,
      items: [
        "Classification Report",
        "Confusion Matrix",
        "Precision",
        "Recall",
        "Macro-F1",
        "Class-Level Analysis",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#100b0c] via-[#1a1014] to-[#2b1720] text-white overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute top-[35%] -right-40 w-[32rem] h-[32rem] bg-orange-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[30%] w-[30rem] h-[22rem] bg-purple-600/6 rounded-full blur-3xl" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/45 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#21191d] hover:bg-[#2c2026] transition text-sm font-semibold text-[#ded9dd]"
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
            <a href="#context" className="hover:text-white transition">
              Context
            </a>
            <a href="#reliability" className="hover:text-white transition">
              Reliability
            </a>
            <a href="#evaluation" className="hover:text-white transition">
              Evaluation
            </a>
            <a href="#stack" className="hover:text-white transition">
              Stack
            </a>
          </div>

          <a
            href="https://github.com/anuushka-dev/Cyber-Risk-Detection-Physical-Awareness-System"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-red-950/20 transition"
          >
            <Github size={17} />
            <span>View Code</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="overview" className="relative pt-36 pb-24">
        <div className={sectionClass}>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-400/20 text-red-200 text-sm mb-6">
                <Shield size={16} />
                Network Security + Machine Learning + Physical Context
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
                Network Intrusion
                <span className="block bg-gradient-to-r from-red-300 via-orange-200 to-pink-300 bg-clip-text text-transparent">
                  Detection System
                </span>
              </h1>

              <p className="mt-7 text-xl text-gray-300 leading-8 max-w-3xl">
                An end-to-end intrusion-detection pipeline that transforms
                live network traffic into structured flows, extracts a
                canonical 45-feature representation, performs XGBoost
                classification, fuses network severity with physical context,
                and delivers resilient security alerts.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "CICIDS2017",
                  "XGBoost",
                  "Scapy",
                  "FastAPI",
                  "OpenCV",
                  "SQLite",
                  "Python",
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
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold"
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
                    <p className="text-sm text-gray-400">
                      Detection Pipeline
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                      Network → Context → Alert
                    </h3>
                  </div>

                  <div className="p-3 rounded-xl bg-red-500/10 text-red-300">
                    <ShieldAlert size={26} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-red-400/20 bg-red-500/[0.07] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Radio size={19} className="text-red-300" />
                      <span className="font-semibold">Network Telemetry</span>
                    </div>

                    <p className="text-sm text-gray-400">
                      Packets → flows → 45-feature representation
                    </p>
                  </div>

                  <div className="text-center text-gray-600">↓</div>

                  <div className="rounded-xl border border-orange-400/20 bg-orange-500/[0.07] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Brain size={19} className="text-orange-300" />
                      <span className="font-semibold">ML Detection</span>
                    </div>

                    <p className="text-sm text-gray-400">
                      XGBoost → class prediction → severity
                    </p>
                  </div>

                  <div className="text-center text-gray-600">↓</div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-500/[0.07] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Eye size={19} className="text-purple-300" />
                      <span className="font-semibold">
                        Physical Context Fusion
                      </span>
                    </div>

                    <p className="text-sm text-gray-400">
                      Human / motion context + network severity
                    </p>
                  </div>

                  <div className="text-center text-gray-600">↓</div>

                  <div className="rounded-xl border border-pink-400/20 bg-pink-500/[0.07] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Bell size={19} className="text-pink-300" />
                      <span className="font-semibold">Alert Pipeline</span>
                    </div>

                    <p className="text-sm text-gray-400">
                      Async processing → retry → persistence → delivery
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="relative pb-20">
        <div className={sectionClass}>
          <motion.div {...fadeUp}>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              <MetricCard
                value="99.89%"
                label="Test Accuracy"
                description="Recorded model evaluation accuracy, rounded to approximately 99.9%."
                accent="red"
              />

              <MetricCard
                value="0.9088"
                label="Macro-F1"
                description="Recorded macro-F1 across the multi-class evaluation."
                accent="orange"
              />

              <MetricCard
                value="45"
                label="Model Features"
                description="Canonical feature schema used across model training and inference."
                accent="blue"
              />

              <MetricCard
                value="14"
                label="Classes"
                description="The trained model metadata records fourteen intrusion/event classes."
                accent="purple"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-20 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="System Capabilities"
            title="An end-to-end security monitoring pipeline"
            description="The project spans network telemetry, machine-learning inference, physical-context processing, persistence, alerting and API serving."
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
                <GlassCard className="h-full p-6 hover:border-red-400/20 hover:bg-white/[0.08] transition">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-500/10 text-red-300 mb-5">
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
            title="From raw packets to security decisions"
            description="The architecture separates acquisition, flow state, feature engineering, inference, contextual fusion and notification responsibilities."
          />

          <GlassCard className="p-6 md:p-10">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-red-400/20 bg-red-500/[0.07] p-7">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-300 mb-5">
                  <Radio size={26} />
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Network Acquisition
                </h3>

                <div className="space-y-3 text-sm text-gray-400 leading-6">
                  <p>Scapy packet capture</p>
                  <p>Flow identification</p>
                  <p>Bidirectional aggregation</p>
                  <p>Flow expiration and eviction</p>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-400/20 bg-orange-500/[0.07] p-7">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-300 mb-5">
                  <Brain size={26} />
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Detection Engine
                </h3>

                <div className="space-y-3 text-sm text-gray-400 leading-6">
                  <p>45-feature extraction</p>
                  <p>XGBoost inference</p>
                  <p>14-class classification</p>
                  <p>Severity assignment</p>
                </div>
              </div>

              <div className="rounded-2xl border border-purple-400/20 bg-purple-500/[0.07] p-7">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-300 mb-5">
                  <ShieldAlert size={26} />
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Context + Alerting
                </h3>

                <div className="space-y-3 text-sm text-gray-400 leading-6">
                  <p>OpenCV physical context</p>
                  <p>Severity fusion</p>
                  <p>Asynchronous notifications</p>
                  <p>Retry and persistence</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-black/20 border border-white/10 p-6">
              <div className="flex flex-wrap justify-center items-center gap-3 text-sm md:text-base">
                {[
                  "Packets",
                  "Flows",
                  "Features",
                  "XGBoost",
                  "Severity",
                  "Context",
                  "Event",
                  "Alert",
                ].map((item, index, arr) => (
                  <React.Fragment key={item}>
                    <span className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10">
                      {item}
                    </span>
                    {index < arr.length - 1 && (
                      <span className="text-gray-600">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* PIPELINE */}
      <section id="pipeline" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Detection Pipeline"
            title="A complete packet-to-alert workflow"
            description="Each stage contributes a distinct responsibility to the real-time monitoring system."
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

                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-red-300 mb-5">
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
        </div>
      </section>

      {/* DATA / MODEL */}
      <section className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Model & Dataset"
            title="CICIDS2017 with a canonical feature contract"
            description="The model pipeline is tied to a defined 45-feature representation and a 14-class target space."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-300">
                  <Database size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Dataset Configuration</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    CICIDS2017
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between gap-6 pb-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">
                    Feature schema
                  </span>
                  <span className="font-semibold text-white">
                    45 features
                  </span>
                </div>

                <div className="flex justify-between gap-6 pb-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">
                    Target classes
                  </span>
                  <span className="font-semibold text-white">
                    14 classes
                  </span>
                </div>

                <div className="flex justify-between gap-6 pb-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">
                    Validation
                  </span>
                  <span className="font-semibold text-white">
                    Stratified
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-gray-400 text-sm">
                    Hyperparameter search
                  </span>
                  <span className="font-semibold text-white">
                    RandomizedSearchCV
                  </span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-300">
                  <Brain size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Training Approach</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    XGBoost classification
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-400 leading-7">
                <p>
                  The training pipeline uses stratified dataset splitting so
                  the class distribution is represented across validation
                  partitions.
                </p>

                <p>
                  Hyperparameter tuning is performed using randomized search
                  with macro-F1 as the optimization objective and stratified
                  cross-validation.
                </p>

                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <code className="text-xs md:text-sm text-red-200">
                    XGBoost → RandomizedSearchCV → macro-F1 → best estimator
                  </code>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* PHYSICAL CONTEXT */}
      <section id="context" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Context Awareness"
            title="Network intelligence meets physical context"
            description="The distinguishing part of the project is the contextual layer that augments network-derived security decisions with information from the physical environment."
          />

          <GlassCard className="p-7 md:p-10">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-200 text-sm mb-6">
                  <Eye size={16} />
                  Context Fusion
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  The alert is not based on network traffic alone
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  The physical-context subsystem processes camera information
                  through OpenCV and derives human and motion-related context.
                  That context can then participate in severity fusion with
                  the network detection result before the alert pipeline is
                  triggered.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {contextFeatures.map((item, index) => (
                  <motion.div
                    key={item.title}
                    {...fadeUp}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 h-full">
                      <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-300 mb-4">
                        {item.icon}
                      </div>

                      <h4 className="font-bold mb-2">{item.title}</h4>

                      <p className="text-sm text-gray-400 leading-6">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-purple-400/20 bg-purple-500/[0.06] p-6 text-center">
              <div className="flex flex-wrap justify-center items-center gap-3 text-sm md:text-base">
                <span className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-400/15">
                  Network Detection
                </span>

                <span className="text-gray-600">+</span>

                <span className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-400/15">
                  Physical Context
                </span>

                <span className="text-gray-600">→</span>

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-400/15">
                  Contextual Severity
                </span>

                <span className="text-gray-600">→</span>

                <span className="px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-400/15">
                  Alert
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* RELIABILITY */}
      <section id="reliability" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Reliability Engineering"
            title="Designed for failures, not just successful predictions"
            description="The monitoring and alerting layers contain mechanisms for bounded memory, asynchronous processing, persistence and recovery."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {reliability.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                }}
              >
                <GlassCard className="h-full p-7">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-300 mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-7">
                    {item.text}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <GlassCard className="mt-9 p-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-300 shrink-0">
                <AlertTriangle size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Why this matters
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  A security-monitoring application cannot assume that its
                  external notification service, network state, cache,
                  packets or individual processing operations will always
                  behave correctly. The project therefore treats operational
                  failure and recovery as part of the system design.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* API */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Serving Layer"
            title="FastAPI inference and application integration"
            description="The trained detection model is exposed through a backend inference layer rather than being isolated inside a notebook."
          />

          <div className="grid lg:grid-cols-2 gap-7">
            <GlassCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300">
                  <Server size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    FastAPI Prediction API
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Programmatic model inference
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-7">
                The API layer loads the trained serialized model through the
                project's predictor and exposes inference endpoints for
                integration with monitoring and external clients.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-black/20 border border-white/10">
                <code className="text-xs text-blue-200">
                  request → validation → feature vector → XGBoost → response
                </code>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-300">
                  <Bell size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Notification Pipeline
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Alert processing and delivery
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-7">
                Alerts are separated from the core monitoring path through
                asynchronous processing. Failed deliveries can be retained
                and retried rather than disappearing when an external
                dependency fails.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-black/20 border border-white/10">
                <code className="text-xs text-green-200">
                  event → queue → worker → notification → retry/persist
                </code>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* EVALUATION */}
      <section id="evaluation" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Model Evaluation"
            title="Performance recorded on the supplied evaluation artifacts"
            description="The project contains classification reports, confusion matrices and class-level analysis in addition to aggregate metrics."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="p-7">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-300 mb-5">
                <BarChart3 size={26} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                99.89% Test Accuracy
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                The supplied classification report records approximately
                99.89% overall test accuracy, represented on the CV as
                approximately 99.9%.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-300 mb-5">
                <Target size={26} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                0.9088 Macro-F1
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Macro-F1 is approximately 0.91, providing a more informative
                view of multi-class behavior than accuracy alone.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300 mb-5">
                <LineChart size={26} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Confusion Matrix
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Raw and serialized confusion-matrix artifacts are part of the
                evaluation package for inspecting class-level confusion.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-300 mb-5">
                <FileText size={26} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Classification Report
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Per-class precision, recall, F1 and support are retained in
                the evaluation artifacts.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="mt-9 p-7 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-300 shrink-0">
                <Clock size={23} />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Evidence timing
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  These model-performance figures come from the supplied
                  recorded evaluation artifacts. They are presented as the
                  project's measured model results, not as a claim that the
                  model was freshly retrained during the latest portfolio
                  update.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Engineering Detail"
            title="Security system engineering beyond the classifier"
            description="The interesting part of the project is the surrounding production-style infrastructure."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <GlassCard className="p-6">
              <Lock className="text-red-300 mb-5" size={27} />
              <h3 className="font-bold text-lg mb-2">
                Bounded State
              </h3>
              <p className="text-sm text-gray-400 leading-6">
                Flow state is bounded so packet monitoring does not grow
                memory indefinitely.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <RefreshCw className="text-orange-300 mb-5" size={27} />
              <h3 className="font-bold text-lg mb-2">
                Recovery
              </h3>
              <p className="text-sm text-gray-400 leading-6">
                Notification failures can be persisted and retried.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <Send className="text-blue-300 mb-5" size={27} />
              <h3 className="font-bold text-lg mb-2">
                Async Delivery
              </h3>
              <p className="text-sm text-gray-400 leading-6">
                Alert delivery is separated from the core packet-processing
                path.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <Code2 className="text-purple-300 mb-5" size={27} />
              <h3 className="font-bold text-lg mb-2">
                Modular Services
              </h3>
              <p className="text-sm text-gray-400 leading-6">
                Monitoring, model inference, context fusion and notification
                concerns are separated into distinct components.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Technology"
            title="Technology stack"
            description="A combination of machine learning, network monitoring, computer vision, backend serving and persistence."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {techGroups.map((group, index) => (
              <motion.div
                key={group.title}
                {...fadeUp}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                }}
              >
                <GlassCard className="p-7 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-300">
                      {group.icon}
                    </div>

                    <h3 className="text-xl font-bold">
                      {group.title}
                    </h3>
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

      {/* FUTURE */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Future Direction"
            title="Potential expansion"
            description="The current architecture provides several directions for a more complete security platform."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <GlassCard className="p-7">
              <BarChart3 className="text-red-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Security Dashboard
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Build a dedicated dashboard for live flows, attack classes,
                severity trends and alert history.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Zap className="text-orange-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Lower-Latency Detection
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Optimize packet-to-flow aggregation and feature computation
                for more demanding live traffic conditions.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Network className="text-blue-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Broader Traffic Coverage
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Extend the system to additional traffic environments and
                continuously updated datasets.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Eye className="text-purple-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Richer Context Fusion
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Expand the physical-context layer with additional contextual
                signals and more robust fusion policies.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Shield className="text-green-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Automated Response
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Integrate controlled response workflows after detection rather
                than stopping at alert delivery.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Route className="text-pink-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Long-Term Event Analytics
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Build persistent historical analytics around attack patterns,
                classes, severity and notification outcomes.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* RESEARCH / REPOSITORY */}
      <section className="relative py-24">
        <div className={sectionClass}>
          <GlassCard className="p-8 md:p-10">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-red-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
                  Research & Documentation
                </p>

                <h2 className="text-3xl font-bold mb-4">
                  Explore the detection pipeline
                </h2>

                <p className="text-gray-400 leading-7 text-sm md:text-base max-w-3xl">
                  The repository contains the monitoring pipeline, model
                  training and inference code, physical-context processing,
                  notification subsystem, evaluation artifacts and backend
                  interfaces.
                </p>
              </div>

              <a
                href="https://github.com/anuushka-dev/Cyber-Risk-Detection-Physical-Awareness-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold whitespace-nowrap"
              >
                Open Repository
                <Github size={18} />
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-red-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-4">
              Project Summary
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-7">
              Detection that connects network behavior with real-world
              context
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-8">
              This project combines machine-learning-based network
              classification with live packet monitoring, flow construction,
              physical-context processing and a resilient alerting pipeline.
              The result is an end-to-end security system rather than an
              isolated intrusion-detection model.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-9">
              {[
                "CICIDS2017",
                "45 Features",
                "14 Classes",
                "XGBoost",
                "Scapy",
                "Flow Tracking",
                "OpenCV",
                "Context Fusion",
                "FastAPI",
                "SQLite",
                "Async Alerts",
                "Retry & Recovery",
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
                href="https://github.com/anuushka-dev/Cyber-Risk-Detection-Physical-Awareness-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-red-950/20"
              >
                <Github size={20} />
                View Network Intrusion Detection System
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
            <span className="text-red-300 font-semibold">Anushka</span>
            {" "}— Network Intrusion Detection System
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Cybersecurity • Machine Learning • Network Monitoring • Context
            Awareness
          </p>
        </div>
      </footer>
    </div>
  );
}