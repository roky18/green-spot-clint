import React from "react";
import garbage from "../../assets/garbage.jpg";
import illegal from "../../assets/illegal const.jpg";
import PPbroken from "../../assets/public-pro-brok.webp";
import RoadDam from "../../assets/Road dame.jpg";

const Category = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col items-center my-6">
      <h2 className="font-bold  mb-8 text-cyan-500 text-4xl ">Category</h2>
      <section className=" w-11/12 grid lg:grid-cols-4 md:grid-cols-3 gap-6 text-center">
        <div className=" rounded-xl bg-emerald-200 space-y-2 font-semibold p-4">
          <img className="w-full h-48 object-cover rounded-2xl" src={garbage} />
          <h3 className="text-indigo-500">Garbage</h3>
          <p className="text-xs text-gray-500">
            Waste, litter, plastics or other unwanted materials dumped or left
            in public spaces without proper disposal.
          </p>
          <button className="btn btn-dash btn-secondary btn-xs">
            See Details
          </button>
        </div>

        <div className=" bg-fuchsia-200 rounded-xl  space-y-2 font-semibold p-4">
          <img className="w-full h-48 object-cover rounded-2xl" src={illegal} />
          <h3 className="text-indigo-500">Illegal Construction</h3>
          <p className="text-xs text-gray-500">
            Buildings, extensions or modifications made without required
            permits, approvals or in violation of regulations.
          </p>
          <button className="btn btn-dash btn-secondary btn-xs">
            See Details
          </button>
        </div>

        <div className=" bg-lime-200 rounded-xl  space-y-2 font-semibold p-4">
          <img
            className="w-full h-48 object-cover rounded-2xl"
            src={PPbroken}
          />
          <h3 className="text-indigo-500">Broken Public Property</h3>
          <p className="text-xs text-gray-500">
            Public infrastructure or facilities (benches, railings, lighting,
            signage, etc.) that are damaged, malfunctioning or neglected and
            pose a risk to users.
          </p>
          <button className="btn btn-dash btn-secondary btn-xs">
            See Details
          </button>
        </div>
        <div className=" bg-rose-200 rounded-xl  space-y-2 font-semibold p-4">
          <img className="w-full h-48 object-cover rounded-2xl" src={RoadDam} />
          <h3 className="text-indigo-500">Road Damage</h3>
          <p className="text-xs text-gray-500">
            Defects, wear‑and‑tear or adverse conditions in a roadway (potholes,
            cracks, subsidence) which make travel unsafe or inconvenient.
          </p>
          <button className="btn btn-dash btn-secondary btn-xs">
            See Details
          </button>
        </div>
      </section>
    </div>
  );
};

export default Category;
