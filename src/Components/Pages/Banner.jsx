import React from "react";
import Gcity1 from "../../assets/Gcity1.jpg";
import Gcity2 from "../../assets/Gcity2.jpg";
import Gcity3 from "../../assets/Gcity3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="w-11/12 mt-12 mx-auto">
      <Carousel
        className=""
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <div
            className="hero md:h-[70vh]"
            style={{
              backgroundImage: `url(${Gcity2})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Garbage</h1>
                <p className="mb-5">
                  Garbage refers to everyday waste materials that are discarded
                  after use. It includes household trash, food scraps,
                  packaging, paper, plastics, and other unusable items. Improper
                  handling and disposal of garbage can lead to environmental
                  pollution, foul odors, and health hazards. Managing garbage
                  responsibly through recycling, composting, and proper waste
                  segregation helps protect the environment and keeps
                  communities clean.
                </p>
                <Link to="/allIssues" className="btn btn-info">
                  ALL Issues
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero md:h-[70vh]"
            style={{
              backgroundImage: `url(${Gcity1})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">
                  Students Cleaning Activity
                </h1>
                <p className="mb-5">
                  Students play an important role in keeping their surroundings
                  clean and healthy. Many schools and
                  regular cleanliness students voluntarily clean
                  their campuses, sweep classrooms, pick up litter, and manage
                  waste properly to make the environment more pleasant and safe.
                  These activities not only help maintain a neat and tidy space,
                  but also teach students responsibility, teamwork, and respect
                  for the environment — values that will stay with them
                  throughout life. 
                </p>
                <Link to="/allIssues" className="btn btn-info">
                  ALL Issues
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero md:h-[70vh]"
            style={{
              backgroundImage: `url(${Gcity3})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Green World</h1>
                <p className="mb-5">
                  A “Green World” refers to a vision of a healthy, sustainable
                  planet where people live in harmony with nature by protecting
                  ecosystems, reducing pollution, and using natural resources
                  responsibly. It emphasizes environmental awareness,
                  biodiversity conservation, clean air and water, and
                  sustainable practices that benefit both people and the planet.
                  The idea of a Green World is central to many global
                  environmental initiatives, campaigns, and organizations that
                  work to restore degraded landscapes, plant trees, educate
                  communities, and promote ecological solutions for a better
                  future.
                </p>
                <Link to="/allIssues" className="btn btn-info">
                  ALL Issues
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
