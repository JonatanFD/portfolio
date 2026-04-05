import type { ReactNode } from "react";

import { ReactDark } from "./ui/svgs/reactDark.tsx";
import { ReactLight } from "./ui/svgs/reactLight.tsx";

import { NextjsIconDark } from "./ui/svgs/nextjsIconDark.tsx";
import { Tailwindcss } from "./ui/svgs/tailwindcss.tsx";
import { RustDark } from "./ui/svgs/rustDark.tsx";
import { MongodbIconDark } from "./ui/svgs/mongodbIconDark.tsx";
import { MongodbIconLight } from "./ui/svgs/mongodbIconLight.tsx";
import { Redis } from "./ui/svgs/redis.tsx";
import { Supabase } from "./ui/svgs/supabase.tsx";
import { Docker } from "./ui/svgs/docker.tsx";
import { Kubernetes } from "./ui/svgs/kubernetes.tsx";
import { Azure } from "./ui/svgs/azure.tsx";
import { Linux } from "./ui/svgs/linux.tsx";
import { GithubDark } from "./ui/svgs/githubDark.tsx";
import { GithubLight } from "./ui/svgs/githubLight.tsx";
import { Tauri } from "./ui/svgs/tauri.tsx";
import { Notion } from "./ui/svgs/notion.tsx";
import Jenkins from "./ui/svgs/jenkins.tsx";
import { Nestjs } from "./ui/svgs/nestjs.tsx";
import { Postgresql } from "./ui/svgs/postgresql.tsx";
import { AstroIconDark } from "./ui/svgs/astroIconDark.tsx";
import { AstroIconLight } from "./ui/svgs/astroIconLight.tsx";

import { Button } from "./ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";
import { Rust } from "./ui/svgs/rust.tsx";
import { Java } from "./ui/svgs/java.tsx";
import { Typescript } from "./ui/svgs/typescript.tsx";
import { Spring } from "./ui/svgs/spring.tsx";
import { Python } from "./ui/svgs/python.tsx";
import { Fastapi } from "./ui/svgs/fastapi.tsx";
import { Postman } from "./ui/svgs/postman.tsx";
import { ZedLogo } from "./ui/svgs/zedLogo.tsx";
import { ZedLogoDark } from "./ui/svgs/zedLogoDark.tsx";
import { Vscode } from "./ui/svgs/vscode.tsx";
import { Vite } from "./ui/svgs/vite.tsx";

type Skill = {
    name: string;
    icon: ReactNode;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const categories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                icon: (
                    <>
                        <ReactDark className="hidden dark:inline" />
                        <ReactLight className="inline dark:hidden" />
                    </>
                ),
            },
            {
                name: "Next.js",
                icon: (
                    <>
                        <NextjsIconDark />
                    </>
                ),
            },
            { name: "Tailwind CSS", icon: <Tailwindcss /> },
            {
                name: "Astro",
                icon: (
                    <>
                        <AstroIconDark className="hidden dark:inline" />
                        <AstroIconLight className="inline dark:hidden" />
                    </>
                ),
            },
            {
                name: "TypeScript",
                icon: <Typescript />,
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Rust",
                icon: (
                    <>
                        <RustDark className="hidden dark:inline" />
                        <Rust className="inline dark:hidden" />
                    </>
                ),
            },
            {
                name: "MongoDB",
                icon: (
                    <>
                        <MongodbIconDark className="hidden dark:inline" />
                        <MongodbIconLight className="inline dark:hidden" />
                    </>
                ),
            },
            { name: "Java", icon: <Java /> },
            { name: "Spring Boot", icon: <Spring /> },
            { name: "Redis", icon: <Redis /> },
            { name: "PostgreSQL", icon: <Postgresql /> },
            { name: "Supabase", icon: <Supabase /> },
            { name: "NestJS", icon: <Nestjs /> },
            { name: "Python", icon: <Python /> },
            { name: "FastAPI", icon: <Fastapi /> },
        ],
    },
    {
        title: "Infrastructure",
        skills: [
            { name: "Docker", icon: <Docker /> },
            { name: "Kubernetes", icon: <Kubernetes /> },
            { name: "Azure", icon: <Azure /> },
            { name: "Linux", icon: <Linux /> },
            { name: "Jenkins", icon: <Jenkins /> },
        ],
    },
    {
        title: "Herramientas",
        skills: [
            {
                name: "GitHub",
                icon: (
                    <>
                        <GithubDark className="hidden dark:inline" />
                        <GithubLight className="inline dark:hidden" />
                    </>
                ),
            },
            { name: "Tauri", icon: <Tauri /> },
            { name: "Notion", icon: <Notion /> },
            { name: "Postman", icon: <Postman /> },
            {
                name: "Zed",
                icon: (
                    <>
                        <ZedLogo className="dark:hidden" />
                        <ZedLogoDark className="hidden dark:inline" />
                    </>
                ),
            },
            {
                name: "VS Code",
                icon: <Vscode />,
            },
            {
                name: "Vite",
                icon: <Vite />,
            },
        ],
    },
];

export default function SkillsList() {
    return (
        <div className="space-y-4">
            {categories.map((category) => (
                <Card key={category.title}>
                    <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <ul className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <li key={skill.name} className="inline">
                                    <Button variant="outline" size="lg">
                                        {skill.icon}
                                        <span>{skill.name}</span>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
