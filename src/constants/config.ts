type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Shubham Kumar — 3D Portfolio",
    fullName: "John Doe",
    email: "johndoe@mail.com",
  },
  hero: {
    name: "Shubham Jaiswal",
    p: ["A Web Developer and a", "Competitive Programmer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a Computer Science graduate from IIIT Bhagalpur with an 8.35/10 CGPA. Currently working as a Full Stack Developer at Avaamo, I previously worked at BotSync as a Software Developer and remotely at Telos Digital Solutions as a Web Developer. I specialize in building dynamic, animated websites using GSAP with the MERN stack, and my tech stack also includes Redis, Docker, Git, and MQ. Proficient in C, C++, and JavaScript, I’ve solved 3500+ algorithmic problems across LeetCode, GeeksforGeeks, CodeChef, and Codeforces.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects highlight my expertise in frontend and backend development, with a strong emphasis on creating animated and interactive web experiences. Each project showcases my ability to build dynamic UIs, optimize performance, and implement seamless user interactions using GSAP and modern web technologies. These real-world examples reflect my problem-solving skills, experience with various tech stacks, and ability to manage and deliver high-quality projects efficiently.`,
    },
  },
};
