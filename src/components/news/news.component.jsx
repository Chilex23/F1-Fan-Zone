import React from "react";
import NewsHero from "../news-hero/news-hero.component";
import NewsCard from "../news-card/news-card.component";

const News = ({ results }) => {
  return (
    <div className="grid h-[35rem] tablet:grid-cols-2 relative top-16 p-4 gap-x-4 gap-y-8 place-items-start grid-rows-[min-content] mb-[33rem] homePhone:mb-[40rem] tablet:mb-36">
      <NewsHero news={results[0]}/>
      <div className="flex flex-wrap justify-between px-2 pb-4 gap-4 h-[35rem] overflow-y-scroll mb-10">
          {
              results.slice(1).map((elem, index) => <NewsCard key={index + 1} news={elem} />)
          }
      </div> 
    </div>
  )
};

export default News;