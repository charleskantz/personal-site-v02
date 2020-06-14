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
    label: "livestack",
    start_date: "May 2020",
    end_date: "June 2020",
    title: "Fullstack Engineer",
    bullets: [
      "Worked on small team to revamp React-based MVP by implementing new user workflows and refining key touchpoints",
      "Revamped form for requesting an event by implementing conditional validation on both front-end and enforcing schema requirements on back-end developed custom date picking component to give user more flexibility when selecting dates",
      "Refined key touchpoints by designing and implementing updated visual styling and responsive layouts for components, giving the end-to-end experience a more polished and professional look"
    ]
  },
  {
    company: "Nuro",
    label: "nuro",
    start_date: "August 2016",
    end_date: "August 2019",
    title: "Visual Designer",
    bullets: [
      "Oversaw and executed design efforts across the company including branding, web, hardware and software UX design, photography, video, and mobile/VR prototyping",
      "Planned and developed virtual reality prototype of first product with Unity and C#, designed full end-to-end delivery experience to facilitate investment and partner discussions",
      "Designed touchpad interaction on vehicle for users to easily identify themselves and retrieve their items",
      "Regularly partnered with software engineers to implement user-friendly interfaces for proprietary displays, internal tools, and prototype apps to facilitate partner discussions and company operations"
    ]
  },
  {
    company: "Clearpath",
    label: "clearpath",
    start_date: "December 2015",
    end_date: "July 2016",
    title: "Art Director",
    bullets: [
      "Initiated and developed new branding identity for new division OTTO Motors and revamped logo for Clearpath Robotics, oversaw company transition to new branding",
      "Directed the design and execution of new OTTO Motors website",
      "Explored and authored design guidelines for a new dashboard user-interface design"
    ]
  },
  {
    company: "Intuitive Surgical",
    label: "isi",
    start_date: "February 2014",
    end_date: "December 2015",
    title: "Senior Visual Designer",
    bullets: [
      "Designed and tested new visual status indicators for da Vinci Sp Surgical System, oversaw implementation into final product",
      "Initiated and designed new interactive reference guide to reduce setup time and errors during surgery",
      "Headed and executed UI visual design updates for da Vinci Xi Surgical System",
      "Explored and composed product brand guidelines for da Vinci Xi Surgical System, and produced collateral for product launch"
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
    title: "Average Blog",
    company: "Rithm School",
    tech: ["Javascript", "React", "Redux", "Express"],
    img_link: "https://imgur.com/ZxuhIDV.jpg",
    img_align: "center",
    gh_link: "https://github.com/charleskantz/redux-microblog",
    demo_link: "https://cocky-villani-ed165a.netlify.app/",
    description: "A Medium-like blog where you can create posts, delete posts, leave comments, and delete comments. Uses Redux for state management and local caching of visited blog posts. The backend is a Node Express server."
  },
  {
    featured: false,
    title: "Rap Libs",
    company: "Rithm School",
    tech: ["Javascript", "React"],
    img_link: "",
    img_align: "center",
    gh_link: "https://github.com/charleskantz/jeopardy-game",
    demo_link: "http://ck-jeopardy.surge.sh/",
    description: "Rap Libs is like a mad lib, but it's for a rap song. A simple React-based app where you submit words for a mad lib and see your selected song with your words."
  },
  {
    featured: false,
    title: "Jeopardy",
    company: "Rithm School",
    tech: ["Javascript", "jQuery"],
    img_link: "https://imgur.com/slvknIi.jpg",
    img_align: "center",
    gh_link: "https://github.com/charleskantz/jeopardy-game",
    demo_link: "http://ck-jeopardy.surge.sh/",
    description: "A fun Jeopardy-like trivia game, and one of my first Javascript projects. Click on a question mark to reveal a question, then click again to see the answer. Hit the 'Restart' button to get new categories and questions."
  },
  {
    featured: true,
    title: "Warbler",
    company: "Rithm School",
    tech: ["Python", "Flask", "Jinja", "Bcrypt", "SQLAlchemy"],
    img_link: "https://imgur.com/OlFoqmQ.jpg",
    img_align: "center",
    gh_link: "https://github.com/charleskantz/Warbler",
    demo_link: "https://warblers-be-warbling.herokuapp.com/",
    description: "A Twitter-like social media experience built on a static page server. Uses Bcrypt for authentication and SQLAlchemy for database management. Runs off a Flask server using Jinja for template-based page rendering."
  },
];

export {
  workHistory,
  jobData
};