import Link from "next/link";
import { Globe } from "lucide-react";


function ArticleCard({ color, title, description, category, link, date }: {
    color: string;
    title: string;
    description?: string;
    category?: string;
    link?: string;
    date?: string;
}) {

    function truncateText(text: string, maxLength: number): string {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }

    return (
        <Link href={link ?? '#'} target="_blank" rel="noopener noreferrer">
            <div
                className={`mb-4 p-4 w-full max-w-2xl text-white min-h-100 flex flex-col gap-10 justify-between rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                style={{ backgroundColor: `var(--theme-${color})` }}>
                <div className=""
                    style={{ background: "rgba(0, 0, 0, 0.001)" }}>
                    {category && <p className="text-xs mb-2 font-mono uppercase tracking-tighter font-light"> {category}</p>}
                </div>
                <div>
                    <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">{title}</h2>
                    {description && <p className="mb-2 tracking-tight">{description}</p>}
                </div>


                {link && <Link className="mb-2 flex gap-2 items-center" href={link}>
                    <Globe color="#E0E0E0" size={16} />
                    <p className="text-[#e0e0e097] underline">{truncateText(link, 30)}</p>

                </Link>}
            </div>
        </Link>
    )
}

export default ArticleCard
