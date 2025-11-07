### 辛必果 - Rust/EVM/Golang/全栈工程师

![Screenshot](avatar.png)


[![Arctic Code Vault Contributor](https://img.shields.io/badge/Arctic%20Code%20Vault-Contributor-blue?logo=github&style=flat)](https://github.com/FrontMage)

---

### 教育经历

## 黑龙江大学 数学与应用数学学士 2010-2015

### Tech Arsenal
<div style="display:flex;flex-wrap:wrap;gap:8px;margin:16px 0">
  <span style="background:#00C4B4;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">🦀 Rust 5ys</span>
  <span style="background:#00CED1;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">🐹 Golang 8ys</span>
  <span style="background:#F59E0B;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">⛓ EVM 4ys</span>
  <span style="background:#8B5CF6;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">🤖 RAG 4ys</span>
</div>

### 工作经验

**5. [Deeper Network](https://shop.deeper.network/)　全栈工程师/技术主管　2021.10–至今**  
- **Helium项目主管（Erlang）**  
  优化helium节点的信号，网络传输，区块同步等功能  
- **透明代理（Golang）**  
  https/http 透明代理，支持tls解密，流量转发，内容过滤，内容修改，内置JavaScript引擎，支持surge module  
- **Deeper Machine 分布式边缘计算平台（Rust）**  
  实现基于EVM的智能合约调度，任务分发，节点管理等功能  
  实现基于docker的边缘计算节点  
- **Deeper Network VPN 客户端（Golang）**  
  iOS，Android，Windows，MacOS等多平台VPN客户端  
  基于gvisor的流量接管，中转中心  
  类clash的规则引擎，流量转发机制  
  基于隧道的防污染DNS解析  
  基于NAT穿透P2P通讯隧道，UDP/TCP多协议支持  
  透明代理功能，内置广告过滤和内容修改功能  
- **Deeper GPT（Python）**  
  基于RAG的知识问答系统，实现文档分片，向量化存储，向量检索，LLM问答等功能  
  实现自动将客服聊天记录导入知识库，并用于问答  

───

**4. 武汉辰舞科技　CTO　2020.08–2021.06**  
- **基于 tox 和 rust 的分布式通讯框架**  
  实现基于tox的分布式隐蔽通讯，点对点传输  
- **基于 tokio 和 rust 的 codec 通讯框架**  
  实现各种协议上的codec frame，session和router机制，通过声音传输JSON/二进制数据  
  海思芯片下的驱动适配，实现低功耗长连接蓝牙通讯  
- **基于FFT和IFFT算子的图像数据隐藏，水印数据隐藏**  
  实现Armv8下的高性能FFT/IFFT算法，包括SIMD优化  
  实现NVidia GPU下的FFT/IFFT算法，包括CUDA优化

───

**3. 全栈工程师　武汉大学大数据研究院　2018.08–2020.08**  
- **数据清洗，MySQL⇒图数据库**  
  MySQL数据转RDF，RDF导入图数据库，例如neo4j  
- **图数据库上算法实现，业务查询接口**  
  通过sparql查询indgree，outdegree，density，distance，circle等图属性  
- **前端页面**  
  通过d3.js和echarts.js展示graph

───

**2. 后端工程师　悦然心动　2017.08–2018.04**  
- **基于 Express & Node.js 的后端 API**  
  除此之外还有复杂异步流程管理，以及golang和Python实现的部分功能。  
  用node与DynamoDB交互。  
  部署在lambda，ELB和容器内。  
- **基于 Gin & Golang 的社交应用后端 AI**  
  基于GORM与postgres交互，以及使用postGIS计算地理位置。  
  使用Jenkins编译并发布golang应用。  
- **维护 AWS dynamoDB, RDS, Lambda, EC2, Kinesis 等**  

───
**1. 前端工程师　航班管家　2016.05–2017.07**  
- **基于 Mithril 框架的单页 web 应用**  
  包括路由，状态管理，会话恢复，复杂交互组件。  
- **维护公司的 Gitlab 和 Gitlab CI**  
  包括对应问题的debug，Gitlab的升级和迁移等。  
- **基于 Express & Node.js 的页面渲染，API 转发**  
  包括JS和CSS打包，请求追踪，请求缓存。  
  支持JS动态打包，typescript动态编译打包。  


---

### 技能

#### Rust

- 熟悉 tokio 与 futures 的并发编程模式
- 精通 codec、frame、middleware 与 router 的设计与实现
- 熟悉 EVM 合约开发流程与工具链
- 常见加解密算法实现与工程实践
- 熟练使用 FFI / bindgen 在 Rust 与 C/C++ 之间互操作
- 熟悉与 CPU 交互的优化（SIMD、inline assembly）

#### Golang

- 熟悉 Gin、Beego 等 HTTP 框架与中间件设计
- 熟练构建命令行工具（tui-go、go-prompt）
- 深入理解 slice、goroutine、channel 与 interface 的实现细节
- 能诊断与修复 goroutine 泄露、channel 死锁等并发问题
- 熟悉测试、基准测试与性能剖析流程
- 与主流 SQL/NoSQL（Postgres、MySQL、DynamoDB 等）集成经验
- 精通网络协议栈（TCP/UDP/HTTP/TLS）与跨平台编译部署

#### Transformers / ML

- 熟悉 BERT、ResNet 等主流 NLP / CV 模型
- 数据清洗、采样、归一化与训练集构建经验
- 超参数调优与模型评估指标（precision/recall/F1 等）
- 模型裁剪、量化与封装为服务接口

#### HTML / CSS / SCSS

- 能读写语义 HTML，并构建响应式布局与组件样式
- 熟悉常见 CSS 架构与跨浏览器兼容处理

#### JavaScript (browser)

- 熟悉原生 DOM/API 与主流框架（React / Vue / Mithril）
- 了解 WebAssembly / asm.js 的基本原理与应用场景
- 浏览器端性能优化与资源加载策略

#### JavaScript (Node.js)

- 熟悉 Express、Koa 等服务端框架与中间件链路
- 熟悉流式编程、事件循环与异步控制流

#### 其他语言与工具

<div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0">
  <span style="background:#DEA584;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">🦀 Rust</span>
  <span style="background:#00CED1;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">🐹 Golang</span>
  <span style="background:#FFB86B;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">🐍 Python</span>
  <span style="background:#F97316;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">✨ TypeScript</span>
  <span style="background:#6EE7B7;color:#000;padding:4px 10px;border-radius:6px;font-size:13px">🧠 Transformers</span>
  <span style="background:#A78BFA;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">💡 Reason</span>
  <span style="background:#60A5FA;color:#fff;padding:4px 10px;border-radius:6px;font-size:13px">🔢 Julia</span>
</div>

---

### 业余项目

- [fishpond](https://github.com/FrontMage/fishpond) 基于Python和web微信的聊天助手
```
实现消息情感分析
```

- [gesutre](https://github.com/FrontMage/gesture) 基于OpenCV和Python的手势识别

```
实现手势控制鼠标移动，点击，zoom等功能
```

- [xinge push golang lib](https://github.com/FrontMage/xinge) 腾讯信鸽 push 的 golang lib，已被官方采纳

```
golang实现的服务端API
```

---

### 年龄

33

```
我是一个非常喜欢编程的，自我驱动学习的程序员。

每当遇到新的问题，我都会先调研和学习前人的经验，再进行编码，避免写出过于“聪明”的代码。

我认为现代社会，编程就像《哈利波特》中的魔杖一样，可以帮我们建造很多很有意思的东西。
与魔法不同的是，编程的宗旨在于简单性，易读性。

这就是我现在做的事情，写出好玩，简单，可读的代码。
```

邮箱: xwhxbg@gmail.com
电话: 18627036360 (中国)

