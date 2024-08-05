// src/staticData/index.js

// ----------------- Nav Data -------------------------
import dropdownIcon from "../static/icons/dropdown-arrow.svg";

export const navItems = [
  { label: "Services", link: "#services", icon: dropdownIcon },
  { label: "Company", link: "/" },
  { label: "Tech Stack", link: "/" },
  { label: "Resources", link: "/" },
  { label: "Projects", link: "/", icon: dropdownIcon },
];

// ------------------ Technologies Data -----------------------
import figmaLogo from "~/static/icons/figma.png";
import phpLogo from "~/static/icons/php.png";
import nodejsLogo from "~/static/icons/nodejs.png";
import appleLogo from "~/static/icons/apple.png";
import dockerLogo from "~/static/icons/docker.png";
import sassLogo from "~/static/icons/sass.png";
import r2Logo from "~/static/icons/r2.png";
import r1Logo from "~/static/icons/r1.png";
import flutterLogo from "~/static/icons/flutter.png";
import javascriptLogo from "~/static/icons/js.png";
import rustLogo from "~/static/icons/rust.png";
import r3Logo from "~/static/icons/r3.png";
import mySQLLogo from "~/static/icons/mysql.png";
import r4Logo from "~/static/icons/r4.png";
import angularLogo from "~/static/icons/angular.png";
import typescriptLogo from "~/static/icons/typescript.png";
import reactLogo from "~/static/icons/react.png";
import r5Logo from "~/static/icons/r5.png";
import r6Logo from "~/static/icons/r6.png";
import r7Logo from "~/static/icons/r7.png";
import tailwindLogo from "~/static/icons/tailwind.png";

export const logos = [
  { src: figmaLogo, alt: "Figma" },
  { src: phpLogo, alt: "PHP" },
  { src: nodejsLogo, alt: "Node.js" },
  { src: appleLogo, alt: "Apple" },
  { src: dockerLogo, alt: "Docker" },
  { src: sassLogo, alt: "Sass" },
  { src: r2Logo, alt: "R2" },
  { src: flutterLogo, alt: "flutterLogo" },
  { src: javascriptLogo, alt: "javascriptLogo" },

  { src: rustLogo, alt: "rustLogo" },
  { src: r1Logo, alt: "r1Logo" },
  { src: r3Logo, alt: "r3Logo" },
  { src: mySQLLogo, alt: "mySQLLogo" },
  { src: r4Logo, alt: "r4Logo" },
  { src: angularLogo, alt: "angularLogo" },
  { src: r5Logo, alt: "r5Logo" },
  { src: r6Logo, alt: "r6Logo" },
  { src: reactLogo, alt: "reactLogo" },
  { src: typescriptLogo, alt: "typescriptLogo" },
  { src: r7Logo, alt: "r7Logo" },
  { src: tailwindLogo, alt: "tailwindLogo" },
  // Add more logos here
];

// ------------------ Case Studies Data -----------------------

import buroojImage from "../static/assets/burooj.png";
import buroojLogo from "../static/icons/buroojIcon.png"
import zahma from "../static/assets/zahma.png";
import zahmaLogo from "../static/assets/zahmaLogo.png";
import sharkia from "../static/assets/sharkia.png";
import almoajil from "../static/assets/almoajil.png"; 
import almoajilLogo from "../static/assets/almoajilLogo.png";
import sharqiaLogo from "../static/assets/sharqia.png";

export const slides = [
  { content: "Slide 1", src: buroojImage, srcLogo: buroojLogo },
  { content: "Slide 2", src: sharkia , srcLogo: sharqiaLogo},
  { content: "Slide 3", src: zahma, srcLogo:zahmaLogo },
  { content: "Slide 4", src: almoajil, srcLogo: almoajilLogo },
  { content: "Slide 5", src: buroojImage, srcLogo: buroojLogo},
  { content: "Slide 6", src: sharkia, srcLogo: sharqiaLogo},
  { content: "Slide 8", src: zahma, srcLogo: zahmaLogo},
  { content: "Slide 9", src: almoajil, srcLogo: almoajilLogo},
];

// ------------------ Our Sister Companies Marquee Data ----------------------
import shaceIcon from "~/static/icons/shace.png";
import markazIcon from "~/static/icons/markaz.png";
import zahmaIcon from "~/static/icons/zahma-icon.png";
import buroojIcon from "~/static/icons/burooj-icon.png";
import promotionEfficenyIcon from "~/static/icons/promotion-efficeny.png";
import naqshIcon from "~/static/icons/naqsh.png";

export const clientsInfo = [
  { src: shaceIcon, alt: "shaceIcon" },
  { src: markazIcon, alt: "markazIcon" },
  { src: zahmaIcon, alt: "zahmaIcon" },
  { src: buroojIcon, alt: "buroojIcon" },
  { src: promotionEfficenyIcon, alt: "promotionEfficenyIcon" },
  { src: naqshIcon, alt: "naqshIcon" },
  { src: buroojIcon, alt: "buroojIcon" },
  { src: markazIcon, alt: "markazIcon" },
];

// --------------------  Why choose 6 Degree Static Data  -------------------

export const why6Degrees = [
  {
    id: "1",
    imgSrc: "../static/icons/target.png",
    title: "Maximum flexibility",
    subtitle: "Solor in hendr erit in vulputate",
    content:
      "Duis autem vel eum iriure dolor in hendr erit in vulputate velit esse molestie inrhy consequat, vel illum dolore eu feugiatas nulla facilisis at vero eros et",
  },
  {
    id: "2",
    imgSrc: "../static/icons/target.png",
    title: "Focus on Quality",
    subtitle: "Blandit praesent luptatu delenit",
    content:
      "Ralore magna aliquam erat volutpat. Uti wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit inthye lobortis nisl ut aliquip ex ea",
  },
  {
    id: "3",
    imgSrc: "../static/icons/target.png",
    title: "Data protection",
    subtitle: "Augue duis dolore te feugait nulla",
    content:
      "Ariure dolor in hendrerit in vulputate itri velit esse molestie consequat, vel illuma dolore eu feugiat nulla facilisis at veroas eros et accumsan et iusto odio.",
  },
  {
    id: "4",
    imgSrc: "../static/icons/target.png",
    title: "Maintenance and support",
    subtitle: "Laoreet dolore magna aliquam",
    content:
      "Exerci tation ullamcorper suscipit anshu lobortis nisl ut aliquip ex ea commodoss consequatuis autem vel eum iriure dolor in hendrerit in vulputate",
  },
  {
    id: "5",
    imgSrc: "../static/icons/target.png",
    title: "Maintenance and support",
    subtitle: "Laoreet dolore magna aliquam",
    content:
      "Exerci tation ullamcorper suscipit anshu lobortis nisl ut aliquip ex ea commodoss consequatuis autem vel eum iriure dolor in hendrerit in vulputate",
  },
  {
    id: "6",
    imgSrc: "../static/icons/target.png",
    title: "Maintenance and support",
    subtitle: "Laoreet dolore magna aliquam",
    content:
      "Exerci tation ullamcorper suscipit anshu lobortis nisl ut aliquip ex ea commodoss consequatuis autem vel eum iriure dolor in hendrerit in vulputate",
  },
  {
    id: "7",
    imgSrc: "../static/icons/target.png",
    title: "Maintenance and support",
    subtitle: "Laoreet dolore magna aliquam",
    content:
      "Exerci tation ullamcorper suscipit anshu lobortis nisl ut aliquip ex ea commodoss consequatuis autem vel eum iriure dolor in hendrerit in vulputate",
  },
  {
    id: "8",
    imgSrc: "../static/icons/target.png",
    title: "Maintenance and support",
    subtitle: "Laoreet dolore magna aliquam",
    content:
      "Exerci tation ullamcorper suscipit anshu lobortis nisl ut aliquip ex ea commodoss consequatuis autem vel eum iriure dolor in hendrerit in vulputate",
  },
  {
    id: "9",
    imgSrc: "../static/icons/target.png",
    title: "Maintenance and support",
    subtitle: "Laoreet dolore magna aliquam",
    content:
      "Exerci tation ullamcorper suscipit anshu lobortis nisl ut aliquip ex ea commodoss consequatuis autem vel eum iriure dolor in hendrerit in vulputate",
  },
  {
    id: "10",
    imgSrc: "../static/icons/target.png",
    title: "Maintenance and support",
    subtitle: "Laoreet dolore magna aliquam",
    content:
      "Exerci tation ullamcorper suscipit anshu lobortis nisl ut aliquip ex ea commodoss consequatuis autem vel eum iriure dolor in hendrerit in vulputate",
  },
];

// -------------- Work Report Data ------------------

export const workReportSections = [
  { title: "Years of Experience", count: "+25" },
  { title: "Submitted Projects", count: "+950" },
  { title: "Pending Projects", count: "+18" },
  { title: "Cancelled Projects", count: "+11" },
  { title: "Cancelled Projects", count: "+38" },
  { title: "Cancelled Projects", count: "+4" },
];

//------------ Services Section --------------

export const servicesSection = [
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
  {
    title: "Technology planning",
    content:
      "Technology planning involves strategizing and coordinating the use of technology to achieve business objectives effectively.",
    sectionIcon: "as",
  },
];

export const latestCommits = [
  {
    date: "Jul 18, 2023",
    author: "Satarp",
    linesOfCode: "1,25,600",
    description: "Build social sharing functionality",
    avatar: "../static/icons/burooj-air.png",
    avatarAlt: "Yogines",
    timeAgo: "8 hours ago",
  },
  {
    date: "Jul 18, 2023",
    author: "Satarp",
    linesOfCode: "1,25,600",
    description: "Build social sharing functionality",
    avatar: "../static/icons/burooj-air.png",
    avatarAlt: "Yogines",
    timeAgo: "8 hours ago",
  },
  {
    date: "Jul 18, 2023",
    author: "Satarp",
    linesOfCode: "1,25,600",
    description: "Build social sharing functionality",
    avatar: "../static/icons/burooj-air.png",
    avatarAlt: "Yogines",
    timeAgo: "8 hours ago",
  },
];

// --------------- Footer Data --------------

export const content = [
  {
    title: "Quick links",
    links: ["Tech Stack", "Projects", "Testimonials", "Blog", "Case study"],
  },
  {
    title: "Services",
    links: [
      "Start-ups Technical Consultancy",
      "Applications development",
      "technology planning",
      "digitization",
      "technology administration",
    ],
  },
  {
    title: null,
    links: [
      "Interface Accessibility",
      "Infrastructure planning",
      "Internet of Things",
      "Cybersecurity Consultation",
    ],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Why 6 Degrees", "Partners", "Careers"],
  },
];

// ----------------- Client Reviews Data ------------------------------
import userImg from "../static/icons/client.png";
export const reviewsFirstRow = [
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
];
export const reviewsSecondRow = [
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },

  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
  {
    imageSrc: userImg,
    altText: "Client Image",
    content:
      "An impressive young professional team, Flexible and open to change, readily adjusting their approach as needed to meet project requirements and evolving circumstances.",
  },
];

export const iconImage = [
  "../static/icons/facebook-icon.png",
  "../static/icons/instagram-icon.png",
  "../static/icons/twitter-icon.png",
  "../static/icons/behance-icon.png",
  "../static/icons/linkedIn-icon.png",
  "../static/icons/github-icon.png",
];
