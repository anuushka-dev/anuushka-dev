 
<h1 align="center">Anushka</h1>

<h3 align="center">Software Engineer · Backend Engineering · Full-Stack Development · Applied AI</h3>

<p align="center">
I build end-to-end software systems — from APIs, algorithms, and machine-learning pipelines to testing, observability, and deployment.
</p>

<p align="center">
  <a href="https://anushkadev.vercel.app">Portfolio</a> •
  <a href="https://www.linkedin.com/in/anushkadev/">LinkedIn</a> •
  <a href="mailto:anuushka27@gmail.com">Email</a> •
  <a href="https://github.com/anuushka-dev">GitHub</a>
</p>

---

## About Me

I'm focused on backend engineering, distributed application design, full-stack systems, and applied artificial intelligence.

I enjoy building projects that go beyond working prototypes — with reliable APIs, algorithmic correctness, measurable performance, automated testing, containerized deployment, and documented engineering trade-offs.

My work spans routing optimization, document intelligence, business operations software, cybersecurity, and computer vision.

---

## Selected Projects

| Project | Description | Technology |
|---|---|---|
| **[CityRoute V3](https://github.com/anuushka-dev/CityRoute-V3)** | Road-network routing, delivery optimization, multi-driver dispatch, and real-time engineering observability | Python, FastAPI, NetworkX, OSMnx, Redis, React, Docker |
| **[DocuLens V3](https://github.com/anuushka-dev/Doculens-V3)** | Evidence-grounded PDF question answering with hybrid retrieval, verified citations, and multi-provider AI integration | Python, FastAPI, PyMuPDF, FAISS, Sentence Transformers, Ollama |
| **[Mini-ERP CRM](https://github.com/anuushka-dev/mini-erp-crm)** | Full-stack CRM, inventory management, sales processing, and role-based business operations | React, TypeScript, Express, PostgreSQL, Prisma |
| **[Cyber Risk Detection](https://github.com/anuushka-dev/Cyber-Risk-Detection-Physical-Awareness-System)** | Network intrusion detection combined with physical-presence awareness and alerting | Python, XGBoost, OpenCV, FastAPI |
| **[Sign Language Translator](https://github.com/anuushka-dev/Sign-Language-Translator)** | Real-time sign language recognition with text and speech output | PyTorch, MediaPipe, OpenCV, WebSockets |
| **[Deepfake Image Detection](https://github.com/anuushka-dev/Deepfake-Image-Detection)** | Hybrid CNN and ResNet50 deepfake image classification system | PyTorch, CUDA, OpenCV |

---

## Featured Engineering Projects

### 🚚 CityRoute V3 — Routing, Optimization & Dispatch

**Python · FastAPI · NetworkX · OSMnx · Redis · React · Docker · Prometheus**

A full-stack urban routing and last-mile logistics system that operates over real OpenStreetMap road networks.

CityRoute combines shortest-path algorithms, delivery optimization, driver assignment, caching, and system observability into a single deployable application.

**Engineering highlights:**

- Implemented **A\*** and **Bidirectional A\*** shortest-path search, with Dijkstra used as a correctness reference.
- Built road-network **distance and ETA matrices** for multiple locations.
- Implemented **Greedy, 2-Opt, and Large Neighborhood Search (LNS)** for vehicle route optimization.
- Compared **Hungarian optimal assignment** with greedy multi-driver dispatch.
- Integrated **BallTree coordinate snapping**, graph connectivity analysis, and routing geometry.
- Added Redis caching with graceful fallback, concurrency controls, request timeouts, and readiness checks.
- Built a React dashboard with interactive routing, dispatch, and engineering telemetry.
- Developed automated testing, Ruff checks, CodeQL scanning, Docker builds, and GitHub Actions workflows.
- Added a NetworkX-based graph-loading fallback for environments where optional compiled dependencies are unavailable.

**Engineering focus:** Algorithmic correctness, reliability, performance, and production-oriented architecture.

**Links:**

[Main Repository](https://github.com/anuushka-dev/CityRoute-V3) · [Deployment Repository](https://github.com/anuushka-dev/CityRoute-demo-V3-final) · [Render Demo](https://cityroute-demo-v3-final.onrender.com/) · [API Documentation](https://cityroute-demo-v3-final.onrender.com/docs)

*Render demo may be temporarily unavailable while the service is suspended.*

---

### 📄 DocuLens V3 — AI-Powered Document Intelligence

**Python 3.12 · FastAPI · FAISS · Sentence Transformers · BM25 · PyMuPDF · Ollama · Docker**

An evidence-grounded PDF question-answering application designed to retrieve document information and verify supporting citations.

DocuLens combines hybrid information retrieval, AI model integration, and deterministic evidence verification to produce answers traceable to uploaded documents.

**Engineering highlights:**

- Built isolated PDF ingestion with page-level text extraction using **PyMuPDF**.
- Implemented **hybrid retrieval** combining FAISS semantic search and BM25 lexical search.
- Added Reciprocal Rank Fusion to combine retrieval results.
- Developed deterministic citation verification using exact text spans and PDF page references.
- Designed an explicit abstention mechanism for questions lacking sufficient document evidence.
- Integrated multiple AI providers, including OpenAI, Gemini, Anthropic, Groq, OpenRouter, and compatible custom endpoints.
- Supported optional offline model execution with **Ollama**.
- Added model selection, provider configuration, and multiple reasoning/verification effort levels.
- Implemented prompt clarification, conversation context, and interactive PDF source inspection.
- Added document-session isolation, upload limits, structured validation, and security controls.
- Containerized the application with Docker and automated checks through GitHub Actions.

**Engineering focus:** Retrieval quality, evidence traceability, LLM integration, and defensive API design.

**Links:**

[Source Code](https://github.com/anuushka-dev/Doculens-V3) · [Render Demo](https://doculens-v3.onrender.com/) · [Previous Version](https://github.com/anuushka-dev/Doculens-v2)

*Render demo may be temporarily unavailable while the service is suspended. The application also supports local deployment.*

---

### 🏢 Mini-ERP CRM — Full-Stack Business Operations

**React · TypeScript · Node.js · Express · PostgreSQL · Prisma · JWT · Docker**

A business operations platform covering customer management, inventory tracking, sales processing, and access-controlled workflows.

**Engineering highlights:**

- Developed a full-stack CRM and inventory management platform.
- Implemented backend-enforced **JWT authentication and role-based access control (RBAC)**.
- Built sales challan creation, confirmation, and PDF export.
- Used PostgreSQL transactions for atomic stock deduction.
- Preserved historical product snapshots for transaction consistency.
- Integrated Prisma ORM, Docker Compose, and GitHub Actions CI.

**Links:**

[Source Code](https://github.com/anuushka-dev/mini-erp-crm) · [Live Frontend](https://mini-erp-crm-flax.vercel.app/)

---

### 🛡️ Cyber Risk Detection & Physical Awareness

**Python · FastAPI · XGBoost · OpenCV · scikit-learn**

A security monitoring system combining network intrusion detection with physical-environment awareness.

**Engineering highlights:**

- Built a pipeline for network-flow processing and feature extraction.
- Applied XGBoost to intrusion detection using CICIDS2017-derived features.
- Combined network activity with physical human-presence signals.
- Developed FastAPI inference endpoints, event logging, and alerting.
- Integrated Telegram notifications for security events.

[Source Code](https://github.com/anuushka-dev/Cyber-Risk-Detection-Physical-Awareness-System)

---

### ✋ Sign Language Translator — Real-Time Computer Vision

**PyTorch · OpenCV · MediaPipe · FastAPI · WebSockets**

A real-time American Sign Language recognition application with an interactive interface and speech output.

**Engineering highlights:**

- Combined RGB hand images with MediaPipe hand-landmark representations.
- Built a real-time gesture recognition and inference pipeline.
- Applied temporal smoothing, prediction locking, and debouncing to stabilize predictions.
- Integrated WebSockets for interactive communication.
- Added text-to-speech output and optional Hindi translation.

**Links:**

[Current Project](https://github.com/anuushka-dev/Sign-Language-Translator) · [Earlier Team Version](https://github.com/anuushka-dev/Sign-Language-translator-v1)

---

### 🧠 Deepfake Image Detection — Deep Learning

**PyTorch · ResNet50 · CNN · CUDA · OpenCV**

An image-forensics project for classifying authentic and AI-manipulated facial images.

**Engineering highlights:**

- Designed a hybrid **CNN + ResNet50** classification architecture.
- Worked with approximately **141,000 real and synthetic face images**.
- Built dataset preparation, preprocessing, model training, and evaluation pipelines.
- Used CUDA acceleration and GPU training through WSL2.
- Developed a demonstration interface and maintained evaluation artifacts.

[Source Code](https://github.com/anuushka-dev/Deepfake-Image-Detection)

---

## Technical Skills

| Area | Technologies |
|---|---|
| **Languages** | Python, TypeScript, JavaScript, SQL |
| **Backend** | FastAPI, Node.js, Express, REST APIs, WebSockets |
| **Frontend** | React, HTML, CSS, Vite |
| **Databases & Caching** | PostgreSQL, Prisma, Redis |
| **AI & Machine Learning** | PyTorch, XGBoost, scikit-learn, FAISS, Sentence Transformers, OpenCV, MediaPipe |
| **LLM Engineering** | Ollama, LLM APIs, RAG, hybrid retrieval, prompt engineering, citation verification |
| **DevOps & Cloud** | Docker, Docker Compose, GitHub Actions, GCP, Render, Vercel, Linux, Nginx |
| **Observability** | Prometheus, logging, performance benchmarking, health and readiness checks |
| **Algorithms** | A\*, Bidirectional A\*, Dijkstra, VRP, 2-Opt, LNS, Hungarian algorithm |

---

## Engineering Principles

I focus on the engineering work that makes software maintainable, testable, and deployable.

- **Correctness:** Algorithms validated against reference implementations and regression tests.
- **Reliability:** Explicit failure handling, readiness checks, bounded concurrency, and fallback mechanisms.
- **Security:** Input validation, authentication, access controls, credential handling, and dependency scanning.
- **Performance:** Measured optimization, caching, indexing, and resource-aware implementation.
- **Reproducibility:** Version-controlled dependencies, Docker environments, automated testing, and CI workflows.
- **Transparency:** Documented limitations, benchmark results, and clear distinctions between implemented and planned functionality.

I value engineering decisions that can be explained, measured, and independently verified.

---

## Opportunities

Interested in opportunities across:

**Software Engineering · Backend Engineering · Full-Stack Development · Applied AI/ML**

Open to internships, engineering collaborations, and relevant software development opportunities.

---

<p align="center">
  <b>Explore My Work</b>
</p>

<p align="center">
  <a href="https://anushkadev.vercel.app">Portfolio</a> •
  <a href="https://github.com/anuushka-dev">GitHub</a> •
  <a href="https://www.linkedin.com/in/anushkadev/">LinkedIn</a> •
  <a href="mailto:anuushka27@gmail.com">Contact</a>
</p>
