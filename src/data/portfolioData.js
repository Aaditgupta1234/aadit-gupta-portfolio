export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  label: "SOFTWARE ENGINEER",
  name: "Aadit Gupta",
  quote: "Building systems that turn data into decisions.",
  subtitle: "Software Engineer · Backend Developer",
  bio: "Building production-grade systems, explainable AI platforms, and scalable backend architectures.",
  tags: "Software Engineer  |  Backend Systems  |  AI Platforms",
  techPills: ["Java", "Python", "FastAPI", "PostgreSQL", "React", "TypeScript"],
  socials: {
    github: "https://github.com/Aaditgupta1234",
    linkedin: "https://www.linkedin.com/in/aadit-gupta-028385327/",
    leetcode: "https://leetcode.com/u/AaditGupta_1234/",
  },
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I build scalable backend systems, modern web applications, and AI-powered platforms with a focus on clean architecture and long-term maintainability.",
    "Through projects like AVELIS and DecisionOS, I explore backend engineering, system design, databases, and real-world product development. My goal is to create reliable software that transforms complex ideas into practical solutions.",
  ],
};

export const projectsData = [
  {
    title: "DecisionOS",
    badge: "Flagship AI Platform",
    tagline: "Explainable AI & Automated Business Diagnostics Platform",
    description:
      "DecisionOS helps founders and leadership teams diagnose operational bottlenecks from raw business datasets. Built with FastAPI, PostgreSQL, and Pandas, it computes automated KPIs, executes root cause attribution algorithms, and generates explainable diagnostic reports to support data-backed decision-making.",
    highlights: [
      "Autonomous KPI Computation Engine",
      "Explainable Root Cause Diagnostics",
      "PostgreSQL & SQLAlchemy Schema Design",
      "Executive Diagnostic & Export Layer",
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "React", "TypeScript", "Pandas", "Docker"],
    previewUrl: "decisionos.internal/diagnostics",
    links: {
      demo: "#",
      github: "https://github.com/Aaditgupta1234",
    },
    flagship: true,
  },
  {
    title: "AVELIS",
    badge: "Production Platform",
    tagline: "Full-Stack Digital Library & Inventory Management System",
    description:
      "AVELIS streamlines catalog management, book circulation, and user reservations for organizations. Engineered with Node.js, Express, and PostgreSQL via Prisma ORM, it features multi-tier role-based access control (RBAC), secure JWT authentication, and transactional inventory pipelines for high data integrity.",
    highlights: [
      "Multi-Tier RBAC & Secure JWT Auth",
      "Relational Schema & Prisma ORM",
      "Transactional Reservation Pipeline",
      "Supabase Asset Storage & Deployments",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "JWT Auth"],
    previewUrl: "avelis.platform/admin/catalog",
    links: {
      demo: "#",
      github: "https://github.com/Aaditgupta1234",
    },
    flagship: false,
  },
];

export const skillsData = [
  {
    category: "Languages",
    icon: "FileCode",
    items: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["FastAPI", "Node.js", "Express", "REST APIs", "JWT Auth"],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "SQLAlchemy"],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    items: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Tools & Infra",
    icon: "Wrench",
    items: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render"],
  },
];

export const journeyData = [
  {
    year: "2024",
    title: "Systems & Backend Foundation",
    description: "Deep dive into core backend architecture, Java, data structures, and relational database systems.",
  },
  {
    year: "2025",
    title: "Production Platform — AVELIS",
    description: "Architected and deployed AVELIS, a full-stack digital library with RBAC, secure JWT auth, and Supabase.",
  },
  {
    year: "2026",
    title: "AI Architecture — DecisionOS",
    description:
      "Architecting DecisionOS, an explainable AI business intelligence platform with FastAPI, PostgreSQL, and modern analytics.",
  },
];

export const contactData = {
  title: "Open to Opportunities",
  subtitle: "Full-Time Roles • Freelance Projects • Backend Engineering",
  email: "aaditgupta2006@gmail.com",
  links: {
    github: "https://github.com/Aaditgupta1234",
    linkedin: "https://www.linkedin.com/in/aadit-gupta-028385327/",
    leetcode: "https://leetcode.com/u/AaditGupta_1234/",
  },
};
