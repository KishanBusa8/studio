import type { Project } from '@/types';
import { Github, ExternalLink, School, Building } from 'lucide-react';


export const projectsData: Project[] = [
  {
    id: 'portpro-driver-app',
    title: 'PortPro Driver App',
    description: 'Spearheaded the development and enhancement of the Portpro Driver Mobile App, ensuring seamless user experience and high performance across multiple devices.',
    longDescription: 'As the lead Flutter developer at PortPro, I spearheaded the development of the driver mobile app, ensuring a high-quality user experience and optimal performance. My role involved designing and implementing robust backend services, APIs, and microservices to support core business operations. I also participated in code reviews, maintained coding standards, and provided technical support for frontend issues, contributing to the continuous improvement of our software.',
    technologies: ['Flutter', 'Node.js', 'Nest.JS', 'Google Maps API', 'PostgreSQL', 'Microservices'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'truck logistics app',
    gallery: [
        { url: 'https://placehold.co/800x600.png', hint: 'app dashboard' },
        { url: 'https://placehold.co/800x600.png', hint: 'live map tracking' }
    ],
    links: [
        {id: '1', name: 'Company', url: 'https://www.portpro.io/', icon: Building},
    ]
  },
  {
    id: 'doctor-garage',
    title: 'Doctor Garage',
    description: 'Led the development of the Doctor Garage User and Mechanic Mobile Apps, Backend Service and Admin Panel, ensuring seamless user experience and high performance.',
    longDescription: 'At InFicial Infotech, I served as a technical lead for the Doctor Garage project, a platform connecting bike owners with mechanics. I led the development of both the user and mechanic mobile apps in Flutter, as well as the backend services and admin panel using Node.js and Next.js. My responsibilities included architecting scalable solutions, managing the project with agile methodologies, and mentoring team members to ensure the timely delivery of a high-quality, comprehensive bike servicing platform.',
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
    links: [
        {id: '1', name: 'GitHub', url: 'https://github.com/KishanBusa8', icon: Github},
        {id: '2', name: 'Company', url: 'https://www.inficial.com/', icon: Building},
    ]
  },
   {
    id: 'ecom-telco',
    title: 'Ecomtelco',
    description: 'Lead Flutter Developer for this e-commerce mobile application, handling all mobile app projects.',
    longDescription: 'During my time at WebOccult Technologies, I was the primary mobile app developer, responsible for all mobile projects. I worked extensively with Flutter and agile methodologies, gathering requirements directly from clients to deliver robust applications. EcomTelco was one such key project, designed to bridge the gap between manufacturers and clients with a seamless e-commerce experience.',
    technologies: ['Flutter', 'Dart', 'REST APIs',],
    imageUrl: '/ecom_logo.png',
    imageHint: 'team collaboration meeting',
    gallery: [
      { url: '/ecom_1.jpeg', hint: 'Mobile App' },
      { url: '/ecom_2.jpeg', hint: 'Mobile App' },
      { url: '/ecom_3.jpeg', hint: 'Mobile App' },
      { url: '/ecom_4.jpeg', hint: 'Mobile App' },
      { url: '/ecom_5.jpeg', hint: 'Mobile App' },
      { url: '/ecom_6.jpeg', hint: 'Mobile App' },
      { url: '/ecom_7.jpeg', hint: 'Mobile App' },
      { url: '/ecom_8.jpeg', hint: 'Mobile App' },
      { url: '/ecom_9.jpeg', hint: 'Mobile App' },
    ],
    links: [
        {id: '1', name: 'GitHub', url: 'https://github.com/KishanBusa8', icon: Github},
        {id: '2', name: 'Company', url: 'https://www.weboccult.com/', icon: Building},
    ]
  },
  {
    id: 'ai-integrated-apps',
    title: 'AI-Integrated Mobile Applications',
    description: 'Collaborated with the AI team to integrate capabilities like OCR, object detection, and face recognition into mobile apps using Flutter and Unity.',
    longDescription: 'At WebOccult, I also collaborated with the AI team to integrate advanced capabilities like OCR, object detection, and face recognition into mobile apps. Using Unity and Flutter, and leveraging OpenCV, we brought innovative AI features to life, enhancing the functionality and user experience of our mobile applications.',
    technologies: ['Flutter', 'Unity', 'OpenCV', 'AI/ML', 'TensorFlow Lite', 'REST APIs'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI vision interface',
    gallery: [
        { url: 'https://placehold.co/800x600.png', hint: 'OCR scanning in app' },
        { url: 'https://placehold.co/800x600.png', hint: 'object detection overlay' },
        { url: 'https://placehold.co/800x600.png', hint: 'face recognition result' }
    ],
    links: [
        {id: '1', name: 'GitHub', url: 'https://github.com/KishanBusa8', icon: Github},
        {id: '2', name: 'Company', url: 'https://www.weboccult.com/', icon: Building},
    ]
  },
];
