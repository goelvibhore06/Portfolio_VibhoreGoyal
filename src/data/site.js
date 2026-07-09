const normalizedBasePath = (process.env.BASE_PATH || "").replace(/\/$/, "");
const normalizedSiteUrl = (process.env.SITE_URL || "https://goelvibhore06.github.io").replace(/\/$/, "");

export const site = {
  name: "Vibhore Goyal",
  monogram: "V.GOYAL_",
  initials: "V.",
  role: "Software Engineer & Systems Builder",
  shortRole: "Backend Developer // ML Practitioner",
  location: "Delhi, India",
  coordinates: "28.7041° N, 77.1025° E",
  rollNumber: "24/SE/187",
  status: "Available for opportunities",
  url: normalizedSiteUrl,
  basePath: normalizedBasePath,
  locale: "en_US",
  themeColor: "#08090A",
  assetVersion: "2026-07-09-kinetic-v3",
  socialImage: "/assets/base44-hero-server.png",
  description:
    "Portfolio of Vibhore Goyal, a DTU software engineering student, backend developer, ML practitioner, and hackathon winner building RAG security pipelines, voice-first tools, and prediction systems.",
  keywords: [
    "Vibhore Goyal",
    "Delhi Technological University",
    "backend developer",
    "machine learning",
    "RAG",
    "CodeChef 4 star",
    "LeetCode Expert",
    "GSeven",
    "portfolio"
  ],
  links: {
    github: "https://github.com/goelvibhore06",
    linkedin: "https://www.linkedin.com/in/vibhoregoyal",
    email: "mailto:goelvibhore06@gmail.com",
    dtuEmail: "mailto:vibhoregoyal_se24b03_058@dtu.ac.in",
    phone: "tel:+917982784628"
  }
};

export const navigation = [
  { label: "Work", path: "#work", number: "01" },
  { label: "About", path: "#about", number: "02" },
  { label: "Experience", path: "#experience", number: "03" },
  { label: "Contact", path: "#contact", number: "04" }
];

export const heroRoles = ["Backend Developer", "ML Practitioner", "Systems Builder", "SDE Intern"];

export const metrics = [
  { value: "8.843", label: "DTU CGPA" },
  { value: "1818", label: "CodeChef max rating" },
  { value: "1st", label: "Brainwave CryptAI" },
  { value: "8K+", label: "Students supported" }
];

export const projects = [
  {
    id: "ai-vpn-tracker",
    number: "01",
    title: "AI VPN Tracker",
    category: "Security // RAG // AI",
    image: "/assets/project-ai-vpn-tracker.png",
    alt: "AI VPN Tracker generated dashboard visual",
    source: site.links.github,
    summary:
      "End-to-end network traffic anomaly detection system implementing Retrieval-Augmented Generation (RAG) to enhance evaluation of flagged network traffic. Real-time threat classification using an LLM backed by a localized security knowledge base.",
    bullets: [
      "Built a full security pipeline: log ingestion -> RAG retrieval -> LLM threat classification",
      "Ingested high-dimensional network log data for real-time anomaly evaluation",
      "LLM backed by a localized security knowledge base for accurate threat scoring",
      "RAG architecture reduces hallucination by grounding answers in domain-specific security data"
    ],
    tags: ["Python", "RAG", "LangChain", "LLM", "Machine Learning", "Network Security"]
  },
  {
    id: "swiftaid",
    number: "02",
    title: "SwiftAid",
    category: "Hackathon // Voice AI",
    image: "/assets/project-swiftaid.png",
    alt: "SwiftAid generated voice assistant product visual",
    source: site.links.github,
    summary:
      "Voice-first, offline-capable platform eliminating digital literacy and connectivity barriers for frontline workers in emerging markets. Built at Brainwave 2.0 @ AIMS DTU and secured 1st place in the CryptAI event.",
    bullets: [
      "Offline-first action relay queues voice commands locally and syncs via SMS/2G on reconnection",
      "Thin-client architecture offloads 90% of NLP heavy lifting to cloud infrastructure",
      "Phonetic intent mapping with fuzzy matching handles dialects and background noise",
      "ULID sortable identifiers keep async offline syncs processing in exact sequence"
    ],
    tags: ["React", "Node.js", "Python", "MongoDB", "Tailwind CSS"]
  },
  {
    id: "mess-waste-ml",
    number: "03",
    title: "Mess Waste ML",
    category: "Machine Learning",
    image: "/assets/project-mess-waste-ml.png",
    alt: "Mess Waste ML generated prediction dashboard visual",
    source: site.links.github,
    summary:
      "Gradient Boosting-powered prediction system for hostel mess food wastage using 45,000+ food demand records. Feature engineering across attendance, meal category, exam periods, weather, and rolling averages.",
    bullets: [
      "XGBoost achieved best performance: MAE 4.46, RMSE 8.21, R2 Score 0.958",
      "Compared Linear Regression, Decision Tree, Random Forest, Gradient Boost, and XGBoost",
      "Engineered attendance, cuisine, weekend, exam-period, weather, and rolling-average features",
      "Reduces food waste through data-driven meal preparation estimates"
    ],
    tags: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Feature Engineering"]
  }
];

export const about = {
  kicker: "SDE @ GSeven // DTU Student",
  paragraphs: [
    "I'm a B.Tech Software Engineering student at Delhi Technological University (2024-2028), CGPA 8.843. I build systems that actually work, from RAG-powered security pipelines to voice-first offline apps.",
    "Currently interning as an SDE at GSeven Computer Business Pvt. Ltd., contributing to backend APIs, database workflows, structured debugging, and reusable components. 4 star CodeChef (1818) and Expert on LeetCode.",
    "Webmaster for the Fresources portal serving 8,000+ students, PR Specialist for INVICTUS Techfest 2025 across 50+ institutions, and Class Representative for the Software Engineering cohort at DTU."
  ],
  profileImage: "/assets/vibhore-goyal-profile.jpg"
};

export const contactFacts = [
  { label: "Email", value: "goelvibhore06@gmail.com", href: site.links.email },
  { label: "DTU Email", value: "vibhoregoyal_se24b03_058@dtu.ac.in", href: site.links.dtuEmail },
  { label: "Phone", value: "+91 7982784628", href: site.links.phone },
  { label: "LinkedIn", value: "/in/vibhoregoyal", href: site.links.linkedin },
  { label: "GitHub", value: "goelvibhore06", href: site.links.github },
  { label: "Roll No.", value: site.rollNumber },
  { label: "Location", value: site.location }
];

export const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 80 },
      { name: "OOP", level: 85 }
    ]
  },
  {
    number: "02",
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "REST APIs", level: 87 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    number: "03",
    title: "AI / ML / RAG",
    skills: [
      { name: "RAG (Retrieval-Aug. Gen.)", level: 80 },
      { name: "LangChain", level: 75 },
      { name: "Scikit-Learn", level: 85 },
      { name: "Machine Learning", level: 82 },
      { name: "Feature Selection", level: 80 }
    ]
  },
  {
    number: "04",
    title: "Competitive Programming",
    skills: [
      { name: "CodeChef (4 star - 1818)", level: 88 },
      { name: "LeetCode (Expert)", level: 84 },
      { name: "Problem Solving", level: 88 }
    ]
  }
];

export const workflowTools = ["Git", "VSCode", "Google Colab", "Kaggle", "Postman", "GitHub", "Linux"];

export const timeline = [
  {
    period: "Jun 2026 - Present",
    location: "Delhi, India",
    type: "Work_exp",
    title: "Software Developer Intern",
    org: "GSeven Computer Business Pvt. Ltd.",
    bullets: [
      "Contributing to multiple core software development areas: backend APIs, database workflows, and internal product features",
      "Improving system reliability through structured debugging and root-cause analysis",
      "Implementing input validation and error handling to strengthen application robustness",
      "Building reusable components and preparing documentation for smoother handoffs and faster weekly iterations"
    ],
    tags: ["Backend APIs", "Node.js", "MongoDB", "REST APIs", "Debugging"]
  },
  {
    period: "2025",
    location: "Delhi, India",
    type: "Leadership",
    title: "PR Specialist - INVICTUS Techfest 2025",
    org: "RoundTable DTU - All-India Inter-collegiate Technical Festival",
    bullets: [
      "Managed and expanded a cross-campus ambassador network for national-level hackathon visibility",
      "Expanded external college footprint to 50+ national institutions",
      "Directly drove the highest outstation student registration count in the techfest's history"
    ],
    tags: ["Public Relations", "Community Building", "Leadership"]
  },
  {
    period: "2024 - 2025",
    location: "Delhi, India",
    type: "Leadership",
    title: "Webmaster - Fresources Portal (DTU)",
    org: "Department of Software Engineering, DTU",
    bullets: [
      "Managed deployment, security, and content pipeline of the Fresources portal",
      "Indexed 80+ academic assets for the DTU Software Engineering branch",
      "Scaled platform infrastructure to support 8,000+ active student users",
      "Officially recognized by society leadership for platform growth"
    ],
    tags: ["Web Development", "Deployment", "Security", "Platform Scaling"]
  },
  {
    period: "2024 - Present",
    location: "Delhi, India",
    type: "Leadership",
    title: "Class Representative (CR)",
    org: "Department of Software Engineering, DTU",
    bullets: [
      "Managing academic operations, faculty communication, and conflict resolution for 100+ students",
      "Recognized by department leadership for streamlining administrative logistics",
      "Maintained flawless coordination between faculty and students throughout the academic year"
    ],
    tags: ["Leadership", "Communication", "Operations"]
  },
  {
    period: "2024 - 2028",
    location: "New Delhi, India",
    type: "Education",
    title: "B.Tech - Software Engineering",
    org: "Delhi Technological University (formerly DCE)",
    bullets: [
      "CGPA: 8.843 - Software Engineering specialization",
      "Class XII (CBSE): 91.8% and Class X (CBSE): 93.2% - Delhi International Public School",
      "4 star CodeChef (max rating 1818) and Expert on LeetCode",
      "1st Rank - Campus Cryptic Hunt for OSINT, lateral thinking, and cryptographic problem solving"
    ],
    tags: ["Software Engineering", "DTU", "CGPA 8.843"]
  }
];

export const credentials = [
  {
    number: "01",
    issuer: "IBM SkillsBuild",
    title: "Introduction to Artificial Intelligence",
    code: "ALM-COURSE_4058918",
    date: "Jul 08, 2026",
    hours: "1 hr 15 mins"
  },
  {
    number: "02",
    issuer: "CodeChef",
    title: "4-Star Competitive Programmer",
    code: "MAX_RATING_1818",
    date: "Ongoing",
    hours: "Active"
  },
  {
    number: "03",
    issuer: "LeetCode",
    title: "Expert Coder",
    code: "LEETCODE_EXPERT",
    date: "Ongoing",
    hours: "Active"
  },
  {
    number: "04",
    issuer: "DTU Cryptic Hunt",
    title: "1st Rank - Cryptic Hunt",
    code: "OSINT_CRYPTO_2025",
    date: "2025",
    hours: "High-stakes competition"
  },
  {
    number: "05",
    issuer: "RoundTable DTU // INVICTUS",
    title: "PR Specialist - Techfest 2025",
    code: "INVICTUS_PR_2025",
    date: "2025",
    hours: "50+ institutions reached"
  },
  {
    number: "06",
    issuer: "GSeven Computer Business Pvt. Ltd.",
    title: "Software Development Engineer Internship",
    code: "GSEVEN_SDE_2026",
    date: "Jun 2026 - Present",
    hours: "Ongoing"
  }
];

export const featuredCertification = {
  label: "IBM",
  title: "IBM SkillsBuild - Introduction to AI",
  summary:
    "Completed IBM's foundational Artificial Intelligence course, building deeper understanding of how AI systems operate and reshaping problem-solving through AI frameworks. Foundation for upcoming ML projects.",
  details: [
    { label: "Completion Date", value: "08 Jul 2026" },
    { label: "Learning Hours", value: "1h 15min" }
  ]
};

export const contactCards = [
  { label: "GitHub", value: "goelvibhore06", href: site.links.github },
  { label: "LinkedIn", value: "/in/vibhoregoyal", href: site.links.linkedin },
  { label: "Email", value: "goelvibhore06@gmail.com", href: site.links.email },
  { label: "Location", value: `${site.location} - ${site.coordinates}` }
];
