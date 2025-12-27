import Android from "../components/ui/icons/android.astro";
import Astro from "../components/ui/icons/astro.astro";
import Azure from "../components/ui/icons/azure.astro";
import Bun from "../components/ui/icons/bun.astro";
import Docker from "../components/ui/icons/docker.astro";
import Fastapi from "../components/ui/icons/fastapi.astro";
import Figma from "../components/ui/icons/figma.astro";
import Intellij from "../components/ui/icons/intellij.astro";
import Java from "../components/ui/icons/java.astro";
import Javascript from "../components/ui/icons/javascript.astro";
import Jetpackcompose from "../components/ui/icons/jetpackcompose.astro";
import Kafka from "../components/ui/icons/kafka.astro";
import Linux from "../components/ui/icons/linux.astro";
import Mongodb from "../components/ui/icons/mongodb.astro";
import Netlify from "../components/ui/icons/netlify.astro";
import Nextjs from "../components/ui/icons/nextjs.astro";
import Notion from "../components/ui/icons/notion.astro";
import Postgresql from "../components/ui/icons/postgresql.astro";
import Postman from "../components/ui/icons/postman.astro";
import React from "../components/ui/icons/react.astro";
import Redis from "../components/ui/icons/redis.astro";
import Rust from "../components/ui/icons/rust.astro";
import Shadcn from "../components/ui/icons/shadcn.astro";
import Springboot from "../components/ui/icons/springboot.astro";
import Supabase from "../components/ui/icons/supabase.astro";
import Tailwindcss from "../components/ui/icons/tailwindcss.astro";
import Terraform from "../components/ui/icons/terraform.astro";
import Typescript from "../components/ui/icons/typescript.astro";
import Vercel from "../components/ui/icons/vercel.astro";
import Vite from "../components/ui/icons/vite.astro";
import Vitest from "../components/ui/icons/vitest.astro";
import Vscode from "../components/ui/icons/vscode.astro";
import Zed from "../components/ui/icons/zed.astro";

export interface Project {
  title: string;
  description: string;
  href: string;
  coverUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "📚 Level Up Journey 🎮",
    description:
      "A gamified code learning platform for students at Peruvian University of Applied Sciences (UPC) in Lima, Peru.",
    href: "/projects/levelupjourney",
    coverUrl: "LevelUpJourney.webp",
    tags: [
      "Full-Stack",
      "Next.js",
      "Spring Boot",
      "PostgreSQL",
      "Microservices",
      "Domain-Driven Design",
      "Azure",
    ],
  },
];

interface TechStack {
  category: string;
  techs: {
    name: string;
    component: any;
  }[];
}

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    techs: [
      { name: "React", component: React },
      { name: "Next.js", component: Nextjs },
      { name: "JavaScript", component: Javascript },
      { name: "Astro", component: Astro },
      { name: "Tailwind CSS", component: Tailwindcss },
      { name: "TypeScript", component: Typescript },
      { name: "Vitest", component: Vitest },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Spring Boot", component: Springboot },
      { name: "PostgreSQL", component: Postgresql },
      { name: "Java", component: Java },
      { name: "FastAPI", component: Fastapi },
      { name: "MongoDB", component: Mongodb },
      { name: "Redis", component: Redis },
    ],
  },
  {
    category: "Cloud Services",
    techs: [
      { name: "Azure", component: Azure },
      { name: "Vercel", component: Vercel },
      { name: "Supabase", component: Supabase },
      { name: "Netlify", component: Netlify },
    ],
  },
  {
    category: "Microservices",
    techs: [
      { name: "Linux", component: Linux },
      { name: "Kafka", component: Kafka },
      {
        name: "Docker",
        component: Docker,
      },
    ],
  },
  {
    category: "Mobile Development",
    techs: [
      { name: "Android", component: Android },
      { name: "Jetpack Compose", component: Jetpackcompose },
    ],
  },
  {
    category: "Favorite Dev Tools",
    techs: [
      { name: "IntelliJ IDEA", component: Intellij },
      { name: "Zed", component: Zed },
      { name: "VS Code", component: Vscode },
      { name: "Bun", component: Bun },
      { name: "Shadcn/ui", component: Shadcn },
      { name: "Vite", component: Vite },
      { name: "Notion", component: Notion },
      { name: "Postman", component: Postman },
      { name: "Figma", component: Figma },
    ],
  },
  {
    category: "Currently Learning",
    techs: [
      { name: "Rust", component: Rust },
      {
        name: "Terraform",
        component: Terraform,
      },
    ],
  },
];
