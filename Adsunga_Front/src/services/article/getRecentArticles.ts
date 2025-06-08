import { Articles } from "../../types/ArticlesType";
export const getRecentArticles = async (limit: number = 5): Promise<Articles[]> => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(`${API_URL}/api/articles/getRecentArticles/${limit}`);
    if (!response.ok) {
      throw new Error("Une erreur s'est produite lors de la récupération des articles récents.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Impossible de récupérer les articles récents :", error);
    return [];
  }
};