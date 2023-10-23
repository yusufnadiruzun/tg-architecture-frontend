import { useState } from "react";
import React from "react";

function ColoredImage({ src, alt }: { src: string; alt: string }) {
  const [isColored, setColored] = useState(false);

  const toggleColor = () => {
    setColored(!isColored);
  };

  // Resmin stili değiştirilmiş hali, "isColored" değerine bağlı olarak değişir.
  const imageStyle = {
    filter: isColored ? "none" : "grayscale(100%) contrast(110%)  saturate(3)",
    width: "80%",
    margin:"auto",
    height: "90%",
    
    transition: "filter 1s ease", // CSS geçiş efekti, 2 saniyede gerçekleşir
  };

  return (
    
    <img
    className="rounded-t-lg shadow-2xl"
      style={imageStyle}
      src={isColored ? src : `${src}`}
      alt={alt}
      onMouseEnter={toggleColor}
      onMouseLeave={toggleColor}
    />
   
  );
}

function Card({ imageSrc, title }: { imageSrc: string; title: string }) {
  return (
    <div className="p-1 ">
      <ColoredImage src={imageSrc} alt={title} />
    </div>
  );
}



export default Card;
