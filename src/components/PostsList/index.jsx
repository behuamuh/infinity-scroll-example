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
      <h2>Пример реализации списка с подгрузкой данных по скроллу</h2>
      <p>
        Данные берутся с <a href="http://jsonplaceholder.typicode.com">jsonplaceholder</a>
      </p>
      <p>
        Подгрузка реализована с помощью <a href="https://github.com/behuamuh/react-visibility-detector">компонента</a>
      </p>
      {posts.map(post => (
        <Post key={post.id} post={post} className="posts-list__item" />
      ))}
      {loading && '...loading'}
      {total > posts.length && <VisibilityDetector onVisibilityChange={handleVisible} />}
    </div>
  );
};

export default PostsList;
