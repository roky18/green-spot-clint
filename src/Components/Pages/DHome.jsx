import React from "react";
import { useEffect, useState } from "react";

const DHome = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalIssues, setTotalIssues] = useState(0);

  useEffect(() => {
    // users count
    fetch("https://green-spot-api-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setTotalUsers(data.length);
      })
      .catch((err) => console.error(err));

    // issues count
    fetch("https://green-spot-api-server.vercel.app/issues")
      .then((res) => res.json())
      .then((data) => {
        setTotalIssues(data.length);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto dark:bg-gray-400 bg-base-100 p-10 min-h-screen">
      <div className="flex justify-center items-center mt-12">
        <h1 className="text-center font-bold text-5xl text-black ">
          WELCOME.. To Dashboard Home Page!! <hr />
        </h1>
      </div>

      <div className="mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Total Users */}
        <div className="bg-gray-200 shadow rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-indigo-600">{totalUsers}</p>
        </div>

        {/* Total Issues */}
        <div className="bg-gray-200 shadow rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Issues</h2>
          <p className="text-3xl font-bold text-red-500">{totalIssues}</p>
        </div>
      </div>
    </div>
  );
};

export default DHome;
