import React from "react";
import Gcity1 from "../../assets/Gcity1.jpg";
import Gcity2 from "../../assets/Gcity2.jpg";
import Gcity3 from "../../assets/Gcity3.jpg";

const Banner = () => {
  return (
    <div>
      <main className="">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={Gcity2} className="w-full max-h-[60vh] object-contain" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full ">
            <img src={Gcity1} className="w-full max-h-[60vh] object-contain" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={Gcity3} className="w-full max-h-[60vh] object-contain" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
