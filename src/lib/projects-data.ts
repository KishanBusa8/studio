import type { Project } from '@/types';


export const projectsData: Project[] = [
  {
    id: 'doctor-garage',
    title: 'Doctor Garage',
    description: 'Spearheaded the development and enhancement of the Doctor Garage User and Mechanic Mobile Apps, Backend Service and Admin Panle, ensuring seamless user experience and high performance across multiple devices while building supporting backend services.',
    longDescription: 'Say goodbye to long waits at service centers! With Doctor Garage, enjoy professional two-wheeler servicing from the comfort of your home or office.\n\nDoctor Garage is a platform connecting bike owners with skilled mechanics for doorstep services. Users can book services, choose specific issues, and add spares for their bikes. Mechanics can accept or reject bookings, update service status, and manage spare parts. Both receive email and push notifications for updates. Mechanics can track earnings and withdraw payments. The platform ensures a seamless experience for both users and mechanics, offering flexibility, transparency, and convenience in bike servicing.\n\nOur easy-to-use app allows you to:\n✅ Register your account in seconds\n🏍️ Add and manage your two-wheelers\n🧰 Book service appointments at your preferred time & location\n🔧 Choose from a wide range of services – General service, Repairs, Oil change & more\n💬 Track your service status and get real-time updates\n\nWhether you’re a busy professional, a student, or just want hassle-free bike service, Doctor Garage brings the workshop to your doorstep.\n\nKey Features:\nUser-friendly interface\nVerified and trained mechanics\nGenuine spare parts\nTransparent pricing\nSecure payments',
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
       {id: '1', name: 'Doctor Garage App', url: 'https://play.google.com/store/apps/details?id=com.doctor.garage.app'},
       {id: '2', name: 'Doctor Garage Web App', url: 'https://doorstep.doctorgarage.in'},
    ]
  },
  {
    id: 'meetup-me',
    title: 'Meetup',
    description: 'Book Meeting & Study Spaces with Ease.',
    longDescription: 'Meet Up is a flex work and meeting space with open desk spaces, private meeting pods, conference and meeting halls and an inbuilt café; all located in Al Araimi Boulevard.\n\nMeet Up is designed to provide professionals and students with the opportunity to meet, work and study in a productive, convenient, and comfortable environment. \n\nOur easy-to-use app allows you to:\n✅ Book a meeting room or study space in seconds\n💻 Access open desk spaces, private meeting pods, conference and meeting halls\n🍴 Enjoy an inbuilt café\n🔍 Find the perfect space for your needs\n\nWhether you’re a professional, a student, or just need a space to work, Meet Up has you covered. Book your next meeting or study space today!',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Cloud Functions', 'REST APIs'],
    imageUrl: '/meetup_logo.jpeg',
    imageHint: 'Meeting & Study Spaces App',      
    gallery: [
        { url: '/meetup_1.png', hint: 'Welcome Screen' },
        { url: '/meetup_2.png', hint: 'Login & Register Screen' },
        { url: '/meetup_3.png', hint: 'Home Screen' },
        { url: '/meetup_4.png', hint: 'Room Details Screen' },
        { url: '/meetup_5.png', hint: 'Check Available Slots/Booking Screebn' },
        { url: '/meetup_6.png', hint: 'Review/Cart Screen' },
        { url: '/meetup_7.png', hint: 'Profile Screen' },
    ],
    links: [
       {id: '1', name: 'Website', url: 'https://meetup.me'},
    ]
  },
  {
    id: 'cia-pyrotech',
    title: 'CIA Pyrotech',
    description: 'Smart inventory & billing app with barcode generation for internal use.',
    longDescription: 'Cia Pyrotech Inventory App is a dedicated internal-use application designed to simplify billing, barcoding, and inventory management for retail and warehouse operations.Built for internal store management, this app ensures accurate tracking of stock, smooth billing, and real-time barcode generation all in one place. With a clean interface and efficient features, it helps store teams focus on operations without the need for complex systems or external integrations.',
    technologies: ['Flutter', 'Dart', 'REST APIs'],
    imageUrl: '/cia_logo.png',
    imageHint: 'Inventory & Billing App',      
    gallery: [
        { url: '/cia_dashboard.png', hint: 'Dashboard' },
        { url: '/cia_parties.png', hint: 'Billing' },
        { url: '/cia_party_details.png', hint: 'Party Details' },
        { url: '/cia_items.png', hint: 'Barcode Generation' },
        { url: '/cia_items_details.png', hint: 'Items Details' },
        { url: '/cia_items_details_2.png', hint: 'Items Details 2' },
        { url: '/cia_add_items.png', hint: 'Add Items' },
        { url: '/cia_pendig_payment_summary.png', hint: 'Pending Payment Summary' },
        { url: '/cia_sales_summary.png', hint: 'Sales Summary' },
        { url: '/cia_payment_methods.png', hint: 'Payment Methods' },
        { url: '/cia_reports.png', hint: 'Reports' },
        { url: '/cia_category_report.png', hint: 'Category Report' },
        { url: '/cia_category_chart_report.png', hint: 'Category Chart Report' },
    ],
    links: [
       {id: '1', name: 'Mobile App', url: 'https://play.google.com/store/apps/details?id=com.app.cia.pyrotech.inventory'},
    ]
  },
   {
    id: 'ecom-telco',
    title: 'Ecomtelco',
    description: 'Lead Flutter Developer in this ecommorce mobile applications',
    longDescription: 'EcomTelco bridges the gap between manufacturers and clients, ensuring a seamless, reliable, and efficient procurement process. Simplify your business operations and elevate your project execution with EcomTelco today!',
    technologies: ['Flutter', 'Dart', 'REST APIs',],
    imageUrl: '/ecom_logo.webp',
    imageHint: 'team collaboration meeting',
    gallery: [
      { url: '/ecom_1.jpeg', hint: 'Customer Dashboard' },
      { url: '/ecom_2.jpeg', hint: 'Product Details' },
      { url: '/ecom_3.jpeg', hint: 'All/Search Categories' },
      { url: '/ecom_4.jpeg', hint: 'Customer Acccount/Settings' },
      { url: '/ecom_5.jpeg', hint: 'Vendor Dashboard' },
      { url: '/ecom_6.jpeg', hint: 'Vendor Menus' },
      { url: '/ecom_7.jpeg', hint: 'All Orders' },
      { url: '/ecom_8.jpeg', hint: 'All/Add Brands' },
      { url: '/ecom_9.jpeg', hint: 'All/Add Products' },
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
    imageUrl: '/where2_logo.webp',
    imageHint: 'AI vision interface',
    gallery: [
        { url: '/where2_1.jpeg', hint: 'Description' },
        { url: '/where2_2.jpeg', hint: 'Spots near you' },
        { url: '/where2_3.jpeg', hint: 'All Places/Spots' },
        { url: '/where2_4.jpeg', hint: 'Place/Spot Details' },
        { url: '/where2_5.jpeg', hint: 'Personalizations' },
        { url: '/where2_6.jpeg', hint: 'Tap In!' },
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
        { url: '/inside_1.jpeg', hint: 'Splash Screen' },
        { url: '/inside_2.jpeg', hint: 'Home Screen' },
        { url: '/inside_3.jpeg', hint: 'Meditation' },
        { url: '/inside_4.jpeg', hint: 'Notifications' },
    ],
    links: [
        {id: '1', name: 'Inside App', url: 'https://apps.apple.com/in/app/inside-mindfulness-meditation/id6451197789'},
    ]
  },
  {
    id: 'dorfy',
    title: 'Dorfy App',
    description: 'Lead Mobile App Developer',
    longDescription: 'Dorfy is a fun app, powered with Artificial Intelligence and next-generation emotion detection that will make funny faces of your face from the camera and if you will laugh or even smile slight, Al will detect and you will lose.\n\nHere is where the fun begin\nFind up to 15+ different stages and 5+ different badges along with the attention and excitement levels in each stage. As There is nothing to sneeze at, so when you are ready to tussle your belly laugh, Dorfy will see if you can hold your smile or not. If you do you win or else you lose.Play multiple levels and earn a badge every time you cross a level. Increase your score by playing multiple stages and get closer to winning by increasing your score.\n\nIntegrate unity with flutter for the game play.',
    technologies: ['Flutter', 'Dart','Unity With Flutter Integration',],
    imageUrl: '/dorfy_logo.webp',
    imageHint: 'AI vision interface',
    gallery: [
        { url: '/dorfy_1.webp', hint: 'Challange Dashboard' },
        { url: '/dorfy_2.webp', hint: 'Take Challange' },
        { url: '/dorfy_3.webp', hint: 'Reward' },
        { url: '/dorfy_4.webp', hint: 'Achievements' },
    ],
    links: [
      {id: '1', name: 'Mobile App', url: 'https://apps.apple.com/in/app/dorfy/id1589431999'},
    ]
  },
  {
    id: 'recipts-returns',
    title: 'Receipts and Returns',
    description: 'Lead Full Stack Developer',
    longDescription: '• Paperless Receipt Transaction\n• Easy Returns (Paperless)\n• Store wise Receipt Management\n• As per rules last possible return dates (Approx)\n• Can access whole invoice or Receipts on mobile as submitted Images\n• Unlimited Bar Code scan and store facility\n• Share receipts with partner/family for easy Receipts or Returns management.\n• Create a Common daily shopping list and get real-time status and add and edit facility.\n• Easy Search Option available, no need to go through all receipts.\n• Can do price comparisons for the same product at different stores.',
    technologies: ['Flutter', 'Dart','Flutter Web', 'Firebase', 'Firestore', 'Firebase Cloud Functions', 'Firebase Realtime Database'],
    imageUrl: '/receipt_logo.png',
    imageHint: 'AI vision interface',
    gallery: [
        { url: '/receipt_1.webp', hint: 'Dashboard' },
        { url: '/receipt_2.webp', hint: 'All Receipts' },
        { url: '/receipt_3.webp', hint: 'Receipt Details' },
        { url: '/receipt_4.webp', hint: 'Shopping List' },
        { url: '/receipt_5.webp', hint: 'Reports' },

    ],
    links: [
        {id: '1', name: 'Mobile App', url: 'https://play.google.com/store/apps/details?id=com.rrr.app&hl=en-IN'},
        {id: '2', name: 'Web App', url: 'https://rrr-app.com/'},

    ]
  },
  {
    id: 'act',
    title: 'ACT Examps',
    description: 'Lead Full Stack Developer',
    longDescription: '\n- The ACT Exam app is a simple app for Reading and practicing quiz questions.\n- User can create an offline test for practice.\n- Dark and light mode.\n- Offline hive database used for database management.\n- Admob and In-app purchase integrated.\n- Getx used for Statemanegement.',
    technologies: ['Flutter', 'Dart','Flutter Web', 'Hive Local database',],
    imageUrl: '/act_1.jpeg',
    imageHint: 'AI vision interface',
    gallery: [
        { url: '/act_1.jpeg', hint: 'Splash Screen' },
        { url: '/act_2.jpeg', hint: 'Home/Read' },
        { url: '/act_3.jpeg', hint: 'Home/Practice' },
        { url: '/act_4.jpeg', hint: 'Build Exam/Test' },
        { url: '/act_5.jpeg', hint: 'Test Levels Dashboard' },
        { url: '/act_6.jpeg', hint: 'Quiz' },
        { url: '/act_7.jpeg', hint: 'Test Levels Progress' },
        { url: '/act_8.jpeg', hint: 'Choose Answer' },
    ],
    links: [


    ]
  },
  {
    id: 'tapobhumi-praneta',
    title: 'Tapobhumi Praneta',
    description: 'This APP is for individual use for the information about Guruji’s daily update',
    longDescription: 'Vihar Update (Daily update of engagements):\nThis feature of the App updates the users and sends information on where-about & Important engagements of the Jain monk’s day with time and location.\n\nCalendar:\nThe auspicious days such as festivals, events and celebrations of the Jain community is highlighted in the calendar.\nDainik Dairy (Daily Calendar):It provides a daily in-sight into the routine activities.\n\nE-book:\nThis is a collection of religious Jain books, journals, articles & magazines that are recommended for enlightenment about the religion.\n\nShankha Samadhan (Enquiries answered):\nThis convenient feature is to help and assist users to clear doubts and answer their problems by the guruji.\n\nGallery:\nIt consists of photos, videos and other multimedia uploaded on their YouTube channel & featured channels.\n\nAaj Ka Niyam (Oath for Today):\nThis feature takes into account the oath for the day and help users follow it.',
    technologies: ['Flutter', 'Dart','Firebase', 'Firestore', 'Firebase Cloud Functions', 'REST APIs', 'Push Notifications'],
    imageUrl: '/tp_logo.png',
    imageHint: 'Tapobhumi Praneta App',
    gallery: [
        { url: '/tp_1.jpg', hint: 'Welcome Screen' },
        { url: '/tp_2.jpg', hint: 'Vihar Update' },
        { url: '/tp_3.jpg', hint: 'Ebook' },
        { url: '/tp_4.jpg', hint: 'Shankha Samadhan' },
        { url: '/tp_5.jpg', hint: 'Gallery' },
        { url: '/tp_7.jpg', hint: 'Gallery 2' },
        { url: '/tp_8.jpg', hint: 'Aaj Ka Niyam' },
    ],
    links: [
        {id: '1', name: 'Tapobhumi Praneta App', url: 'https://play.google.com/store/apps/details?id=com.tapobhumi.user&hl=en_IN'},
    ]
  },
  
  {
    id: 'despatchy',
    title: 'Despatchy',
    description: 'Lead Full Stack Developer',
    longDescription: 'A new app has been designed to take the hassle and paperwork out of transport management for businesses. The app, which is free to download on both iOS and Android, allows businesses to track their vehicles in real-time, get ETA updates for deliveries, and even provides a route planner to help avoid traffic jams. This is a huge boon for businesses who rely on transport to move goods around, and it could potentially save them a lot of money in the long run. The app has been designed with ease-of-use in mind, and it only takes a few minutes to set up. So if you’re looking for a way to streamline your logistics, this is definitely worth checking out.\n\nWhat is the app?\nThe app is a complete logistics and transport management app. It enables users to manage their logistics and transport operations from a central location. The app provides users with real-time visibility of their assets, shipments, and deliveries. The app also allows users to track and monitor their fleet vehicles in real time.\n\nWhat can the app do?\nThe app offers a complete logistics and transport management solution that helps companies to optimize their operations, reduce costs and improve customer service. It provides real-time visibility of the entire supply chain, from suppliers to customers, and enables collaboration between all stakeholders. The app also offers a suite of powerful tools to manage inventory, track shipments, and monitor performance.\n\nHow to use the app?\nAssuming you would like content for a “How to Use” section for a logistics and transport management app:\n\nIf you’re in the business of moving people or things from one place to another, then you know that logistics and transportation management is a complex and difficult process. There are a lot of factors to consider, from route planning to vehicle maintenance to customer service. And if you don’t have a good system in place, it can be easy to lose track of everything and make mistakes that can cost you time and money.\n\nThat’s where a good logistics and transport management app can come in handy. With the right app, you can streamline your operations, keep track of all your vehicles and drivers, and provide excellent customer service. In this article, we’ll take a look at some of the best logistics and transport management apps on the market and give you some tips on how to choose the right one for your business.\n\nFirst, let’s take a look at some of the features that a good logistics and transport management app should have:\n\n– GPS tracking: This is one of the most important features for any transportation company. You need to be able to track your vehicles in real-time so that you can see where they are at all times. This way, if there are any delays or problems, you can quickly dispatch another vehicle or driver to get things back on track.\n\n– Vehicle maintenance: Another important feature for transportation companies is vehicle maintenance',
    technologies: ['Flutter', 'Dart','Node.JS',],
    imageUrl: '/despatchy_1.jpeg',
    imageHint: 'AI vision interface',
    gallery: [
        { url: '/despatchy_1.jpeg', hint: 'Load Details' },
        { url: '/despatchy_2.jpeg', hint: 'Time Sheet' },
        { url: '/despatchy_3.jpeg', hint: 'Home Dashboard' },
        { url: '/despatchy_4.jpeg', hint: 'Active Job Page' },
        { url: '/despatchy_5.jpeg', hint: 'My Jobs' },

    ],
    links: [


    ]
  },
  {
    id: 'hire',
    title: 'Hire E Bikes',
    description: 'Lead Full Stack Developer',
    longDescription: '\n- Hire e-bike is an app for book view nearby stations and it’s all available bikes.\n- Users can book bikes from the app by purchasing a subscription. (Paytm payment method)\n- After the bike is booked user can connect to the bike and do an ON and OFF bike via the app.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Cloud Functions', 'REST APIs'],
    imageUrl: '/hire_logo.jpeg',
    imageHint: 'AI vision interface',
    gallery: [
        { url: '/hire_1.jpeg', hint: 'Find Bike Station' },
        { url: '/hire_2.jpeg', hint: 'Select Bike' },
        { url: '/hire_3.jpeg', hint: 'Select Plan' },
        { url: '/hire_4.jpeg', hint: 'Wallet' },
        { url: '/hire_5.jpeg', hint: 'Report Problem' },
    ],
    links: [
      {id: '1', name: 'Mobile App', url: 'https://apps.apple.com/in/app/hire-e-bike/id1629227630'},
    ]
  },
];
