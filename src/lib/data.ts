import Astro from "../components/ui/icons/astro.astro";
import Azure from "../components/ui/icons/azure.astro";
import Java from "../components/ui/icons/java.astro";
import Javascript from "../components/ui/icons/javascript.astro";
import Kafka from "../components/ui/icons/kafka.astro";
import Nextjs from "../components/ui/icons/nextjs.astro";
import Postgresql from "../components/ui/icons/postgresql.astro";
import React from "../components/ui/icons/react.astro";
import Springboot from "../components/ui/icons/springboot.astro";
import Tailwindcss from "../components/ui/icons/tailwindcss.astro";
import Vercel from "../components/ui/icons/vercel.astro";

export interface Project {
  title: string;
  description: string;
  href: string;
  coverUrl: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    href: "https://example.com/project1",
    coverUrl: "/images/project1.jpg",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    href: "https://example.com/project2",
    coverUrl: "/images/project2.jpg",
  },
];

export const techStack = [
  React,
  Nextjs,
  Springboot,
  Postgresql,
  Java,
  Javascript,
  Astro,
  Azure,
  Tailwindcss,
  Vercel,
  Kafka,
];
