import TimeableItem from "./timeable-item";

interface Props {
    company: string;
    brandUrl: string;
    role: string;
    period: [string, string];
    description: string;
}

export default function WorkExperienceItem({
    company,
    brandUrl,
    role,
    period,
    description,
}: Props) {
    return (
        <TimeableItem
            company={company}
            coverUrl={brandUrl}
            label={role}
            period={period}
            description={description}
        />
    );
}
