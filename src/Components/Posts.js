import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/Posts/postAction';


const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts); // Access posts state

  useEffect(() => {
    dispatch(fetchPosts()); // Dispatch action on component mount
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;