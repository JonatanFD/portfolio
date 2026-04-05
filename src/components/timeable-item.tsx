interface Props {
    company: string;
    coverUrl: string;
    label: string;
    period: [string, string];
    description: string;
}

export default function TimeableItem({
    company,
    coverUrl,
    label,
    period,
    description,
}: Props) {
    return (
        <li>
            <div className="flex gap-4">
                <div className="py-2.5">
                    <img
                        src={coverUrl}
                        alt={`${company} brand logo`}
                        className="rounded-full size-12.5 object-cover"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between pt-2.5 w-full">
                        <div>
                            <h3 className="text-base">{company}</h3>
                            <span className="text-muted-foreground text-sm">
                                {label}
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
