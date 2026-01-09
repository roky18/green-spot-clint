import React from "react";
import garbage from "../../assets/garbage.jpg";
import illegall from "../../assets/Illegal Construction.jpg";
import PPbroken from "../../assets/Broken Public Property.jpg";
import RoadDam from "../../assets/Road dame.jpg";
import { Link } from "react-router";

const Category = () => {
  return (
    <div className="max-w-[1400px] pb-15 dark:bg-black bg-gray-100 mx-auto flex flex-col items-center my-6">
      <h2 className="font-bold mt-16 mb-12 text-4xl ">Category</h2>
      <section className=" w-11/12 grid lg:grid-cols-4 md:grid-cols-3 gap-6 text-center">
        <div className="hover:scale-105 shadow-xs rounded-xl dark:bg-gray-300 dark:text-black bg-white space-y-2 font-semibold p-4">
          <img className="w-full h-48 object-cover rounded-2xl" src={garbage} />
          <h3>Garbage</h3>
          <p className="text-xs text-gray-500">
            Waste, litter, plastics or other unwanted materials dumped or left
            in public spaces without proper disposal.
          </p>
          <Link to="/allIssues">
            <button className="btn btn-dash btn-info btn-xs">Show All</button>
          </Link>
        </div>

        <div className=" hover:scale-105 bg-white rounded-xl dark:bg-gray-300 dark:text-black shadow-xs space-y-2 font-semibold p-4">
          <img
            className="w-full h-48 object-cover rounded-2xl"
            src={illegall}
          />
          <h3>Illegal Construction</h3>
          <p className="text-xs text-gray-500">
            Buildings, extensions or modifications made without required
            permits, approvals or in violation of regulations.
          </p>
          <Link to="/allIssues">
            <button className="btn btn-dash btn-info btn-xs">Show All</button>
          </Link>
        </div>

        <div className=" hover:scale-105 bg-white rounded-xl dark:bg-gray-300 dark:text-black shadow-xs space-y-2 font-semibold p-4">
          <img
            className="w-full h-48 object-cover rounded-2xl"
            src={PPbroken}
          />
          <h3>Broken Public Property</h3>
          <p className="text-xs text-gray-500">
            Public infrastructure or facilities benches, railings, lighting,
            signage, etc. that are damaged, malfunctioning or neglected and pose
            a risk to users.
          </p>
          <Link to="/allIssues">
            <button className="btn btn-dash btn-info btn-xs">Show All</button>
          </Link>
        </div>
        <div className=" hover:scale-105 bg-white rounded-xl dark:bg-gray-300 dark:text-black shadow-xs space-y-2 font-semibold p-4">
          <img className="w-full h-48 object-cover rounded-2xl" src={RoadDam} />
          <h3>Road Damage</h3>
          <p className="text-xs text-gray-500">
            Defects, wear and tear or adverse conditions in a roadway potholes,
            cracks, subsidence which make travel unsafe or inconvenient.
          </p>
          <Link to="/allIssues">
            <button className="btn btn-dash btn-info btn-xs">Show All</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Category;
