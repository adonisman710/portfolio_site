import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg"; 
import swifticon from "../../assets/icons/swifticon.svg";
import djangoicon from "../../assets/icons/djangoicon.svg";
import fluttericon from "../../assets/icons/fluttericon.svg";
import fastlyicon from "../../assets/icons/fastlyicon.svg";
import githubicon from "../../assets/icons/githubicon.svg";
import graphqlicon from "../../assets/icons/graphqlicon.svg";
import laravelicon from "../../assets/icons/laravelicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import eslinticon from "../../assets/icons/eslinticon.svg";
import prettiericon from "../../assets/icons/prettiericon.svg";
import huskyicon from "../../assets/icons/huskyicon.svg";
import styledcompicon from "../../assets/icons/styledcomponenticon.svg";
import reduxsagaicon from "../../assets/icons/reduxsagaicon.svg";     
import vitejsicon from "../../assets/icons/vitejsicon.svg";
import yarnicon from "../../assets/icons/yarnicon.svg";
import socketicon from "../../assets/icons/socketicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import reactnativeicon from "../../assets/icons/reactnativeicon.svg";
import angularjsicon from "../../assets/icons/angularjsicon.svg"; 
import nuxtjsicon from "../../assets/icons/nuxtjsicon.svg";
import materialuiicon from "../../assets/icons/materialuiicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import queryicon from "../../assets/icons/jqueryicon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import pokergame from "../../assets/img/poker_game.jpg";
import adminprodashboard from "../../assets/img/admin_pro_dashboard.jpg";
import doctorsite from "../../assets/img/doctor_site.jpg";
import socialmediasite from "../../assets/img/social_media_site.jpg";
import ecommerce from "../../assets/img/ecommerce.jpg";
import uidashboard from "../../assets/img/admin_uidashboard_netlify.png";
import mediastream from "../../assets/img/media_stream_site.png";
import devoverflow from "../../assets/img/dev_overflow.jpg";
import nextstarter from "../../assets/img/next-starter.png";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import profilepicture from "../img/me.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const profile = {
  email: "kevin12.scott14@gmail.com",
  name: "Kevin Scott"
}

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Kevin",
    en: "Hi, I'm Kevin Scott",
  },
  subtitle: "Fullstack Developer ",
  description: {
    de: "Ich bin Kevin, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Kevin Scott, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Next.js 14 Template",
    description:
    "Das Ziel dieses Starters besteht darin, Ihnen einen Ausgangspunkt zu bieten, bei dem alles einsatzbereit ist und mit der Produktion beginnen kann. Web Vitals standardmäßig mit 100 %. Ordnerstruktur fertig. Werkzeug bereit. SEO-fähig. SSR-bereit.",
    description_EN:
    "The aim for this starter is to give you a starting point with everything ready to work and launch to production. Web Vitals with 100% by default. Folder structure ready. Tooling ready. SEO ready. SSR ready.",
    technologies: [
      { name: "Next.js", icon: nextjsicon },
      { name: "TypeScript", icon: typescripticon },
      { name: "ESLint", icon: eslinticon },
      { name: "Prettier", icon: prettiericon },
      { name: "Husky", icon: huskyicon },
      { name: "Styled Components", icon: styledcompicon },
    ],
    image: nextstarter,
    deploymenturl: "",
    githuburl: "https://github.com/adonisman710/nextjs-14-template",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  //media streaming site
  {
    title: "Dev Overflow",
    description:
      "Dev Overflow ist eine leistungsstarke Entwickler-Community-Plattform, die mit modernsten Technologien aufgebaut ist, um Zusammenarbeit, Wissensaustausch und ein ansprechendes Benutzererlebnis zu fördern. Es ist mit Next.js, MongoDB, TypeScript und TailwindCSS erstellt.",
    description_EN:
      "Dev Overflow is a powerful Developer Community Platform built with cutting-edge technologies to foster collaboration, knowledge sharing, and an engaging user experience. It is built with Next.js, MongoDB, TypeScript and TailwindCSS.",
    technologies: [
      { name: "Tailwind CSS 3.3.0", icon: tailwindcssicon },
      { name: "TypeScript 5", icon: typescripticon },
      { name: "React.js 18", icon: reacticon },
      { name: "Mongo DB 6.3.0", icon: mongodbicon },
      { name: "Next.js 14.1.0", icon: nextjsicon },
      { name: "Query String 8.2.0", icon: queryicon },
    ],
    image: devoverflow,
    deploymenturl: "",
    githuburl: "https://github.com/adonisman710/dev-overflow",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  //media streaming site
  {
    title: "Video Streaming App",
    description:
      "Eine React-App, mit der Benutzer nach Videos suchen und diese in ihrer persönlichen Bibliothek speichern können.",
    description_EN:
      "A React App That Allows Users To Search For Videos And Save Them To Their Own Personal Library.",
    technologies: [
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "APIs", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Redux Saga", icon: reduxsagaicon },
      { name: "SCSS", icon: sassscssicon },
      { name: "Vite.js", icon: vitejsicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Yarn", icon: yarnicon },
    ],
    image: mediastream,
    deploymenturl: "https://youtube-clone-v007.netlify.app/",
    githuburl: "https://github.com/adonisman710/media-streaming/tree/main",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  //react-dashboard-ui
  {
    title: "Admin Dashboard",
    description:
      "Ein Admin-Dashboard, mit dem Benutzer ihre Website verwalten können.",
    description_EN:
      "A Admin Dashboard That Allows Users To Manage Their Website.",
    technologies: [
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "APIs", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Vue.js", icon: vuejsicon },
      { name: "Material UI", icon: materialuiicon },
      { name: "Axios", icon: axiosicon },
      { name: "Shopify", icon: shopifyicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: uidashboard,
    deploymenturl: "https://admin-uidashboard.netlify.app/",
    githuburl: "https://github.com/adonisman710/react-admin-dashboard-ui/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  //Ecommerce
  {
    title: "Ecommerce Application",
    description:
      "Eine E-Commerce-App, mit der Benutzer ihre Produkte verwalten können.",
    description_EN:
      "A Ecommerce App That Allows Users To Manage Their Products.",
    technologies: [
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "APIs", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Axios", icon: axiosicon },
      { name: "Shopify", icon: shopifyicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: ecommerce,
    deploymenturl: "https://ecommerce-v3.netlify.app/",
    githuburl: "https://github.com/adonisman710/ecommerce-client",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  //social
  {
    title: "social media site",
    description:
      "Eine Social-Media-App, die es Benutzern ermöglicht, ihre Beiträge und Kommentare mit anderen Benutzern zu teilen.",
    description_EN:
      "A Social Media App That Allows Users To Share Their Posts And Comments With Other Users.",
    technologies: [
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "TypeScript", icon: typescripticon },
      { name: "APIs", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "React Native", icon: reactnativeicon },
      { name: "Material UI", icon: materialuiicon },
      { name: "Axios", icon: axiosicon },
      { name: "next.js", icon: nextjsicon },
      { name: "Mysql", icon: mysqlicon },
      { name: "Socket.io", icon: socketicon },
    ],
    image: socialmediasite,
    deploymenturl: "https://social-media-site-sr.netlify.app/",
    githuburl: "https://github.com/adonisman710/social-media-frontend/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  //doctor
  {
    title: "doctor appointment",
    description:
      "Entdecken Sie die besten Ärzte, Kliniken und Krankenhäuser in der Stadt in Ihrer Nähe. Es ist wichtig, sich um den Patienten zu kümmern und ihm zu folgen, aber das geschieht zu einem Zeitpunkt, an dem es viel Arbeit und Schmerzen gibt.",
    description_EN:
      "Discover the best doctors, clinic & hospital the city nearest to you. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "APIs", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Material UI", icon: materialuiicon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: doctorsite,
    deploymenturl: "https://doccure-appointment.vercel.app/",
    githuburl: "https://github.com/adonisman710/doctor-appointment/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  //admin
  {
    title: "Admin Pro Dashboard",
    description:
    "Dies ist eine Beispielvorlage für React.js und Vite.",
    description_EN:
    "This is a sample template for React.js and Vite.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "APIs", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Material UI", icon: materialuiicon },
      { name: "Vue.js", icon: vuejsicon },
      { name: "GitHub Pages", icon: githubicon },
    ],
    image: adminprodashboard,
    deploymenturl: "https://admin-dashboard-pro.vercel.app/",
    githuburl: "https://github.com/adonisman710/admin-dashboard-pro/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  //web canvas game
  {
    title: "Poker Game",
    description:
      "Dieses Pokerspiel ist ein Online-Multiplayer-Blackjack-Spiel. Das Frontend des Spiels wurde mit Angular erstellt und das Backend wurde mit Node.js und dem Adonis-Framework erstellt.",
    description_EN:
      "This poker game is an online multiplayer Blackjack game. The game's frontend is made with Angular and The backend is made using Node.js and adonis framework.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "TypeScript", icon: typescripticon },
      { name: "Google Front API", icon: apiicon },
      { name: "Angular", icon: angularjsicon },
      { name: "Fastly", icon: fastlyicon },
      { name: "Zone.js", icon: angularjsicon },
      { name: "GitHub Pages", icon: githubicon },
    ],
    image: pokergame,
    deploymenturl: "https://stopnoanime.github.io/21-online/",
    githuburl: "https://github.com/adonisman710/poker-game",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Tasty App",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/adonisman710/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  // {
  //   title: "Silentmoon",
  //   description:
  //     "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
  //   description_EN:
  //     "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "Spotify Api", icon: spotifyicon },
  //     { name: "React", icon: reacticon },
  //     { name: "JWT & Bcrypt", icon: jwticon },
  //     { name: "Axios", icon: axiosicon },
  //     { name: "MongoDB", icon: mongodbicon },
  //     { name: "Express", icon: expressiconwhite },
  //     { name: "Node.js", icon: nodejsicon },
  //     { name: "Figma", icon: figmaicon },
  //     { name: "Render", icon: rendericon },
  //   ],
  //   image: silentmoonMockup,
  //   deploymenturl: "https://silentmoon-grpw.onrender.com/",
  //   githuburl:
  //     "https://github.com/adonisman710/Fullstack_Abschlussprojekt_SilentMoon",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#FFD5BD",
  //   },
  // },
  {
    title: "Furniture Organizer",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/adonisman710/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Angular.js",
        hash: "#Angular.js",
        icon: angularjsicon,
        color: "#ff2d55",
      },
      {
        title: "Laravel",
        hash: "#Laravel",
        icon: laravelicon,
        color: "#e74c3c",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "##3498db",
      },
      {
        title: "Django",
        hash: "#Django",
        icon: djangoicon,
        color: "#4FC08D",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#4cd964",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Nuxt.js",
        hash: "#Nuxt.js",
        icon: nuxtjsicon,
        color: "#339933",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysqlicon,
        color: "#f1c40f",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "GraphQL",
        hash: "#GraphQL",
        icon: graphqlicon,
        color: "#FF61F6",
      },
      
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const skillsDataMobile = [
  {
    skillsTitle: "MobileDevelopment",
    skills: [
      {
        title: "React Native",
        hash: "#React Native",
        icon: reactnativeicon,
        color: "#61DAFB",
      },
      {
        title: "Flutter",
        hash: "#Flutter",
        icon: fluttericon,
        color: "#007ACC",
      },
      {
        title: "Swift",
        hash: "#Swift",
        icon: swifticon,
        color: "#ff6a3d",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "#contact",
  text: "kevin12.scott14@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/kevin/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/adonisman710",
    icon: FiGithub,
    altimgname: "github",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Leitender Full-Stack-Ingenieur",
      subtitle: "Santa Clara, 06/2018 ~ 03/2021",
      description:
        "Entwickelte 6 interaktive Front-End-Anwendungen mit dem React-Framework und JavaScript/TypeScript, um das Verbrauchererlebnis um 35 % zu verbessern. Drei hochmoderne HTML- und CSS-Designs wurden fehlerfrei implementiert, was zu einem Anstieg des Datenverkehrs um 20 % führte. Zusammenarbeit mit Back-End-Entwicklern zur Erstellung und Bereitstellung eines voll funktionsfähigen CRM-Systems, das die Kundenakquise und Kundenbindung um 20 % verbesserte, was zu einer Umsatzsteigerung von 40 % führte.",
      icon: hardwareicon,
    },
    {
      title: "Junior Front-End-Entwickler",
      subtitle: "Scopic Company, 03/2021 ~ 12/2023",
      description:
        "Ich bin ein Full-Stack-Ingenieur mit über fünf Jahren Erfahrung in der Entwicklung von Webanwendungen mit verschiedenen Technologien wie JavaScript, Python, Java, Ruby und PHP. Ich habe an Projekten gearbeitet, die Frontend-, Back-End- und Datenbankentwicklung sowie die Integration mit externen APIs und Systemen umfassten. Es liegt mir am Herzen, benutzerfreundliche, skalierbare und sichere Weblösungen zu entwickeln, die den Bedürfnissen und Erwartungen der Kunden und Benutzer gerecht werden.",
      icon: caricon,
    },
    // {
    //   title: "Entdeckungsfreude als Lebensmotto",
    //   description:
    //     "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
    //   icon: travelicon,
    // },
  ],
  paragraphs_EN: [
    {
      title: "Senior Full-stack Engineer",
      subtitle: "Santa Clara, 06/2018 ~ 03/2021",
      description:
      "Developed 6 interactive front-end applications using React framework and JavaScript/TypeScript, to improve consumer experience by 35%. Flawlessly implemented 3 cutting-edge HTML and CSS designs, resulting in a 20 % spike in traffic. Collaborated with back-end developers to create and deliver a fully functional CRM system that improved customer acquisition and customer retention with 20%, resulting in 40% revence increase.",
      icon: hardwareicon,
    },
    {
      title: "Junior Front-End Developer",
      subtitle: "Scopic Company, 03/2021 ~ 12/2023",
      description:
        "I am a full-stack engineer with over five years of experience in developing web applications using various technologies, such as JavaScript, Python, Java, Ruby and PHP. I have worked on projects that involved front-end, back-end, and database development, as well as integration with external APIs and systems. I am passionate about creating user-friendly, scalable and secure web solutions that meet the needs and expectations of the clients and the users.",
      icon: caricon,
    },
    // {
    //   title: "The Joy of Discovery as a Life Motto",
    //   description:
    //     "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
    //   icon: travelicon,
    // },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Kevin meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Kevin may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
