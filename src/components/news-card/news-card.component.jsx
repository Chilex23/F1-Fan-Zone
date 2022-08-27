import React from "react";

const NewsCard = ({ news }) => {
  const { title, image, provider, url } = news;
  return (
    <div className="card card-compact w-full mx-auto homePhone:w-[48%] bg-base-100 shadow-2xl dark:bg-gray-800">
      <figure className="h-[10rem] overflow-clip bg-gray-200">
        <img src={image.url} alt="headline" className="w-full h-auto" />
      </figure>
      <div className="card-body border-r-2 border-b-2 hover:border-red-600 rounded-br-2xl">
        <h2 className="card-title uppercase text-red-600 text-base font-extrabold">News</h2>
        <p className="font-bold text-ellipsis text-base">
          {title}
        </p>
        <div className="card-actions justify-end text-sm items-center sm2:flex sm2:flex-col">
          <p>Source: {provider.name}</p>
          <button className="py-2 px-4 bg-red-600 text-white uppercase rounded-md font-bold">
            <a href={url} target="blank">
              Read
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
