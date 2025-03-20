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
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import botsync from "../assets/company/botsync_dark.png";
import gsap from "../assets/tech/gsap.png";
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Software Development Intern",
    companyName: "Botsync",
    icon: botsync,
    iconBg: "#E6DEDD",
    date: "January 2025 – Present",
    points: [
      "Working at Botsync, a robotics company specializing in AMRs to transport goods up to 1,500 kg in warehouses.",
      "Designed a dynamic theme in FMS using MUI and inline CSS, enhancing 50+ UI components.",
      "Developed strong error handling skills, increasing system reliability and cutting debug time by 30%.",
      "Optimized API performance using the Inspect Network tab, reducing response times by 25%.",
      "Learned essential Git commands and workflows, managing 50+ commits and ensuring efficient version control.",
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
