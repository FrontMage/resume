### 辛必果

系统 / 基础设施工程师  
邮箱：xwhxbg@gmail.com  
GitHub：https://github.com/FrontMage  
所在地：中国
年龄：34

---

### 个人简介

9 年以上工程经验，长期专注于 Rust、Golang、分布式系统、网络栈与运行时调试。主导和参与过 VPN、透明代理、边缘计算、高并发后端等系统的设计、实现与稳定性优化，覆盖性能调优、发布安全、问题排查与生产运维闭环。向 FEX 和 box64 上游贡献过兼容性与指令语义修复，也参与过 Wine + FEX 场景下可执行内存追踪问题的定位。与此同时，具备 AI 辅助研发工作流设计能力，并有 NLP 基本原理、常见模型、RAG、LangChain 编排与 Agent 工程实践背景，能够围绕长期指令、可复用 skills、MCP 工具接入与验证驱动执行，构建可重复、可调试的工程流程。最擅长的方向是底层问题定位、兼容性修复，以及把复杂系统做得更稳定、更可观测。

---

### 开源贡献（FEX / box64）

- **FEX PR #5289**：修复 x87 FCOM/FCOMP `st(i)` 解码与分发表尺寸问题，消除 32-bit guest 在 Wine + FEX（ARM64）路径中的 SIGILL 与错误分发问题。  
  https://github.com/FEX-Emu/FEX/pull/5289
- **box64 PR #3513**：修复 BOX32 中 ARPL（`0x63`）在解释器与 ARM64 dynarec 中的语义实现，补充回归测试，并推动真实兼容性问题关闭。  
  https://github.com/ptitSeb/box64/pull/3513
- **FEX issue #5328 排查**：通过复现链路与日志分析，将问题收敛到 `MEM_MAPPED + PAGE_EXECUTE_READ` 场景下的可执行内存追踪缺口，协助定位 Windows 兼容路径中的高影响 NoExec / `C0000005` 循环问题。  
  https://github.com/FEX-Emu/FEX/issues/5328

---

### 工作经历

**北京群计（Crowd Computed）**  
软件工程师｜2025 年 12 月 1 日 - 至今

- 负责 AI 算力系统中的容器编排、任务分发与结果回收链路设计与实现。
- 基于 Docker 与 k3s 搭建算力编排体系，支撑计算节点调度、任务投递、执行隔离与结果回传。
- 设计并实现任务分发系统，覆盖任务生命周期管理、节点分配、执行状态跟踪与失败重试。
- 持续优化算力资源利用率、任务调度稳定性与系统可观测性，服务 AI 计算场景的实际交付。

**Deeper Network**  
软件工程师 / 技术主管｜2021 年 10 月 - 至今

- 负责网络与平台相关系统的设计和交付，覆盖透明代理、VPN 客户端、边缘计算平台与高并发后端服务。
- 构建 iOS、Android、Windows、macOS、Linux 多平台 VPN 与流量转发系统，涉及 gVisor 流量接管、NAT 穿透、隧道 DNS 与基于规则的转发机制。
- 设计并实现透明 HTTP/HTTPS 代理基础设施，支持 TLS 解密、流量修改、内容过滤与内嵌 JavaScript 规则执行。
- 使用 Rust 构建分布式边缘计算平台，完成基于 EVM 的调度、任务分发、节点管理与 Docker 化执行。
- 通过 profiling、benchmark、零停机发布与灰度策略，提升高并发 HTTP/TCP 服务的发布安全性与线上稳定性。
- 构建内部 RAG 知识问答系统，实现文档导入、向量检索与 LLM 辅助问答，服务支持与运维场景。

**武汉辰舞科技**  
CTO｜2020 年 8 月 - 2021 年 6 月

- 基于 Rust、Tokio 与 tox 构建分布式通信运行时，实现点对点与隐蔽传输链路，以及 codec、frame、session、router 等基础层。
- 实现通过音频通道传输 JSON / 二进制数据，并完成海思芯片相关驱动适配，支持低功耗长连接蓝牙通信。
- 对 FFT / IFFT 信号处理与水印链路做性能优化，覆盖 Armv8 SIMD 与 NVIDIA CUDA 两类执行平台。

**武汉大学大数据研究院**  
软件工程师｜2018 年 8 月 - 2020 年 8 月

- 构建 MySQL 到 RDF 再到图数据库（如 Neo4j）的数据处理链路。
- 基于 SPARQL 实现图查询与图分析接口，支持入度、出度、密度、距离、环等图属性计算。
- 在研究院阶段系统学习并研究 NLP 基本原理与常见模型，覆盖文本表示、分类、序列建模与 Transformer 等核心方法，为后续 RAG、LLM 与 Agent 工作流实践打下基础。
- 使用 D3.js 与 ECharts 交付图可视化页面，服务研究与业务查询场景。

**悦然心动**  
后端工程师｜2017 年 8 月 - 2018 年 4 月

- 使用 Node.js 与 Golang 开发后端服务，处理复杂异步流程，并与 Python 服务协作。
- 基于 Gin、GORM、PostgreSQL 与 PostGIS 构建社交应用后端，并通过 Jenkins 与 AWS 基础设施支撑交付。

**航班管家**  
前端工程师｜2016 年 5 月 - 2017 年 7 月

- 基于 Mithril 构建单页应用，负责路由、状态管理、会话恢复与复杂交互组件。
- 维护 GitLab 与 GitLab CI，承担升级、迁移与生产问题排查。
- 使用 Express / Node.js 实现服务端渲染与 API 网关，覆盖打包、缓存、请求追踪与动态 TypeScript 编译。

---

### 精选技能

**AI 工作流**  
擅长设计面向 agent 的研发工作流，包括明确任务上下文、沉淀长期指令、封装可复用 skills、接入 MCP 工具链，以及基于验证的执行闭环。具备任务拆解、多步骤执行、工具调用、结果校验与回归处理经验，能够把模糊需求收敛为可重复、可调试、可持续演进的开发、运维与交付流程。

**NLP / LLM**  
熟悉 NLP 基本原理与常见模型，包括文本表示、分类、序列建模、Transformer 架构、向量检索、RAG、LangChain 编排与基于工具调用的 Agent 工作流。

**语言**  
Rust、Golang、Python、TypeScript、JavaScript、Erlang

**系统能力**  
Linux、分布式系统、网络编程、VPN / 代理基础设施、Docker、Kubernetes、可观测性、性能剖析、基准测试、零停机发布

**专项能力**  
Wine、FEX、box64、ARM64 兼容层、运行时调试、FFI、SIMD、CUDA、基于 EVM 的调度系统

---

### 精选项目

- **[winlator-llm](https://github.com/FrontMage/winlator-llm)**：基于 Winlator fork 打造的 LLM workflow 产品，把底层运行时调优、兼容性开关、图形栈切换和环境变量配置产品化为更易用、更可调试的用户侧系统，并通过 AI 辅助工作流降低复杂兼容性调参门槛。
- **Deeper GPT**：面向内部支持场景的 RAG 知识问答系统，实现文档导入、向量检索、LLM 问答、知识库更新与支持流程辅助。
- **[rock](https://github.com/FrontMage/rock)**：基于 Rust 的全栈博客系统，前端使用 Rust + WASM，后端使用 `actix-web`。
- **[pm](https://github.com/FrontMage/pm)**：使用 Golang 开发的进程管理工具，可作为轻量级 `pm2` 替代方案。
- **[xinge](https://github.com/FrontMage/xinge)**：腾讯信鸽 Push 的 Golang 封装库，已作为可复用后端集成库在实际场景中使用。

---

### 教育经历

**黑龙江大学**  
数学与应用数学学士｜2010 年 - 2015 年
