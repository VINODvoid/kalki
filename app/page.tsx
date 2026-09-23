export default function Home() {
  return (
    <>
      <header>
        <h1>
          Vinod <span style={{ fontWeight: 400, opacity: 0.8 }}>&quot;Kalki&quot;</span>{" "}
          Vardaram
        </h1>
        <p className="item-meta">Software Engineer • Bangalore, IN</p>
        <div className="links-list">
          <a href="mailto:kalki.the.dev@gmail.com">Email</a>
          <a
            href="https://github.com/VINODvoid"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kalkikal"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/kalki_kal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter/X
          </a>
          <a href="/Vinod_Vardaram_Resume.pdf" target="_blank">
            Resume (PDF)
          </a>
        </div>
      </header>

      <section id="about">
        <h2>About</h2>
        <p>
          I&apos;m a software engineer in Bangalore. I build backend systems:
          queues, workers, webhooks, the parts that have to keep running. Since
          Aug 2025 I&apos;ve been working independently on my own projects and
          open source.
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <div className="item-title">Self-directed products & open source</div>
            <div className="item-meta">
              Independent Software Engineer • Aug 2025 - Present
            </div>
            <p>
              Sole engineer on every project below - architecture,
              implementation, deployment, and on-call for my own bugs. Go,
              Node.js/TypeScript, Python, PostgreSQL, MongoDB, Redis, BullMQ,
              Docker, AWS.
            </p>
          </li>
          <li>
            <div className="item-title">Pentagon Space</div>
            <div className="item-meta">
              Software Development Intern • Dec 2024 - Jul 2025
            </div>
            <p>
              Profiled PostgreSQL query execution plans and implemented
              connection pooling, reducing API response time by 30%. Built
              Node.js/Express REST APIs with JWT auth middleware, input
              validation, and schema design.
            </p>
          </li>
          <li>
            <div className="item-title">Intervie Tech</div>
            <div className="item-meta">
              Machine Learning Intern • Nov 2023 - Dec 2023
            </div>
            <p>
              Preprocessed 5,000+ candidate profiles using pandas and NumPy;
              improved model accuracy 15% over baseline. Deployed trained
              inference model via Flask REST API.
            </p>
          </li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <div className="item-title">REEVE</div>
            <div className="item-meta">
              2026 • Python, FastAPI, asyncio, GitPython, Docker
            </div>
            <p>
              Concurrent PR review backend (GitHub App). HMAC-verified webhook
              returns 202 in milliseconds and hands off to a background worker;
              each job checks the repo out into an isolated git worktree. Four
              reviewers fan out per file under a concurrency ceiling.
              Precision/recall eval harness with planted defects; 431 tests.
              <a
                href="https://github.com/VINODvoid/review-agent"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
          <li>
            <div className="item-title">TREEQ</div>
            <div className="item-meta">2026 • Python, NumPy</div>
            <p>
              Reimplementation of the Rumelhart, Hinton & Williams (1986)
              kinship task — forward pass, backprop, and training loop written
              from scratch on NumPy, no autograd. Trains on 132 relations over
              two isomorphic family trees and compares a 24-unit representation
              against a 6-unit bottleneck; the narrow one generalises better
              (0.583 vs 0.417 test) and invents structure like generation and
              nationality on its own. Gradients verified against finite
              differences.
              <a
                href="https://github.com/VINODvoid/treeq"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
          <li>
            <div className="item-title">CORTEX</div>
            <div className="item-meta">
              2026 • TypeScript, Bun, React Native, Solana
            </div>
            <p>
              10-agent consensus system. Agent output streams over WebSocket
              to a React Native client with Solana Mobile Wallet Adapter
              integration. Shipped solo in 3 weeks.
              <a
                href="https://github.com/VINODvoid/cortex"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
          <li>
            <div className="item-title">REFLEX</div>
            <div className="item-meta">2026 • Go (chi, pgx), PostgreSQL</div>
            <p>
              Multi-chain DeFi liquidation monitor. Alert workers are
              queue-isolated so one failing channel can&apos;t stall the
              pipeline. Rewritten from TypeScript/Hono/BullMQ to Go for lower
              memory use and predictable latency under continuous polling.
              <a
                href="https://github.com/VINODvoid/reflex"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
          <li>
            <div className="item-title">SIGIL</div>
            <div className="item-meta">
              2026 • Next.js, TypeScript SDK, Anchor (Rust), Helius
            </div>
            <p>
              Identity and scoped-permission layer for AI agents. Capability
              scoping, per-transaction and daily spend limits, and trust scores
              checked before any agent action executes. SDK published to npm.
              <a
                href="https://github.com/sigil-xyz/sigil"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
        </ul>
      </section>

      <section id="open-source">
        <h2>Open Source</h2>
        <ul>
          <li>
            <div className="item-title">Osprey (roostorg)</div>
            <p>
              3 merged PRs to Discord&apos;s trust & safety rules engine (used
              by Discord, Bluesky, Matrix.org), including Kafka topic retention
              limits to prevent unbounded disk growth.
              <a
                href="https://github.com/roostorg/osprey"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
          <li>
            <div className="item-title">Mastra (mastra-ai)</div>
            <p>
              Merged a fix routing observability pricing lookups through the
              configured model instead of a hardcoded default.
              <a
                href="https://github.com/mastra-ai/mastra"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
        </ul>
      </section>
      <section id="writing">
        <h2>Writing</h2>
        <ul>
          <li>
            <div className="item-title">
              <a
                href="https://kalki.bearblog.dev/3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Capacity, Worse Fit
              </a>
            </div>
            <div className="item-meta">September 2026</div>
            <p>
              Rebuilding the 1986 family tree network experiment and finding that a narrower model trains better than a wider one — bottlenecks as inductive bias, not just constraint.
            </p>
          </li>
          <li>
            <div className="item-title">
              <a
                href="https://kalki.bearblog.dev/2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                I Was Already Using Rust. I Just Didn&apos;t Know It Yet.
              </a>
            </div>
            <div className="item-meta">May 2026</div>
            <p>
              Discovering Rust through everyday tools — ripgrep, fd, bat, starship — and then committing to learn it properly.
            </p>
          </li>
        </ul>
        <p style={{ marginTop: "0.5rem" }}>
          <a
            href="https://kalki.bearblog.dev/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All posts →
          </a>
        </p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>
            <div className="item-title">Brindavan College of Engineering</div>
            <div className="item-meta">
              B.Tech in Computer Science • 2021 - 2025 • CGPA: 8.1/10
            </div>
            <p>
              Focused on Core Computer Science: Data Structures, Algorithms,
              Systems, and Machine Learning.
              <a
                href="https://engineering.brindavancollege.edu.in/"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Link]
              </a>
            </p>
          </li>
        </ul>
      </section>

      <section id="interests">
        <h2>Interests</h2>
        <p>Philosophy, global politics, gaming, anime, and long walks.</p>
      </section>
    </>
  );
}
