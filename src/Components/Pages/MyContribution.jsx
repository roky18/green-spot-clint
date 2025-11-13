import React, { use, useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { AuthContext } from "../Contex/AuthContex";

const MyContribution = () => {
  const { user } = use(AuthContext);
  console.log(user);
  const [contribution, setContribution] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myContribution?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched data:", data);
          setContribution(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);
  return (
    <div className="overflow-x-auto w-full px-4 sm:px-6 bg-gray-100 my-8 p-6 max-w-11/12 mx-auto rounded-4xl lg:px-8 mt-8">
      <h2 className="text-3xl text-center font-bold text-primary mb-4">
        <span className="text-green-500">My</span> Contributions
      </h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr className="text-orange-500">
            <th>SL</th>
            <th>Issue Title</th>
            <th>Category</th>
            <th>Paid Amount</th>
            <th>Date</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          {contribution && contribution.length > 0 ? (
            contribution.map((item, index) => (
              <tr key={item._id}>
                <td className="font-medium text-yellow-600">{index + 1}</td>
                <td className="font-medium">{item.title}</td>
                <td className="text-violet-500 font-semibold">
                  {item.category}
                </td>
                <td className="text-blue-500 font-semibold">${item.amount}</td>
                <td>{item.date}</td>
                <td>
                  <button className="btn btn-sm btn-accent flex items-center gap-1">
                    <FaDownload size={14} />
                    Download
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-muted">
                No contributions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyContribution;
