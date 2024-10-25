export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const fetchPostRequest = () =>({
    type: GET_POSTS_REQUEST
})

export const fetchPostSuccess = (posts) =>({
    type: GET_POSTS_SUCCESS,
    payload: posts
})

export const fetchPostFailure = (error) =>({
    type: GET_POSTS_FAILURE,
    payload: error
})

// actions/postsActions.js

export const fetchPosts = () => {
    return async (dispatch) => {
      dispatch(fetchPostRequest());
      try {
        setTimeout(async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          dispatch(fetchPostSuccess(data));
        }, 2000);
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await response.json();
        // dispatch(fetchPostSuccess(data));
      } catch (error) {
        dispatch(fetchPostFailure(error));
      }
    };
  };
  