import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";


export const DATA = {
  name: "Sree Charan Tekumanda - Data Architect",
  initials: "SCT",
  url: "https://sreetattvam.com",
  location: "Munich, Germany",
  locationLink: "https://www.google.com/maps/place/munich+germany",
  description:
    "Cloud Data Architect specializing in Customer Data Platforms, Analytics, and Digital Experience.",
  summary:
    "In early 2023, I moved to Germany to pursue new opportunities in Cloud Data Architect specializing in Customer Data Platforms, Analytics. Before that, [I completed a Masters in Business Administration (International Finance with ACCA) and Bachelors degree in Computer Science and Engineering](/#education), [worked at companies like Merkle and Adobe](/#work), and [have consulted in 20+ projects](/#hackathons).",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: false,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on email and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Adobe Experience Platform", icon: null },
    { name: "Customer Journey Analytics", icon: null },
    { name: "Adobe Journey Optimizer", icon: null },
    { name: "Azure", icon: null },
    { name: "AWS", icon: null },
    { name: "GCP", icon: null },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "sree@sreetattvam.com",
    tel: "+49 123 456 7890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cherry73",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sreecharan81/",
        icon: Icons.linkedin,
        navbar: true,
      },
     /* X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: true,
      },*/
      Mail: {
        name: "Send Email",
        url: "mailto:sree@sreetattvam.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Merkle Inc",
      href: "https://merkle.com",
      badges: ["DXP Architect"],
      location: "Munich, Germany",
      title: "DXP Architect",
      logoUrl: "https://www.google.com/s2/favicons?domain=merkle.com&sz=128",
      start: "March 2026",
      end: undefined,
      description:
        "Currently working as a DXP Architect at Merkle Inc, focusing on designing and implementing scalable digital experience platforms. Delivering high-quality solutions for clients across various industries.",
    },
    {
      company: "smart Europe GmbH",
      href: "https://smarteurope.de",
      badges: [],
      location: "Stuttgart, Germany",
      title: "Senior Data Architect",
      logoUrl: "https://www.google.com/s2/favicons?domain=smarteurope.de&sz=128",
      start: "May 2023",
      end: "February 2026",
      description: "",
    }
  ],
  education: [
    {
      school: "Jain University",
      href: "https://jainuniversity.ac.in",
      degree: "MBA - International Finance with ACCA",
      logoUrl: "https://avatar.vercel.sh/founder-fellowship?size=40",
      start: "2020",
      end: "2023",
    },
    {
      school: "JNTU Anathapur",
      href: "https://jntuanathapur.edu.in",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=ubc.ca&sz=128",
      start: "2011",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "",
      description: "",
      href: "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      win: "",
      links: [],
    },
  ],
} as const;
