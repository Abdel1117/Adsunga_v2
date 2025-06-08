import React, { useEffect } from "react";
import { useNavigate } from "react-router";

interface Article {
  title: string;
  image: string;
  content: string;
}

export const Dashboard = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [articles, setArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const navigate = useNavigate();
  const getArticle = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/articles/getAllArticles`);
      if (!response.ok) {
        throw new Error(
          "Une erreur s'est produite lors de la récupération des articles."
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      return [];
    } finally {
      setIsLoading(false);
      setError(null);
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
        {isLoading ? (
          <p className="text-center mt-5">Chargement des articles...</p>
        ) : articles.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-5">
            {/* Map through articles and render Card components */}
            {articles.map((article: Article, index: number) => (
              <section
                className="rounded-lg shadow-lg p-4  min-w-full"
                key={index}
              >
                <h1 className="text-lg font-bold text-center">
                  {article.title}
                </h1>
                <img
                  src={`${API_URL}/uploads/${article.image}`}
                  alt={article.title}
                  className="w-full h-48 object-contain rounded-lg mb-2"
                />
                <button className="bg-yellow-300 text-white px-4 py-2 rounded mt-2 mr-2 hover:cursor-pointer">
                  Modifier
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:cursor-pointer">
                  Supprimer
                </button>
              </section>
            ))}
          </section>
        ) : (
          <p className="text-center mt-5">Aucun ar nticle récent.</p>
        )}
      </div>
    </section>
  );
};
