<h1 align="center">Anushka</h1>

<h3 align="center">Software Engineer · Backend · Full-Stack · Applied AI</h3>

<p align="center">
I build systems end to end — APIs, algorithms, models, and the deployment around them.
</p>

<p align="center">
  <a href="https://anushkadev.vercel.app">Portfolio</a> •
  <a href="https://www.linkedin.com/in/anushkadev/">LinkedIn</a> •
  <a href="mailto:anuushka27@gmail.com">anuushka27@gmail.com</a>
</p>

---

## Selected work

| Project | What it is | Stack |
| --- | --- | --- |
| **[CityRoute-V3](https://github.com/anuushka-dev/CityRoute-V3)** | Last-mile routing and dispatch service: A\*/bidirectional A\*, road-distance matrices, greedy/2-opt/LNS vehicle routing, Hungarian dispatch — one FastAPI process serving the API and the React SPA | Python, FastAPI, NetworkX, Redis, React, Docker |
| **[DocuLens 0.2.0](https://github.com/anuushka-dev/Doculens-v2)** | PDF question answering that returns only verified excerpts with page citations, runs fully locally, and abstains when the document does not support an answer | Python, FastAPI, Ollama, PyMuPDF |
| **[Mini-ERP CRM](https://github.com/anuushka-dev/mini-erp-crm)** | Business operations platform: CRM, inventory, sales challans, role-based access, PDF export | React, TypeScript, Express, PostgreSQL, Prisma |
| **[Cyber Risk Detection](https://github.com/anuushka-dev/Cyber-Risk-Detection-Physical-Awareness-System)** | Network intrusion detection fused with physical-presence awareness and alerting | Python, XGBoost, OpenCV, FastAPI |
| **[Sign Language Translator](https://github.com/anuushka-dev/Sign-Language-Translator)** | Real-time ASL recognition with text and speech output | PyTorch, MediaPipe, WebSockets |
| **[Deepfake Image Detection](https://github.com/anuushka-dev/Deepfake-Image-Detection)** | Hybrid CNN + ResNet50 classifier trained on ~141k images | PyTorch, CUDA, OpenCV |

---

## Featured projects

### 🚚 CityRoute · Route Optimization & Dispatch

**Python · FastAPI · OSMnx · NetworkX · Redis · Docker · Prometheus**

Last-mile delivery routing and optimisation over real OpenStreetMap road networks, built as one deployable service: the same FastAPI process serves the JSON API and the React single-page app.

* Custom **A\*** and **bidirectional A\***, with Dijkstra kept as the reference the faster searches are checked against
* **Road-distance matrices** (N×N) plus a road-cost variant used for dispatch
* **Greedy, 2-opt and LNS** vehicle routing with per-stage improvement reporting
* **Hungarian (optimal) dispatch** compared against greedy assignment on load- and slot-aware costs
* BallTree GPS snapping, Redis caching and concurrency limits that **fail open**, readiness/liveness probes and Prometheus metrics
* 626 tests, Ruff-clean, CodeQL and Dependabot enabled, Docker, Compose and a Render blueprint
* The shipped graph loads through networkx when a host blocks the compiled pandas DLLs, so startup cannot be taken down by a machine policy

**[Code](https://github.com/anuushka-dev/CityRoute-V3)** · **[Live API](https://cityroute-demo.onrender.com)** · **[Swagger](https://cityroute-demo.onrender.com/docs)**

---

### 📄 DocuLens 0.2.0 · Document Intelligence

**Python · FastAPI · Ollama · PyMuPDF · PyTorch (CPU)**

Upload a PDF, ask a question, and inspect the exact passages and pages behind the answer. Answers are **verified excerpts with citations**, not generated prose: a model selects source sentences and a separate relevance review keeps only the supporting ones, so fabricated text cannot be attached to a genuine citation. When the document does not support an answer, the system says **“Out of PDF content”** instead of answering from general knowledge. Runs fully locally — no paid API key.

**[Code](https://github.com/anuushka-dev/Doculens-v2)**

---

### 🏢 Mini-ERP CRM · Full-Stack Operations Platform

**React · TypeScript · Node.js · Express · PostgreSQL · Prisma · JWT · Docker**

Business platform covering CRM, inventory, stock movements, sales challans, role-based access and PDF export.

* Backend-enforced **JWT + RBAC**
* Atomic challan confirmation with stock deduction inside PostgreSQL transactions
* Historical product snapshots preserve transaction integrity
* Docker Compose deployment and GitHub Actions CI

**[Code](https://github.com/anuushka-dev/mini-erp-crm)** · **[Live frontend](https://mini-erp-crm-flax.vercel.app/)**

---

### 🛡️ Cyber Risk Detection & Physical Awareness

**Python · FastAPI · XGBoost · OpenCV · scikit-learn**

Security monitoring that combines network intrusion detection with physical surveillance context.

* Flow processing → feature extraction → ML inference (XGBoost, CICIDS2017 features)
* Context fusion between cyber events and physical human presence
* FastAPI inference endpoints, event persistence, logging and Telegram alerting

**[Code](https://github.com/anuushka-dev/Cyber-Risk-Detection-Physical-Awareness-System)**

---

### ✋ Sign Language Translator · Real-Time Multimodal CV

**PyTorch · OpenCV · MediaPipe · FastAPI · WebSockets**

Real-time American Sign Language recognition from fused RGB hand crops and hand-skeleton images.

* Temporal smoothing, debouncing and prediction locking for stable output
* WebSocket inference service with an interactive React client
* Text-to-speech output with optional Hindi translation

**[Code](https://github.com/anuushka-dev/Sign-Language-Translator)** · **[v1](https://github.com/anuushka-dev/Sign-Language-translator-v1)** (team project; MobileNetV2 + Flask)

---

### 🧠 Deepfake Image Detection · Deep Learning

**PyTorch · ResNet50 · CUDA · OpenCV**

End-to-end deepfake classifier built from dataset collection to a demo interface.

* Hybrid **CNN + ResNet50** architecture
* ~141,000 balanced real/fake face images, GPU training on WSL2 + CUDA
* Full pipeline — dataset → preprocessing → training → evaluation → deployment UI — with the evaluation plots committed next to the code

**[Code](https://github.com/anuushka-dev/Deepfake-Image-Detection)**

---

## Engineering focus

**Backend & Systems**
Python · FastAPI · Node.js · Express · REST APIs · WebSockets · PostgreSQL · Redis

**AI / ML**
PyTorch · XGBoost · scikit-learn · OpenCV · MediaPipe · Model serving · Computer vision

**Cloud & Infrastructure**
Docker · Docker Compose · GitHub Actions · GCP · Render · Vercel · Linux · Nginx · Prometheus

**Algorithms & Optimization**
A\* · Bidirectional A\* · Dijkstra · VRP · 2-Opt · LNS · Hungarian algorithm · Distance matrices

**Languages**
Python · TypeScript · JavaScript · SQL

---

## How I engineer

I focus on the layer beyond the first working prototype:

* clear API and data boundaries
* validation and failure handling, including deliberate failure modes rather than silent ones
* transactional correctness where state changes
* caching, concurrency and performance measured rather than assumed
* automated tests, lint and CI gates on every change
* containerised, reproducible deployment
* observability, benchmarking and documented production boundaries

Every project README states what is finished and what is not. Measurements are committed next to the code that produced them, so any claim can be re-derived instead of trusted.

---

## Currently looking for

**Software Engineering · Backend Engineering · Full-Stack · Applied AI/ML**

Open to internships and full-time engineering roles.

---

<p align="center">
  <b>Portfolio:</b> <a href="https://anushkadev.vercel.app">anushkadev.vercel.app</a> · <b>Email:</b> <a href="mailto:anuushka27@gmail.com">anuushka27@gmail.com</a>
</p>
