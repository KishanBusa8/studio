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
    links: [
       
    ]
  },
   {
    id: 'ecom-telco',
    title: 'Ecomtelco',
    description: 'Lead Flutter Developer in this ecommorce mobile applications',
    longDescription: 'EcomTelco bridges the gap between manufacturers and clients, ensuring a seamless, reliable, and efficient procurement process. Simplify your business operations and elevate your project execution with EcomTelco today!',
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
        {id: '1', name: 'User App', url: 'https://play.google.com/store/apps/details?id=com.ecomtelco.app'},
        {id: '2', name: 'Vendor App', url: 'https://play.google.com/store/apps/details?id=com.ecomtelco.app.vendor'},
        {id: '3', name: 'Admin App', url: 'https://play.google.com/store/apps/details?id=com.ecomtelco.app.admin'},
    ]
  },
  {
    id: 'where-2',
    title: '.Where2',
    description: 'Flutter Developer on .Where2 App',
    longDescription: 'where2 shows you Bali’s hidden gems - matched to your vibe! No more guesswork: we’re travelers too, and built this to help you find places that just feel right. Whether it’s brunch with a view or a beach bar at sunset - we’ve got you.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Cloud Functions', 'REST APIs'],
    imageUrl: '/where2_6.jpeg',
    imageHint: 'AI vision interface',
    gallery: [
        { url: '/where2_1.jpeg', hint: 'App' },
        { url: '/where2_2.jpeg', hint: 'App' },
        { url: '/where2_3.jpeg', hint: 'App' },
        { url: '/where2_4.jpeg', hint: 'App' },
        { url: '/where2_5.jpeg', hint: 'App' },
        { url: '/where2_6.jpeg', hint: 'App' },
    ],
    links: [
        {id: '1', name: '.Where2 App', url: 'https://play.google.com/store/apps/details?id=com.packsinternational.where2app&gl=DE'},
    ]
  },
  {
    id: 'inside',
    title: 'Inside : Mindfulness Meditation',
    description: 'Lead Flutter Developer',
    longDescription: 'Find your calm with Inside - your personal meditation and mindfulness app.\n\nWhether you want to reduce anxiety, sleep better, manifest your dreams, or simply take a mindful pause, Inside is here to guide you every step of the way.\n\nInside offers powerful guided meditations for sleep, stress relief, self-love, and emotional healing. Perfect for beginners and experienced meditators alike.',
    technologies: ['Flutter', 'Dart', 'Audio & Music Software', 'REST APIs'],
    imageUrl: '/inside_3.jpeg',
    imageHint: 'AI vision interface',
    gallery: [
        { url: '/inside_1.jpeg', hint: 'App' },
        { url: '/inside_2.jpeg', hint: 'App' },
        { url: '/inside_3.jpeg', hint: 'App' },
        { url: '/inside_4.jpeg', hint: 'App' },
    ],
    links: [
        {id: '1', name: 'Inside App', url: 'https://apps.apple.com/in/app/inside-mindfulness-meditation/id6451197789'},
    ]
  },
];
