import React from "react";

const NewsHero = ({ news }) => {
    const { title, image, provider, url } = news
    return (
        <div className="rounded-tr-3xl border-t-8 border-r-8 border-red-500 py-3 pr-3">
            <p className="uppercase text-red-500 font-bold">Report</p>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2">{title}</h3>
            <img src={image.url} alt="news"/>
            <div className="flex justify-between items-center mt-2">
                <p>Source: {provider.name}</p>
                <button className="py-2 px-4 bg-red-600 text-white uppercase rounded-md font-bold"><a href={url} target="blank">Read</a></button>
            </div>
        </div>
    )
};

export default NewsHero;