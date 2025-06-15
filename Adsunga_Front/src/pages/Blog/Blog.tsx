import { ArticleBanner } from "../../components/ArticlesBanner/ArticleBanner";

import { BlockArticle } from "../../components/BlockArticle/BlockArticle";
import { Loader } from "../../components/Loader/Loader";
import { useRecentArticles } from "../../Hooks/useRecentArticles";

export const Blog = () => {
  const { articles, loading, error } = useRecentArticles(0, 3);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
  return (
    <>
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto">
        <h1 className="text-primary text-xl md:text-3xl font-bold text-center mt-15 ">
          Blog - Adsunga
        </h1>
      </section>
      {/* Begin of the blog  */}
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-20 px-2 sm:px-0">
        {articles.map((article) => (
          <BlockArticle
            key={article._id}
            id={article._id}
            title={article.title}
            category={article.category}
            createdAt={new Date(article.createdAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            author={article.author}
            content={article.content}
            images={article.image}
          />
        ))}
      </section>
      {/* End of the blog  */}
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-15">
        <h2 className="text-primary text-xl md:text-3xl font-bold text-center  ">
          Autre articles publiés récemment
        </h2>
        <ArticleBanner from={3} limit={100} />
      </section>
      {/* Other Article Liste */}
    </>
  );
};
