import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { Loader } from "../../components/Loader/Loader";
import { useNavigate, useParams } from "react-router";
import "../../../node_modules/ckeditor5/dist/ckeditor5-content.css";
interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  author: string;
}

export const Article = () => {
  const { id } = useParams<{ id: string }>();
  const API_URL = import.meta.env.VITE_API_URL;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchArticle = async (id: number): Promise<void> => {
      try {
        const response = await fetch(
          `${API_URL}/api/articles/getArticleById/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle(id as unknown as number);
  }, []);

  const safeContent = DOMPurify.sanitize(article?.content || "");

  return (
    <section>
      {loading ? (
        <Loader />
      ) : article ? (
        <article className="container lg:max-w-4xl xl:max-w-7xl mx-auto">
          <h1 className="text-primary text-xl md:text-3xl font-bold text-center mt-15 ">
            {article.title}
          </h1>
          <div
            className="ck-content"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500 mt-4">
              Publié le{" "}
              {new Date(article.createdAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              par {article.author}
            </p>
            <button
              className="cursor-pointer px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => navigate("/blog")}
            >
              Retour au blog
            </button>
          </div>
        </article>
      ) : (
        "Impossible de charger l'article"
      )}
    </section>
  );
};
