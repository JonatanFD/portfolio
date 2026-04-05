import { GlobeIcon } from "@phosphor-icons/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { GithubDark } from "./ui/svgs/githubDark";
import { GithubLight } from "./ui/svgs/githubLight";

interface Props {
    title: string;
    description: string;
    coverUrl: string;
    tags: string[];
    githubUrl: string;
    websiteUrl: string;
}
export default function ProjectItem({
    title,
    description,
    coverUrl,
    githubUrl,
    websiteUrl,
    tags,
}: Props) {
    return (
        <Card className="flex flex-col h-full justify-between">
            <CardHeader>
                <div className="mb-4 space-y-2">
                    <img
                        src={coverUrl}
                        alt={title}
                        className="rounded-xl border"
                    />

                    <div className="flex flex-wrap gap-2 mt-2">
                        <a href={githubUrl} target="_blank">
                            <Button
                                size="sm"
                                variant="outline"
                                className="gap-2 items-center"
                            >
                                <GithubDark className="hidden dark:block" />
                                <GithubLight className="block dark:hidden" />
                                <span>Source</span>
                            </Button>
                        </a>
                        {websiteUrl !== "" && (
                            <a href={websiteUrl} target="_blank">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="gap-2 items-center"
                                >
                                    <GlobeIcon />
                                    <span>Website</span>
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="flex flex-wrap gap-1 mt-auto">
                    {tags.map((tag) => (
                        <li key={tag} className="inline">
                            <Badge>{tag}</Badge>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
