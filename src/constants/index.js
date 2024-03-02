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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";


export const navLinks = [
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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Embedded Systems",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "IOT",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "LICET PATTARAI",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul 2020 - Oct 2020",
    points: [
      "An Enterprise Resource Planning software.",
      "Includes a Marks module for entering marks.",
      "The tech used in this is LAMP.",
      "Reviewing students’ marks.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "LICET PATTARAI",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2021",
    points: [
      "Doing graphic designing for posters of the club.",
      "Worked on video editing for promotional events of the club.",
      "Organised a design workshop on Adobe Illustrator",
      "Worked on Blender for some videos.",
    ],
  },
  {
    title: "Trainee",
    company_name: "Check Point ALS",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2021 - Oct 2021",
    points: [
      "Worked in the RFID and NFC printing department.",
      "Stickers and tags were printed and exported in large numbers to foreign clients.",
      "Worked in various departments like sticker manufacture and printing.",
      "Worked in designing the stickers and also verify the design of the stickers and labels.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Conducted a design workshop on Adobe Illustrator with over 60 participants",
    name: "LICET PATTARAI",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Won the First place in the medical category in PALS Innowah conducted by IIT Madras.",
    name: "Chennai",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Participated in the national level toy making competition organized by the Government of India in Noida.",
    name: "Noida",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ERP Mark's Module",
    description:
      "The XStack is an ERP suite built for the college in the view of an independent service provider with no involvement of third parties which are less reliable or even the servers are down due to many requests coming in simultaneously.",
    tags: [
      {
        name: "ERP",
        color: "blue-text-gradient",
      },
      {
        name: "LAMP",
        color: "green-text-gradient",
      },
      {
        name: "module",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/pattarai/xstack-marks-student.git",
  },
  {
    name: "Bionic Arm",
    description:
      "Creating a BIONIC prosthetic arm which is controlled by the electrical pulses generated from the muscles. Giving the sense of touch (Feedback) to the amputee through haptic feedback motors.",
    tags: [
      {
        name: "prosthetics",
        color: "blue-text-gradient",
      },
      {
        name: "EMG",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Mark-raven/BIONIC-Prosthetic-Arm-with-a-Sense-of-Touch.git",
  },
  {
    name: "Project PingMe",
    description:
      "The message to be sent is sent from a master device and the device travels from one device to another. An acknowledgment message is also sent to the master device replying to the message received.",
    tags: [
      {
        name: "IOT",
        color: "blue-text-gradient",
      },
      {
        name: "communication",
        color: "green-text-gradient",
      },
      {
        name: "server",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Mark-raven/Pager.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
