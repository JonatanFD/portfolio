import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

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
    tags,
}: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-x-2">
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
