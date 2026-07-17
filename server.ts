import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Create the express app
const app = express();
const PORT = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Initialize Gemini client lazily to avoid crashing if API key is missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. API: Dynamic Software Project Estimation Endpoint using Gemini API
app.post('/api/estimate', async (req, res) => {
  const { projectName, description, industry, budget, serviceType } = req.body;

  if (!projectName || !description) {
    return res.status(400).json({ error: 'Project name and description are required.' });
  }

  const ai = getGeminiClient();

  if (!ai) {
    // Graceful high-fidelity placeholder fallback if API key is not configured
    console.warn('GEMINI_API_KEY is not configured or is a placeholder. Returning a simulation.');
    
    // Simulate thinking delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const simulatedResponse = {
      projectName: projectName || 'Enterprise Solution',
      timeline: '12 - 16 Weeks',
      costEstimation: budget && budget !== 'not-sure' ? `${budget} (Est. $15,000 - $35,000)` : '$24,000 - $38,000 USD',
      recommendedArchitecture: 'Microservices with a React frontend (Vite/TypeScript) and a Node.js/Express backend, backed by PostgreSQL and hosted on scalable Cloud Run containers with Cloudflare CDN.',
      modules: [
        {
          name: 'Core Auth & RBAC Module',
          description: 'Secure multi-tenant authentication, user profiles, and role-based access control for administrators, staff, and external clients.',
          duration: '3 Weeks'
        },
        {
          name: 'Data Engine & Business Logic Core',
          description: `Custom functional workflows for ${industry || 'your industry'} including secure relational data logging, tracking, and transactional histories.`,
          duration: '5 Weeks'
        },
        {
          name: 'Interactive Reporting Dashboard',
          description: 'Rich graphical analytics panels to trace KPIs, operational metrics, financial logs, and inventory status in real-time.',
          duration: '4 Weeks'
        },
        {
          name: 'API Integrations & Notification Hub',
          description: 'Connection with essential services (email servers, payment processors, SMS alerts, and third-party databases).',
          duration: '2 Weeks'
        }
      ],
      techStack: ['React (TypeScript)', 'Node.js (Express)', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Google Cloud Run'],
      risks: [
        'Integrations with legacy systems may require specialized API middleware wrapper development.',
        'Data migration of records requires intense structural sanitization before deployment.'
      ]
    };

    return res.json({
      estimate: simulatedResponse,
      simulated: true,
      message: 'This estimate was simulated using FJ NEXUS standard blueprints because GEMINI_API_KEY is currently unconfigured in the system secrets.'
    });
  }

  try {
    const prompt = `Analyze the following software project requirements for FJ NEXUS software house client and generate a highly professional, enterprise-grade, custom software engineering proposal.
    
    Client Context:
    - Project Name: ${projectName}
    - Industry Segment: ${industry || 'General Business'}
    - Service Interest: ${serviceType || 'Custom Software Development'}
    - Target Budget Tier: ${budget || 'Undisclosed'}
    - Core Requirements & Description: ${description}

    Generate a complete project estimate matching the requested JSON schema. Be highly realistic, technical, professional, and outcome-led (like AWS or McKinsey tech architects). Avoid generic phrasing.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: 'You are Muhammad Shayan, Founder & Lead Developer at FJ NEXUS, an elite global software house. Your goal is to analyze client requirements and provide precise, highly professional, realistic software estimates, architecture descriptions, tech stack lists, structural modules, and risk parameters. Return ONLY a valid JSON object matching the requested schema.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            projectName: { type: Type.STRING, description: 'The finalized name of the project' },
            timeline: { type: Type.STRING, description: 'Estimated calendar duration (e.g., 10 - 14 Weeks)' },
            costEstimation: { type: Type.STRING, description: 'Highly professional, precise pricing estimation range' },
            recommendedArchitecture: { type: Type.STRING, description: 'Technical design overview (e.g., Microservices, Event-driven, MVC, etc.)' },
            modules: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: 'Name of the feature module' },
                  description: { type: Type.STRING, description: 'Detailed explanation of what this module engineers' },
                  duration: { type: Type.STRING, description: 'Duration to develop (e.g., 3 Weeks)' }
                },
                required: ['name', 'description', 'duration']
              }
            },
            techStack: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'List of premium, modern technologies suitable for this build'
            },
            risks: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Potential engineering or integration risks with mitigation advisory'
            }
          },
          required: ['projectName', 'timeline', 'costEstimation', 'recommendedArchitecture', 'modules', 'techStack', 'risks']
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response from Gemini API');
    }

    const cleanedText = text.trim();
    const parsedEstimate = JSON.parse(cleanedText);

    res.json({
      estimate: parsedEstimate,
      simulated: false
    });
  } catch (error: any) {
    console.error('Error generating estimate with Gemini:', error);
    res.status(500).json({
      error: 'Failed to generate dynamic estimate. Please try again.',
      details: error.message
    });
  }
});

// 2. Simple Contact Form stub endpoint for validation & simulation
app.post('/api/contact', (req, res) => {
  const { name, email, company, service, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields (Name, Email, Message).' });
  }

  // Simulate storing or sending email
  res.json({
    success: true,
    message: `Thank you, ${name}! Your consultation request for FJ NEXUS has been successfully logged. Our Senior Accounts Manager will contact you at ${email} within 2 business hours.`
  });
});

// 3. Vite development server integration or static file serving
async function initializeServer() {
  if (process.env.NODE_ENV !== 'production') {
    // In development mode, we use Vite in middleware mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('Dev server running with Vite middleware');
  } else {
    // In production, we serve the compiled dist files statically
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Production server serving static assets from', distPath);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`FJ NEXUS Enterprise Server running on port ${PORT}`);
  });
}

initializeServer().catch((err) => {
  console.error('Failed to initialize FJ NEXUS server:', err);
});
