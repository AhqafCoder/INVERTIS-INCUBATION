import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.model.js';
import IncubationProgram from './models/IncubationProgram.model.js';
import Event from './models/Event.model.js';
import Gallery from './models/Gallery.model.js';
import Achievement from './models/Achievement.model.js';
import Patent from './models/Patent.model.js';
import Video from './models/Video.model.js';

dotenv.config();

// Sample Users
const users = [
  {
    email: 'admin@invertis.org',
    password: 'Admin@123',
    name: 'Admin User',
    role: 'admin',
    isActive: true
  },
  {
    email: 'editor@invertis.org',
    password: 'Editor@123',
    name: 'Content Editor',
    role: 'editor',
    isActive: true
  }
];

// Sample Incubation Programs
const incubationPrograms = [
  {
    title: 'Tech Startup Incubation Program',
    slug: 'tech-startup-incubation-program',
    description: 'A comprehensive 6-month program designed for early-stage technology startups. Get access to mentorship, funding opportunities, and industry connections.',
    image: '/assets/startups/startup1.jpg',
    category: 'technology',
    duration: '6 months',
    features: [
      'Dedicated workspace and infrastructure',
      'One-on-one mentoring sessions',
      'Seed funding up to ₹5 lakhs',
      'Legal and compliance support',
      'Marketing and branding assistance',
      'Access to investor network'
    ],
    eligibility: [
      'Registered startup less than 2 years old',
      'Innovative technology-based solution',
      'Scalable business model',
      'At least one full-time founder'
    ],
    applicationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdDTtZQwnmf7OfzdmGwcNXMHEb8JCOLl__I-UL6H1-d8aAEyA/viewform',
    isActive: true,
    startDate: new Date('2026-03-01'),
    endDate: new Date('2026-08-31'),
    tags: ['technology', 'startup', 'funding', 'mentorship']
  },
  {
    title: 'Social Innovation Fellowship',
    slug: 'social-innovation-fellowship',
    description: 'Empowering entrepreneurs working on solutions for social impact. Join our 12-week intensive program focused on sustainable and inclusive business models.',
    image: '/assets/startups/startup2.jpg',
    category: 'business',
    duration: '12 weeks',
    features: [
      'Impact measurement framework',
      'CSR partnership opportunities',
      'Grant funding support',
      'Field testing assistance',
      'Government scheme navigation',
      'Social media amplification'
    ],
    eligibility: [
      'Social impact-focused venture',
      'Measurable social outcomes',
      'Community engagement proof',
      'Sustainable revenue model'
    ],
    applicationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdDTtZQwnmf7OfzdmGwcNXMHEb8JCOLl__I-UL6H1-d8aAEyA/viewform',
    isActive: true,
    startDate: new Date('2026-04-01'),
    endDate: new Date('2026-06-30'),
    tags: ['social-impact', 'sustainability', 'fellowship']
  },
  {
    title: 'Women Entrepreneur Accelerator',
    slug: 'women-entrepreneur-accelerator',
    description: 'Exclusive program supporting women-led startups with specialized mentoring, networking, and funding opportunities.',
    image: '/assets/startups/startup3.jpg',
    category: 'startup',
    duration: '4 months',
    features: [
      'Women leadership coaching',
      'Business development training',
      'Pitch deck preparation',
      'Investor readiness program',
      'Peer networking events',
      'Childcare support during sessions'
    ],
    eligibility: [
      'Woman founder or co-founder',
      'Early to growth stage startup',
      'Commitment to full program participation',
      'Innovative business idea'
    ],
    applicationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdDTtZQwnmf7OfzdmGwcNXMHEb8JCOLl__I-UL6H1-d8aAEyA/viewform',
    isActive: true,
    tags: ['women', 'accelerator', 'diversity']
  }
];

// Sample Events
const events = [
  {
    title: 'National Startup Day 2026',
    description: 'Celebrating innovation and entrepreneurship with industry leaders, investors, and startups. Join us for keynotes, panel discussions, and networking.',
    images: [
      { url: '/assets/national-startup-day 2025/1.jpeg', caption: 'Opening ceremony' },
      { url: '/assets/national-startup-day 2025/2.jpeg', caption: 'Panel discussion' },
      { url: '/assets/national-startup-day 2025/3.jpeg', caption: 'Networking session' }
    ],
    date: new Date('2026-01-16'),
    location: 'Invertis University Campus, Bareilly',
    category: 'networking',
    speakers: [
      { name: 'Dr. Rajesh Kumar', designation: 'Director, Invertis University', image: '/assets/Team/speaker1.jpg' },
      { name: 'Ms. Priya Sharma', designation: 'Startup India Ambassador', image: '/assets/Team/speaker2.jpg' }
    ],
    registrationLink: 'https://docs.google.com/forms/example',
    isPublished: true,
    isFeatured: true
  },
  {
    title: 'Inverthon 2026 - 48 Hour Hackathon',
    description: 'India\'s biggest innovation marathon! Build, pitch, and win. Over ₹5 lakhs in prizes and incubation opportunities for winners.',
    images: [
      { url: '/assets/Inverthon/1.jpeg', caption: 'Hackathon in progress' },
      { url: '/assets/Inverthon/2.jpeg', caption: 'Team collaboration' }
    ],
    date: new Date('2026-03-15'),
    location: 'Innovation Lab, Invertis University',
    category: 'hackathon',
    speakers: [
      { name: 'Mr. Amit Verma', designation: 'CTO, Tech Corp', image: '/assets/Team/speaker3.jpg' }
    ],
    registrationLink: 'https://docs.google.com/forms/example',
    isPublished: true,
    isFeatured: true
  },
  {
    title: 'Founders Forum: Scaling Strategies',
    description: 'Monthly meetup for startup founders to discuss growth challenges, share experiences, and learn from successful entrepreneurs.',
    images: [
      { url: '/assets/Founders Forum/1.jpeg', caption: 'Forum discussion' }
    ],
    date: new Date('2026-02-20'),
    location: 'Incubation Center, Invertis',
    category: 'workshop',
    speakers: [],
    registrationLink: 'https://docs.google.com/forms/example',
    isPublished: true,
    isFeatured: false
  }
];

// Sample Gallery Images
const galleryImages = [
  {
    title: 'Innovation Showcase 2026',
    description: 'Startups presenting their innovations to investors',
    image: '/assets/Innovation Showcase 23rd January 2026/1.jpeg',
    category: 'event',
    order: 1,
    isPublished: true,
    tags: ['innovation', 'showcase', '2026']
  },
  {
    title: 'Incubation Center Workspace',
    description: 'State-of-the-art coworking space for startups',
    image: '/assets/Incubation Inaugration/1.jpeg',
    category: 'facility',
    order: 2,
    isPublished: true,
    tags: ['workspace', 'facility']
  },
  {
    title: 'Shark Tank Season 2',
    description: 'Startup pitching competition at Invertis',
    image: '/assets/sharktank season 2/1.jpeg',
    category: 'event',
    order: 3,
    isPublished: true,
    tags: ['shark-tank', 'competition']
  }
];

// Sample Achievements
const achievements = [
  {
    title: 'AICTE Recognition for Best Incubation Center',
    description: 'Invertis Innovation & Incubation Center recognized by AICTE as one of the top incubation centers in North India for fostering innovation and entrepreneurship.',
    category: 'award',
    image: '/assets/updated img/award1.jpg',
    date: new Date('2025-11-15'),
    organization: 'All India Council for Technical Education (AICTE)',
    isPublished: true,
    isFeatured: true,
    link: 'https://www.aicte-india.org'
  },
  {
    title: '50+ Startups Successfully Incubated',
    description: 'Milestone achievement of supporting over 50 startups through our incubation programs, with a combined valuation of ₹100+ crores.',
    category: 'milestone',
    image: '/assets/updated img/milestone1.jpg',
    date: new Date('2026-01-01'),
    organization: 'Invertis Innovation & Incubation',
    isPublished: true,
    isFeatured: true
  },
  {
    title: 'Best Student Startup Award',
    description: 'Our incubated startup "EduTech Solutions" won the Best Student Startup Award at National Innovation Summit 2025.',
    category: 'success-story',
    image: '/assets/startups/startup4.jpg',
    date: new Date('2025-12-10'),
    organization: 'National Innovation Foundation',
    isPublished: true,
    isFeatured: false
  }
];

// Sample Patents
const patents = [
  {
    title: 'IoT-Based Smart Agriculture Monitoring System',
    description: 'An innovative IoT solution for real-time crop monitoring, soil analysis, and automated irrigation management using sensor networks and AI.',
    patentNumber: 'IN202641234567',
    inventors: [
      { name: 'Dr. Suresh Patel', designation: 'Associate Professor, CSE' },
      { name: 'Mr. Rahul Gupta', designation: 'Research Scholar' }
    ],
    filingDate: new Date('2025-06-15'),
    grantDate: new Date('2025-12-20'),
    status: 'granted',
    category: 'technology',
    image: '/assets/updated img/patent1.jpg',
    pdfUrl: '/assets/patents/patent1.pdf',
    isPublished: true
  },
  {
    title: 'Biodegradable Packaging Material from Agricultural Waste',
    description: 'Novel process for converting agricultural waste into eco-friendly, biodegradable packaging material with enhanced strength properties.',
    patentNumber: 'IN202641234568',
    inventors: [
      { name: 'Dr. Meena Sharma', designation: 'Professor, Biotechnology' },
      { name: 'Ms. Anjali Verma', designation: 'PhD Student' }
    ],
    filingDate: new Date('2025-08-01'),
    status: 'published',
    category: 'biotech',
    image: '/assets/updated img/patent2.jpg',
    isPublished: true
  }
];

// Sample Videos
const videos = [
  {
    title: 'Invertis Innovation Center - Overview',
    description: 'Take a virtual tour of our state-of-the-art incubation facility and learn about the programs we offer to aspiring entrepreneurs.',
    videoUrl: '/assets/Videos/overview.mp4',
    thumbnailUrl: '/assets/Videos/thumb1.jpg',
    category: 'showcase',
    duration: '3:45',
    date: new Date('2025-12-01'),
    isPublished: true,
    isFeatured: true,
    views: 1250
  },
  {
    title: 'Founder Success Story: TechVenture',
    description: 'Hear from the founders of TechVenture about their journey from idea to successful startup through our incubation program.',
    videoUrl: '/assets/Videos/success-story1.mp4',
    thumbnailUrl: '/assets/Videos/thumb2.jpg',
    category: 'testimonial',
    duration: '5:20',
    date: new Date('2025-11-15'),
    isPublished: true,
    isFeatured: true,
    views: 890
  },
  {
    title: 'Inverthon 2025 Highlights',
    description: 'Relive the best moments from Inverthon 2025, our flagship 48-hour hackathon with 200+ participants.',
    videoUrl: '/assets/Videos/inverthon2025.mp4',
    thumbnailUrl: '/assets/Videos/thumb3.jpg',
    category: 'event',
    duration: '8:15',
    date: new Date('2025-10-10'),
    isPublished: true,
    isFeatured: false,
    views: 2340
  }
];

// Seed function
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Promise.all([
      User.deleteMany({}),
      IncubationProgram.deleteMany({}),
      Event.deleteMany({}),
      Gallery.deleteMany({}),
      Achievement.deleteMany({}),
      Patent.deleteMany({}),
      Video.deleteMany({})
    ]);
    console.log('✅ Cleared all collections');

    // Hash passwords for users
    for (let user of users) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }

    // Insert data
    console.log('📝 Inserting users...');
    const createdUsers = await User.insertMany(users);
    console.log(`✅ Created ${createdUsers.length} users`);

    console.log('📝 Inserting incubation programs...');
    const createdPrograms = await IncubationProgram.insertMany(incubationPrograms);
    console.log(`✅ Created ${createdPrograms.length} incubation programs`);

    console.log('📝 Inserting events...');
    const createdEvents = await Event.insertMany(events);
    console.log(`✅ Created ${createdEvents.length} events`);

    console.log('📝 Inserting gallery images...');
    const createdGallery = await Gallery.insertMany(galleryImages);
    console.log(`✅ Created ${createdGallery.length} gallery images`);

    console.log('📝 Inserting achievements...');
    const createdAchievements = await Achievement.insertMany(achievements);
    console.log(`✅ Created ${createdAchievements.length} achievements`);

    console.log('📝 Inserting patents...');
    const createdPatents = await Patent.insertMany(patents);
    console.log(`✅ Created ${createdPatents.length} patents`);

    console.log('📝 Inserting videos...');
    const createdVideos = await Video.insertMany(videos);
    console.log(`✅ Created ${createdVideos.length} videos`);

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   Users: ${createdUsers.length}`);
    console.log(`   Incubation Programs: ${createdPrograms.length}`);
    console.log(`   Events: ${createdEvents.length}`);
    console.log(`   Gallery Images: ${createdGallery.length}`);
    console.log(`   Achievements: ${createdAchievements.length}`);
    console.log(`   Patents: ${createdPatents.length}`);
    console.log(`   Videos: ${createdVideos.length}`);
    console.log('\n🔑 Admin Credentials:');
    console.log('   Email: admin@invertis.org');
    console.log('   Password: Admin@123');
    console.log('\n🔑 Editor Credentials:');
    console.log('   Email: editor@invertis.org');
    console.log('   Password: Editor@123');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\n👋 Database connection closed');
    process.exit(0);
  }
}

// Run the seed function
seedDatabase();
