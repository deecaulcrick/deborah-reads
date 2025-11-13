
import { getArticles } from "@/lib/notion"
import ArticleCard from "./ui/ArticleCard";

async function Articles() {

    const articles = await getArticles();
    console.log(articles);

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    color={article.color ?? ''}
                    title={article.title}
                    description={article.description}
                    category={article.category}
                    link={article.link}
                    date={article.date}
                />
            ))}
        </div>
    )
}

export default Articles