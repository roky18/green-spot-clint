import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllIssues = () => {
  const [issues, setIssues] = useState([]);

  const [filteredIssues, setFilteredIssues] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");

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

  useEffect(() => {
    if (categoryFilter === "All") {
      setFilteredIssues(issues);
    } else {
      setFilteredIssues(
        issues.filter((issue) => issue.category === categoryFilter)
      );
    }
  }, [categoryFilter, issues]);

  const categories = ["All", ...new Set(issues.map((issue) => issue.category))];
  return (
    <div className="max-w-[1400px] bg-base-200 mx-auto flex flex-col items-center my-6">
      <h2 className="font-bold mt-8 mb-10  text-indigo-500 text-4xl ">
        All Issues : {filteredIssues.length}
      </h2>

      <div className="flex gap-4 mb-8">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="select text-blue-500 font-semibold bg-red-100 select-bordered"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIssues.map((issue) => (
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
                <div className="badge font-semibold badge-soft badge-secondary">
                  ${issue.amount}
                </div>
                <div className="card-actions">
                  <Link to={`/issueDetails/${issue._id}`}>
                    <button className="btn btn-dash btn-secondary text-center btn-xs">
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
