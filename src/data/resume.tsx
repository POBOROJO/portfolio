import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Parijat Bhattacharjee",
  initials: "PB",
  url: "https://github.com/POBOROJO",
  location: "Guwahati, Assam",
  locationLink: "",
  description:
    "Full-stack Developer with a passion for AI, frontend, and backend technologies. Constantly exploring new challenges and building innovative solutions. Find me on GitHub and LinkedIn and Twiiter, always sharing new projects and insights.",
  summary:
    "In 2024, I am a final-year Computer Science student focused on full-stack development, AI, and backend technologies. I’ve interned at Littlebox, conducted research at IIT Guwahati, and built various innovative projects. I’m passionate about creating impactful solutions and always seeking new challenges.",
  avatarUrl: "/profile3.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Express",
    "Python",
    "Postgres",
    "MongoDB",
    "Java",
    "C++",
    "C",
    "DSA",
    "TailwindCSS",
    "Bootstrap",
    "Shadcn UI",
    "Git",
    "Github",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "parijatbhatt1@gmail.com",
    tel: "+91 8822965959",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/POBOROJO",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parijat-bhattacharjee-97741a177/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ParijatBhattac4",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UC3na5XHjvIg6kVATi1TP3jQ",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:parijatbhatt1@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      "Download CV": {
        name: "Download Resume",
        url: "/Parijat2.pdf",
        icon: Icons.download,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Littlebox",
      href: "https://littleboxindia.com/",
      badges: [],
      location: "Guwahati, Assam",
      title: "Software Development Engineer Intern",
      logoUrl: "/littlebox.avif",
      start: "June 2024",
      end: "July 2024",
      description:
        "Developed and optimized backend services using Node.js and Express for a clothing e-commerce platform. Integrated secure authentication with JWT, implemented image upload functionality with Multer, and protected routes to ensure robust user interactions. Collaborated with the frontend team to streamline API endpoints and enhance user experience. Led database management using MongoDB to efficiently store and retrieve product data.",
    },
    {
      company: "Indian Institute of Technology, Guwahati",
      badges: [],
      href: "https://www.iitg.ac.in/cse/",
      location: "Guwahati, Assam",
      title: "Summer Intern",
      logoUrl: "/iitg.jpeg",
      start: "July 2023",
      end: "August 2023",
      description:
        "Achieved high accuracy and coherence in Bengali news article summarization by applying advanced NLP techniques and fine-tuning models to optimize performance and relevance.",
    },
  ],
  education: [
    {
      school: "Assam Engineering College",
      href: "https://aec.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/aec.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Kanha GPT",
      href: "https://kanha-gpt.netlify.app/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "With the release of the Gemini API, I developed Kanha GPT, a web app that enables users to have conversations with Lord Krishna, offering real-time, personalized responses based on the Bhagavad Gita's teachings. This platform provides a unique, AI-powered way to explore spirituality and wisdom.",
      technologies: ["React.js", "JavaScript", "TailwindCSS", "Gemini API"],
      links: [
        {
          type: "Website",
          href: "https://kanha-gpt.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/POBOROJO/Kanha-GPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/krishna.jpg",
      video: "",
    },
    {
      title: "JUSTIFIED",
      href: "https://law-gpt.netlify.app/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Developed JUSTIFIED, a web application that provides legal advice based on Indian laws and the Indian Penal Code (IPC) through an intuitive and user-friendly interface. Integrated LangChain.js with FAISS to deliver real-time, accurate legal guidance, enhancing the relevance of responses.",
      technologies: [
        "React.js",
        "Typescript",
        "Firebase",
        "Gemini API",
        "TailwindCSS",
        "Framer Motion",
        "Node.js",
        "Express",
        "FAISS",
        "LangChain.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/MET4L-DS/AskMe",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://law-gpt.netlify.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/justified.webp",
      video: "",
    },
    {
      title: "VirtualR",
      href: "https://virtualr-nine.vercel.app/",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "Developed the frontend for VirtualR, a Virtual Reality tool designed to empower developers in building immersive VR applications.",
      technologies: ["JavaScript", "React.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://github.com/POBOROJO/PRACTICE/tree/main/tailwind/practice1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://virtualr-nine.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/VR.jpeg",
      video: "",
    },
    {
      title: "GDSC Explore 4.0",
      href: "https://gdsc-explore.xyz/",
      dates: "April 2023 - June 2023",
      active: true,
      description:
        "I was the part of the frontend team in building this website, this was the largest developers fest in the North Eastern India.",
      technologies: [
        "JavaScript",
        "React.js",
        "TailwindCSS",
        "Cloudinary",
        "SCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://gdsc-explore.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gdsc-nits-org/gdsc-explore-4.0/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gdsc.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackVita 2.0",
      dates: "March 23rd - 24th, 2024",
      location: "Jorhat, Assam",
      description:
        "Secured the 2nd Position in HackVita 2.0, Developed an application to educate and empower individuals to make environmentally conscious choices in their daily lives.",
      image: "/hack-vita.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/POBOROJO/EcoFront",
        },
      ],
    },
    {
      title: "Ideavision 2024",
      dates: "August 23rd - 24th, 2018",
      location: "Guwahati, Assam",
      description:
        "Secured 2nd position as part of a team for presenting an innovative solution in Ideavision competition under the Institution Innovation Council.",
      icon: "public",
      image: "/ideavision.jpeg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/13wLSA92mlpIo6es7DD7BlmaeRjiujNk5/view",
        },
      ],
    },
    {
      title: "Girlscript Summer of Code 2024",
      dates: "May 2024 - August 2024",
      location: "Remote",
      description:
        "Was part of a team in developing the backend for a web application that helps people find and book fligts for their trips.",
      image: "/girl.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gssoc.girlscript.tech/",
        },
      ],
    },
    {
      title: "DSA Code War",
      dates: "August 12th, 2023",
      location: "Guwahati, Assam",
      description:
        "Earned 1st position in the 'DSA Code War' event as part of a skilled team.",
      image: "/codewar.jpeg",
      links: [],
    },
    {
      title: "Circuit Untangled Event",
      dates: "January 23rd, 2022",
      location: "Guwahati, Assam",
      description:
        "Secured 1st position in circuit building competition in the 'CIRCUIT UNTANGLED' event.",
      image: "robo.jpg",
      // win: "Best Data Hack",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1oKUZfQFaxRkpK38KR3qNlkD5IvQn06CB/view",
        },
      ],
    },
  ],
} as const;
