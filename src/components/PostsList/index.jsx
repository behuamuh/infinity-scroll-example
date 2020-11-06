import React, { useCallback, useEffect, useReducer } from 'react';
import VisibilityDetector from 'react-visibility-detector';

import { getPosts } from '../../api';
import Post from '../Post';
import './index.css';
import { LOADING_DONE, LOADING_FAIL, LOADING_START, reducer } from './reducer';

const POSTS_COUNT = 10;

const PostsList = () => {
  const [state, dispatch] = useReducer(reducer, {
    total: Infinity,
    posts: [],
    start: 0,
    loading: false,
  });
  const { start, posts, loading, total } = state;

  const loadMorePosts = useCallback(() => {
    dispatch({ type: LOADING_START });

    getPosts(start, POSTS_COUNT)
      .then(res => {
        dispatch({
          type: LOADING_DONE,
          payload: {
            total: +res.headers['x-total-count'],
            posts: [...posts, ...res.data],
            start: start + POSTS_COUNT,
          },
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: LOADING_FAIL });
      });

  }, [start, posts]);

  const handleVisible = useCallback(({ visible, directionY }) => {
    if (loading || !visible || directionY !== 'up') return;

    loadMorePosts();
  }, [loadMorePosts, loading]);

  useEffect(() => {
    loadMorePosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="posts-list">
      <h2>Example of implementing a list with data loading by scrolling, and animation when blocks appear on the screen</h2>
      <p>
        Data is taken from <a href="http://jsonplaceholder.typicode.com">jsonplaceholder</a>
        <br/>
        Loading and animation are implemented using <a href="https://github.com/behuamuh/react-visibility-detector">package</a>
        <br/>
        The code is available <a href="https://github.com/behuamuh/infinity-scroll-example">here</a>
      </p>
      {posts.map((post, i) => (
        <Post
          key={post.id}
          post={post}
          animate={i % 4 === 0}
          className="posts-list__item"
        />
      ))}
      {loading && '...loading'}
      {total > posts.length && <VisibilityDetector onVisibilityChange={handleVisible} />}
    </div>
  );
};

export default PostsList;
