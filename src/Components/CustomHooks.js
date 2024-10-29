import React from 'react';
import useFetch from './Hooks/useFetch';

function CustomHooks() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;        // Display loading
  if (error) return <p>Error: {error}</p>;      // Display error if any

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data && data.map((post) => (
          <li key={post.id}>{post.title}</li>   // Display each post title
        ))}
      </ul>
    </div>
  );
}

export default CustomHooks;