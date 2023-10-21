import React from 'react'

function Carousel() {
  return (
    <div className="col-xxl-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 ">
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.thoughtco.com/thmb/UoIX4YwydhVRvX2PrPGeLukx5v0=/4928x3280/filters:no_upscale():max_bytes(150000):strip_icc()/hadid-468889296-57a9ba7a5f9b58974a223c71.jpg"
            className=" w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-fill"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.thoughtco.com/thmb/UoIX4YwydhVRvX2PrPGeLukx5v0=/4928x3280/filters:no_upscale():max_bytes(150000):strip_icc()/hadid-468889296-57a9ba7a5f9b58974a223c71.jpg"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-fill"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://gineersnow.com/wp-content/uploads/2017/01/Masdar-City_Architecture-21.jpg"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-fill"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}

export default Carousel