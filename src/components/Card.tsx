import { useRef, useEffect,useState } from "react";
import React from "react";
import 'animate.css'; 


function AnimatedComponent({ children }: { children: React.ReactNode }) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      // Element sayfanın görünür bölümüne geldiğinde animasyonu başlat
      const element = elementRef.current;
      if (element && isElementInViewport(element)) {
        element.classList.add('animate__animated', 'animate__pulse');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Sayfa yüklendiğinde de kontrol edelim
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Elementin sayfanın görünür bölümünde olup olmadığını kontrol eden fonksiyon
  const isElementInViewport = (el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
}

function ColoredImage({ src,projectName ,alt }: { src: string; alt: string ;projectName:string}) {
  const [isColored, setColored] = useState(false);

  const toggleColor = () => {
    setColored(!isColored);
  };

  // Resmin stili değiştirilmiş hali, "isColored" değerine bağlı olarak değişir.
  const imageStyle = {
    filter: isColored ? "none"  : "grayscale(100%) contrast(110%) brightness(0.7)  saturate(3)",
    width: "95%",
    margin:"auto",
    marginTop:"70px",
    height: "300px",
    transition: "filter 1s ease", // CSS geçiş efekti, 2 saniyede gerçekleşir
    padding:"1px"
  };

  return (
    <div className="">
    <img
    className="rounded-t-lg shadow-2xl  animate__animated animate__pulse"
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


function Card({ imageSrc, title, name, onclick }: { imageSrc: string; title: string; name: string,onclick?:() => void }) {
  return (
    <AnimatedComponent >
      <ColoredImage src={imageSrc} alt={title} projectName={name}/>
    </AnimatedComponent>
  );
}

export default Card;
