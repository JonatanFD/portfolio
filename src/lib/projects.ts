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
