import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/issues")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="max-w-[1400px] bg-base-200 mx-auto flex flex-col items-center my-6">
      <h2 className="font-bold mt-8 mb-10  text-indigo-500 text-4xl ">
        All Issues : {issues.length}
      </h2>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {issues.map((issue) => (
          <div key={issue._id} className=" bg-green-100 shadow-2xl rounded-4xl">
            <figure className="px-8 pt-10">
              <img
                src={issue.image}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-red-600">{issue.title}</h2>

              <div className="badge badge-soft badge-success font-bold text-primary badge-outline">
                {issue.category}
              </div>
              <p>{issue.location}</p>

              <div className="grid grid-cols-2 gap-15 ">
                <div className="badge badge-soft badge-secondary">
                  ${issue.amount}
                </div>
                <div className="card-actions">
                  <Link to={`/issueDetails/${issue._id}`}>
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
      <Link to="/">
        <button className="btn mt-12 mb-16 btn-soft btn-secondary ">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default AllIssues;
