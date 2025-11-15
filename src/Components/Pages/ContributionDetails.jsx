import React, { useEffect, useState } from "react";

const ContributionDetails = ({ issueId, refresh, user }) => {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    fetch("https://green-spot-api-server.vercel.app/myContribution")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((c) => c.issueId === issueId);
        setContributors(filtered);
      });
  }, [issueId, refresh]);

  if (contributors.length === 0) {
    return (
      <p className="text-center mt-6 text-gray-500">No contributors yet.</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Contributors</h2>
        <div className="overflow-x-auto">
          <table className="table w-full text-center border">
            <thead className="bg-blue-100">
              <tr>
                <th>SL No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Contribution Amount</th>
              </tr>
            </thead>
            <tbody className="bg-lime-200 font-semibold">
              {contributors.map((contributor, index) => (
                <tr key={contributor._id}>
                  <td className="text-orange-500">{index + 1}</td>
                  <td>
                    <img
                      src={user.photoURL}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="text-secondary">{contributor.name}</td>
                  <td className="text-primary">${contributor.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContributionDetails;
