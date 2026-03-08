export const portfolioData = {
  personal: {
    name: 'Abu Zohaifa',
    role: 'Full Stack Developer',
    Age: '25'
  },
  contact: {
    email: 'abuzohaifa@gmail.com',
    phoneNum: '+8801730888115',
    location: 'Chittagong Bangladesh',
  },
  socialLinks: [
    { type: 'github', url: 'https://www.github.com/zohaifa' },
    { type: 'linkedin', url: 'https://www.linkedin.com/in/abu-zohaifa-947508347/' },
  ],
  bio: {
    title: 'About Me',
    paragraphs: [
      '6th CSE student with a passion for the process of breaking problems down wisely and solving it precisely',
      'Looking for a platform to challenge and develop my skills while also contributing to something that matters in the world',

    ],
    buttons: [
      { label: 'Download CV', href: '#', variant: 'primary' },
      { label: 'View Projects', href: '#', variant: 'secondary' },
    ],
  },
  skills: {
    title: 'Skills & Expertise',
    subtitle: 'A comprehensive overview of my technical capabilities',
    blocks: [
      {
        title: 'Mastery',
        icon: 'mastery',
        items: [
            { name: 'JavaScript', level: 92 },
            { name: 'Node.js', level: 88 },
            { name: 'Express.js', level: 98 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Git & Github', level: 85 },
            { name: 'Prisma', level: 95 },

        ],
      },
      {
        title: 'Experience',
        icon: 'experience',
        items: [
            { name: 'React.js', level: 60 },
            { name: 'TypeScript', level: 78 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'Django', level: 70 },
        ],
      },
      {
        title: 'Aspiration',
        icon: 'aspiration',
        items: [
            { name: 'Flutter', level: 30 },
            { name: 'Docker', level: 23 },
            { name: 'Kubernetics', level: 15 },
            { name: 'Nginx', level: 5 },

        ],
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A showcase of my recent work and personal projects',
    cards: [
      {
        id: 1,
        title: 'IIUC Grievance Platform',
        description:
          'A social media style platform for students to share their grievance',
        tags: ['React', 'Express.js', 'PostgreSQL', 'Node.js'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
        link: 'https://project-grievance.vercel.app/',
      },
      {
        id: 2,
        title: 'TMD Bus Management System',
        description:
          'A system for students to book tickets for bus the night before to avoid extra bus allocation and save cost',
        tags: ['React', 'AppWrite'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
        link: 'https://tmd-system-iiuc.vercel.app/',
      },
      {
        id: 3,
        title: 'Ghordokan',
        description:
          'A basic e-commerce app for my father to sell his product',
        tags: ['React', 'Supabase'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
        link: 'https://www.ghordokan.com',
      },
    ],
  },
  others: {
    educationTitle: 'Education',
    achievementsTitle: 'Achievements',
    education: [
      {
        degree: 'Bachelor of Science in Computer Engineering',
        school: 'International Islamic University Chittagong',
        period: '2023 - current',
        description: 'Current CGPA: 3.85/4.00',
      },
      {
        degree: 'HSC',
        school: 'Chattogram Cantonment Public College',
        period: '2019-2021',
        description: 'GPA: 5.00/5.00',
      },
    ],
    achievements: [
      {
        title: 'Rising Star',
        organization: 'IIUC CPS',
        description: 'Intra University Junior Programming Contest',
        icon: 'award',
      },
    //   {
    //     title: 'Hackathon Winner',
    //     organization: 'Global Code Challenge 2023',
    //     description: 'First place in the Web Development category',
    //     icon: 'spark',
    //   },
    //   {
    //     title: 'AWS Certified Solutions Architect',
    //     organization: 'Amazon Web Services',
    //     description: 'Professional level certification',
    //     icon: 'shield',
    //   },
    //   {
    //     title: 'Published Technical Author',
    //     organization: 'Medium & Dev.to',
    //     description: '50+ articles with 100K+ views',
    //     icon: 'book',
    //   },
    ],
  },
  footer: {
    title: "Let's Connect",
    subtitle: "Have a project in mind? Let's work together!",
    contactCards: [
      { type: 'email', title: 'Email', subtitle: 'Send me a message' },
      { type: 'phone', title: 'Phone', subtitle: 'Give me a call' },
      { type: 'location', title: 'Location', subtitle: "Where I'm based" },
    ],
  },
};
