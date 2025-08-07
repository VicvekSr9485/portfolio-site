export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}