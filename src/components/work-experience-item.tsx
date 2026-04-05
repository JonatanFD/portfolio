import TimeableItem from "./timeable-item";

interface Props {
    company: string;
    brand: string;
    role: string;
    period: [string, string];
    description: string;
}

export default function WorkExperienceItem({
    company,
    brand,
    role,
    period,
    description,
}: Props) {
    return (
        <TimeableItem
            company={company}
            coverUrl={brand}
            label={role}
            period={period}
            description={description}
        />
    );
}
