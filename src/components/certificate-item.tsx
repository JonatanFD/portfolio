import { Card } from "./ui/card";

interface CertificateCardProps {
    coverUrl: string;
    alt: string;
    pdfHref: string;
    title: string;
    issuer: string;
    date: string;
}

export function CertificateItem({
    coverUrl,
    alt,
    pdfHref,
    title,
    issuer,
    date,
}: CertificateCardProps) {
    return (
        <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block group h-full"
        >
            <Card className="h-full">
                <div className="relative overflow-hidden">
                    <img
                        src={coverUrl}
                        alt={alt}
                        width={300}
                        height={200}
                        className="object-cover w-full h-[180px] transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="p-3 flex-1 flex flex-col justify-between">
                    <h3 className="text-sm font-semibold leading-tight line-clamp-2">
                        {title}
                    </h3>

                    <p className="text-xs text-neutral-500 mt-1">
                        {issuer} • {date}
                    </p>
                </div>
            </Card>
        </a>
    );
}
