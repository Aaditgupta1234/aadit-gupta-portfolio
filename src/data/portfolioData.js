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
  tags: "BE CSE | BACKEND DEVELOPER | PROBLEM SOLVER",
  techPills: ["Java", "Python", "FastAPI", "PostgreSQL", "React", "TypeScript"],
  socials: {
    github: "https://github.com/Aaditgupta1234",
    leetcode: "https://leetcode.com/u/AaditGupta_1234/",
    linkedin: "https://www.linkedin.com/in/aadit-gupta-028385327/",
  },
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I am a software engineering student with a strong focus on backend systems, system design, and scalable architectures. I enjoy designing clean database schemas, building high-throughput APIs, and turning complex problem statements into production-ready software.",
    "My hands-on experience spans from architecting full-stack applications with strict transactional integrity like AVELIS to engineering automated business intelligence and explainable decision systems like DecisionOS. I thrive at the intersection of data-driven backends and clean, responsive interfaces.",
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
    badge: "Foundation",
    icon: "GraduationCap",
    title: "Computer Science & Systems Grounding",
    organization: "Chitkara University",
    description:
      "Commenced B.E. in Computer Science. Built disciplined core foundations in Java, Object-Oriented Architecture, Database Management Systems, and Relational SQL.",
  },
  {
    year: "2025",
    badge: "Leadership",
    icon: "Users",
    title: "Executive Member — Coding Ninjas CUIET",
    organization: "Student Technical Community",
    description:
      "Selected as an Executive Member to lead campus technical initiatives, coordinate algorithmic contests, and mentor student developers in problem solving.",
  },
  {
    year: "2025",
    badge: "Hackathon",
    icon: "Trophy",
    title: "Hackathon Finalist — SATHACK",
    organization: "Thapar University",
    description:
      "Co-engineered FESTFY XR in an intensive team sprint. Designed the interactive experience, pitched live to industry judges, and advanced to the final round.",
  },
  {
    year: "2025–2026",
    badge: "Flagship Project",
    isFlagship: true,
    icon: "Layers",
    title: "Architected & Deployed AVELIS",
    organization: "Flagship Full-Stack Platform",
    description:
      "Built and deployed AVELIS, a full-stack digital library platform featuring JWT authentication, role-based access control, PostgreSQL, Prisma ORM, and a modern React frontend.",
  },
  {
    year: "2026",
    badge: "Problem Solving",
    icon: "Code2",
    title: "600+ Algorithmic Practice Milestones",
    organization: "LeetCode & Competitive Platforms",
    description:
      "Maintained consistent data structures and algorithms practice through 600+ LeetCode submissions, strengthening problem-solving skills and technical interview readiness.",
  },
  {
    year: "2026",
    badge: "AI Architecture",
    icon: "Sparkles",
    title: "Architecting DecisionOS",
    organization: "AI Business Intelligence Platform",
    description:
      "Engineering an explainable diagnostics engine using FastAPI, Python, and PostgreSQL to isolate KPI anomalies and deliver automated business recommendations.",
  },
];

export const contactData = {
  badge: "LET'S CONNECT",
  headline: "Building software with purpose.",
  description:
    "Focused on full-stack development, backend engineering, and scalable software systems. Currently building production-ready applications while strengthening problem-solving and system design skills.",
  email: "aaditgupta2006@gmail.com",
  resumeUrl: "/Aadit_Gupta_Resume.pdf",
  links: {
    github: "https://github.com/Aaditgupta1234",
    linkedin: "https://www.linkedin.com/in/aadit-gupta-028385327/",
    leetcode: "https://leetcode.com/u/AaditGupta_1234/",
  },
};
