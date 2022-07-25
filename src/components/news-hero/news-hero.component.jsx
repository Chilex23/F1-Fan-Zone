import React from "react";

const NewsHero = ({ news }) => {
    const { title, urlToImage, source } = news
    return (
        <div className="rounded-tr-3xl border-t-8 border-r-8 border-red-500 py-3 pr-3">
            <p className="uppercase text-red-500 font-bold">Report</p>
            <h3 className="text-4xl font-extrabold">{title}</h3>
            <img src={urlToImage} alt="news"/>
            <p>Source: {source.name}</p>
        </div>
    )
};

export default NewsHero;