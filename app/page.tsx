export default function Home() {
  return (
    <>
      <header>
        <h1>
          Vinod <span style={{ fontWeight: 400, opacity: 0.8 }}>"Kalki"</span>{" "}
          Varadaram
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
          <a href="/Vinod_Varadaram_Resume.pdf" target="_blank">
            Resume (PDF)
          </a>
        </div>
      </header>

      <section id="about">
        <h2>About</h2>
        <p>
          I am a software engineer focused on building simple, efficient, and
          scalable systems. My expertise spans full-stack development, AI agent
          orchestration, and blockchain systems.
        </p>
      </section>

      <section id="now">
        <h2>Now</h2>
        <p>
          Currently, I am contributing to Osprey and deepening my expertise in
          Artificial Intelligence and machine learning architectures.
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <div className="item-title">Self-Employed</div>
            <div className="item-meta">
              Freelance Full-Stack & AI Developer • May 2025 - Present
            </div>
            <p>
              Build and ship end-to-end web and mobile applications for clients
              using Next.js, React Native, Hono, Node.js, and PostgreSQL. Design
              scalable tRPC/REST APIs with JWT auth, RBAC, and distributed job
              queues (BullMQ/Redis).
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
              Node.js/Express REST APIs following secure coding best practices.
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
            <div className="item-title">CORTEX</div>
            <div className="item-meta">
              2026 • TypeScript, Bun, React Native, Solana
            </div>
            <p>
              Autonomous Multi-Agent AI System. Designed a swarm of 10
              specialized AI agents with a 5-stage pipeline. Built real-time
              WebSocket pipeline and integrated Solana MWA.
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
            <div className="item-meta">
              2025 • Hono, BullMQ, Redis, PostgreSQL
            </div>
            <p>
              DeFi Position Alert Monitor. Multi-chain alert system with
              real-time BullMQ/Redis job queue and Prisma-managed PostgreSQL
              schema.
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
            <div className="item-title">Pluffy AI</div>
            <div className="item-meta">
              2025 • Next.js, TypeScript, Node.js, PostgreSQL
            </div>
            <p>
              LLM Code Generation Platform. Integrated LLM API for real-time
              code generation and implemented per-user rate limiting.
              <a
                href="https://github.com/VINODvoid/pluffy"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
          <li>
            <div className="item-title">Lumos AI</div>
            <div className="item-meta">
              2024 • Next.js, TypeScript, tRPC, Inngest
            </div>
            <p>
              Workflow Orchestration Engine built on Inngest durable execution
              primitives with state checkpointing across async boundaries.
              <a
                href="https://github.com/VINODvoid/lumos.ai"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Source]
              </a>
            </p>
          </li>
        </ul>
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
                href="https://brindavancollege.com/"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Link]
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
              Contributed to Discord's trust & safety rules engine processing
              2.3M rules/sec. Used by Discord, Bluesky, and Matrix.org.
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
            <div className="item-title">n8n & Onlook</div>
            <p>
              Contributed to fair-code workflow automation (400+ integrations)
              and Onlook (AI-powered visual React editor).
              <a
                href="https://github.com/n8n-io/n8n"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [n8n]
              </a>
              <a
                href="https://github.com/onlook-dev/onlook"
                target="_blank"
                style={{ marginLeft: "0.5rem", fontSize: "0.85rem" }}
              >
                [Onlook]
              </a>
            </p>
          </li>
        </ul>
      </section>
      <section id="interests">
        <h2>Interests</h2>
        <p>
          Beyond engineering, I am interested in philosophy, global politics,
          and gaming. I also enjoy exploring the anime, as well as staying
          active through long walks.
        </p>
      </section>
    </>
  );
}
