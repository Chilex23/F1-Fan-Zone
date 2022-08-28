const ImgWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  alt,
  classList
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} className={classList} />
      <img src={fallback} alt={alt} className={classList} />
    </picture>
  );
};

export default ImgWithFallback;
