import { Articles } from "../../types/ArticlesType";

/**
 * Fetch all articles from the API
 * @returns {Promise<Articles[]>} - List of articles
 * @throws {Error} - If the fetch operation fails
 * @description
 * This function retrieves all articles from the API endpoint.
 * It handles errors by logging them to the console and returning an empty array if the fetch fails.
 * It is designed to be used in components that need to display a list of articles.
 * @example
 * const articles = await getAllArticles();
 */
export const getAllArticles = async (): Promise<Articles[]> => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(`${API_URL}/api/articles/getAllArticles`);
    if (!response.ok) {
      throw new Error("Une erreur s'est produite lors de la récupération des articles .");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Impossible de récupérer les articles  :", error);
    return [];
  }
};