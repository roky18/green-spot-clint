import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "./Loading";

const AllIssues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filteredIssues, setFilteredIssues] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("https://green-spot-api-server.vercel.app/issues")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let updatedIssues = [...issues];

    if (categoryFilter !== "All") {
      updatedIssues = updatedIssues.filter(
        (issue) => issue.category === categoryFilter
      );
    }

    if (searchText.trim() !== "") {
      updatedIssues = updatedIssues.filter((issue) =>
        issue.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Sort
    if (sortOption === "latest") {
      updatedIssues.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    if (sortOption === "low") {
      updatedIssues.sort((a, b) => a.amount - b.amount);
    }

    if (sortOption === "high") {
      updatedIssues.sort((a, b) => b.amount - a.amount);
    }

    setFilteredIssues(updatedIssues);
  }, [issues, categoryFilter, searchText, sortOption]);

  const categories = ["All", ...new Set(issues.map((issue) => issue.category))];
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-[1400px] dark:bg-black text-black bg-base-200 mx-auto flex flex-col items-center my-6">
      <h2 className="font-bold dark:text-white mt-8 mb-10 text-4xl ">
        All Issues : {filteredIssues.length}
      </h2>
      {/* ------- */}
      <div className="flex md:gap-35 flex-col md:flex-row gap-4 mb-8">
        {/* Search---> */}
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered dark:bg-gray-600 dark:text-white w-full md:w-72"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="select dark:bg-gray-600 dark:text-white font-semibold select-bordered"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/*Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select dark:bg-gray-600 dark:text-white select-bordered font-semibold"
        >
          <option value="">Sort By</option>
          <option value="latest">Latest</option>
          <option value="low">Amount Low to High</option>
          <option value="high">Amount High to Low</option>
        </select>
      </div>
      {/* ----------------- */}

      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIssues.map((issue) => (
          <div key={issue._id} className=" dark:bg-gray-400 bg-base-100 shadow-md rounded-xl">
            <figure className="px-6 pt-6">
              <img
                src={issue.image}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{issue.title}</h2>

              <div className="badge mb-6 dark:badge-info badge-soft badge-outline">
                {issue.category}
              </div>
              <p>{issue.location}</p>

              <div className="grid mt-6 grid-cols-2 gap-15 ">
                <div className="badge font-semibold badge-soft text-red-500">
                  ${issue.amount}
                </div>
                <div className="card-actions">
                  <Link to={`/issueDetails/${issue._id}`}>
                    <button className="btn btn-info text-center btn-xs">
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
        <button className="btn mt-12 mb-16 btn-soft btn-accent ">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default AllIssues;
