import React from "react";
import NewsHero from "../news-hero/news-hero.component";
import NewsCard from "../news-card/news-card.component";

const News = ({ results }) => {
  return (
    <div className="grid grid-cols-2 relative top-16 p-4 gap-x-4 place-items-start">
      <NewsHero news={results[0]}/>
      <div className="flex flex-wrap gap-4 h-[26%] overflow-y-scroll">
          {
              results.slice(1).map((elem, index) => <NewsCard key={index + 1} news={elem} />)
          }
      </div> 
    </div>
  )
};

export default News;