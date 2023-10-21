import { useState } from "react";
import React from "react";

function ColoredImage({ src, alt }: { src: string; alt: string }) {
  const [isColored, setColored] = useState(false);

  const toggleColor = () => {
    setColored(!isColored);
  };

  // Resmin stili değiştirilmiş hali, "isColored" değerine bağlı olarak değişir.
  const imageStyle = {
    filter: isColored ? "none" : "grayscale(100%)",
    transition: "filter 1s ease", // CSS geçiş efekti, 2 saniyede gerçekleşir
  };

  return (
    <img
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
    <div className="project">
      <h3>{title}</h3>
      <ColoredImage src={imageSrc} alt={title} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Card title="Proje 1" imageSrc="proje1.jpg" />
      <Card title="Proje 2" imageSrc="proje2.jpg" />
      {/* Diğer projeleri buraya ekleyin */}
    </div>
  );
}

export default Card;
