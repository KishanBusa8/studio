import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'doctor-garage',
    title: 'Doctor Garage',
    description: 'Spearheaded the development and enhancement of the Doctor Garage User and Mechanic Mobile Apps, Backend Service and Admin Panle, ensuring seamless user experience and high performance across multiple devices while building supporting backend services.',
    longDescription: 'Doctor Garage is a platform connecting bike owners with skilled mechanics for doorstep services. Users can book services, choose specific issues, and add spares for their bikes. Mechanics can accept or reject bookings, update service status, and manage spare parts. Both receive email and push notifications for updates. Mechanics can track earnings and withdraw payments. The platform ensures a seamless experience for both users and mechanics, offering flexibility, transparency, and convenience in bike servicing.',
    technologies: ['Flutter', 'Node.js', 'Nest.JS', 'Next.JS', 'Google Maps API', 'Mongo DB', 'Email Services'],
    imageUrl: '/dg_logo.png',
    imageHint: 'logistics app interface',
    gallery: [
        { url: '/DG_10.png', hint: 'Admin Dashboard' },
        { url: '/DG_9.png', hint: 'Analytics' },
        { url: '/DG_11.png', hint: 'All Bokkings' },
        { url: '/DG_12.png', hint: 'Booking Details' },
        { url: '/DG_1.jpeg', hint: 'User Dashbord' },
        { url: '/DG_2.jpeg', hint: 'User Bookings' },
        { url: '/DG_3.jpeg', hint: 'User Dashbord' },
        { url: '/DG_4.jpeg', hint: 'Vehicle Management' },
        { url: '/DG_5.jpeg', hint: 'Vehicle Dashbord' },
        { url: '/DG_6.jpeg', hint: 'Package Details Page' },
        { url: '/DG_7.jpeg', hint: 'Book Service' },
        { url: '/DG_8.jpeg', hint: 'Cart Screeb' },
        
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
