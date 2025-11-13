import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { AiOutlineWarning } from "react-icons/ai";
import { BiHorizontalLeft, BiLogoFlutter } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router";

const RecentComplaints = () => {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    fetch("https://green-spot-api-server.vercel.app/resentComplain")
      .then((res) => res.json())
      .then((data) => {
        setComplains(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-[1400px] bg-orange-50  mx-auto flex flex-col items-center my-6">
      <h2 className="font-bold mt-10  text-indigo-500 text-4xl ">
        Recent Complaints
      </h2>
      <Marquee className="bg-amber-100 mt-5 mb-6">
        <h3 className="text-2xl text-red-500 p-3 font-bold flex justify-center items-center text-center">
          <AiOutlineWarning />
          <AiOutlineWarning />
          <BiHorizontalLeft />
          <BiHorizontalLeft />
          <span className="mx-6">
            Overflowing waste container at bus stop in Azimpur, Dhaka.
          </span>{" "}
          <MdLocationPin />
          <MdLocationPin />
          <BiLogoFlutter />
          <BiLogoFlutter />
          <AiOutlineWarning />
          <AiOutlineWarning />
        </h3>
        <h3 className="text-2xl text-red-500 p-3 font-bold flex justify-center text-center items-center">
          <AiOutlineWarning />
          <AiOutlineWarning />
          <BiHorizontalLeft />
          <BiHorizontalLeft />
          <span className="mx-6">
            Road surface washed away after rain in Shyam Bagh, Dhaka.
          </span>
          <MdLocationPin />
          <MdLocationPin />
          <BiLogoFlutter />
          <BiLogoFlutter />
          <AiOutlineWarning />
          <AiOutlineWarning />
        </h3>
        <h3 className="text-2xl text-red-500 p-3 font-bold flex justify-center text-center items-center">
          <AiOutlineWarning />
          <AiOutlineWarning />
          <BiHorizontalLeft />
          <BiHorizontalLeft />
          <span className="mx-6">
            Illegal rooftop extension built overnight in Gulshan, Dhaka.
          </span>
          <MdLocationPin />
          <MdLocationPin />
          <BiLogoFlutter />
          <BiLogoFlutter />
          <AiOutlineWarning />
          <AiOutlineWarning />
        </h3>
      </Marquee>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {complains.map((complain) => (
          <div
            key={complain._id}
            className=" bg-green-200 shadow-2xl rounded-4xl"
          >
            <figure className="px-8 pt-10">
              <img
                src={complain.image}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-red-600">{complain.title}</h2>

              <div className="badge badge-soft badge-success font-bold text-primary badge-outline">
                {complain.category}
              </div>
              <p>{complain.location}</p>

              <div className="grid grid-cols-2 gap-15 ">
                <div className="badge badge-soft badge-secondary">
                  ${complain.amount}
                </div>
                <div className="card-actions">
                  <Link to={`/issueDetails/${complain._id}`}>
                    <button className="btn btn-dash btn-secondary btn-xs">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/allIssues">
        <button className="btn mt-12 mb-16 btn-soft btn-secondary">
          All Issues
        </button>
      </Link>
    </div>
  );
};

export default RecentComplaints;
