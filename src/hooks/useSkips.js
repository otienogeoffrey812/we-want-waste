import { useEffect, useState } from 'react';
import { fetchSkips } from '../api/skips';

export function useSkips() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSkips()
      .then(data => setSkips(data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { skips, loading, error };
}
