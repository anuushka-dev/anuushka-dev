import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  FileText,
  Database,
  Server,
  ShieldCheck,
  Boxes,
  Workflow,
  CheckCircle2,
  Container,
  GitBranch,
  Users,
  Package,
  Warehouse,
  ReceiptText,
  LockKeyhole,
  Code2,
  Layers3,
  Activity,
  FileDown,
  Search,
  Settings2,
} from "lucide-react";

const sectionClass = "max-w-6xl mx-auto px-4 md:px-6";

const PROJECT_LINKS = {
  github: "https://github.com/anuushka-dev/mini-erp-crm",
  documentation: "https://github.com/anuushka-dev/mini-erp-crm#readme",
  live: "https://mini-erp-crm-flax.vercel.app/"
};

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
        <p className="text-cyan-300 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
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

function MetricCard({ icon, value, label, description }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-300/10 text-cyan-200">
          {icon}
        </div>

        <div>
          <div className="text-2xl font-extrabold text-white">{value}</div>
          <div className="text-cyan-200 font-semibold text-sm mt-1">
            {label}
          </div>
          <p className="text-gray-400 text-sm leading-6 mt-2">
            {description}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

function CodeFlow({ children }) {
  return (
    <pre className="overflow-x-auto rounded-xl bg-black/35 border border-white/10 p-5 text-sm md:text-base text-gray-200 leading-7">
      <code>{children}</code>
    </pre>
  );
}

export default function MiniERPProjectPage() {
  const roles = [
    {
      icon: <LockKeyhole size={22} />,
      title: "ADMIN",
      text: "Full access to customers, products, inventory, stock movements and challans.",
    },
    {
      icon: <Users size={22} />,
      title: "SALES",
      text: "Manage customers, view products and inventory, and create, update, confirm and cancel challans.",
    },
    {
      icon: <Warehouse size={22} />,
      title: "WAREHOUSE",
      text: "Manage products, inventory and stock movements, while viewing customers and challans.",
    },
    {
      icon: <ReceiptText size={22} />,
      title: "ACCOUNTS",
      text: "Read-only visibility across customers, products, inventory and challans.",
    },
  ];

  const modules = [
    {
      icon: <Users size={24} />,
      title: "Customer CRM",
      text: "Customer master data, search, details and follow-up history.",
    },
    {
      icon: <Package size={24} />,
      title: "Products",
      text: "Product master management with SKU, category, pricing and stock information.",
    },
    {
      icon: <Warehouse size={24} />,
      title: "Inventory",
      text: "Current stock, IN/OUT movements, movement history and low-stock monitoring.",
    },
    {
      icon: <ReceiptText size={24} />,
      title: "Sales Challans",
      text: "Draft creation, multi-product line items, confirmation, cancellation and PDF export.",
    },
  ];

  const stack = [
    ["Frontend", "React · TypeScript · Vite · React Router · Axios"],
    ["Backend", "Node.js · Express · TypeScript · JWT · bcryptjs · Zod"],
    ["Database", "PostgreSQL · Prisma 7.10"],
    ["Infrastructure", "Docker · Docker Compose · Nginx · GitHub Actions"],
    ["Export", "PDFKit"],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061016] via-[#0c1720] to-[#10253a] text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[34%] -right-40 w-[34rem] h-[34rem] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[32%] w-[30rem] h-[20rem] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/45 backdrop-blur-xl border-b border-white/10">
        <div className={`${sectionClass} py-4 flex items-center gap-4`}>
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm font-semibold text-gray-200"
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
            <a href="#workflow" className="hover:text-white transition">
              Workflow
            </a>
            <a href="#stack" className="hover:text-white transition">
              Stack
            </a>
            <a href="#decisions" className="hover:text-white transition">
              Decisions
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROJECT_LINKS.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-sm font-semibold transition"
            >
              <FileText size={16} />
              Documentation
            </a>

            <a
              href={PROJECT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500/15 border border-cyan-300/20 hover:bg-cyan-500/25 text-sm font-semibold transition"
            >
              <Github size={16} />
              <span className="hidden sm:inline">View Code</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="overview" className="relative pt-36 pb-24 scroll-mt-24">
        <div className={sectionClass}>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-300/15 text-cyan-200 text-sm mb-7">
                <Boxes size={17} />
                Full-Stack Engineering · ERP · CRM · Inventory
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
                Mini-ERP
                <span className="block text-cyan-200">CRM Operations Portal</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-8 mt-8 max-w-3xl">
                A full-stack operations system connecting customer CRM,
                product master data, inventory, sales challans and
                role-based access through a transactional backend.
              </p>

              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href={PROJECT_LINKS.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-300 transition"
                >
                  <ExternalLink size={18} />
                  Live Application
                </a>

                <a
                  href={PROJECT_LINKS.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-gray-100 font-semibold transition"
                >
                  <FileText size={18} />
                  Documentation
                </a>

                <a
                  href={PROJECT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-gray-100 font-semibold transition"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <GlassCard className="p-6 md:p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-200">
                    <Workflow size={25} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Core System Flow</p>
                    <p className="text-sm text-gray-400">
                      From user action to persistent business state
                    </p>
                  </div>
                </div>

                <CodeFlow>{`React Frontend
      ↓
REST / Axios
      ↓
Express API
      ↓
Authentication + RBAC
      ↓
Controllers
      ↓
Validation
      ↓
Services
      ↓
Prisma
      ↓
PostgreSQL`}</CodeFlow>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Core
                    </p>
                    <p className="text-sm text-gray-200 mt-1">
                      CRM + Inventory + Sales
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Reliability
                    </p>
                    <p className="text-sm text-gray-200 mt-1">
                      Transactional stock updates
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-14">
            <MetricCard
              icon={<Users size={22} />}
              value="4"
              label="Role Model"
              description="Admin, Sales, Warehouse and Accounts."
            />
            <MetricCard
              icon={<Database size={22} />}
              value="8"
              label="Core Entities"
              description="Users, customers, follow-ups, products, warehouses, movements, challans and items."
            />
            <MetricCard
              icon={<ShieldCheck size={22} />}
              value="1"
              label="Critical Transaction"
              description="Challan confirmation protects stock consistency across multiple writes."
            />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 border-y border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Business Modules"
            title="Built around the actual operations"
            description="Each module owns a clear business responsibility while sharing the same authenticated REST API and persistence layer."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {modules.map((module) => (
              <GlassCard key={module.title} className="p-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-200 h-fit">
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">{module.title}</h3>
                    <p className="text-gray-400 leading-7 mt-2">{module.text}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-24 scroll-mt-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Architecture"
            title="Layered backend, modular business domains"
            description="The application separates HTTP handling, cross-cutting concerns, business logic and persistence so each part has a clear responsibility."
          />

          <GlassCard className="p-6 md:p-8">
            <CodeFlow>{`HTTP Request
     │
     ▼
Express / app.ts
     │
     ▼
Authentication Middleware
     │
     ▼
Role Middleware
     │
     ▼
Module Route
     │
     ▼
Controller
     │
     ▼
Zod Validation
     │
     ▼
Service
     │
     ▼
Prisma Client
     │
     ▼
PostgreSQL`}</CodeFlow>
          </GlassCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              ["Routes", "Define the REST API surface and connect requests to controllers."],
              ["Controllers", "Handle the HTTP boundary and delegate work to services."],
              ["Services", "Contain business rules and persistence operations."],
              ["Prisma", "Provides typed database access and schema/migration management."],
            ].map(([title, text]) => (
              <GlassCard key={title} className="p-5">
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-sm text-gray-400 leading-6 mt-2">{text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-24 bg-white/[0.02] border-y border-white/5 scroll-mt-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Critical Business Workflow"
            title="Atomic challan confirmation"
            description="The main consistency-sensitive operation connects sales and inventory. Confirmation is treated as a single business transaction."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-amber-400/10 text-amber-200">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">
                    Successful confirmation
                  </h3>
                  <p className="text-gray-400 text-sm">
                    All related writes succeed together.
                  </p>
                </div>
              </div>

              <CodeFlow>{`Draft Challan
     ↓
Load All Items
     ↓
Begin Transaction
     ↓
Check Every Product Stock
     ↓
Deduct Stock
     ↓
Create OUT Movements
     ↓
Mark Challan CONFIRMED
     ↓
Commit`}</CodeFlow>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-red-400/10 text-red-200">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">
                    Failure / rollback
                  </h3>
                  <p className="text-gray-400 text-sm">
                    No partial stock deduction.
                  </p>
                </div>
              </div>

              <CodeFlow>{`Product A: stock 8
Product B: stock 4

Request:
A → 5
B → 10

        ↓
Stock validation fails

        ↓
Rollback

Result:
A → 8
B → 4
Challan → DRAFT`}</CodeFlow>
            </GlassCard>
          </div>

          <GlassCard className="mt-6 p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-200">
                <Settings2 size={24} />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">
                  Why this matters
                </h3>
                <p className="text-gray-400 leading-7 mt-1">
                  Stock deduction, inventory history and challan status represent
                  one business event. Treating them as a transaction prevents the
                  system from landing in a partially updated state.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Snapshot + Roles */}
      <section className="py-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Data Integrity"
            title="Historical records stay historically correct"
            description="The transaction model deliberately keeps the values needed to represent what was sold at the time the challan was created."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <FileText size={23} className="text-cyan-200" />
                <h3 className="text-white text-xl font-bold">
                  Product snapshots
                </h3>
              </div>

              <CodeFlow>{`ChallanItem
├── productId
├── productNameSnapshot
├── skuSnapshot
├── unitPriceSnapshot
└── quantity`}</CodeFlow>

              <p className="text-gray-400 leading-7 mt-5">
                If the current product master changes later, the historical
                challan continues to show the product information that belonged
                to the transaction.
              </p>
            </GlassCard>

            <div className="grid sm:grid-cols-2 gap-4">
              {roles.map((role) => (
                <GlassCard key={role.title} className="p-5">
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-200 w-fit">
                    {role.icon}
                  </div>
                  <h3 className="text-white font-bold mt-4">{role.title}</h3>
                  <p className="text-gray-400 text-sm leading-6 mt-2">
                    {role.text}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Infrastructure"
            title="Reproducible local and deployment environments"
            description="The same application is packaged into separate frontend, backend and database concerns."
          />

          <div className="grid lg:grid-cols-3 gap-5">
            <GlassCard className="p-6">
              <Container className="text-cyan-200" size={26} />
              <h3 className="text-white text-xl font-bold mt-4">Docker Compose</h3>
              <p className="text-gray-400 leading-7 mt-2">
                Orchestrates PostgreSQL, backend and frontend services.
              </p>
              <CodeFlow>{`PostgreSQL
postgres:5432

Backend
:5000

Frontend
:80`}</CodeFlow>
            </GlassCard>

            <GlassCard className="p-6">
              <Server className="text-cyan-200" size={26} />
              <h3 className="text-white text-xl font-bold mt-4">
                Environment configuration
              </h3>
              <p className="text-gray-400 leading-7 mt-2">
                Database URLs, JWT configuration and service ports are supplied
                through environment variables.
              </p>
              <CodeFlow>{`DATABASE_URL
JWT_SECRET
JWT_EXPIRES_IN
NODE_ENV
PORT`}</CodeFlow>
            </GlassCard>

            <GlassCard className="p-6">
              <GitBranch className="text-cyan-200" size={26} />
              <h3 className="text-white text-xl font-bold mt-4">
                GitHub Actions
              </h3>
              <p className="text-gray-400 leading-7 mt-2">
                Clean CI environment validates dependency installation, Prisma
                generation and frontend/backend builds.
              </p>
              <CodeFlow>{`Checkout
  ↓
Node
  ↓
npm ci
  ↓
Prisma generate
  ↓
Build backend
  ↓
Build frontend`}</CodeFlow>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-24 scroll-mt-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Technology Stack"
            title="Focused full-stack tooling"
            description="The stack is intentionally straightforward: typed application code, relational persistence, containerized services and automated builds."
          />

          <div className="grid md:grid-cols-2 gap-4">
            {stack.map(([title, text]) => (
              <GlassCard key={title} className="p-6">
                <div className="flex items-center gap-3">
                  <Code2 size={22} className="text-cyan-200" />
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
                <p className="text-gray-400 leading-7 mt-3">{text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* API */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="API Surface"
            title="REST endpoints organized by business capability"
            description="The frontend communicates through a predictable API boundary rather than directly accessing the database."
          />

          <div className="grid lg:grid-cols-2 gap-5">
            {[
              ["Auth", "POST /api/auth/login\nGET /api/auth/me"],
              ["Customers", "GET /api/customers\nPOST /api/customers\nGET /api/customers/:id\nPUT /api/customers/:id"],
              ["Inventory", "GET /api/inventory\nGET /api/inventory/:productId/movements\nPOST /api/inventory/movements"],
              ["Challans", "GET /api/challans\nPOST /api/challans\nPUT /api/challans/:id\nPOST /api/challans/:id/confirm\nPOST /api/challans/:id/cancel"],
            ].map(([title, endpoints]) => (
              <GlassCard key={title} className="p-6">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <pre className="mt-4 whitespace-pre-wrap text-sm text-gray-300 leading-7">
                  {endpoints}
                </pre>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section id="decisions" className="py-24 scroll-mt-24">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Engineering Decisions"
            title="Trade-offs made deliberately"
            description="The architecture favors clear business boundaries and correctness over unnecessary complexity."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Prisma + PostgreSQL",
                icon: <Database size={22} />,
                text: "Prisma provides typed persistence and schema/migration tooling. PostgreSQL provides relational integrity and transactional semantics.",
              },
              {
                title: "Modular backend",
                icon: <Layers3 size={22} />,
                text: "More structure than a single controller file, but clearer ownership across auth, CRM, products, inventory and challans.",
              },
              {
                title: "JWT + backend RBAC",
                icon: <ShieldCheck size={22} />,
                text: "Authentication identifies the caller; authorization is independently enforced by the API instead of relying on frontend visibility.",
              },
              {
                title: "Snapshots in transactions",
                icon: <FileText size={22} />,
                text: "Controlled duplication in challan items preserves historical correctness when product master data changes.",
              },
            ].map((item) => (
              <GlassCard key={item.title} className="p-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-200 h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-400 leading-7 mt-2">{item.text}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className={sectionClass}>
          <SectionTitle
            eyebrow="Demo"
            title="The flow to see first"
            description="The strongest demonstration is the path from authenticated sales activity to a consistent inventory state."
          />

          <GlassCard className="p-6 md:p-8">
            <div className="grid md:grid-cols-5 gap-3">
              {[
                ["01", "Login"],
                ["02", "Customer"],
                ["03", "Product / Stock"],
                ["04", "Create Challan"],
                ["05", "Confirm + Verify"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-cyan-300 text-xs font-bold tracking-wider">
                    {number}
                  </p>
                  <p className="text-white font-semibold mt-2">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                ["Stock Check", "Show that insufficient stock fails safely."],
                ["Atomicity", "Show that earlier items are not partially deducted."],
                ["History", "Show OUT movements and the confirmed challan."],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="text-cyan-200 shrink-0 mt-1" size={19} />
                  <div>
                    <p className="text-white font-semibold">{title}</p>
                    <p className="text-gray-400 text-sm leading-6 mt-1">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20">
        <div className={sectionClass}>
          <GlassCard className="p-8 md:p-10 text-center">
            <div className="flex justify-center gap-3 mb-5">
              <FileDown className="text-cyan-200" size={25} />
              <Search className="text-cyan-200" size={25} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Explore the implementation
            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 leading-7 mt-4">
              Read the architecture and setup documentation, inspect the source,
              and use the live application to follow the complete business flow.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-7">
              <a
                href={PROJECT_LINKS.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-300 transition"
              >
                <FileText size={18} />
                Documentation
              </a>

              <a
                href={PROJECT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold transition"
              >
                <Github size={18} />
                GitHub Repository
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
