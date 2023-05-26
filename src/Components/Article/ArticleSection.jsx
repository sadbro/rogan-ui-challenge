import React from "react";
import MonoCard from "../monoCard";
import { data } from "../dummyArticles";
import { useQuery } from "@tanstack/react-query";

const ENDPOINT = "https://645eea377da4477ba94dd89b.mockapi.io/api/v1/articles";

function timeDiff(timeInMS){

    const times = {
        second: 60,
        minute: 60,
        hour: 24,
        day: 30,
        month: 12,
    }

    let time = Number(timeInMS)/1000;
    let value = {timePassed: 0, reference: ""};
    Object.keys(times).forEach((key) => {
       if (time > times[key]){
           time /= times[key]
       }
       else {
           value.timePassed = Math.round(time);
           value.reference = key.toString();
       }
    });

    return value;
}

const ArticleSection = () => {

    const result = useQuery({queryKey: ["article"], queryFn: () => (
            fetch(ENDPOINT).then((res) => res.json())
        )});

    if (result.isLoading) return(<span>Loading...</span>);
    if (result.isError) return(<h2 className="text-red-600">An Error has occurred</h2>)

    const articles = result.data;

    return(
        <div>
          {articles.map((article, index) => {

                const now = new Date();
                const diff = now - Date.parse(article.createdAt);

                const {timePassed, reference} = timeDiff(diff.toString());
                let timeDiffFormatted = timePassed + " " + reference;
                timeDiffFormatted += (timePassed === 1) ? " " : "s ";
                timeDiffFormatted += "ago";

              return(
                <div key={index}>
                    <MonoCard title={article.name} description={article.description} tags={article.tags} timePassed={timeDiffFormatted}/>
                </div>);
          })}
        </div>
    );
};

export default ArticleSection;
