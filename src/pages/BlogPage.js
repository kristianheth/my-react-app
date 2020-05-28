import React from "react";
import cats from "../components/Content/Blog/cats";
import Blog from "../components/Content/Blog/Blog";

// import "../index.css";

const BlogPage = () => (
  <div className="main-section__content">
    <h1>Welcome to my Website</h1>
    <Blog
      header={cats[0].headerText}
      image={cats[0].imageSrc}
      alt={cats[0].altText}
      skip={cats[0].skipHeader}
    />

    <Blog
      header={cats[1].headerText}
      image={cats[1].imageSrc}
      alt={cats[1].altText}
      skip={cats[1].skipHeader}
    >
      <h3>Exciting text</h3>
      <p>
        Nostrud ipsum pariatur elit laboris cupidatat nulla. Labore occaecat
        amet tempor labore irure in nisi amet labore quis. Ut ullamco cupidatat
        culpa occaecat reprehenderit officia.
      </p>
    </Blog>
  </div>
);

export default BlogPage;
