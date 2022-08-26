const ImgWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  alt
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} className="h-[auto] w-full tablet:h-[30rem] basis-[40%] rounded-lg object-cover aspect-square" />
      <img src={fallback} alt={alt} className="h-[auto] w-full tablet:h-[30rem] basis-[40%] rounded-lg object-cover aspect-square" />
    </picture>
  );
};

export default ImgWithFallback;
