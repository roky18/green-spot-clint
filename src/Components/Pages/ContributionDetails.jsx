import React, { useEffect, useState } from "react";

const ContributionDetails = ({ issueId, refresh,user }) => {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/myContribution")
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
          <table className="table w-full border">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Contribution Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.map((contributor) => (
                <tr key={contributor._id}>
                  <td>
                    <img
                      src={
                        user.photoURL
                      }
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td>{contributor.name}</td>
                  <td>${contributor.amount}</td>
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
