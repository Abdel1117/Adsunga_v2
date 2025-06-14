import {useState, useEffect} from 'react';
import { getAllArticles } from '../services/article/getArticles';
import { Articles } from '../types/ArticlesType';

/**
 * Custom hook to fetch all articles
 * @returns {Object} - Contains articles, loading state, and error message
 * @typedef {Object} UseGetArticles
 * @property {Articles[]} articles - List of articles
 * @property {boolean} loading - Loading state
 * @property {string | null} error - Error message if any
 * @example
 * const { articles, loading, error } = useGetArticles();
 * @returns {UseGetArticles}
 * @description
 * This hook fetches all articles from the API and manages the loading and error states.
 * It can be used in any component to display articles or handle loading/error states.
 * @see {@link getAllArticles} for the service function that fetches articles.
 * @see {@link Articles} for the type definition of articles.
 */
export const useGetArticles = () => {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArticles();
        setArticles(data);
      } catch (err) {
        console.log(err)
        setError('Une erreur s\'est produite lors de la récupération des articles récents.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};