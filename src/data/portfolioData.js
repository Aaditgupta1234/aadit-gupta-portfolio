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
    title: "AVELIS",
    badge: "Flagship System",
    status: "Production Deployed",
    tagline: "Full-Stack Library Management & Circulation Platform",
    description:
      "Architected a digital library system managing catalog inventories, circulation lifecycles, and member operations with transactional data integrity and multi-tier access control.",
    highlights: [
      "JWT Authentication & RBAC",
      "Prisma ORM & Transaction Handling",
      "MVC + Service Architecture",
      "Catalog & Loan Management Workflows",
    ],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT Auth"],
    previewUrl: "avelis-library.vercel.app",
    links: {
      demo: "#",
      github: "https://github.com/Aaditgupta1234",
    },
    featured: true,
  },
  {
    title: "DecisionOS",
    badge: "AI & Backend",
    status: "Working Prototype",
    tagline: "Automated Business Diagnostics & KPI Analytics Engine",
    description:
      "Engineered an analytical platform that ingests operational datasets to compute core KPIs, isolate metric anomalies, and deliver transparent root-cause diagnostics for executive decisions.",
    highlights: [
      "KPI Analytics Engine",
      "Root Cause Attribution System",
      "Explainable Diagnostics Pipeline",
      "FastAPI Service Architecture",
    ],
    tech: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Pandas", "React"],
    previewUrl: "decisionos.internal/diagnostics",
    links: {
      demo: "#",
      github: "https://github.com/Aaditgupta1234",
    },
    featured: false,
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
