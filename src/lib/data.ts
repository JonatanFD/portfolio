import Astro from "../components/ui/icons/astro.astro";
import Azure from "../components/ui/icons/azure.astro";
import Bun from "../components/ui/icons/bun.astro";
import Fastapi from "../components/ui/icons/fastapi.astro";
import Intellij from "../components/ui/icons/intellij.astro";
import Java from "../components/ui/icons/java.astro";
import Javascript from "../components/ui/icons/javascript.astro";
import Kafka from "../components/ui/icons/kafka.astro";
import Mongodb from "../components/ui/icons/mongodb.astro";
import Nextjs from "../components/ui/icons/nextjs.astro";
import Notion from "../components/ui/icons/notion.astro";
import Postgresql from "../components/ui/icons/postgresql.astro";
import Postman from "../components/ui/icons/postman.astro";
import React from "../components/ui/icons/react.astro";
import Redis from "../components/ui/icons/redis.astro";
import Shadcn from "../components/ui/icons/shadcn.astro";
import Springboot from "../components/ui/icons/springboot.astro";
import Supabase from "../components/ui/icons/supabase.astro";
import Tailwindcss from "../components/ui/icons/tailwindcss.astro";
import Typescript from "../components/ui/icons/typescript.astro";
import Vercel from "../components/ui/icons/vercel.astro";
import Vite from "../components/ui/icons/vite.astro";
import Vscode from "../components/ui/icons/vscode.astro";
import Zed from "../components/ui/icons/zed.astro";

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
  {
    category: "Frontend",
    techs: [React, Nextjs, Javascript, Astro, Tailwindcss, Typescript],
  },
  {
    category: "Backend",
    techs: [Springboot, Postgresql, Java, Fastapi, Mongodb, Redis],
  },
  {
    category: "Cloud Services",
    techs: [Azure, Vercel, Supabase],
  },
  {
    category: "Microservices",
    techs: [Kafka],
  },
  {
    category: "Favorite Dev Tools",
    techs: [Intellij, Zed, Vscode, Bun, Shadcn, Vite, Notion, Postman],
  },
];
