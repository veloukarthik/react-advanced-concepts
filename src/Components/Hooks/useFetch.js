// useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);       // Store fetched data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);      // Fetch data from API
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await response.json();   // Parse JSON data
        setData(result);                        // Set data
      } catch (error) {
        setError(error.message);                // Set error
      } finally {
        setLoading(false);                      // Set loading to false
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };             // Return data, loading, and error
};

export default useFetch;
