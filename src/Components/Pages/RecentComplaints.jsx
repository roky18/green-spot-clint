import React, { useEffect, useState } from "react";

const RecentComplaints = () => {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/resentComplain")
      .then((res) => res.json())
      .then((data) => {
        setComplains(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-[1400px]  mx-auto flex flex-col items-center my-6">
      <h2 className="font-bold  mb-8 text-red-500 text-4xl ">
        Recent Complaints
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {complains.map((complain) => (
          <div key={complain._id} className="border-5 rounded-4xl">
            <figure className="px-10 pt-10">
              <img
                src={complain.image}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{complain.title}</h2>

              <div className="badge font-bold text-primary badge-outline">
                {complain.category}
              </div>
              <p>{complain.location}</p>

              <div className="grid grid-cols-2 gap-15 ">
                <div className="badge badge-secondary">{complain.amount} $</div>
                <div className="card-actions">
                  <button className="btn btn-dash btn-secondary btn-xs">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentComplaints;
