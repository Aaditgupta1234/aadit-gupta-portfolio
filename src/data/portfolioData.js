export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  label: "UI-FOCUSED FULL-STACK DEVELOPER",
  name: "Aadit Gupta",
  quote: "Crafting interfaces that inspire and systems that scale.",
  subtitle: "UI-Focused Full-Stack Developer · Systems Engineer",
  bio: "Designing clean, modern user interfaces inspired by Apple, Linear, and Stripe—backed by production-grade full-stack and backend engineering.",
  tags: "UI/UX Engineering  |  Full-Stack Web Apps  |  Production Systems",
  techPills: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Node.js", "PostgreSQL"],
  socials: {
    github: "https://github.com/Aaditgupta1234",
    linkedin: "https://www.linkedin.com/in/aadit-gupta-028385327/",
    leetcode: "https://leetcode.com/u/AaditGupta_1234/",
  },
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I am a UI-focused full-stack developer who blends clean, typography-driven product design with robust backend engineering. My work is heavily inspired by the minimal, intentional aesthetics of Apple, Linear, Stripe, and Notion.",
    "Whether designing high-converting landing pages and business websites or architecting full-stack web applications like AVELIS and DecisionOS, I focus on pixel-level precision, snappy performance, and maintainable code for both freelance clients and engineering teams.",
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
    previewUrl: "avelis-alpha.vercel.app",
    links: {
      demo: "https://avelis-alpha.vercel.app/",
      github: "https://github.com/Aaditgupta1234/AVELIS",
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
      github: "https://github.com/Aaditgupta1234/DecisionOS",
    },
    featured: false,
  },
];

export const servicesData = {
  title: "What I Build",
  badge: "Services & Capabilities",
  heading: "Design-focused development combined with full-stack engineering capabilities.",
  description:
    "I craft clean, high-performance digital experiences with modern design sensibilities inspired by Apple, Linear, and Stripe—backed by production-grade full-stack architecture.",
  services: [
    {
      title: "Business Websites",
      description:
        "Professional websites for companies, local businesses, startups, and organizations.",
      icon: "Building2",
      tag: "Corporate & Brand",
    },
    {
      title: "Portfolio Websites",
      description:
        "Personal brands, developers, designers, creators, and professionals.",
      icon: "UserCheck",
      tag: "Personal Brand",
    },
    {
      title: "Landing Pages",
      description:
        "Modern conversion-focused product and marketing pages.",
      icon: "LayoutTemplate",
      tag: "High Conversion",
    },
    {
      title: "Full-Stack Web Applications",
      description:
        "Custom applications with authentication, databases, dashboards, and backend APIs.",
      icon: "Layers",
      tag: "End-to-End",
    },
    {
      title: "UI/UX Development",
      description:
        "Pixel-perfect responsive interfaces built with React, TypeScript, and modern frontend technologies.",
      icon: "Sparkles",
      tag: "Frontend & Design",
    },
    {
      title: "Website Redesigns",
      description:
        "Transform outdated websites into modern, professional experiences.",
      icon: "RefreshCw",
      tag: "Modernization",
    },
  ],
};

export const skillsData = [
  {
    category: "Languages",
    icon: "FileCode",
    items: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend & UI",
    icon: "Monitor",
    items: ["React", "Tailwind CSS", "HTML5 / CSS3", "Vite"],
  },
  {
    category: "Backend Systems",
    icon: "Server",
    items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT & RBAC"],
  },
  {
    category: "Databases & ORMs",
    icon: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "SQLAlchemy"],
  },
  {
    category: "Tools & Infrastructure",
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
  badge: "AVAILABILITY & CONTACT",
  headline: "Have a project, freelance opportunity, or engineering role in mind?",
  supportingText:
    "Currently available for freelance web development projects, UI-focused website builds, internships, and software engineering opportunities.",
  email: "aaditgupta2006@gmail.com",
  links: {
    github: "https://github.com/Aaditgupta1234",
    linkedin: "https://www.linkedin.com/in/aadit-gupta-028385327/",
    leetcode: "https://leetcode.com/u/AaditGupta_1234/",
  },
};
