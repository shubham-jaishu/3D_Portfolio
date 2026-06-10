import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  go,
  redis,
  postman,
  // tailwind,
  // css,
  // html,
  // redux,
  // figma,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
} from "../assets";

import botsync from "../assets/company/botsync_dark.png";
import avaamo from "../assets/company/Avaamo_logo.png";
import telos from "../assets/company/telos.png";
import gsap from "../assets/tech/GSap.png";
import cpp from "../assets/tech/cpp.png";
import c from "../assets/tech/c.png";
import chatticket from "../assets/chatticket.png";
import scrollspace from "../assets/scrollspace.png";
import chatapp from "../assets/chatapp.png";
import boatwebsite from "../assets/boatwebsite.png";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "GSAP & Animation Expert",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];


const technologies: TTechnology[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Postman",
    icon: postman,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer Intern",
    companyName: "Botsync",
    icon: botsync,
    iconBg: "#E6DEDD",
    date: "January 2025 – June 2025",
    points: [
      "Customized 50+ components in the Fleet Management System using MUI, improving UI responsiveness.",
      "Strengthened error handling mechanisms, increasing system reliability and boosting efficiency by 30%.",
      "Optimized API payloads, reducing frontend response times by 25% and improving overall performance.",
      "Fixed a high-priority P0 dashboard bug, reducing system crashes and user logouts by 40%.",
      "Reviewed 40+ pull requests and resolved merge conflicts, improving code quality and team collaboration.",
      ],      
  },
  {
    title: "Web Developer Intern",
    companyName: "Telos Digital Solutions",
    icon: telos, // Make sure you have imported this icon
    iconBg: "#D1E8FF", // Use a distinct background color
    date: "June 2025 – August 2025",
    points: [
      "Engineered a full-stack website using Laravel (PHP) and SQL, implementing 10+ features from authentication to management.",
      "Enhanced user experience by resolving 15+ UI issues and improving responsiveness, resulting in a 30% usability improvement.",
      "Integrated WhatsApp support, increasing user engagement and communication efficiency by 40%+.",
      "Developed and secured 5+ API endpoints, expanding backend functionality and system reliability.",
      "Optimized SQL queries to improve database performance and maintain an estimated 99.9% uptime.",
      ],      
  },
  {
    title: "Software Engineer",
    companyName: "Avaamo",
    icon: avaamo, // Make sure you have imported this icon
    iconBg: "#D1E8FF", // Use a distinct background color
    date: "July 2025 – Present",
    points: [
      "Built Agent Assist, Auto QA, and Try Avaamo, supporting 10+ pre-sales demos and post-sales deployments.",
      "Automated workflows using cron jobs, Redis, and BullMQ, removing stale data and improving system performance.",
      "Secured 25+ API endpoints with validation and rate limiting, enhancing stability under high traffic.",
      "Leveraged AWS EC2, S3, and Docker to deploy scalable applications, improving reliability and efficiency.",
      "Resolved 15+ production issues and authored 20+ Jest test suites, strengthening code quality and system reliability.",
      ],      
  },
];



const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Chat Ticket",
    description:
      "AI-powered ticket booking chatbot built with Next.js, featuring multilingual support, authentication, and real-time interactions.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: chatticket,
    sourceCodeLink: "https://github.com/shubham-jaishu/ChatTicket",
    liveDemo: "https://chat-ticket.vercel.app/",
  },
  {
    name: "Scroll Space",
    description:
      "Engaging animated website leveraging GSAP and Locomotive.js to enhance scroll interactions and user engagement.",
    tags: [
      { name: "GSAP", color: "blue-text-gradient" },
      { name: "Locomotive.js", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: scrollspace,
    sourceCodeLink: "https://github.com/shubham-jaishu/Scroll-Space",
    liveDemo: "https://locomotive-gsap.netlify.app/",
  },
  {
    name: "Chat App",
    description:
      "Real-time chat application using the MERN stack, featuring WebSocket-based messaging, authentication, and optimized performance.",
    tags: [
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "Socket.IO", color: "pink-text-gradient" },
    ],
    image: chatapp,
    sourceCodeLink: "https://github.com/shubham-jaishu/mern-chat-app/tree/master",
    liveDemo: "https://chat-app-e5so.onrender.com/",
  },
  {
    name: "Boat Website",
    description:
      "A React-based clone of the Boat website UI, showcasing a modern and responsive e-commerce layout with reusable components.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "CSS3", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: boatwebsite,
    sourceCodeLink: "https://github.com/shubham-jaishu/Boat",
    liveDemo: "https://boat-react-app.netlify.app/",
  }

];


export { services, technologies, experiences, testimonials, projects };
