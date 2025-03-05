
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
  name: "MAYUR SALUNKHE",
  title: "Full Stack Developer",
  email: "mayursalunkhe144@gmail.com",
  phone: "+91-8080747336",
  location: "Pune, Maharashtra",
  bio: "Building digital products, brands, and experiences",
  about: "I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly web applications. With experience in web development, I specialize in React, Node.js, and modern JavaScript. I love learning new technologies and solving complex problems.",
  resume: "/resume.pdf",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/mayurTsalunkhe144",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mayur-salunkhe-090a93287/",
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
    { name: "JavaScript", level: 4, category: 'frontend' },
    { name: "React.js", level: 4, category: 'frontend' },
    { name: "HTML/CSS", level: 4, category: 'frontend' },
    { name: "Tailwind CSS", level: 4, category: 'frontend' },
    { name: "C/C++", level: 4, category: 'other' },
    { name: "Java", level: 3, category: 'other' },
    { name: "Python", level: 3, category: 'other' },
    { name: "SQL", level: 3, category: 'backend' },
    { name: "MySQL", level: 3, category: 'backend' },
    { name: "Firebase", level: 3, category: 'backend' },
    { name: "MongoDB", level: 3, category: 'backend' },
    { name: "Git/GitHub", level: 4, category: 'tools' },
    { name: "Docker", level: 3, category: 'tools' },
    { name: "Windows", level: 4, category: 'tools' },
    { name: "Linux", level: 3, category: 'tools' }
  ],
  projects: [
    {
      id: "project-1",
      title: "AI Interview Mocker",
      description: "A web app using Google Gemini AI for simulating real-time mock interviews",
      longDescription: "The AI Interview Mocker is a web app using Google Gemini AI, Next.js, and Tailwind CSS to simulate real-time mock interviews. It generates AI-driven technical and HR questions, evaluates responses, and provides instant feedback. The system adapts to user skills, covering topics like data structures, algorithms, and system design, ensuring an interactive and personalized interview experience.",
      thumbnail: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Google Gemini", "Next.js", "Tailwind CSS", "Clerk"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mayurTsalunkhe144/ai-interview-mocker",
      featured: true,
      year: 2024,
      category: "web"
    },
    {
      id: "project-2",
      title: "Video Conferencing App",
      description: "A real-time communication platform for seamless video calls and collaboration",
      longDescription: "The Video Conferencing App is a real-time communication platform developed using React.js, Stream.io, and Clerk for user management. It enables seamless video calls, messaging, and collaboration with features like secure user authentication, dynamic room creation, and participant management. The app leverages Stream.io for high-quality video streaming and Clerk for robust user authentication and role management, providing a smooth and reliable conferencing experience.",
      thumbnail: "https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "Stream.io", "Clerk", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mayurTsalunkhe144/video-conferencing-app",
      featured: true,
      year: 2023,
      category: "web"
    }
  ],
  experience: [
    {
      title: "Web Developer Intern",
      company: "EY GDS AICTE",
      location: "Pune, Maharashtra",
      fromDate: "02/2024",
      toDate: "04/2024",
      description: "Developed a note-sharing application using Django framework. Conducted regular code reviews, identified areas for improvement, and implemented best practices to maintain code quality, readability, and maintainability throughout the development lifecycle. Demonstrated strong problem-solving abilities, adaptability, and a proactive approach to overcoming challenges.",
      skills: ["Django", "Python", "Backend Development", "Database Management", "Problem Solving"]
    },
    {
      title: "Industrial Training",
      company: "WELSOFT",
      location: "Kolhapur, Maharashtra",
      fromDate: "2019",
      toDate: "2019",
      description: "Developed a web application using ASP.NET. Conducted regular code reviews, identified areas for improvement, and implemented best practices to maintain code quality, readability, and maintainability throughout the development lifecycle. Performed test cases, found bugs in production phase code base, created reports, managed database, created responsive frontend designs.",
      skills: ["ASP.NET", "Web Development", "Testing", "Database Management", "Frontend Design"]
    }
  ],
  education: [
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Trinity College of Engineering and Research",
      location: "Pune, Maharashtra",
      fromDate: "2022",
      toDate: "Present",
      description: "Cumulative GPA: 8.55/10.00"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "BSIET",
      location: "Kolhapur, Maharashtra",
      fromDate: "2019",
      toDate: "2022",
      description: "Percentage: 87.89%"
    },
    {
      degree: "SSC",
      institution: "Private Highschool",
      location: "Kolhapur, Maharashtra",
      fromDate: "2018",
      toDate: "2019",
      description: "Percentage: 83.60%"
    }
  ],
  certifications: [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      url: "https://example.com",
      credentialId: "WD123456"
    },
    {
      title: "React.js Certification",
      issuer: "Meta",
      date: "2023",
      url: "https://example.com",
      credentialId: "RC789012"
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "2022",
      url: "https://example.com",
      credentialId: "PP345678"
    }
  ]
};

export default portfolioData;
