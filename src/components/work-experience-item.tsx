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
        <li>
            <div className="flex gap-4">
                <div className="py-2.5">
                    <img
                        src={brand}
                        alt={`${company} brand logo`}
                        className="rounded-full size-12.5"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between pt-2.5 w-full">
                        <div>
                            <h3 className="text-base">{company}</h3>
                            <span className="text-muted-foreground text-sm">
                                {role}
                            </span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                            {period[0]} - {period[1]}
                        </span>
                    </div>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>
        </li>
    );
}
