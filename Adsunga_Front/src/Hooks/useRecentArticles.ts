import {useState, useEffect} from 'react';
import { getRecentArticles } from '../services/article/getRecentArticles';
import { Articles } from '../types/ArticlesType';

export const useRecentArticles = (limit: number = 5) => {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getRecentArticles(limit);
        setArticles(data);
      } catch (err) {
        console.log(err)
        setError('Une erreur s\'est produite lors de la récupération des articles récents.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [limit]);

  return { articles, loading, error };
};