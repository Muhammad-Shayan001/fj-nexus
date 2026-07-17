import { Service, Industry, Project, TeamMember, BlogPost, JobRole } from './types';

export const SERVICES: Service[] = [
  // Core Software Engineering
  {
    id: 'software-dev',
    title: 'Custom Software Development',
    category: 'core',
    description: 'Bespoke high-performance software engineered to solve your exact operational challenges and drive efficiency.',
    longDescription: 'Our custom software development services provide end-to-end engineering tailored exclusively to your business processes. We design, build, and integrate secure, scalable software solutions that modernize legacy workflows, eliminate bottlenecks, and automate complex tasks.',
    features: [
      'Tailored business logic and algorithms',
      'Scalable, cloud-native backend architectures',
      'Integration with legacy data and mainframes',
      'Real-time data synchronization',
      'Rigorous unit, integration, and security testing'
    ],
    process: ['Discovery & Requirements', 'High-Level Architecture', 'Agile Sprints & Continuous CI/CD', 'Automated QA & Security Audit', 'Deployment & 24/7 Monitoring'],
    techStack: ['Node.js', 'TypeScript', 'Go', 'Python', 'PostgreSQL', 'Docker'],
    pricing: 'Enterprise Custom Pricing',
    faq: [
      { question: 'Do we own the source code?', answer: 'Yes, full intellectual property and source code ownership are transferred to you upon project completion.' },
      { question: 'How do you handle post-deployment updates?', answer: 'We provide comprehensive maintenance SLAs covering patches, scaling support, and feature updates.' }
    ]
  },
  {
    id: 'web-apps',
    title: 'Enterprise Web Applications',
    category: 'core',
    description: 'Dynamic, secure, and lightning-fast web applications built with modern React, Vue, and high-performance backends.',
    longDescription: 'We build next-generation web applications with sophisticated user experiences and robust, multi-tenant cloud architectures. Designed for speed, security, and responsiveness.',
    features: [
      'Single Page App (SPA) & Server Side Rendering (SSR)',
      'Highly responsive layouts for all device screens',
      'Robust JWT-based authentication and role permissions',
      'Interactive dashboards and real-time charts',
      'API-first headless design'
    ],
    process: ['Wireframing & UX Research', 'Frontend Styling & State Design', 'API Integration', 'End-to-End Testing', 'Global CDN Deployment'],
    techStack: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'GraphQL'],
    pricing: 'Starting at $15,000',
    faq: [
      { question: 'Is the website optimized for mobile devices?', answer: 'Yes, every layout is designed responsive-first to render flawlessly on mobile, tablet, and desktop.' }
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Native & Cross-Platform Mobile Apps',
    category: 'core',
    description: 'High-performance mobile applications for iOS and Android leveraging Flutter, React Native, and Swift/Kotlin.',
    longDescription: 'Deliver responsive, feature-rich mobile experiences to your global customer base. We build native iOS and Android apps, as well as highly optimized cross-platform products.',
    features: [
      'Offline-first capabilities and local storage',
      'Biometric authentication (FaceID, fingerprint)',
      'Push notifications and geofencing',
      'In-app purchases and secure payment gateways',
      'App Store and Google Play compliance and publication'
    ],
    process: ['Mobile UX Mapping', 'UI Design Sprints', 'Native/Cross-Platform Coding', 'Device Lab Testing', 'App Store Submission'],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    pricing: 'Starting at $20,000',
    faq: [
      { question: 'Which platforms do you target?', answer: 'We target both iOS and Android simultaneously, using native languages or cross-platform frameworks depending on project needs.' }
    ]
  },

  // Enterprise Systems (ERPs)
  {
    id: 'school-erp',
    title: 'School Management System',
    category: 'enterprise',
    description: 'Unified educational ERP organizing student records, fees, schedules, grading systems, and parent portals.',
    longDescription: 'A complete, enterprise-grade educational ERP built to handle the complexities of K-12 schools and academies. This system integrates academic records, student billing, teacher payroll, and communication workflows under a single secure panel.',
    features: [
      'Interactive Student & Parent portals',
      'Automated invoice generation and online fee collection',
      'Dynamic schedule builder & attendance tracking',
      'Report card generator and gradebook management',
      'Staff and payroll management module'
    ],
    process: ['Institution Audit', 'Database Schema Setup', 'Module Configuration', 'Staff Training', 'Go-Live Support'],
    techStack: ['TypeScript', 'Express', 'PostgreSQL', 'React', 'AWS'],
    pricing: 'SaaS Monthly License or Custom Self-Host',
    faq: [
      { question: 'Is the student data secure?', answer: 'Absolutely. We comply with COPPA and regional educational data protection regulations, with full encryption at rest and in transit.' }
    ]
  },
  {
    id: 'hospital-erp',
    title: 'Hospital & Clinic ERP',
    category: 'enterprise',
    description: 'Comprehensive healthcare system managing electronic health records (EHR), scheduling, billing, and pharmacy.',
    longDescription: 'HIPAA-compliant healthcare enterprise platform that connects patient management, clinical documentation, billing, inventory, and diagnostic imaging into one fast, secure system.',
    features: [
      'Electronic Health Records (EHR) with medical history',
      'Smart appointment scheduling & doctor roster management',
      'Automated medical billing and insurance processing',
      'Pharmacy and laboratory inventory manager',
      'Secure telemedicine video consultations'
    ],
    process: ['Regulatory Review', 'Clinical Workflow Mapping', 'Secure Database Deployment', 'Medical Staff Dry-Run', 'Production Release'],
    techStack: ['Java Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    pricing: 'Custom Enterprise Quote',
    faq: [
      { question: 'Is this software HIPAA compliant?', answer: 'Yes, our Hospital ERP is fully engineered for HIPAA compliance, featuring granular audit logs, secure encryption, and MFA.' }
    ]
  },
  {
    id: 'pos-system',
    title: 'Point of Sale (POS) Systems',
    category: 'enterprise',
    description: 'Lightning-fast retail POS systems featuring live inventory tracking, multi-branch syncing, and diverse payments.',
    longDescription: 'An ultra-reliable, offline-resilient retail POS system designed for restaurants, retail chains, and supermarkets. Keeps your checkout lines moving and your inventory updated.',
    features: [
      'Offline cash register operation with auto-sync on reconnect',
      'Real-time multi-branch inventory tracking',
      'Barcode/QR scanner integration',
      'Loyalty programs and digital gift cards',
      'Split-billing and table-mapping for hospitality'
    ],
    process: ['Hardware Profiling', 'Database Replication Setup', 'Interface Customization', 'On-Site Setup', 'SLA Support'],
    techStack: ['Electron', 'React', 'SQLite', 'Node.js', 'Tailwind CSS'],
    pricing: 'Starting at $5,000 per branch',
    faq: [
      { question: 'What hardware is supported?', answer: 'Our POS is compatible with standard Windows, Android, macOS, and iPad terminals, along with standard receipt printers.' }
    ]
  },
  {
    id: 'crm-software',
    title: 'Enterprise CRM Platforms',
    category: 'enterprise',
    description: 'Custom client relationship tools featuring automated pipelines, lead tracking, and omnichannel communications.',
    longDescription: 'Supercharge your sales force. We design and implement custom CRM systems that give your teams a 360-degree view of your clients and automate repetitive follow-ups.',
    features: [
      'Visual drag-and-drop sales pipeline',
      'Automated lead scoring and assignments',
      'Omnichannel integration (Email, SMS, WhatsApp, Phone)',
      'Rich reporting & forecasting dashboards',
      'Custom workflows and automatic contract generation'
    ],
    process: ['Sales Flow Diagnostics', 'CRM Architecture Design', 'Third-Party Integration', 'Team Training', 'Launch & Iterate'],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Twilio', 'SendGrid'],
    pricing: 'Starting at $12,000',
    faq: [
      { question: 'Can we integrate it with our current email server?', answer: 'Yes, our CRM supports direct integration with G Suite, Office 365, IMAP, and SMTP servers.' }
    ]
  },

  // Creative & UX
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Branding',
    category: 'creative',
    description: 'Breathtaking interfaces, interactive wireframes, and distinctive brand identities centered around human behavior.',
    longDescription: 'We translate complex operational ideas into clear, intuitive, and visually majestic interfaces. Our designs prioritize usability, speed, and aesthetic luxury.',
    features: [
      'In-depth user research and empathy maps',
      'Interactive Figma prototypes and design systems',
      'Custom vector typography and brand logo design',
      'A/B usability testing and heatmaps',
      'Pixel-perfect assets and handoff guidelines'
    ],
    process: ['User Persona Audits', 'Low-Fi Wireframing', 'High-Fi Interface Design', 'Interactive Prototyping', 'Developer Handoff'],
    techStack: ['Figma', 'Adobe Creative Suite', 'Canva', 'Spline 3D'],
    pricing: 'Starting at $7,500',
    faq: [
      { question: 'Do you deliver assets ready for coding?', answer: 'Yes, we provide fully structured Figma files with centralized variables, components, and exportable high-res assets.' }
    ]
  },

  // AI & Automation
  {
    id: 'ai-automation',
    title: 'AI Solutions & Business Automation',
    category: 'infrastructure',
    description: 'Incorporate cutting-edge LLMs, predictive algorithms, and custom automation agents to automate manual processes.',
    longDescription: 'Bring the power of artificial intelligence to your enterprise workflows. We integrate systems like Gemini and other leading models to automate content summaries, client replies, document audits, and data extraction.',
    features: [
      'Custom LLM integrations and fine-tuning',
      'Automated document classification and extraction',
      'Smart customer service agents with semantic memory',
      'Predictive analytics for inventory and sales',
      'Workflow trigger automations (Zapier/Make/Custom)'
    ],
    process: ['Process Discovery & Feasibility', 'Prompt Engineering & RAG Design', 'Model Selection & Testing', 'Backend Integration', 'Feedback Loop Tuning'],
    techStack: ['Gemini API', 'Python', 'LangChain', 'TensorFlow', 'Pinecone', 'FastAPI'],
    pricing: 'Enterprise Custom SLA',
    faq: [
      { question: 'How secure is the data sent to the AI?', answer: 'We deploy enterprise-grade data privacy filters and use secure APIs that do not utilize your private data for model training.' }
    ]
  },

  // Infrastructure & Consulting
  {
    id: 'cyber-security',
    title: 'Enterprise Cyber Security',
    category: 'infrastructure',
    description: 'Comprehensive security audits, penetration testing, threat hunting, and automated compliance setups.',
    longDescription: 'Protect your enterprise digital assets. We perform rigorous structural vulnerability checks, audit your server networks, and implement high-security zero-trust architectures.',
    features: [
      'Full penetration testing & vulnerability scanning',
      'Zero-Trust Network Access (ZTNA) implementation',
      'Compliance preparation (ISO 27001, SOC2, GDPR)',
      'Automated intrusion detection & real-time alerts',
      'Staff social engineering and security training'
    ],
    process: ['System Penetration Probe', 'Vulnerability Inventory', 'Remediation Sprints', 'Automated Patch Setup', 'Compliance Certification'],
    techStack: ['Kali Linux', 'Wireshark', 'Wazuh', 'Docker Security', 'Cloudflare WAF'],
    pricing: 'Starting at $10,000 / Audit',
    faq: [
      { question: 'How often should we audit our systems?', answer: 'For high-exposure enterprises like hospitals or e-commerce, we recommend biannual deep-penetration scans and automated daily security checks.' }
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'schools',
    title: 'Schools & Academies',
    description: 'Modernizing student management, automated fee cycles, grading architectures, and parent-teacher portals.',
    iconName: 'GraduationCap',
    details: 'Schools require a seamless operational flow that connects administrators, teachers, students, and parents. Our custom School ERP unifies tuition invoicing, digital grading, report cards, class rosters, and push-notifications in a single browser and mobile screen.',
    solutions: ['Tuition billing with automatic SMS alerts', 'Gradebook & automated report card printouts', 'Teacher scheduling & substitute management']
  },
  {
    id: 'hospitals',
    title: 'Hospitals & Medical Clinics',
    description: 'Secure, HIPAA-compliant patient admission systems, billing gateways, EHR tracking, and medical rosters.',
    iconName: 'Activity',
    details: 'Healthcare facilities demand 100% data fidelity, zero downtime, and absolute privacy compliance. We configure custom electronic health systems that securely record treatments, manage lab work results, schedule operating rooms, and bill insurances.',
    solutions: ['EHR systems with digital prescription templates', 'Roster scheduler with doctor dashboard', 'Online clinic booking and telemedicine portal']
  },
  {
    id: 'universities',
    title: 'Universities & Colleges',
    description: 'Scalable solutions for academic enrollment, financial aid pipelines, department structures, and student portals.',
    iconName: 'BookOpen',
    details: 'Large-scale campuses require massive transaction capacity and cross-departmental integration. Our solutions handle thousands of simultaneous enrollments, student records, fee structures, and course registrations.',
    solutions: ['Self-service student enrollment portals', 'Curriculum management & degree audits', 'Research project and grant budget allocation']
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Food Chains',
    description: 'Fast, synchronized table-mapping POS systems, kitchen monitors, inventory tracking, and loyalty modules.',
    iconName: 'Utensils',
    details: 'Food service relies on speed, accurate ordering, and lean inventory. We design dual-POS terminals that allow waiters to process payments instantly, while order tickets instantly populate on the kitchen display monitors.',
    solutions: ['Interactive digital floorplan & table management', 'Automated stock alert based on recipe depletion', 'Online mobile food ordering with POS syncing']
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Brokerages',
    description: 'Interactive property catalogs, dynamic CRM lead routing, tenant invoicing, and virtual tour galleries.',
    iconName: 'Home',
    details: 'Empower agents with a unified client dashboard. We build custom real estate software with high-end matching engines that pair potential buyers with matching properties, track contracts, and manage rental portfolios.',
    solutions: ['Automated lease reminders and digital signatures', 'Lead-routing matching engine for property agents', 'Interactive map integrations with surrounding amenities']
  },
  {
    id: 'retail',
    title: 'Retail Stores & E-Commerce',
    description: 'Synchronized multi-channel checkout channels, automated stock alerts, and client loyalty databases.',
    iconName: 'ShoppingBag',
    details: 'Unify physical stores and digital Shopify databases. We build retail systems that keep stock levels in lockstep across all websites and storefront registers, helping prevent double-sales.',
    solutions: ['Integrated multi-channel inventory database', 'Barcode registration & bulk label printer', 'Customer sales frequency analysis and reports']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-apex',
    title: 'Apex Hospital Management System',
    client: 'Apex Group of Hospitals',
    industry: 'Hospitals & Medical Clinics',
    service: 'Hospital & Clinic ERP',
    metric: '42% admin overhead reduction',
    challenge: 'Apex struggled with fragmented patient databases across 4 medical branches, leading to dual appointments, delayed lab updates, and manual billing leaks.',
    solution: 'We engineered a centralized HIPAA-compliant Medical ERP hosting a secure Electronic Health Record database, synced doctor schedulers, and integrated laboratory test reports.',
    results: [
      'Consolidated patient files into a single master profile',
      'Reduced average checkout and billing wait time by 55%',
      'Eliminated billing leaks, saving $120,000 in the first quarter'
    ],
    testimonial: {
      quote: 'FJ NEXUS transformed our medical administrative chaos into an elegant, reliable workflow. Our medical staff can now focus purely on saving lives.',
      author: 'Dr. Evelyn Foster',
      role: 'Chief Medical Officer',
      company: 'Apex Healthcare Group'
    }
  },
  {
    id: 'project-educonnect',
    title: 'EduConnect Academy Portal',
    client: 'Beacon International Schools',
    industry: 'Schools & Academies',
    service: 'School Management System',
    metric: '98% fee collection efficiency',
    challenge: 'Beacon manual cash collection, paper-based report cards, and lack of parent communication led to high outstanding tuition balances and administrative friction.',
    solution: 'We developed the EduConnect ERP, equipping parents with instant mobile billing notifications, digital fee receipts, real-time student attendance, and secure digital report card downloads.',
    results: [
      ' Tuitions paid via credit card or digital wallets with one tap',
      'Reduced teacher workload by 12 hours weekly through automatic grading logs',
      'Increased overall parent satisfaction by 78%'
    ],
    testimonial: {
      quote: 'Outstanding software. Our tuition outstanding fees plummeted within 30 days of deploying the EduConnect billing module.',
      author: 'Marcus Vance',
      role: 'Finance Director',
      company: 'Beacon International Schools'
    }
  },
  {
    id: 'project-smarthome',
    title: 'SmartFlow Brokerage System',
    client: 'SmartFlow Properties',
    industry: 'Real Estate & Brokerages',
    service: 'Enterprise CRM Platforms',
    metric: '+35% lead-to-close rate',
    challenge: 'Property agents were losing hot buyer leads due to slow agent assignment and manually pairing buyer criteria against 5,000 listing portfolios.',
    solution: 'We developed a real-time matching engine within a custom mobile CRM that instantly routes leads to the appropriate neighborhood agent and recommends matching listing packages.',
    results: [
      'Reduced lead assignment latency from 4 hours to 90 seconds',
      'Automated email listings matches resulting in double the inquiry rates',
      'Generated a complete audit log of all client-agent WhatsApp chats'
    ],
    testimonial: {
      quote: 'The search matching engine FJ NEXUS built has become our company secret weapon. It has boosted our close rates and streamlined agent tracking.',
      author: 'Sarah Jenkins',
      role: 'Managing Partner',
      company: 'SmartFlow Realty'
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Muhammad Shayan',
    role: 'Founder & Lead Developer',
    bio: 'Bespoke full-stack engineer and enterprise systems architect. Founder of FJ NEXUS. Expert in custom high-fidelity school ERP databases, hospital clinical workflows, POS registers, and AI fine-tuning. Committed to crafting high-security standalone solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'member-2',
    name: 'Sarah Lin',
    role: 'Head of UI/UX Design',
    bio: 'Aesthetic visionary with a decade of creative agency experience designing for premium technology brands. Believes in human-centric luxury interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'member-3',
    name: 'Alexander Rostov',
    role: 'Lead AI Engineer',
    bio: 'Masters in Artificial Intelligence from ETH Zürich. Leading the team in designing proprietary agent workflows, RAG setups, and automated LLM fine-tuning.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Why Custom ERP Beats Off-the-Shelf Software for Healthcare Enterprises',
    category: 'Enterprise Tech',
    excerpt: 'Generic templates are failing modern clinical workflows. Discover how bespoke HIPAA-compliant systems reduce physician fatigue and plug critical revenue leaks.',
    date: 'July 14, 2026',
    readTime: '6 min read',
    author: 'Muhammad Shayan'
  },
  {
    id: 'blog-2',
    title: 'Supercharging Lead Routing: How AI Automations Drive Modern Brokerages',
    category: 'AI & Automation',
    excerpt: 'Manual lead assignments lose deals. Learn how semantic database models match client search parameters to real estate listings automatically in 90 seconds.',
    date: 'June 28, 2026',
    readTime: '5 min read',
    author: 'Alexander Rostov'
  },
  {
    id: 'blog-3',
    title: 'Aesthetic Trust: The Direct Connection Between UI Polish and Client Conversions',
    category: 'Design Systems',
    excerpt: 'How multi-million-dollar technology firms like Stripe use micro-interactions and generous typography breathing room to establish instant market confidence.',
    date: 'May 19, 2026',
    readTime: '4 min read',
    author: 'Sarah Lin'
  }
];

export const JOBS: JobRole[] = [
  {
    id: 'job-1',
    title: 'Senior Full-Stack TypeScript Engineer',
    department: 'Software Engineering',
    location: 'Remote (Global) / London Office',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are seeking an expert developer to engineer premium, responsive web frontends and cloud-native backends utilizing React, Next.js, and Node.js. You will lead client modules and orchestrate high-performance API structures.',
    requirements: [
      'Deep mastery of TypeScript, React, Vite, and Tailwind CSS',
      'Experience setting up scalable SQL databases (PostgreSQL/Cloud SQL)',
      'Proven track record writing secure, multi-tenant APIs',
      'Comfortable with CI/CD, Docker, and AWS cloud deploys'
    ]
  },
  {
    id: 'job-2',
    title: 'AI Prompt & Integration Engineer',
    department: 'Artificial Intelligence',
    location: 'London Office / Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join our automation department to build next-generation smart agents. You will orchestrate LLM routing, configure vector database retrieval (RAG), and program secure backend interfaces connecting enterprise tools.',
    requirements: [
      'Strong programming experience in Python or TypeScript Node.js',
      'Familiarity with @google/genai SDK, LangChain, or direct LLM APIs',
      'Knowledge of vector index databases (Pinecone, pgvector)',
      'Understanding of privacy controls and API-key security practices'
    ]
  }
];
