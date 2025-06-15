import {useState, useEffect} from 'react';
import { getRecentArticles } from '../services/article/getRecentArticles';
import { Articles } from '../types/ArticlesType';

/**
 * Custom hook to fetch recent articles
 * @param {number} from - The starting point for fetching articles.
 * @param {number} [limit=5] - The maximum number of articles to fetch.
 * @returns {Object} - Contains articles, loading state, and error message
 * @typedef {Object} UseRecentArticles
 * @property {Articles[]} articles - List of recent articles
 * @property {boolean} loading - Loading state
 * @property {string | null} error - Error message if any
 * @example
 * const { articles, loading, error } = useRecentArticles(0, 5);
 * @returns {UseRecentArticles}
 * @description
 * This hook fetches recent articles from the API and manages the loading and error states.
 * It can be used in any component to display recent articles or handle loading/error states.
 * @see {@link getRecentArticles} for the service function that fetches recent articles.
 * @see {@link Articles} for the type definition of articles.
 */
export const useRecentArticles = (from: number, limit: number = 5) => {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getRecentArticles(from, limit);
        setArticles(data);
      } catch (err) {
        console.log(err)
        setError('Une erreur s\'est produite lors de la récupération des articles récents.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [limit, from]);

  return { articles, loading, error };
};