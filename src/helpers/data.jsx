import { v4 as uuidv4 } from "uuid";
//images
import eshop from "../assets/10_eshop.jpg";
import blog from "../assets/9_blog.jpg";
import gallery from "../assets/8_gallery.jpg";
import quiz from "../assets/7_quiz.jpg";
import bistro from "../assets/6_bistro.jpg";
import movies from "../assets/5_movies.jpg";
import meds from "../assets/4_meds.jpg";
import dictionary from "../assets/3_dictionary.jpg";
import twitter from "../assets/1_twitter_clone.jpg";
import bmi from "../assets/2_bmi.jpg";
//icons - social
import {BsLinkedin, BsGithub} from "react-icons/bs"
//icons - skillSet
import {FaHtml5, FaReact, FaSass} from "react-icons/fa"
import {SiCss3, SiTypescript, SiRedux, SiReactrouter, SiMui} from "react-icons/si"
import {DiJavascript1} from "react-icons/di"
import {BsBootstrapFill} from "react-icons/bs"


export const personal = {
  name: "My Name",
  dateOfBirth: "My Date",
  age: 0,
  address: "My Address",
  city: "My Address",
  country: "My Address",
  phone: "My phone",
  email: "My mail",
  info: "........Info.....",
};

export const skillSet = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 size={25}/>,
    url: "https://html.com"
  },
  {
    id: 2,
    name: "CSS",
    icon: <SiCss3 size={25}/>,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    id: 3,
    name: "Javascript",
    icon: <DiJavascript1 size={25}/>,
    url: "https://www.javascript.com"
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact size={25}/>,
    url: "https://react.dev"
  },
  {
    id: 5,
    name: "Typescript",
    icon: <SiTypescript size={25}/>,
    url: "https://www.typescriptlang.org"
  },
  {
    id: 6,
    name: "Redux Toolkit",
    icon: <SiRedux size={25}/>,
    url: "https://redux.js.org"
  },
  {
    id: 7,
    name: "SASS",
    icon: <FaSass size={25}/>,
    url: "https://sass-lang.com"
  },
  {
    id: 8,
    name: "React Router",
    icon: <SiReactrouter size={25}/>,
    url: "https://reactrouter.com/en/main"
  },
  {
    id: 9,
    name: "React Bootstrap",
    icon: <BsBootstrapFill size={25}/>,
    url: "https://react-bootstrap.netlify.app"
  },
  {
    id: 10,
    name: "Material-UI",
    icon: <SiMui size={25}/>,
    url: "https://mui.com"
  },
];

export const myProjects = [
  {
    id: uuidv4(),
    title: "1. Twitter Clone",
    url: "https://1twitterclone.netlify.app",
    info: "Clone of Twitter page to test HTML and CSS.",
    source: "https://github.com/MarroosSK/1_twitter_clone",
    img: twitter,
    technologies: ["Bootstrap"],
  },
  {
    id: uuidv4(),
    title: "2. Bmi Calculator",
    url: "https://2bmi.netlify.app",
    info: "Calculator to check Body Mass Index with tips based on results with help of SASS.",
    source: "https://github.com/MarroosSK/2_bmi_calculator",
    img: bmi,
    technologies: "Bootstrap",
  },
  {
    id: uuidv4(),
    title: "3. Dictionary",
    url: "https://3dictionary.netlify.app",
    info: "Find meaning of any word. Inspiration taken at react examples website.",
    source: "https://github.com/MarroosSK/3_dictionary",
    img: dictionary,
    technologies: "Bootstrap",
  },
  {
    id: uuidv4(),
    title: "4. Weekly Meds Schedule",
    url: "https://4medsschedule.netlify.app",
    info: "App for elder people to track their meds usage.",
    source: "https://github.com/MarroosSK/4_meds_schedule",
    img: meds,
    technologies: "Bootstrap",
  },
  {
    id: uuidv4(),
    title: "5. MovieInfo",
    url: "https://5moviewishlist.netlify.app",
    info: "App allows user to search for movies and add/ remove them from wishlist.",
    source: "https://github.com/MarroosSK/5_movies_wishlist",
    img: movies,
    technologies: "Bootstrap",
  },
  {
    id: uuidv4(),
    title: "6. Local Bistro menu",
    url: "https://6bistro.netlify.app",
    info: "Menu of Local Bistro, that serves delicious meals.",
    source: "https://github.com/MarroosSK/6_local_bistro",
    img: bistro,
    technologies: "Bootstrap",
  },
  {
    id: uuidv4(),
    title: "7. 3 quizes",
    url: "https://7quiz3x.netlify.app",
    info: "3 quizes app, test your knowledge from 3 different categories.",
    source: "https://github.com/MarroosSK/7_quiz3x",
    img: quiz,
    technologies: "Bootstrap",
  },
  {
    id: uuidv4(),
    title: "8. Gallery",
    url: "https://8gallery.netlify.app/",
    info: "Gallery app made with typescript and redux toolkit. ChatGPT assisted.",
    source: "https://github.com/MarroosSK/8_gallery",
    img: gallery,
    technologies: "Material-UI",
  },
  {
    id: uuidv4(),
    title: "9. Blog",
    url: "https://9blog.netlify.app",
    info: "Blog for every traveller. Use of Firebase with help of ChatGPT.",
    source: "https://github.com/MarroosSK/9_blog",
    img: blog,
    technologies: "Material-UI",
  },
  {
    id: uuidv4(),
    title: "10. E-shop",
    url: "https://10eshopcart.netlify.app",
    info: "App created with ChatGPT focused on cart functionality.",
    source: "https://github.com/MarroosSK/10_eshop_cart",
    img: eshop,
    technologies: "Material-UI",
  },
];

export const about = ["React self-taught | ", "Front End Developer"];



export const icons = [
    {
        name: "LinkedIn",
        icon: <BsLinkedin  size={25} />,
        url: "https://www.linkedin.com",
        alt: "linked_in",
    },
    {
        name: "GitHub",
        icon: <BsGithub  size={25} />,
        url: "https://github.com/MarroosSK",
        alt: "git_hub",
    },
]