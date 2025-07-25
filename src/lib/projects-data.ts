import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'portpro-driver',
    title: 'Portpro Driver Mobile App',
    description: 'Spearheaded the development and enhancement of the Portpro Driver Mobile App, ensuring seamless user experience and high performance across multiple devices while building supporting backend services.',
    longDescription: 'As the lead developer, I was responsible for the end-to-end development of the Portpro Driver Mobile App. This included architecting the application using Flutter, implementing a microservices-based backend with Node.js, and designing efficient APIs. I worked closely with stakeholders to gather requirements and translate them into technical specifications, ensuring the final product met business objectives and user needs. The app features real-time tracking, order management, and seamless communication between drivers and dispatchers.',
    technologies: ['Flutter', 'Node.js', 'Microservices', 'API Design', 'Firebase', 'Google Maps API'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'logistics app interface',
    gallery: [
        { url: 'https://placehold.co/800x600.png', hint: 'driver dashboard' },
        { url: 'https://placehold.co/800x600.png', hint: 'real-time map tracking' },
        { url: 'https://placehold.co/800x600.png', hint: 'delivery status update' }
    ],
    githubLink: 'https://github.com/KishanBusa8',
  },
  {
    id: 'inficial-tech-lead',
    title: 'Technical Lead at InFicial Infotech',
    description: 'Led Flutter development teams, architected scalable solutions, and oversaw the implementation of robust database architectures and secure REST APIs using Node.js and Express.',
    longDescription: 'In my role as Technical Lead, I managed a team of developers, providing guidance and mentorship to ensure project success. I was responsible for architecting scalable mobile applications using Flutter, designing robust database schemas (SQL & NoSQL), and developing secure REST APIs with Node.js and Express. I established best practices for code quality, testing, and deployment, leading to a significant improvement in team productivity and application performance.',
    technologies: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'REST APIs', 'SQL', 'NoSQL', 'Agile'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'team collaboration meeting',
    gallery: [
        { url: 'https://placehold.co/800x600.png', hint: 'project architecture diagram' },
        { url: 'https://placehold.co/800x600.png', hint: 'code review session' },
        { url: 'https://placehold.co/800x600.png', hint: 'agile sprint board' }
    ],
    githubLink: 'https://github.com/KishanBusa8',
  },
  {
    id: 'ai-integrated-apps',
    title: 'AI-Integrated Mobile Applications',
    description: 'Collaborated with the AI team to integrate capabilities like OCR, object detection, and face recognition into mobile apps using Flutter and Unity, leveraging OpenCV.',
    longDescription: 'I worked on innovative projects that integrated advanced AI/ML capabilities into mobile applications. This involved collaborating with data scientists and AI engineers to bring features like Optical Character Recognition (OCR) for document scanning, real-time object detection, and facial recognition to life. I developed the mobile interface in Flutter and integrated the AI models, which were often deployed on-device or accessed via APIs. This required a deep understanding of both mobile development and the intricacies of working with machine learning models.',
    technologies: ['Flutter', 'Unity', 'OpenCV', 'AI/ML', 'TensorFlow Lite', 'REST APIs'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI vision interface',
    gallery: [
        { url: 'https://placehold.co/800x600.png', hint: 'OCR scanning in app' },
        { url: 'https://placehold.co/800x600.png', hint: 'object detection overlay' },
        { url: 'https://placehold.co/800x600.png', hint: 'face recognition result' }
    ],
    githubLink: 'https://github.com/KishanBusa8',
  },
];
