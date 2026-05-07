### Biguo Xin

Systems / Infrastructure Engineer  
Email: xwhxbg@gmail.com  
GitHub: https://github.com/FrontMage  
Location: China
Age: 34

---

### Professional Summary

Systems and infrastructure engineer with 9+ years of experience across Rust, Go, distributed systems, networking, and runtime debugging. Built and operated VPN, proxy, edge-compute, and high-concurrency backend systems, with hands-on ownership of performance tuning, rollout safety, and production troubleshooting. Contributed fixes upstream to FEX and box64, including instruction-decoding correctness, ARM64 dynarec behavior, and executable-memory tracking investigations in Wine + FEX compatibility stacks. Also build AI-assisted engineering workflows with durable instructions, reusable skills, MCP-integrated tooling, and verification-driven execution. Strongest in low-level debugging, compatibility issues, and making complex systems observable and stable.

---

### Open Source Contributions

- **FEX PR #5289**: Fixed x87 FCOM/FCOMP `st(i)` decoding and dispatch-table sizing, eliminating SIGILL and incorrect dispatch paths in 32-bit guest workloads running through Wine + FEX on ARM64.  
  https://github.com/FEX-Emu/FEX/pull/5289
- **box64 PR #3513**: Corrected BOX32 ARPL (`0x63`) semantics in both the interpreter and ARM64 dynarec, added a regression test, and helped close a real compatibility issue affecting production-like guest execution.  
  https://github.com/ptitSeb/box64/pull/3513
- **FEX issue #5328 investigation**: Produced reproducible traces and isolated an executable-memory tracking gap around `MEM_MAPPED + PAGE_EXECUTE_READ`, helping narrow down a high-impact NoExec / `C0000005` failure loop in the Windows compatibility path.  
  https://github.com/FEX-Emu/FEX/issues/5328

---

### Professional Experience

**Deeper Network**  
Software Engineer / Tech Lead | Oct 2021 - Present

- Led architecture and delivery for networking and platform components spanning transparent proxying, VPN clients, edge compute, and backend services.
- Built cross-platform VPN and traffic-relay systems for iOS, Android, Windows, macOS, and Linux, including gVisor-based traffic interception, NAT traversal, tunnel-based DNS, and policy-driven forwarding.
- Designed and implemented transparent HTTP/HTTPS proxy infrastructure with TLS interception, traffic modification, content filtering, and embedded JavaScript execution for advanced rule processing.
- Developed distributed edge-compute infrastructure in Rust with EVM-based scheduling, task dispatch, node management, and Docker-based execution on edge nodes.
- Improved release safety and operational stability for high-concurrency HTTP/TCP services through profiling, benchmarking, zero-downtime deployment, and progressive rollout strategies.
- Built an internal RAG-based support knowledge system that automated document ingestion, vector retrieval, and LLM-assisted Q&A for support workflows.

**Chenwu Technology**  
CTO | Aug 2020 - Jun 2021

- Built Rust-based communication runtimes for covert and peer-to-peer transport on top of tox and Tokio, with custom codec, frame, session, and router layers.
- Implemented audio-based transfer of JSON and binary payloads and adapted drivers for HiSilicon hardware to support low-power, long-lived Bluetooth communication.
- Optimized FFT/IFFT-based signal-processing and watermarking pipelines for Armv8 with SIMD and for NVIDIA GPUs with CUDA.

**Wuhan University, Big Data Research Institute**  
Software Engineer | Aug 2018 - Aug 2020

- Built data pipelines that transformed MySQL datasets into RDF and imported them into graph databases such as Neo4j.
- Implemented graph-query APIs and graph-analysis capabilities with SPARQL, covering metrics such as indegree, outdegree, density, distance, and cycle-related queries.
- Delivered graph-visualization interfaces with D3.js and ECharts for research and business-facing use cases.

**YueRanXinDong**  
Backend Engineer | Aug 2017 - Apr 2018

- Developed backend services in Node.js and Go, including asynchronous workflow handling and integrations with Python services.
- Built social application backends with Gin, GORM, PostgreSQL, and PostGIS, and supported deployment workflows through Jenkins and AWS infrastructure.

**HangbanGuanjia**  
Frontend Engineer | May 2016 - Jul 2017

- Built and maintained a Mithril-based single-page application with routing, state management, session restoration, and complex interactive components.
- Maintained GitLab and GitLab CI infrastructure, including upgrades, migration work, and production debugging.
- Implemented server-side rendering and API gateway services in Express/Node.js with bundling, request tracing, caching, and dynamic TypeScript compilation.

---

### Selected Skills

**AI Workflow**  
Design agent-friendly development workflows with explicit task context, durable repo instructions, reusable skills, MCP-backed tool integration, and verification-driven execution. Strong at turning ambiguous engineering work into repeatable, debuggable delivery pipelines for coding, ops, and regression handling.

**Languages**  
Rust, Go, Python, TypeScript, JavaScript, Erlang

**Systems**  
Linux, distributed systems, networking, VPN/proxy infrastructure, Docker, Kubernetes, observability, profiling, benchmarking, zero-downtime delivery

**Specialized**  
Wine, FEX, box64, ARM64 compatibility, runtime debugging, FFI, SIMD, CUDA, EVM-based scheduling systems

---

### Selected Projects

- **[winlator-llm](https://github.com/FrontMage/winlator-llm)**: LLM workflow product built as a Winlator fork, turning low-level runtime tuning, compatibility knobs, graphics-stack switches, and environment configuration into a more accessible and debuggable user-facing system.
- **[rock](https://github.com/FrontMage/rock)**: Full-stack blog system built with Rust, using Rust + WASM on the frontend and `actix-web` on the backend.
- **[pm](https://github.com/FrontMage/pm)**: Process manager in Go, designed as a lightweight alternative to `pm2` for service supervision and control.
- **[xinge](https://github.com/FrontMage/xinge)**: Go library for Tencent Xinge push APIs, adopted in practice as a reusable backend integration library.
- **[HelloGithub2zhihu](https://github.com/FrontMage/HelloGithub2zhihu)**: Automation tool built with Puppeteer to sync curated GitHub content into publishable Zhihu articles.

---

### Education

**Heilongjiang University**  
B.Sc. in Mathematics and Applied Mathematics | 2010 - 2015
