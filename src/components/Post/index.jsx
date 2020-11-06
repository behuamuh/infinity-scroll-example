import React, { useCallback, useRef, useState } from 'react';
import { useChangeVisibility } from 'react-visibility-detector';
import cn from 'classnames';

import './index.css';

const Post = ({ post, className, animate = false }) => {
  const { title, body } = post;
  const targetRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const onVisibilityChange = useCallback(data => {
    setVisible(data.visible);
  }, []);

  useChangeVisibility({
    targetRef,
    onVisibilityChange,
  });

  const postClassName = cn(
    className,
    'post',
    { show: animate && visible },
    { hide: animate && !visible },
  );

  return (
    <div className={postClassName} ref={targetRef}>
      <h3 className="post__title">{title}</h3>
      <p className="post__body">{body}</p>
    </div>
  );
};

export default Post;
