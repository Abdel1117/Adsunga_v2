import { Articles } from "../../types/ArticlesType";
/**
 * Fetches recent articles from the API.
 * @param {number} from - The starting point for fetching articles.
 * @param {number} [limit=5] - The maximum number of articles to fetch.
 * @returns {Promise<Articles[]>} - A promise that resolves to an array of articles.
 * @throws {Error} - Throws an error if the fetch operation fails.
 */
export const getRecentArticles = async (from: number = 0 , limit: number = 5): Promise<Articles[]> => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(`${API_URL}/articles/getRecentArticles/${from}/${limit}`);
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