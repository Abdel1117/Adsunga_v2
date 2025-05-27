import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export const Dashboard = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [articles, setArticles] = React.useState([]);
  const navigate = useNavigate();
  const getArticle = async () => {
    try {
      const response = await fetch(`${API_URL}/api/articles`);
      if (!response.ok) {
        throw new Error(
          "Une erreur s'est produite lors de la récupération des articles."
        );
      }
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticle();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  return (
    <section className="container lg:max-w-4xl xl:max-w-10/12 mx-auto overflow-hidden">
      <h1 className="text-primary text-xl md:text-3xl font-bold text-center mt-15">
        Tableau de bord
      </h1>
      <p className="text-center mt-5 text-black w-full sm:w-8/12 mx-auto">
        Bienvenue sur votre tableau de bord. Ici, vous pouvez gérer vos projets,
        consulter les rapports et accéder à toutes les fonctionnalités de votre
        compte.
      </p>
      {/* Add more dashboard content here */}

      <div className="mt-10">
        <h2 className="text-primary text-lg md:text-2xl font-bold text-center">
          Articles
        </h2>
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={() => navigate("/ajout_article")}
            className="bg-primary border-2 text-white px-4 py-2 rounded  cursor-pointer hover:bg-white hover:border-2 hover:border-primary hover:text-black "
          >
            Ajouter un article
          </button>
        </div>
        {/* Placeholder for recent articles */}
        {articles.length > 0 ? (
          <ul className="list-disc list-inside mt-5">
            {articles.map((article, index) => (
              <li key={index} className="text-black">
                {article?.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-5">Aucun article récent.</p>
        )}
      </div>
    </section>
  );
};
