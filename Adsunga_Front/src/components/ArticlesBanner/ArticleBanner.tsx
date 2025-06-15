import { useRecentArticles } from "../../Hooks/useRecentArticles";
import { Articles } from "../../types/ArticlesType";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";

export const ArticleBanner = () => {
  const { articles, loading, error } = useRecentArticles(3, 7);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  return (
    <section className="container lg:max-w-4xl xl:max-w-7xl w-[100%] my-20 mx-auto ">
      <h2 className="text-2xl text-primary font-semibold text-center my-20">
        Des articles réguliers pour vous accompagner
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mx-auto">
        {articles.map((article: Articles) => (
          <Card
            key={article._id}
            id={article._id}
            imageSrc={article.image as string}
            titleArticle={article.title}
            date={article.createdAt}
            category={article.category}
            descriptionArticle={
              article.content.replace(/<img[^>]*>/g, "").slice(0, 100) + "..."
            }
          />
        ))}
      </div>
    </section>
  );
};
