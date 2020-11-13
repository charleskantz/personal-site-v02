import jobly from '../images/jobly.jpg';
import joblyWebP from '../images/jobly.webp';
import blog from '../images/blog.jpg';
import blogWebP from '../images/blog.webp';
import warbler from '../images/warbler.jpg';
import warblerWebP from '../images/warbler.webp';

// let singleWorkHistory = {
//   company: "",
//   label: "",
//   start_date: "",
//   end_date: "",
//   title: "",
//   bullets: [
//     "",
//     "",
//     "",
//     ""
//   ]
// }

const workHistory = [
  {
    company: "Livestack",
    company_link: "https://livestack.video/",
    label: "livestack",
    role: "engineering",
    start_date: "May 2020",
    end_date: "June 2020",
    title: "Fullstack Engineer",
    bullets: [
      "Livestack provides creators and influencers a platform for hosting paid live streaming events.",
      "Revamped React-based MVP by implementing new user workflows and refining key touchpoints.",
      "Revamped form for requesting an event by implementing conditional validation on the front-end and enforcing schema requirements on the back-end.",
      "Developed custom date picking component to give users more flexibility when selecting dates.",
      "Refined key touchpoints by designing and implementing updated visual styling and responsive layouts for components, giving the end-to-end experience a more polished and professional look."
    ]
  },
  {
    company: "Nuro",
    company_link: "https://nuro.ai/",
    label: "nuro",
    role: "design",
    start_date: "August 2016",
    end_date: "August 2019",
    title: "Visual Designer",
    bullets: [
      "Oversaw and executed design efforts across the company including branding, web, hardware/software UX design, photography, video, and mobile/VR prototyping.",
      "Planned and developed virtual reality prototype of first product with Unity and C#, designed the full end-to-end delivery experience to facilitate investment and partner discussions.",
      "Designed touchpad interaction on vehicle for users to quickly identify themselves and retrieve their items.",
      "Regularly partnered with software engineers to implement user-friendly interfaces for proprietary displays, internal tools, and prototype apps to facilitate partner discussions and company operations."
    ]
  },
  {
    company: "Clearpath",
    company_link: "https://clearpathrobotics.com/",
    label: "clearpath",
    role: "design",
    start_date: "December 2015",
    end_date: "July 2016",
    title: "Art Director",
    bullets: [
      "Initiated and developed new branding identity for new division OTTO Motors and revamped logo for Clearpath Robotics, oversaw company transition to new branding",
      "Directed the design and execution of the new OTTO Motors website for division launch.",
      "Explored and authored design guidelines for a new dashboard user-interface design."
    ]
  },
  {
    company: "Intuitive Surgical",
    company_link: "https://intuitive.com/",
    label: "isi",
    role: "design",
    start_date: "February 2014",
    end_date: "December 2015",
    title: "Senior Visual Designer",
    bullets: [
      "Designed and tested new visual status indicators for da Vinci Sp Surgical System, oversaw implementation into final product.",
      "Initiated and designed a new interactive reference guide, reducing setup time and errors during surgery.",
      "Executed UI visual design updates for da Vinci Xi Surgical System.",
      "Explored and composed product brand guidelines for da Vinci Xi Surgical System, and produced collateral for product launch."
    ]
  }

]

// const singleJobData = {
//   featured: false,
//   title: "",
//   company: "",
//   tech: [""],
//   img_link: "",
//   gh_link: "",
//   demo_link: "",
//   description: ""
// };

const jobData = [
  {
    featured: true,
    title: "Jobly",
    label: "jobly",
    company: "Rithm School",
    tech: ["Javascript", "React", "Emotion/styled", "Express"],
    img_link: joblyWebP,
    fallback: jobly,
    img_align: "center",
    gh_link: "https://github.com/charleskantz/react-jobly",
    demo_link: "https://jobly.charleskantz.com",
    description: "A fullstack Javascript job hunting app built with React, Node/Express, and PostgreSQL. Jobly allows users to sign up or login, browse and apply for posted jobs and search them by position, browse and search hiring companies by name, and view the jobs posted by each company. It also allows users to edit their profile info. Finally, the authentication and authorization middleware protects certain routes so that only the right logged in users can view certain pages."
  },
  {
    featured: true,
    title: "Average Blog",
    label: "microblog",
    company: "Rithm School",
    tech: ["Javascript", "React", "Redux", "Express"],
    img_link: blogWebP,
    fallback: blog,
    img_align: "left",
    gh_link: "https://github.com/charleskantz/redux-microblog",
    demo_link: "http://microblog.charleskantz.com",
    description: "A Medium-like blog where you can create posts, delete posts, leave comments, and delete comments. Uses Redux for state management and local caching of visited blog posts. The backend is a Node Express server."
  },
  {
    featured: true,
    title: "Warbler",
    label: "warbler",
    company: "Rithm School",
    tech: ["Python", "Flask", "Jinja", "Bcrypt", "SQLAlchemy"],
    img_link: warblerWebP,
    fallback: warbler,
    img_align: "center",
    gh_link: "https://github.com/charleskantz/Warbler",
    demo_link: "https://warblers-be-warbling.herokuapp.com/",
    description: "A Twitter-like social media experience built on a static page server. Uses Bcrypt for authentication and SQLAlchemy for database management. Runs off a Flask server using Jinja for template-based page rendering."
  },
  {
    featured: false,
    title: "Jeopardy",
    label: "jeopardy",
    company: "Rithm School",
    tech: ["Javascript", "jQuery"],
    img_link: "https://imgur.com/slvknIi.jpg",
    img_align: "center",
    gh_link: "https://github.com/charleskantz/jeopardy-game",
    demo_link: "https://jeopardy.charleskantz.com/",
    description: "A fun Jeopardy-like trivia game, and one of my first Javascript projects. Click on a question mark to reveal a question, then click again to see the answer. Hit the 'Restart' button to get new categories and questions."
  },
  {
    featured: false,
    title: "Rap Libs",
    label: "raplibs",
    company: "Rithm School",
    tech: ["Javascript", "React"],
    img_link: "",
    img_align: "center",
    gh_link: "https://github.com/charleskantz/rap-libs",
    demo_link: "https://raplibs.charleskantz.com/",
    description: "Rap Libs is like a mad lib, but it's for a rap song. A simple React-based app where you submit words for a mad lib and see your selected song with your words."
  },
  {
    featured: false,
    title: "Personal Website v02",
    label: "personalsite02",
    company: "Personal",
    tech: ["Javascript", "React", "Sass", "Bootstrap"],
    img_link: "",
    img_align: "center",
    gh_link: "https://github.com/charleskantz/personal-site-v02",
    demo_link: "https://charleskantz.com",
    description: "My portfolio wesbite! This is my second version since switching to engineering. Built on React to be a single page experience and deployed on Netlify. "
  },
];

export {
  workHistory,
  jobData
};