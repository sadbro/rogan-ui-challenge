import React from "react";
import { data } from "../dummyArticles";

const ArticleSection = () => {
  return (
    <div className="mt-5 ">
      {data.map((article, index) => (
        <div key={index} className="mb-3">
          <p className="text-xl font-semibold">{article.name}</p>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleSection;
