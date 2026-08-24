import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  ArrowLeft,
  Route,
  Map,
  Network,
  Database,
  Server,
  Activity,
  ShieldCheck,
  Workflow,
  BarChart3,
  Cpu,
  Clock,
  Layers,
  GitBranch,
  Truck,
  Users,
  Zap,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Target,
  Code2,
  Container,
  Gauge,
  HardDrive,
  Search,
  GitMerge,
  Terminal,
  Boxes,
  Eye,
  Timer,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
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
        <p className="text-blue-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
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

function MetricCard({ value, label, description, accent = "blue" }) {
  const accents = {
    blue: "text-blue-300",
    purple: "text-purple-300",
    green: "text-green-300",
    orange: "text-orange-300",
    cyan: "text-cyan-300",
  };

  return (
    <GlassCard className="p-6">
      <div className={`text-2xl md:text-3xl font-extrabold ${accents[accent]}`}>
        {value}
      </div>

      <div className="text-white font-semibold text-sm mt-2 mb-2">
        {label}
      </div>

      <p className="text-gray-400 text-sm leading-6">
        {description}
      </p>
    </GlassCard>
  );
}

export default function CityRoutePage() {
  const algorithms = [
    {
      icon: <Search size={25} />,
      title: "A*",
      desc: "Heuristic shortest-path search over the road graph for efficient point-to-point routing.",
    },
    {
      icon: <GitBranch size={25} />,
      title: "Bidirectional A*",
      desc: "Searches from both endpoints to reduce unnecessary exploration on suitable route queries.",
    },
    {
      icon: <Network size={25} />,
      title: "Source-Dijkstra",
      desc: "Single-source shortest-path processing used for repeated destination queries and matrix construction.",
    },
    {
      icon: <Route size={25} />,
      title: "Greedy VRP",
      desc: "Builds an initial multi-order route that becomes the baseline for route-improvement algorithms.",
    },
    {
      icon: <GitMerge size={25} />,
      title: "2-Opt",
      desc: "Improves route ordering by replacing crossing or inefficient route segments.",
    },
    {
      icon: <RefreshCw size={25} />,
      title: "Large Neighborhood Search",
      desc: "Explores larger route changes to improve upon the greedy solution.",
    },
    {
      icon: <Users size={25} />,
      title: "Hungarian Assignment",
      desc: "Provides assignment optimization for driver-to-route or dispatch matching.",
    },
    {
      icon: <Map size={25} />,
      title: "Graph Snapping",
      desc: "Maps geographic coordinates onto the underlying road graph before routing.",
    },
  ];

  const pipeline = [
    {
      step: "01",
      title: "Road Graph",
      icon: <Map size={23} />,
      text: "Load a directed OpenStreetMap road graph with nodes, edges and road-cost information.",
    },
    {
      step: "02",
      title: "Coordinate Snapping",
      icon: <Target size={23} />,
      text: "Map geographic origin, destination and order coordinates onto graph nodes.",
    },
    {
      step: "03",
      title: "Shortest Paths",
      icon: <Route size={23} />,
      text: "Use A*, Bidirectional A* or Source-Dijkstra to compute road-network paths and costs.",
    },
    {
      step: "04",
      title: "Distance Matrix",
      icon: <Layers size={23} />,
      text: "Construct reusable road-cost matrices between stops for optimization.",
    },
    {
      step: "05",
      title: "Initial Dispatch",
      icon: <Truck size={23} />,
      text: "Build a greedy vehicle-routing solution for the incoming delivery workload.",
    },
    {
      step: "06",
      title: "Route Improvement",
      icon: <GitMerge size={23} />,
      text: "Apply 2-Opt or LNS to search for better route orderings and lower travel cost.",
    },
    {
      step: "07",
      title: "Driver Assignment",
      icon: <Users size={23} />,
      text: "Use Hungarian assignment when dispatching routes across available drivers.",
    },
    {
      step: "08",
      title: "Operational Delivery",
      icon: <Server size={23} />,
      text: "Serve results through the backend with caching, resilience, metrics and controlled concurrency.",
    },
  ];

  const reliability = [
    {
      icon: <Database size={24} />,
      title: "Redis Caching",
      text: "Reusable route and matrix results reduce repeated computation and support efficient service behavior.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Cache Recovery",
      text: "Redis failures are treated as an infrastructure event rather than a reason to silently corrupt application state.",
    },
    {
      icon: <Gauge size={24} />,
      title: "Bounded Concurrency",
      text: "Concurrent request processing is explicitly limited to protect the service from overload.",
    },
    {
      icon: <Timer size={24} />,
      title: "Request Timeouts",
      text: "Long-running operations are governed by request-timeout handling to avoid indefinitely held requests.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Readiness & Liveness",
      text: "The service exposes health and readiness behavior for operational inspection and orchestration.",
    },
    {
      icon: <Activity size={24} />,
      title: "Prometheus Metrics",
      text: "Reliability and service behavior are exposed through Prometheus-oriented metrics.",
    },
    {
      icon: <Container size={24} />,
      title: "Docker Validation",
      text: "Road-dispatch and load behavior were exercised in Docker-based validation scenarios.",
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Failure Handling",
      text: "The test suite exercises unreachable pairs, corrupted cache data, dependency failures, overload and recovery.",
    },
  ];

  const testingAreas = [
    {
      icon: <Route size={24} />,
      title: "Routing Correctness",
      text: "A*, Bidirectional A*, shortest paths and route geometry are covered by dedicated tests.",
    },
    {
      icon: <Boxes size={24} />,
      title: "Optimization",
      text: "Greedy routing, 2-Opt, VRP comparison, advanced optimization and Hungarian correctness are exercised.",
    },
    {
      icon: <Database size={24} />,
      title: "Caching",
      text: "Cache keys, reuse, Redis integration, corrupted payloads and recovery behavior are tested.",
    },
    {
      icon: <Activity size={24} />,
      title: "Reliability",
      text: "Concurrency, overload, timeouts, lifecycle behavior, restart behavior and dependency failures are tested.",
    },
    {
      icon: <Map size={24} />,
      title: "Road Dispatch",
      text: "Road-network dispatch scenarios and matrix parity are covered through integration tests.",
    },
    {
      icon: <Server size={24} />,
      title: "API Behavior",
      text: "Routing, graph, matrix, dispatch and metrics endpoints are exercised through API-level tests.",
    },
  ];

  const techGroups = [
    {
      icon: <Code2 size={22} />,
      title: "Backend",
      items: [
        "Python",
        "FastAPI",
        "Uvicorn",
        "Pydantic",
        "REST APIs",
      ],
    },
    {
      icon: <Map size={22} />,
      title: "Graph & Routing",
      items: [
        "OSMnx",
        "NetworkX",
        "A*",
        "Bidirectional A*",
        "Dijkstra",
        "Source-Dijkstra",
      ],
    },
    {
      icon: <Truck size={22} />,
      title: "Optimization",
      items: [
        "VRP",
        "Greedy Routing",
        "2-Opt",
        "LNS",
        "Hungarian Algorithm",
        "Distance Matrices",
      ],
    },
    {
      icon: <Database size={22} />,
      title: "Infrastructure",
      items: [
        "Redis",
        "Docker",
        "Docker Compose",
        "Prometheus",
        "SQLite",
      ],
    },
    {
      icon: <Activity size={22} />,
      title: "Reliability",
      items: [
        "Concurrency Control",
        "Request Timeouts",
        "Health Checks",
        "Fault Tolerance",
        "Graceful Shutdown",
      ],
    },
    {
      icon: <Cpu size={22} />,
      title: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Vite",
        "React Leaflet",
        "Leaflet",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080d16] via-[#0e1728] to-[#17213d] text-white overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-[30%] -right-40 w-[34rem] h-[34rem] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[30%] w-[30rem] h-[20rem] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/45 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141c2d] hover:bg-[#1c263b] transition text-sm font-semibold text-[#d9dfef]"
          >
            <ArrowLeft size={17} />
            <span className="hidden sm:inline">
              Back to Portfolio
            </span>
          </Link>

          <div className="flex-1" />

          <div className="hidden xl:flex items-center gap-6 text-sm text-gray-300">
            <a href="#overview" className="hover:text-white transition">
              Overview
            </a>
            <a href="#architecture" className="hover:text-white transition">
              Architecture
            </a>
            <a href="#algorithms" className="hover:text-white transition">
              Algorithms
            </a>
            <a href="#optimization" className="hover:text-white transition">
              Optimization
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
            href="https://github.com/anuushka-dev/CityRoute"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-blue-950/20 transition"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm mb-6">
                <Route size={16} />
                Graph Algorithms + Optimization + Backend Engineering
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
                CityRoute
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                  Route Optimization & Dispatch
                </span>
              </h1>

              <p className="mt-7 text-xl text-gray-300 leading-8 max-w-3xl">
                A production-oriented routing and dispatch platform built
                around real OpenStreetMap road data, shortest-path algorithms,
                vehicle-routing optimization, driver assignment, caching,
                resilience and operational observability.
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
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
                >
                  Explore Architecture
                  <Workflow size={18} />
                </a>

                <a
                  href="#evaluation"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition font-semibold"
                >
                  View Benchmarks
                  <BarChart3 size={18} />
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
                      Core Flow
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                      Road Network → Dispatch
                    </h3>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-300">
                    <Map size={26} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-500/[0.07] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Map size={19} className="text-blue-300" />
                      <span className="font-semibold">
                        OpenStreetMap Graph
                      </span>
                    </div>

                    <p className="text-sm text-gray-400">
                      Nodes + directed road edges + road costs
                    </p>
                  </div>

                  <div className="text-center text-gray-600">↓</div>

                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/[0.07] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Route size={19} className="text-cyan-300" />
                      <span className="font-semibold">
                        Routing & Distance Matrix
                      </span>
                    </div>

                    <p className="text-sm text-gray-400">
                      A* / Bidirectional A* / Source-Dijkstra
                    </p>
                  </div>

                  <div className="text-center text-gray-600">↓</div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-500/[0.07] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <GitMerge size={19} className="text-purple-300" />
                      <span className="font-semibold">
                        Route Optimization
                      </span>
                    </div>

                    <p className="text-sm text-gray-400">
                      Greedy → 2-Opt / LNS → optimized routes
                    </p>
                  </div>

                  <div className="text-center text-gray-600">↓</div>

                  <div className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-500/[0.07] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Truck size={19} className="text-fuchsia-300" />
                      <span className="font-semibold">
                        Driver Dispatch
                      </span>
                    </div>

                    <p className="text-sm text-gray-400">
                      Assignment + API delivery + observability
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative pb-20">
        <div className={sectionClass}>
          <motion.div {...fadeUp}>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              <MetricCard
                value="22.7%"
                label="Median 2-Opt Improvement"
                description="Recorded median improvement on the 24-stop open-route benchmark over greedy routing."
                accent="blue"
              />

              <MetricCard
                value="13.6%"
                label="Median LNS Improvement"
                description="Recorded median improvement over greedy routing on the corresponding benchmark."
                accent="purple"
              />

              <MetricCard
                value="80 / 80"
                label="Docker Road Cases"
                description="Recorded successful road-network dispatch validation cases."
                accent="green"
              />

              <MetricCard
                value="480 / 480"
                label="Load Requests"
                description="Recorded successful requests in the load behavior validation."
                accent="cyan"
              />

              <MetricCard
                value="12,969"
                label="Historical OSM Nodes"
                description="Graph size used in earlier recorded OpenStreetMap validation evidence."
                accent="orange"
              />

              <MetricCard
                value="34,996"
                label="Historical OSM Edges"
                description="Directed graph edge count from the earlier recorded OSM validation evidence."
                accent="purple"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Problem"
            title="Routing is more than finding a shortest path"
            description="CityRoute was designed around the gap between graph-level routing and operational dispatch."
          />

          <GlassCard className="p-7 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-5">
                  The routing problem
                </h3>

                <p className="text-gray-400 leading-7 text-sm md:text-base">
                  A shortest-path algorithm can find an efficient path between
                  two points, but a dispatch platform needs to reason about
                  multiple orders, route ordering, vehicle assignments,
                  repeated distance queries, unavailable paths and operational
                  service constraints.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-5">
                  The system approach
                </h3>

                <p className="text-gray-400 leading-7 text-sm md:text-base">
                  CityRoute separates the problem into graph routing, matrix
                  construction, route optimization and driver assignment, then
                  wraps those algorithms in caching, concurrency controls,
                  failure handling and API services.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Architecture"
            title="A layered routing and dispatch system"
            description="The system separates graph operations, optimization, infrastructure and serving concerns so each component can be tested independently."
          />

          <GlassCard className="p-6 md:p-10">
            <div className="grid lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Graph Layer",
                  icon: <Map size={27} />,
                  items: [
                    "OSM graph loading",
                    "Graph snapping",
                    "Road costs",
                    "Shortest paths",
                  ],
                },
                {
                  title: "Routing Layer",
                  icon: <Route size={27} />,
                  items: [
                    "A*",
                    "Bidirectional A*",
                    "Source-Dijkstra",
                    "Distance matrices",
                  ],
                },
                {
                  title: "Optimization Layer",
                  icon: <GitMerge size={27} />,
                  items: [
                    "Greedy VRP",
                    "2-Opt",
                    "LNS",
                    "Hungarian assignment",
                  ],
                },
                {
                  title: "Service Layer",
                  icon: <Server size={27} />,
                  items: [
                    "FastAPI",
                    "Redis",
                    "Concurrency",
                    "Observability",
                  ],
                },
              ].map((layer, index) => (
                <motion.div
                  key={layer.title}
                  {...fadeUp}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center mb-5">
                    {layer.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-5">
                    {layer.title}
                  </h3>

                  <div className="space-y-3">
                    {layer.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-gray-400"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-blue-300 shrink-0"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-black/20 border border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
                {[
                  "OSM Graph",
                  "Snap",
                  "Shortest Path",
                  "Matrix",
                  "VRP",
                  "Improve",
                  "Assign",
                  "Serve",
                ].map((item, index, array) => (
                  <React.Fragment key={item}>
                    <span className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10">
                      {item}
                    </span>

                    {index < array.length - 1 && (
                      <span className="text-gray-600">
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Operational Pipeline"
            title="From coordinates to dispatchable routes"
            description="The complete flow connects geographic inputs with graph algorithms and optimization."
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

                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-blue-300 mb-5">
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

      {/* ALGORITHMS */}
      <section id="algorithms" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Algorithms"
            title="Multiple algorithms for different routing workloads"
            description="Rather than treating routing as a single algorithm, CityRoute provides several strategies for different query and optimization needs."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {algorithms.map((algorithm, index) => (
              <motion.div
                key={algorithm.title}
                {...fadeUp}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.07,
                }}
              >
                <GlassCard className="h-full p-6 hover:border-blue-400/20 hover:bg-white/[0.08] transition">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300 mb-5">
                    {algorithm.icon}
                  </div>

                  <h3 className="text-lg font-bold mb-3">
                    {algorithm.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-6">
                    {algorithm.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIMIZATION */}
      <section id="optimization" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Optimization"
            title="Improving the route instead of stopping at a greedy solution"
            description="CityRoute uses an intentionally staged approach: generate a feasible baseline, then improve the route with local and neighborhood search."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            <GlassCard className="p-8">
              <div className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center text-gray-300 mb-5">
                <Route size={26} />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                Baseline
              </p>

              <h3 className="text-2xl font-bold mb-4">
                Greedy VRP
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Build a practical initial route ordering that provides the
                baseline against which optimization improvements can be
                measured.
              </p>
            </GlassCard>

            <GlassCard className="p-8 border-blue-400/15">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300 mb-5">
                <GitMerge size={26} />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-2">
                Local Search
              </p>

              <h3 className="text-2xl font-bold mb-4">
                2-Opt
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Improve the greedy ordering by replacing two route edges at a
                time when the resulting route reduces travel cost.
              </p>
            </GlassCard>

            <GlassCard className="p-8 border-purple-400/15">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-300 mb-5">
                <RefreshCw size={26} />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-2">
                Neighborhood Search
              </p>

              <h3 className="text-2xl font-bold mb-4">
                LNS
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Destroy and rebuild larger portions of the route to explore
                solutions that local swaps may not reach.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="mt-8 p-7 md:p-9">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Recorded benchmark improvement
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  On the recorded 24-stop open-route workload, the benchmark
                  evidence shows a median improvement of approximately
                  <span className="text-blue-300 font-semibold">
                    {" "}22.7%
                  </span>
                  {" "}from 2-Opt and approximately
                  <span className="text-purple-300 font-semibold">
                    {" "}13.6%
                  </span>
                  {" "}from LNS over the greedy baseline.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-blue-500/[0.08] border border-blue-400/15 text-center">
                  <div className="text-3xl font-extrabold text-blue-300">
                    22.7%
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Median 2-Opt improvement
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-purple-500/[0.08] border border-purple-400/15 text-center">
                  <div className="text-3xl font-extrabold text-purple-300">
                    13.6%
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Median LNS improvement
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* DISPATCH */}
      <section className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Dispatch"
            title="Routing becomes an assignment problem too"
            description="Once optimized routes exist, CityRoute can reason about which available driver should receive which route."
          />

          <GlassCard className="p-8 md:p-10">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-300 mb-6">
                  <Users size={32} />
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  Hungarian Assignment
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  The Hungarian algorithm provides a structured way to assign
                  routes to drivers using a cost matrix, separating route
                  generation from driver assignment.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-7">
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-xl bg-blue-500/10 border border-blue-400/15 p-4">
                    <Route className="mx-auto text-blue-300 mb-3" size={22} />
                    <div className="font-semibold">
                      Routes
                    </div>
                  </div>

                  <div className="flex items-center justify-center text-gray-600">
                    →
                  </div>

                  <div className="rounded-xl bg-purple-500/10 border border-purple-400/15 p-4">
                    <Database className="mx-auto text-purple-300 mb-3" size={22} />
                    <div className="font-semibold">
                      Cost Matrix
                    </div>
                  </div>

                  <div className="col-span-3 flex items-center justify-center text-gray-600">
                    ↓
                  </div>

                  <div className="col-span-3 rounded-xl bg-fuchsia-500/10 border border-fuchsia-400/15 p-5">
                    <Users className="mx-auto text-fuchsia-300 mb-3" size={23} />
                    <div className="font-semibold">
                      Optimal Driver Assignment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CACHING / INFRASTRUCTURE */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Infrastructure"
            title="The algorithms sit inside a resilient service"
            description="CityRoute was engineered around the operational reality that routing requests can be expensive and infrastructure dependencies can fail."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <GlassCard className="p-7">
              <Database className="text-blue-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Redis Cache
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Cache reusable computational results and reduce unnecessary
                repeated routing and matrix work.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Gauge className="text-cyan-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Concurrency Limits
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Bound the number of active requests so computational work does
                not grow without control under load.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Timer className="text-orange-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Timeouts
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Enforce request time limits around potentially expensive
                operations.
              </p>
            </GlassCard>

            <GlassCard className="p-7">
              <Activity className="text-green-300 mb-5" size={28} />
              <h3 className="text-xl font-bold mb-3">
                Observability
              </h3>
              <p className="text-sm text-gray-400 leading-7">
                Expose reliability behavior through Prometheus-oriented
                metrics and health checks.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* RELIABILITY */}
      <section id="reliability" className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Reliability Engineering"
            title="Failure handling is part of the architecture"
            description="The supplied project contains dedicated infrastructure and tests for cache failure, overload, timeouts, lifecycle events and dependency problems."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {reliability.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.06,
                }}
              >
                <GlassCard className="h-full p-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300 mb-5">
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

          <GlassCard className="mt-9 p-7 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-300 shrink-0">
                <AlertTriangle size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Engineering principle
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  A route service is useful only if it remains predictable
                  when dependencies fail or demand increases. CityRoute
                  therefore treats cache corruption, Redis failure,
                  unreachable route pairs, request overload, timeouts and
                  lifecycle transitions as explicit engineering cases.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* EVALUATION */}
      <section id="evaluation" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Validation"
            title="Algorithms and services tested separately and together"
            description="The supplied test suite contains dedicated unit, integration and resilience coverage across the routing stack."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testingAreas.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.07,
                }}
              >
                <GlassCard className="h-full p-7">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300 mb-5">
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

          {/* BENCHMARKS */}
          <div className="mt-12">
            <GlassCard className="p-7 md:p-9">
              <div className="flex items-center gap-3 mb-7">
                <BarChart3 className="text-blue-300" size={25} />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                    Recorded benchmark evidence
                  </p>

                  <h3 className="text-2xl font-bold">
                    Optimization results
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="rounded-2xl bg-blue-500/[0.07] border border-blue-400/15 p-6">
                  <div className="text-3xl font-extrabold text-blue-300">
                    22.7%
                  </div>

                  <div className="font-semibold mt-2">
                    2-Opt
                  </div>

                  <p className="text-sm text-gray-400 mt-2 leading-6">
                    Median improvement over greedy on the recorded 24-stop
                    open-route workload.
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-500/[0.07] border border-purple-400/15 p-6">
                  <div className="text-3xl font-extrabold text-purple-300">
                    13.6%
                  </div>

                  <div className="font-semibold mt-2">
                    LNS
                  </div>

                  <p className="text-sm text-gray-400 mt-2 leading-6">
                    Median improvement over greedy on the corresponding
                    recorded benchmark.
                  </p>
                </div>

                <div className="rounded-2xl bg-green-500/[0.07] border border-green-400/15 p-6">
                  <div className="text-3xl font-extrabold text-green-300">
                    80 / 80
                  </div>

                  <div className="font-semibold mt-2">
                    Road dispatch
                  </div>

                  <p className="text-sm text-gray-400 mt-2 leading-6">
                    Successful Docker road-dispatch validation cases.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* LOAD */}
          <div className="mt-7">
            <GlassCard className="p-7 md:p-9">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <Gauge className="text-cyan-300" size={25} />

                    <h3 className="text-2xl font-bold">
                      Load behavior
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base leading-7">
                    The recorded load evidence exercised the service with 480
                    requests and reports 480 successful responses, alongside
                    the concurrency, overload and timeout controls implemented
                    in the service.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-56 h-56 rounded-full border-8 border-cyan-400/20 flex flex-col items-center justify-center bg-cyan-500/[0.04]">
                    <div className="text-4xl font-extrabold text-cyan-300">
                      480/480
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      successful requests
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* TEST COUNT NOTE */}
          <div className="mt-7">
            <GlassCard className="p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-300 shrink-0">
                  <Terminal size={23} />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Test-suite evidence note
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-7">
                    The current supplied source snapshot contains a substantial
                    routing, optimization, caching, middleware and resilience
                    test suite. The portfolio does not rely on the
                    <span className="text-yellow-200 font-semibold">
                      {" "}610-test
                    </span>
                    {" "}figure as a fresh benchmark here because the supplied
                    snapshot exposes 576 explicit test functions; the 610
                    figure therefore remains an earlier recorded project claim.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FRONTEND */}
      <section className="relative py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Engineering Console"
            title="A frontend for inspecting the routing system"
            description="CityRoute also includes a React + TypeScript engineering console built around map-based visualization and the backend APIs."
          />

          <GlassCard className="p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-300 mb-6">
                  <Map size={30} />
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  React + TypeScript Console
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  The frontend uses React, TypeScript, Vite, React Leaflet,
                  Leaflet and Tailwind CSS to provide an engineering-oriented
                  interface around the route and dispatch services.
                </p>

                <div className="flex flex-wrap gap-2 mt-7">
                  {[
                    "React",
                    "TypeScript",
                    "Vite",
                    "React Leaflet",
                    "Leaflet",
                    "Tailwind CSS",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-7">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Map className="text-blue-300" size={22} />
                    <span className="text-gray-300">
                      Map-based road visualization
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Route className="text-cyan-300" size={22} />
                    <span className="text-gray-300">
                      Route inspection
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Truck className="text-purple-300" size={22} />
                    <span className="text-gray-300">
                      Dispatch-oriented workflows
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Activity className="text-green-300" size={22} />
                    <span className="text-gray-300">
                      Backend health and service behavior
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Technology"
            title="Technology stack"
            description="The project spans graph processing, optimization, backend services, infrastructure, reliability and frontend engineering."
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
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-300">
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

      {/* ENGINEERING SUMMARY */}
      <section className="relative py-24">
        <div className={sectionClass}>
          <GlassCard className="p-8 md:p-10">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <p className="text-blue-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
                  Engineering Summary
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  CityRoute is more than a shortest-path demo
                </h2>

                <p className="text-gray-400 leading-7 text-sm md:text-base max-w-3xl">
                  The project combines graph routing, optimization,
                  assignment algorithms and operational service engineering.
                  The important design goal is not only finding a route, but
                  building a system that can calculate, optimize, cache, serve,
                  observe and recover around real routing workloads.
                </p>
              </div>

              <div className="flex flex-wrap lg:flex-col gap-3">
                {[
                  "Graph Algorithms",
                  "Vehicle Routing",
                  "Dispatch Optimization",
                  "Resilient Backend",
                  "Observability",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/15 text-blue-200 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* REPOSITORY */}
      <section className="relative py-24 border-t border-white/5">
        <div className={sectionClass}>
          <GlassCard className="p-8 md:p-10">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-blue-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
                  Source & Documentation
                </p>

                <h2 className="text-3xl font-bold mb-4">
                  Explore the implementation
                </h2>

                <p className="text-gray-400 leading-7 text-sm md:text-base max-w-3xl">
                  The repository contains the routing algorithms, optimization
                  services, infrastructure components, middleware, tests,
                  benchmarks and frontend implementation behind CityRoute.
                </p>
              </div>

              <a
                href="https://github.com/anuushka-dev/CityRoute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold whitespace-nowrap"
              >
                Open Repository
                <Github size={18} />
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="relative py-28 border-t border-white/5">
        <div className={sectionClass}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-4">
              CityRoute
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-7">
              Routing, optimization and reliability in one system
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-8">
              CityRoute brings together real road-network routing, multi-order
              optimization, driver assignment and production-oriented backend
              infrastructure. It is designed as an engineering system around
              algorithms rather than as an isolated shortest-path experiment.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-9">
              {[
                "OSMnx",
                "NetworkX",
                "A*",
                "Bidirectional A*",
                "Source-Dijkstra",
                "VRP",
                "2-Opt",
                "LNS",
                "Hungarian",
                "Redis",
                "FastAPI",
                "Docker",
                "Prometheus",
                "React",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a
                href="https://github.com/anuushka-dev/CityRoute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-blue-950/20"
              >
                <Github size={20} />
                View CityRoute on GitHub
              </a>

              <Link
                to="/"
                className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] px-7 py-3.5 rounded-xl font-semibold transition"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026{" "}
            <span className="text-blue-300 font-semibold">
              Anushka
            </span>{" "}
            — CityRoute Route Optimization & Dispatch Platform
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Graph Algorithms • Vehicle Routing • Dispatch Optimization •
            Backend Reliability
          </p>
        </div>
      </footer>
    </div>
  );
}