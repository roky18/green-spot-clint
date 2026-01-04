import React, { use, useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { AuthContext } from "../Contex/AuthContex";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyContribution = () => {
  const { user } = use(AuthContext);

  const [contribution, setContribution] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://green-spot-api-server.vercel.app/myContribution?email=${user.email}`
      )
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

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("My Contributions Report", 14, 15);

    const tableColumn = [
      "SL",
      "Issue Title",
      "Category",
      "Paid Amount",
      "Date",
    ];
    const tableRows = contribution.map((item, index) => [
      index + 1,
      item.title,
      item.category,
      `$${item.amount}`,
      item.date,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("my_contributions.pdf");
  };

  return (
    <div className="overflow-x-auto mt-10 w-full px-4 min-h-screen sm:px-6 my-8 p-6 max-w-11/12 mx-auto rounded-xl lg:px-8">
      <h2 className="text-3xl text-center font-bold  mb-4">My Contributions</h2>
      <table className="table text-center table-zebra w-full">
        <thead>
          <tr className="text-gray-500">
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
                <td className="font-medium ">{index + 1}</td>
                <td className="font-medium">{item.title}</td>
                <td className="text-cyan-700 font-semibold">{item.category}</td>
                <td className="text-green-500 font-semibold">${item.amount}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    onClick={downloadPDF}
                    className="btn btn-sm btn-accent flex items-center gap-1"
                  >
                    <FaDownload size={14} />
                    Download
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-muted">
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
