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
import gamer from "../assets/11_gamer.jpg";
//icons - social
import {BsLinkedin, BsGithub} from "react-icons/bs"
//icons - skillSet
import {FaHtml5, FaReact, FaSass} from "react-icons/fa"
import {SiCss3, SiTypescript, SiRedux, SiReactrouter, SiMui} from "react-icons/si"
import {DiJavascript1} from "react-icons/di"
import {BsBootstrapFill} from "react-icons/bs"


export const personal = {
  name: "Maroš Chmeľ",
  age: 29,
  phone: "0908 026 829",
  email: "maros1chmel@gmail.com",
  info: `Hi! My name is Maroš Chmeľ. I am a self-taught react front end developer from Vranov nad Topľou, Slovakia. While originally going to University studying social work, I started coding on suggestion of my brother in Autumn 2022 and from that point on, I was hooked. Since then I have been learning everyday. I have built some projects to showcase my work. For some examples of recent work, see Projects. I am looking for positions as intern or junior react developer. I am  always fully focused about the work that I do and would love to chat about how I might be able to help the work that you do!`,
};
export const skillDesc = `While these are some of the technologies I am the most comfortable with when working with React, I am constantly looking to expand my toolkit and am open to working with and learning new skills!`
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
    title: "Gamer Store app",
    url: "https://gamerbymaros.netlify.app/",
    info: "Gamer store app inspired in instant-gaming web app. Purpose of this app is to provide digital keys for games to users. It contains all functions gamer store app should have. Although this app is pure front end, log in is implemented, where data are stored in local storage. User can filter games and add them to cart or wishlist in profile.",
    source: "https://github.com/MarroosSK/11_gamarr",
    img: gamer,
    technologies: "Material-UI",
    stack: ["Typescript", "Mui", "ContextAPI", "Axios", "ChartJS", "React-Hook-Form", "React-Multicarousel"]
  },
  {
    id: uuidv4(),
    title: "Gallery app",
    url: "https://8gallery.netlify.app/",
    info: "Gallery app made with typescript and redux toolkit. Purpose of this app is to allow user search for pictures and display them in modal. My goal was to practice work with API, because pictures are fetched from unsplashAPI.",
    source: "https://github.com/MarroosSK/8_gallery",
    img: gallery,
    technologies: "Material-UI",
    stack: ["Typescript", "Mui", "Redux-Toolkit", "Axios"]
  },

  {
    id: uuidv4(),
    title: "Ebolg blog app",
    url: "https://9blog.netlify.app",
    info: "Blog for every traveller. Purpose of this app is to share info about place from places all over the Globe. I used help of ChatGPT to make it work with firebase, where data are stored. App contains Login/Register, Add Blog, Blogs, and comment sections.",
    source: "https://github.com/MarroosSK/9_blog",
    img: blog,
    technologies: "Bootstrap",
    stack: ["Typescript", "Bootstrap", "Firebase", "Axios"]
  },
  {
    id: uuidv4(),
    title: "Dictionary",
    url: "https://3dictionary.netlify.app",
    info: "Find meaning of any word. Inspiration taken at react examples website. Purpose of this ap is self-explanatory. It works as online dictionary in english language. My goal was to practice react query to fetch data.",
    source: "https://github.com/MarroosSK/3_dictionary",
    img: dictionary,
    technologies: "Bootstrap",
    stack: ["Typescript", "Bootstrap", "ContextAPI", "React-Query", "Axios", "React-Icons"]
  },
  {
    id: uuidv4(),
    title: "Bmi Calculator",
    url: "https://2bmi.netlify.app",
    info: "Calculator to check Body Mass Index made with SASS. Purpose of this app is to check BMI of user and provide tips based on results. User type height and width and receives BMI index with prompt to accept or deny tips according to result.  My goal was to try SASS and ternary operators.",
    source: "https://github.com/MarroosSK/2_bmi_calculator",
    img: bmi,
    technologies: "Bootstrap",
    stack: [ "Bootstrap", "SASS", "ContextAPI", "Axios", "Router-Dom", "React-Icons"]
  },


];

export const about = ["React self-taught | ", "Front End Developer"];



export const icons = [
    {
        name: "LinkedIn",
        icon: <BsLinkedin  size={25} />,
        url: "https://www.linkedin.com/in/maroš-chmeľ-883b21280/",
        alt: "linked_in",
    },
    {
        name: "GitHub",
        icon: <BsGithub  size={25} />,
        url: "https://github.com/MarroosSK",
        alt: "git_hub",
    },
]