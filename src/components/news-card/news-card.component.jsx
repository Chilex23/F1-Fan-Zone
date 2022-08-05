import * as React from 'react';

const NewsCard = ({ news }) => {
  const { title, image, provider, url} = news;
  return (
    <div className="card card-compact w-[95%] mx-auto homePhone:w-[48%] bg-base-100 shadow-2xl">
      <figure className="h-[10rem] overflow-clip"><img src={image.url} alt="headline" /></figure>
      <div className="card-body border-r-2 border-b-2 hover:border-red-600 rounded-br-2xl">
        <h2 className="card-title uppercase text-red-600">News</h2>
        <p className="font-bold text-ellipsis text-md tablet:text-lg">{title}</p>
        <div className="card-actions justify-end items-center sm2:flex sm2:flex-col">
          <p className="tablet:text-base text-sm">Source: {provider.name}</p>
          <button className="py-2 px-4 bg-red-600 text-white uppercase rounded-md font-bold"><a href={url} target="blank">Read</a></button>
        </div>
      </div>
    </div>
  );
}


export default NewsCard;