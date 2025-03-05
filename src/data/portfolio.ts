
// This file contains all the data for your portfolio
// Update this file to change the content without touching the components

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  fromDate: string;
  toDate: string | 'Present';
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  fromDate: string;
  toDate: string | 'Present';
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  about: string;
  resume?: string;
  avatar?: string;
  socialLinks: SocialLink[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

const portfolioData: PortfolioData = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "hello@example.com",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  bio: "Building digital products, brands, and experiences",
  about: "I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly web applications. With 5+ years of experience in web development, I specialize in React, Node.js, and modern JavaScript. I love learning new technologies and solving complex problems.",
  resume: "/resume.pdf",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com",
      icon: "dribbble"
    }
  ],
  skills: [
    { name: "React", level: 5, category: "frontend" },
    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "HTML/CSS", level: 5, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Express", level: 4, category: "backend" },
    { name: "MongoDB", level: 3, category: "backend" },
    { name: "PostgreSQL", level: 3, category: "backend" },
    { name: "AWS", level: 3, category: "tools" },
    { name: "Git", level: 4, category: "tools" },
    { name: "Figma", level: 4, category: "design" },
    { name: "UI/UX Design", level: 3, category: "design" }
  ],
  projects: [
    {
      id: "project-1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment processing and inventory management",
      longDescription: "Built a complete e-commerce solution from scratch using React, Node.js, and MongoDB. Features include product catalog, user authentication, shopping cart, payment processing with Stripe, and an admin dashboard for inventory management.",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      year: 2023,
      category: "web"
    },
    {
      id: "project-2",
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects",
      longDescription: "Designed and developed a task management application that helps users organize their work with features like task creation, due dates, project grouping, and progress tracking. The app uses React for the frontend and Firebase for backend services.",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Firebase", "Redux", "Material UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      year: 2022,
      category: "web"
    },
    {
      id: "project-3",
      title: "Fitness Tracker",
      description: "A mobile app for tracking workouts and fitness progress",
      longDescription: "Created a mobile-first fitness tracking application that allows users to record workouts, track progress over time, and set goals. The app features workout templates, progress charts, and social sharing capabilities.",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      year: 2022,
      category: "mobile"
    },
    {
      id: "project-4",
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my work and skills",
      longDescription: "Designed and developed a responsive portfolio website to showcase my projects and skills. The site features a clean, modern design with smooth animations and a contact form.",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      year: 2021,
      category: "web"
    }
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      fromDate: "2021-01",
      toDate: "Present",
      description: "Lead frontend development for multiple web applications, collaborated with designers and backend developers, implemented best practices for code quality and performance optimization.",
      skills: ["React", "TypeScript", "Redux", "Jest", "Webpack"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "Los Angeles, CA",
      fromDate: "2018-03",
      toDate: "2020-12",
      description: "Worked on various web applications from concept to deployment, participated in all phases of the software development lifecycle, and mentored junior developers.",
      skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React"]
    },
    {
      title: "Web Developer",
      company: "CreativeMinds Agency",
      location: "Portland, OR",
      fromDate: "2016-05",
      toDate: "2018-02",
      description: "Developed responsive websites for clients across various industries, maintained existing websites, and implemented new features based on client requirements.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      fromDate: "2014-09",
      toDate: "2016-06",
      description: "Specialized in web technologies and artificial intelligence. Thesis on real-time web applications."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Washington",
      location: "Seattle, WA",
      fromDate: "2010-09",
      toDate: "2014-06",
      description: "Graduated with honors. Participated in various coding competitions and hackathons."
    }
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022-05",
      url: "https://example.com",
      credentialId: "ABC123456"
    },
    {
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2021-11",
      url: "https://example.com",
      credentialId: "XYZ789012"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB",
      date: "2020-08",
      url: "https://example.com",
      credentialId: "MDB345678"
    }
  ]
};

export default portfolioData;
