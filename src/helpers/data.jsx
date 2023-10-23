import { v4 as uuidv4 } from "uuid";
//images
import vortex from "../assets/VortexCourses.jpg";
import gallery from "../assets/Gallery.jpg";
import dictionary from "../assets/3_dictionary.jpg";
import basics from "../assets/Reacty.jpg";
import whyb from "../assets/whyb.jpg";
import businessGO from "../assets/businessGO.jpg";
import resumeBuilder from "../assets/resumeBuilder.jpg";
import maGallery from "../assets/maGallery.jpg";

//icons - social
import { BsLinkedin, BsGithub } from "react-icons/bs";
//icons - skillSet
import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import {
  SiCss3,
  SiTypescript,
  SiRedux,
  SiMui,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";

export const personal = {
  name: "Maroš Chmeľ",
  info: `Hi! My name is Maroš Chmeľ. I am a self-taught frontend developer from Vranov nad Topľou, Slovakia. I work with React.js (frontend) and starting to learn Next.Js (full-stack).`,
};
export const skillDesc = `While these are some of the technologies I am the most comfortable with when working with React, I am currently looking to expand my toolkit by learning new technologies!`;
export const skillSet = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 size={25} />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <SiCss3 size={25} />,
  },
  {
    id: 3,
    name: "JS",
    icon: <DiJavascript1 size={25} />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact size={25} />,
  },
  {
    id: 5,
    name: "TS",
    icon: <SiTypescript size={25} />,
  },
  {
    id: 6,
    name: "R. Toolkit",
    icon: <SiRedux size={25} />,
  },
  {
    id: 7,
    name: "SASS",
    icon: <FaSass size={25} />,
  },

  {
    id: 9,
    name: "Bootstrap",
    icon: <BsBootstrapFill size={25} />,
  },
  {
    id: 10,
    name: "MUI",
    icon: <SiMui size={25} />,
  },
  {
    id: 11,
    name: "Tailwind",
    icon: <SiTailwindcss size={25} />,
  },
  {
    id: 12,
    name: "Mysql",
    icon: <SiMysql size={25} />,
  },
  {
    id: 13,
    name: "Postgres",
    icon: <SiPostgresql size={25} />,
  },
  {
    id: 14,
    name: "Express",
    icon: <SiExpress size={25} />,
  },
  {
    id: 15,
    name: "Prisma",
    icon: <SiPrisma size={25} />,
  },
  {
    id: 16,
    name: "Next.js",
    icon: <SiNextdotjs size={25} />,
  },
];

export const myProjects = [
  {
    id: uuidv4(),
    title: "MA Gallery",
    url: "https://ma-gallery.vercel.app",
    info: "Create your own personal galleries. To log in with dummy credentials type jane+clerk_test@example.com in email input and 424242 in password input.",
    source: "https://ma-gallery.vercel.app",
    img: maGallery,
    stack: [
      "Next.Js",
      "Typescript",
      "ShadCN",
      "Zustand",
      "Axios",
      "Clerk Auth",
    ],
    category: "full-stack",
  },
  {
    id: uuidv4(),
    title: "Resume Builder",
    url: "https://cv-creator-nu.vercel.app",
    info: "Create your own Resume. To log in with dummy credentials type jane+clerk_test@example.com in email input and 424242 in password input.",
    source: "https://github.com/MarroosSK/cv_creator",
    img: resumeBuilder,
    stack: ["Next.Js", "Typescript", "ShadCN", "ContextAPI", "Axios"],
    category: "full-stack",
  },
  {
    id: uuidv4(),
    title: "Business GO",
    url: "https://business-listing-dusky.vercel.app",
    info: "BusinessGO is app, that allows you to search for all local businesses using Yelp API.",
    source: "https://github.com/MarroosSK/business-listing",
    img: businessGO,
    stack: ["Next.Js", "Typescript", "ShadCN", "Zustand", "Axios"],
    category: "front-end",
  },
  {
    id: uuidv4(),
    title: "First 15 Gallery",
    url: "https://8gallery.netlify.app/",
    info: "Gallery app made with typescript and redux toolkit. Purpose of this app is to allow user search for pictures and display them in modal.",
    source: "https://github.com/MarroosSK/8_gallery",
    img: gallery,
    stack: ["Typescript", "Material-UI", "Redux-Toolkit", "Axios"],
    category: "front-end",
  },
  {
    id: uuidv4(),
    title: "Where Have You Been? (Full-Stack)",
    url: "https://17-visit-blog.vercel.app",
    info: "Travelling blog. You can try to create your own blog. You can also search for certain blogs or filter by category.",
    source: "https://github.com/MarroosSK/17.Visit_Blog",
    img: whyb,
    stack: [
      "Typescript",
      "Express",
      "Postgre SQL",
      "Prisma",
      "React Query",
      "Router Dom",
      "Axios",
      "React-Quill",
    ],
    category: "full-stack",
  },
  {
    id: uuidv4(),
    title: "Vortex Courses",
    url: "https://16-vortex-courses.vercel.app",
    info: "Vortex courses made with typescript. Purpose of this app is to allow users to enroll course they want.",
    source: "https://github.com/MarroosSK/16_Vortex_courses",
    img: vortex,
    stack: ["Typescript", "Framer Motion", "Router Dom", "Axios"],
    category: "front-end",
  },
  {
    id: uuidv4(),
    title: "ReacTY - React Basics",
    url: "https://react-basics-chi.vercel.app",
    info: "React Basics app inspired in W3-School learning material for React. Purpose of this app is to give quick intro to people looking for learning React.",
    source: "https://github.com/MarroosSK/13_react_basics",
    img: basics,
    stack: ["Typescript", "Material-UI", "Router-Router-Dom", "React-Icons"],
    category: "front-end",
  },
  {
    id: uuidv4(),
    title: "Dictionary",
    url: "https://3dictionary.netlify.app",
    info: "Find meaning of any word. Inspiration taken at react examples website. Purpose of this ap is to work as online dictionary in english language.",
    source: "https://github.com/MarroosSK/3_dictionary",
    img: dictionary,
    stack: [
      "Typescript",
      "Bootstrap",
      "ContextAPI",
      "React-Query",
      "Axios",
      "React-Icons",
    ],
    category: "front-end",
  },
];

export const about = ["React & ", "Frontend Developer"];

export const icons = [
  {
    name: "LinkedIn",
    icon: <BsLinkedin size={25} />,
    url: "https://www.linkedin.com/in/maroš-chmeľ-883b21280/",
    alt: "linked_in",
  },
  {
    name: "GitHub",
    icon: <BsGithub size={25} />,
    url: "https://github.com/MarroosSK",
    alt: "git_hub",
  },
];
