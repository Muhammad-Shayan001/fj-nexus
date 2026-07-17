export interface Service {
  id: string;
  title: string;
  category: string; // 'core' | 'enterprise' | 'creative' | 'marketing' | 'infrastructure'
  description: string;
  iconName?: string;
  longDescription: string;
  features: string[];
  process: string[];
  techStack: string[];
  pricing: string;
  faq: { question: string; answer: string }[];
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  details: string;
  solutions: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  metric: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
}

export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface ProjectEstimate {
  projectName: string;
  timeline: string;
  costEstimation: string;
  recommendedArchitecture: string;
  modules: { name: string; description: string; duration: string }[];
  techStack: string[];
  risks: string[];
}
