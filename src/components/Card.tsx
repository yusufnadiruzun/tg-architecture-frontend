import { Fragment, useState } from "react";
import React from "react";

function ColoredImage({ src,projectName ,alt }: { src: string; alt: string ;projectName:string}) {
  const [isColored, setColored] = useState(false);

  const toggleColor = () => {
    setColored(!isColored);
  };

  // Resmin stili değiştirilmiş hali, "isColored" değerine bağlı olarak değişir.
  const imageStyle = {
    filter: isColored ? "none" : "grayscale(100%) contrast(110%)  saturate(3)",
    width: "95%",
    margin:"auto",
    height: "300px",
    transition: "filter 1s ease", // CSS geçiş efekti, 2 saniyede gerçekleşir
    padding:"1px"
  };

  return (
    <div className="">
    <img
    className="rounded-t-lg shadow-2xl"
      style={imageStyle}
      src={isColored ? src : `${src}`}
      alt={alt}
      onMouseEnter={toggleColor}
      onMouseLeave={toggleColor}
    />
    <p className="text-center font-serif sm:text-sm xs:mt-4   md:text-xl md:mt-4">{projectName}</p>
    </div>
  );
}

function Card({ imageSrc, title,name }: { imageSrc: string; title: string; name: string }) {
  return (
      
      <ColoredImage src={imageSrc} alt={title} projectName={name} />
      
    );
}



export default Card;
