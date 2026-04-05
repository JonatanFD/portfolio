import TimeableItem from "./timeable-item";

interface Props {
    institution: string;
    logoUrl: string;
    degree: string;
    period: [string, string];
    description?: string;
}

export default function EducationItem({
    institution,
    logoUrl,
    degree,
    period,
    description,
}: Props) {
    return (
        <TimeableItem
            company={institution}
            coverUrl={logoUrl}
            label={degree}
            period={period}
            description={description ?? ""}
        />
    );
}
