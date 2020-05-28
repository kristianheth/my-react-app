import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { skip, header, image, alt, children } = props;

  return (
    <div className="blog">
      {!skip && <h1 className="blog__header">{header}</h1>}

      <div className="blog__content">
        <img src={image} alt={alt} />
      </div>

      {children && <div className="blog__children">{children}</div>}
    </div>
  );
};

export default Blog;
