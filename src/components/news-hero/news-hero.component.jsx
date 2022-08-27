import React from "react";

const NewsHero = ({ news }) => {
  const { title, image, provider, url } = news;
  return (
    <div className="rounded-tr-3xl border-t-8 border-r-8 border-red-500 py-3 pr-3 dark:text-gray-300 w-full h-full">
      <p className="uppercase text-red-500 font-bold">Report</p>
      <h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold mb-2">
        {title}
      </h3>
      <figure className="h-auto bg-gray-200 overflow-clip">
        <img src={image.url} alt="news" />
      </figure>
      
      <div className="flex justify-between items-center mt-2">
        <p>Source: {provider.name}</p>
        <button className="py-2 px-4 bg-red-600 text-white uppercase rounded-md font-bold">
          <a href={url} target="blank">
            Read
          </a>
        </button>
      </div>
    </div>
  );
};

export default NewsHero;
