import React from "react";
import MonoCard from "../monoCard";
import { data } from "../dummyArticles";
/*
*
*   return (
    <div className={style}>
      {data.map((article, index) => (
        <div key={index} className="mb-3">
          <p className="text-xl font-semibold">{article.name}</p>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
* */

const ArticleSection = () => {

    const tags = "tag1,tag2";
    return(
        <div>
          {data.map((article, index) => (
              <div key={index}>
                <MonoCard title={article.name} description={article.description} tags={tags}/>
              </div>
          ))}
        </div>
    );
};

export default ArticleSection;
