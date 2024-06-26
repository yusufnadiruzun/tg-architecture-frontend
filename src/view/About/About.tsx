import React from "react";

function About() {

  const imgClass = {img : "mx-auto rounded-lg h-auto w-96 mb-10 shadow-2xl"}
  const titleClass = {title : "text-center p-4 sm:text-3xl font-serif"}
  const containerClass = {container: "grid md:grid-cols-2  px-20 mt-16"}
  const textClass = {text:"text-center font-serif mt-44"}
  
  return (
    <div className={containerClass.container}>
      <div>
        <p className={titleClass.title}>Mimar Tunahan Gör</p>
        <img 
        className={imgClass.img}
        src={require("../../assets/renders/tg.jpeg")}></img>
      </div>
      <div> 
        <p className={textClass.text}>
          Tunahan Gör is an Istanbul-based independent architect
          concentrating on residences, housing projects, offices and mixed-use
          developments in architecture, urban design and interior design.
          Kocaman completed her BSc (2001) and MSc (2004) in Architecture at
          Istanbul Technical University. She began her work experience as an
          architect at Adnan Kazmaoglu Architectural Research Center from 2005
          to 2010. In a short time she took big responsibilities and completed
          several big scale projects. She worked at Suyabatmaz & Demirel
          Architects from 2010 to 2013 where she participated in competitions.
          From 2013 to 2015, she worked at DNA Architects as a senior architect
          and office manager. In August 2015 Kocaman worked as a Senior
          Architect at Avci Architects and completed some International and
          National projects. Since January 2017, Kocaman works as a freelancer
          architect with the knowledge she gathered from diverse projects in
          many years she worked as designer and project manager. Currently she
          is head of MK architecture and visiting lecturer at the architectual
          design studio at Haliç University.
        </p>
      </div>
      <div> 
      <p className={textClass.text}>
          Tunahan Gör is an Istanbul-based independent architect
          concentrating on residences, housing projects, offices and mixed-use
          developments in architecture, urban design and interior design.
          Kocaman completed her BSc (2001) and MSc (2004) in Architecture at
          Istanbul Technical University. She began her work experience as an
          architect at Adnan Kazmaoglu Architectural Research Center from 2005
          to 2010. In a short time she took big responsibilities and completed
          several big scale projects. She worked at Suyabatmaz & Demirel
          Architects from 2010 to 2013 where she participated in competitions.
          From 2013 to 2015, she worked at DNA Architects as a senior architect
          and office manager. In August 2015 Kocaman worked as a Senior
          Architect at Avci Architects and completed some International and
          National projects. Since January 2017, Kocaman works as a freelancer
          architect with the knowledge she gathered from diverse projects in
          many years she worked as designer and project manager. Currently she
          is head of MK architecture and visiting lecturer at the architectual
          design studio at Haliç University.
        </p>
      </div>
      <div>
        <p className={titleClass.title}>Mimar Ahmet Kaplan</p>
        <img 
        className={imgClass.img}
        src={require("../../assets/renders/ahmet.jpeg")}></img>
      </div>
      
    </div>
  );
}

export default About;
