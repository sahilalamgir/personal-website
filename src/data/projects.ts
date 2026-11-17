import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "durable-agent-execution-runtime",
    title: "Durable Agent Execution Runtime",
    tagline: "Crash-proof runtime for long-running AI agents.",
    overview:
      "A fault-tolerant runtime for long-running AI agent tasks. If a worker dies mid-task, another worker resumes the run from its last durable step, and no side effect, like opening a PR or sending an email, ever happens twice. The agent is a small repo-maintenance bot; the reliability layer underneath it is the point.",
    highlights: [
      "Event-sourced in Go: every step is appended to Kafka before it is acted on, and Postgres is a rebuildable projection of the log.",
      "Redis fencing keys give effectively-once tool execution across 50 concurrent agent runs, failing closed if Redis is unreachable.",
      "Worker pool on Kubernetes with KEDA, autoscaling from 2 to 10 pods on Kafka consumer-group lag.",
      "Chaos-tested across 300 runs with random pod kills: zero duplicate side effects, p99 recovery under 10 seconds.",
    ],
    tech: ["Go", "Kafka", "PostgreSQL", "Redis", "Kubernetes", "gRPC"],
    period: "Sept. 2026",
    image: "/logos/daer.png",
    accent: "#38bdf8",
    githubUrl: "https://github.com/sahilalamgir/durable-agent-execution-runtime",
  },
  {
    slug: "forever-sober",
    title: "ForeverSober",
    tagline: "Sobriety tracking app, acquired.",
    overview:
      "A sobriety mobile app built with React Native and Expo, with Supabase for the backend and Superwall for paywalls. I launched it, grew it to paying users, and it was later acquired.",
    highlights: [
      "Earned $160 MRR from 200 users, with 15% retention.",
      "Studied market trends and redesigned the onboarding flow in Figma, increasing the paywall rate by 75%.",
    ],
    tech: ["React Native", "Expo", "Supabase", "Superwall", "Figma"],
    period: "June 2025",
    image: "/logos/foreversober.png",
    accent: "#a78bfa",
    githubUrl: "https://github.com/sahilalamgir/ForeverSober",
  },
  {
    slug: "shelfsmart",
    title: "ShelfSmart",
    tagline: "Predicts spoilage to cut food waste.",
    overview:
      "A platform that reduces food waste by tracking inventory and predicting when items will spoil from a photo. Built for the Youth Impact Challenge, where it placed in the top 3 of 150 teams.",
    highlights: [
      "Won a $2,400 prize at the Youth Impact Challenge.",
      "Computer vision model built with OpenCV and TensorFlow predicts days-to-spoil with a mean absolute error of 1.1 days.",
      "Next.js and Supabase app with an inventory dashboard and a marketplace for surplus food.",
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "Next.js", "Supabase"],
    period: "Aug. 2025",
    image: "/logos/shelfsmart.png",
    accent: "#4ade80",
    githubUrl: "https://github.com/sahilalamgir/shelfsmart",
  },
  {
    slug: "gensheets",
    title: "GenSheets",
    tagline: "Edit spreadsheets in plain English.",
    overview:
      "An AI spreadsheet tool where you upload data and describe the change you want in natural language. It analyzes the sheet, generates the edit, and lets you export the result.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Tailwind CSS"],
    image: "/logos/gensheets.png",
    accent: "#34d399",
    githubUrl: "https://github.com/sahilalamgir/gensheets",
    liveUrl: "https://gensheets.vercel.app",
  },
  {
    slug: "storybolt",
    title: "StoryBolt",
    tagline: "Generate any story you can imagine.",
    overview:
      "An AI story generator that writes a story and illustrates it from a prompt. Stories are saved to your history, can be favorited, published to a community feed, or exported as a PDF.",
    tech: ["Next.js", "TypeScript", "Clerk", "Supabase", "Upstash Redis", "Hugging Face"],
    image: "/logos/storybolt.png",
    accent: "#fbbf24",
    githubUrl: "https://github.com/sahilalamgir/StoryBolt",
    liveUrl: "https://storyforge-delta.vercel.app",
  },
  {
    slug: "alzguard",
    title: "AlzGuard",
    tagline: "Alzheimer's screening from MRI scans.",
    overview:
      "A full-stack tool where a user enters medical information and uploads an MRI scan, and a CNN predicts whether early signs of Alzheimer's are present, returning the result with its confidence. This is a from-scratch rebuild I wrote solo, with no AI-generated code, to relearn the fundamentals.",
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "TensorFlow", "scikit-learn"],
    image: "/logos/alzguard.png",
    accent: "#f472b6",
    githubUrl: "https://github.com/sahilalamgir/alzguard-updated",
  },
  {
    slug: "noorpad",
    title: "NoorPad",
    tagline: "Fund community projects on Solana.",
    overview:
      "A donation marketplace where people discover community projects on an interactive globe and fund them with Solana wallets. Each project page tracks funding progress, milestones and updates.",
    tech: ["Next.js", "TypeScript", "Solana", "Tailwind CSS", "Leaflet"],
    image: "/logos/noorpad.png",
    accent: "#fb923c",
    githubUrl: "https://github.com/sahilalamgir/NoorPad",
  },
  {
    slug: "learnetf",
    title: "LearnETF",
    tagline: "Financial literacy for Gen Z.",
    overview:
      "A platform with interactive modules that teach ETFs, stocks and bonds, with live market data and AI-personalized explanations. Built at GeeseHacks for the Sun Life case, where it won the sponsor prize.",
    highlights: [
      "Won Sun Life's Sponsor Prize at GeeseHacks.",
      "Live market data from yfinance, with Plotly charts and OpenAI-powered guidance.",
    ],
    tech: ["Next.js", "TypeScript", "Flask", "OpenAI", "Plotly", "yfinance"],
    image: "/logos/learnetf.png",
    accent: "#60a5fa",
    githubUrl: "https://github.com/sahilalamgir/learnetf",
    liveUrl: "https://devpost.com/software/securities-educator",
  },
  {
    slug: "snapify",
    title: "Snapify",
    tagline: "Design your room in AR by describing it.",
    overview:
      "An augmented reality interior design tool built at Hack the North 2025. Describe the space you want, and Gemini picks a design theme and recommends furniture from a product catalog, which you can place and arrange as 3D models in AR through a Snap Lens Studio lens, with a companion web app.",
    tech: ["Lens Studio", "TypeScript", "Gemini", "Node.js", "Express", "Vite", "Tailwind CSS"],
    period: "Hack the North 2025",
    image: "/logos/snapify.png",
    accent: "#facc15",
    githubUrl: "https://github.com/Teatot/HTN-Snapify",
  },
  {
    slug: "echodoc",
    title: "EchoDoc",
    tagline: "AI voice clones of doctors that handle patient calls.",
    overview:
      "Doctors spend over half their day on administrative work. EchoDoc clones a doctor's voice and lets an AI agent handle routine patient calls and appointment scheduling on their behalf, using each patient's profile and history for context-aware answers.",
    highlights: [
      "Live phone calls through Twilio, with speech-to-text, Gemini for the conversation and ElevenLabs for the cloned voice.",
      "Calendar integration that books appointments in real time across concurrent calls without double-booking.",
      "Next.js dashboard with Clerk auth, patient profiles and per-doctor agents.",
    ],
    tech: ["Next.js", "TypeScript", "Express", "Supabase", "Clerk", "Gemini", "ElevenLabs", "Twilio"],
    image: "/logos/echodoc.png",
    accent: "#2dd4bf",
    githubUrl: "https://github.com/FuJacob/cuddly-succotash",
  },
];
