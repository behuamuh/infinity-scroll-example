import React from 'react';

import './index.css';

const Post = ({ post, className }) => {
  const { title, body } = post;
  return (
    <div className={`${className} post`}>
      <h3 className="post__title">{title}</h3>
      <p className="post__body">{body}</p>
    </div>
  );
};

export default Post;
