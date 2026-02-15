import { Articles } from "../../types/ArticlesType";
export const getArticleById = async (id: string): Promise<Articles | null> => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(`${API_URL}/articles/getArticleById/${id}`);
    if (!response.ok) {
      throw new Error("Une erreur s'est produite lors de la récupération de l'article.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Impossible de récupérer l'article :", error);
    return null;
  }
};
