import * as React from 'react';

const NewsCard = ({ news }) => {
  const { title, urlToImage, source, url} = news;
  return (
    <div class="card card-compact w-[48%] bg-base-100 shadow-2xl">
      <figure className="h-[10rem] overflow-clip"><img src={urlToImage} alt="headline" /></figure>
      <div class="card-body border-r-2 border-b-2 hover:border-red-600 rounded-br-2xl">
        <h2 class="card-title uppercase text-red-600">News</h2>
        <p className="text-ellipsis text-lg">{title}</p>
        <div class="card-actions justify-end items-center">
          <p className="text-base">Source: {source.name}</p>
          <button class="py-2 px-4 bg-red-600 text-white uppercase rounded-md font-bold"><a href={url} target="blank">Read</a></button>
        </div>
      </div>
    </div>
  );
}


export default NewsCard;