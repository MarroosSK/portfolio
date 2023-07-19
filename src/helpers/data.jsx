import { v4 as uuidv4 } from "uuid";
//images
import gallery from "../assets/8_gallery.jpg";
import dictionary from "../assets/3_dictionary.jpg";
import basics from "../assets/13-basics.jpg";
import yourself from "../assets/14-yourself.jpg";
import gamer from "../assets/11_gamer.jpg";
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
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";

export const personal = {
  name: "Maroš Chmeľ",
  age: 29,
  phone: "0908 026 829",
  email: "maros1chmel@gmail.com",
  info: `Hi! My name is Maroš Chmeľ. I am a self-taught full-stack developer from Vranov nad Topľou, Slovakia. My stack consists of React.js (frontend) and Express.js (backend). While originally going to University studying social work, I started coding on suggestion of my brother in Autumn 2022 and from that point on, I was hooked. Since then I have been learning everyday, first front end, later backend. I have built some projects to showcase my work. For some examples of recent work, see Projects section. I am looking for positions as intern or junior frontend/ fullstack developer. I am  always fully focused about the work that I do and would love to chat about how I might be able to help the work that you do!`,
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
    name: "Javascript",
    icon: <DiJavascript1 size={25} />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact size={25} />,
  },
  {
    id: 5,
    name: "Typescript",
    icon: <SiTypescript size={25} />,
  },
  {
    id: 6,
    name: "Redux Toolkit",
    icon: <SiRedux size={25} />,
  },
  {
    id: 7,
    name: "SASS",
    icon: <FaSass size={25} />,
  },

  {
    id: 9,
    name: "React Bootstrap",
    icon: <BsBootstrapFill size={25} />,
  },
  {
    id: 10,
    name: "Material-UI",
    icon: <SiMui size={25} />,
  },
  {
    id: 11,
    name: "Tailwind css",
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
    name: "Express.js",
    icon: <SiExpress size={25} />,
  },
  {
    id: 15,
    name: "Prisma ORM",
    icon: <SiPrisma size={25} />,
  },
];

export const myProjects = [
  {
    id: uuidv4(),
    title: "Gamer Store app",
    url: "https://gamerbymaros.netlify.app/",
    info: "Gamer store app inspired in instant-gaming web app. Purpose of this app is to provide digital keys for games to users. It contains all functions gamer store app should have.",
    source: "https://github.com/MarroosSK/11_gamarr",
    img: gamer,
    technologies: "Frontend",
    stack: [
      "Typescript",
      "Mui",
      "ContextAPI",
      "Axios",
      "ChartJS",
      "React-Hook-Form",
      "React-Multicarousel",
    ],
  },
  {
    id: uuidv4(),
    title: "Yourself Blog (Full-stack)",
    url: "https://blog-yourself.vercel.app/",
    info: "Full-stack Blog app. Purpose of this app is to work as fully functional blog. Frontend created by React, backend with express, mysql and Prisma. There is authentication in this app, and user can perform CRUD operations.",
    source: "https://github.com/MarroosSK/9b.-full-stack-blog",
    img: yourself,
    technologies: "Full-stack",
    stack: ["Material-UI", "React", "Express", "Mysql", "Prisma", "Vercel"],
  },
  {
    id: uuidv4(),
    title: "React Basics",
    url: "https://react-basics-chi.vercel.app",
    info: "React Basics app inspired in W3-School learning material for React. Purpose of this app is to give quick intro to people looking for learning React.",
    source: "https://github.com/MarroosSK/13_react_basics",
    img: basics,
    technologies: "Frontend",
    stack: ["Material-UI", "Axios", "Router-Router-Dom", "React-Icons"],
  },
  {
    id: uuidv4(),
    title: "Gallery app",
    url: "https://8gallery.netlify.app/",
    info: "Gallery app made with typescript and redux toolkit. Purpose of this app is to allow user search for pictures and display them in modal.",
    source: "https://github.com/MarroosSK/8_gallery",
    img: gallery,
    technologies: "Frontend",
    stack: ["Typescript", "Mui", "Redux-Toolkit", "Axios"],
  },
  {
    id: uuidv4(),
    title: "Dictionary",
    url: "https://3dictionary.netlify.app",
    info: "Find meaning of any word. Inspiration taken at react examples website. Purpose of this ap is to work as online dictionary in english language.",
    source: "https://github.com/MarroosSK/3_dictionary",
    img: dictionary,
    technologies: "Frontend",
    stack: [
      "Typescript",
      "Bootstrap",
      "ContextAPI",
      "React-Query",
      "Axios",
      "React-Icons",
    ],
  },
];

export const about = ["React self-taught | ", "Full-stack Developer"];

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
