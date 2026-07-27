import { Achievement, Certification, Education, ExperienceItem, Project, SkillGroup } from '../core/models';

export const PORTFOLIO_DATA = {
  meta: {
    name: 'Diksha Lamichhane',
    title: 'Senior .NET & Full Stack Developer',
    tagline: 'Building robust, scalable applications with .NET and Angular',
    about: `I am a Software Engineer with 4+ years of experience building enterprise applications using C#, ASP.NET Core, .NET Framework, SQL Server, and Angular.

My expertise includes backend development, Angular, REST APIs, database design, third-party integrations, authentication and authorization, performance optimization, and maintaining scalable, high-quality software. I enjoy solving complex problems and building reliable systems that deliver real business value.

I'm currently expanding my skills in AI, machine learning, and AI-assisted software development to stay at the forefront of evolving technologies.`,
    location: 'Kathmandu, Nepal',
    email: 'lamichhanediksha17@gmail.com',
    github: 'https://github.com/diksha-lamichhane',
    linkedin: 'https://www.linkedin.com/in/diksha-lamichhane-6047b61a8/',
    resumeUrl: '/assets/resume/diksha-lamichhane-resume.pdf',
    typingWords: [' Software Engineer', ' Full Stack Developer', ' .NET Developer'],
  },

  stats: [
    { label: 'Years of Experience', value: '4+', icon: 'work_history' },
    { label: 'Technologies', value: '20+', icon: 'code' },
  ],

  skills: [
    {
      category: 'backend',
      label: 'Backend',
      icon: 'dns',
      skills: [
        { name: 'C#', level: 'expert' },
        { name: 'ASP.NET Core', level: 'expert' },
        { name: 'ASP.NET MVC', level: 'expert' },
        { name: '.NET Framework', level: 'expert' },
        { name: 'REST API Design', level: 'expert' },
        { name: 'Dapper', level: 'advanced' },
      ],
    },
    {
      category: 'frontend',
      label: 'Frontend',
      icon: 'web',
      skills: [
        { name: 'HTML5', level: 'expert' },
        { name: 'CSS3', level: 'expert' },
        { name: 'Angular', level: 'advanced' },
        { name: 'TypeScript', level: 'advanced' },
        { name: 'JavaScript', level: 'advanced' },
        { name: 'AngularJS', level: 'intermediate' },
      ],
    },
    {
      category: 'database',
      label: 'Database',
      icon: 'storage',
      skills: [
        { name: 'SQL Server', level: 'expert' },
        { name: 'Database Design', level: 'advanced' },
        { name: 'T-SQL', level: 'advanced' },
        { name: 'Stored Procedures', level: 'advanced' },
      ],
    },
    {
      category: 'tools',
      label: 'Tools & DevOps',
      icon: 'build',
      skills: [
        { name: 'Postman', level: 'expert' },
        { name: 'Visual Studio', level: 'expert' },
        { name: 'VS Code', level: 'expert' },
        { name: 'Git', level: 'advanced' },
        { name: 'GitHub', level: 'advanced' },
        { name: 'Claude AI', level: 'advanced' },
        { name: 'GitHub Copilot', level: 'advanced' },
      ],
    },
    {
      category: 'architecture',
      label: 'Practices',
      icon: 'architecture',
      skills: [
        { name: 'API Design', level: 'expert' },
        { name: 'Clean Architecture', level: 'advanced' },
        { name: 'SOLID Principles', level: 'advanced' },
        { name: 'Agile / Scrum', level: 'advanced' },
        { name: '3rd-party Integrations', level: 'advanced' },
      ],
    },
  ] as SkillGroup[],

  experience: [
    {
      id: 'exp-1',
      company: 'Impetus Incorporation',
      companyUrl: 'https://www.linkedin.com/company/avionte-staffing-software/posts/',
      role: 'Software Engineer',
      startDate: 'April 2023',
      endDate: 'Present',
      location: 'Kathmandu, Nepal',
      current: true,
      summary: 'Working on Avionte staffing software, contributing to backend services, frontend workflows, database design, and system integrations in a production environment.',
      responsibilities: [
        'Developed and maintained RESTful APIs using ASP.NET Core and C#.',
        'Built and enhanced responsive applications with Angular and AngularJS.',
        'Resolved complex production issues across backend, frontend, and databases.',
        'Optimized SQL Server queries and stored procedures for better performance.',
        'Integrated third-party APIs and external services.',
        'Wrote and maintained unit tests using NUnit and Rhino Mocks.',
        'Collaborated in Agile teams using GitHub and code reviews.',
        'Leveraged AI tools such as GitHub Copilot and Claude to improve development productivity.',
      ],
      technologies: ['C#', 'ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'Postman', 'Claude'],
    },
    {
      id: 'exp-2',
      company: 'DTRG Network',
      companyUrl: '',
      role: 'Dotnet Developer',
      startDate: 'April 2022',
      endDate: 'April 2023',
      location: 'Kathmandu, Nepal',
      current: false,
      summary: 'Worked on DG-Cloud (Electronic Health Record system), contributing to backend development, database design, and feature implementation in a structured enterprise environment.',
      responsibilities: [
        'Developed backend features using ASP.NET MVC, C#, and jQuery.',
        'Built healthcare modules for prescriptions, pharmacy, reporting, and payroll.',
        'Designed and optimized SQL Server databases, queries, and stored procedures.',
        'Maintained backend business logic and enterprise workflows.',
        'Resolved bugs and implemented new features for production systems.',
        'Contributed to enterprise application architecture and database design.',
      ],
      technologies: ['C#', 'ASP.NET MVC', 'AngularJS', 'SQL Server', 'Dapper'],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'proj-1',
      title: 'Alpine Bakery',
      description: 'Bakery management system for a food and beverage industry.',
      image: '/assets/images/project-1.png',
      technologies: ['C#', 'Angular', 'TypeScript', 'SQL', 'JavaScript'],
      githubUrl: 'https://github.com/Diksha-Lamichhane/Alpine',
      liveUrl: '',
      featured: true,
      category: ['frontend', 'backend', 'api'],
    },
    {
      id: 'proj-2',
      title: 'Image registration MVC',
      description: 'Practice MVC application for image registration and management.',
      image: '/assets/images/project-2.png',
      technologies: ['C#', 'JavaScript', 'HTML', 'CSS', 'SQL'],
      githubUrl: 'https://github.com/Diksha-Lamichhane/ImageRegistrationMVC',
      liveUrl: '',
      featured: false,
      category: ['backend', 'frontend'],
    },
    {
      id: 'proj-3',
      title: 'MVC CRUD Application',
      description: 'Practice MVC CRUD application for managing various entities.',
      image: '/assets/images/project-3.png',
      technologies: ['C#', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Diksha-Lamichhane/dotnet_mvc_crud',
      liveUrl: '',
      featured: false,
      category: ['fullstack'],
    },
  ] as Project[],

  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Science',
      field: 'Computer Science and Information Technology (BSc.CSIT)',
      institution: 'Tribhuvan University',
      startYear: 2016,
      endYear: 2021,
      description: 'Studied core concepts of computer science including data structures, algorithms, database systems, software engineering, and networking.',
    },
  ] as Education[],

  certifications: [] as Certification[],

  achievements: [
    {
      id: 'ach-1',
      title: '4+ Years of Professional Experience',
      description: 'Built and shipped production-grade .NET applications across multiple industries.',
      icon: 'workspace_premium',
      value: '4+',
      year: 2024,
    },
    {
      id: 'ach-2',
      title: 'Projects Delivered',
      description: 'Developed and maintained scalable backend applications and RESTful APIs using C#, ASP.NET MVC/.NET Core, and SQL Server for enterprise software solutions.',
      icon: 'rocket_launch',
    },
    {
      id: 'ach-3',
      title: 'AI Driven Developer',
      description: 'Utilize AI-powered development workflows to improve productivity while contributing to enterprise-scale software solutions.',
      icon: 'smart_toy',
    },
  ] as Achievement[],

  contact: {
    email: 'lamichhanediksha17@gmail.com',
    linkedin: 'https://www.linkedin.com/in/diksha-lamichhane-6047b61a8/',
    github: 'https://github.com/diksha-lamichhane',
    location: 'Kathmandu, Nepal',
  },
};
