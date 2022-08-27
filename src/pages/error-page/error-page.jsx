import React from "react";
import errorImg from "../../assets/img/error.png";
import errorWebp from "../../assets/img/error2.1.webp";

const ErrorPage = () => (
  <div className="bg-red-600 h-screen flex pt-24 justify-center">
    <figure className="h-5 w-[15rem]">
      <picture>
        <source srcSet={errorWebp} type="image/webp" className="h-auto w-fit" />
        <img src={errorImg} alt="error" className="h-auto w-fit" />
      </picture>
      <figcaption className="text-white text-center mt-4 text-lg font-extrabold">
        Sorry, this page is broken.
      </figcaption>
    </figure>
  </div>
);

export default ErrorPage;
