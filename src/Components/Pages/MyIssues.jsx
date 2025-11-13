import React, { use } from "react";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Contex/AuthContex";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://green-spot-api-server.vercel.app/issues?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setIssues(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleEdit = (issue) => {
    setSelectedIssue(issue);
    setShowUpdateModal(true);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedIssue = {
      ...selectedIssue,
      title: e.target.title.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };

    fetch(
      `https://green-spot-api-server.vercel.app/issues/${selectedIssue._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedIssue),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIssues((prev) => prev.map((i) => (i._id === data._id ? data : i)));
        setShowUpdateModal(false);
        Swal.fire("Updated!", "Issue has been updated.", "success");
      })
      .catch((err) => console.error(err));
  };

  // handle delete----->>>>>>>
  const handleDelete = (issueId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the issue permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://green-spot-api-server.vercel.app/issues/${issueId}`, {
          method: "DELETE",
        })
          .then(() => {
            setIssues((prev) => prev.filter((i) => i._id !== issueId));
            Swal.fire("Deleted!", "Issue has been deleted.", "success");
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <div className="p-4 max-w-11/12 bg-violet-100 rounded-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My <span className="text-green-500">Issues</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border text-orange-500 px-4 py-2">SL</th>
              <th className="border text-orange-500 px-4 py-2">Title</th>
              <th className="border  text-orange-500 px-4 py-2">Category</th>
              <th className="border text-orange-500 px-4 py-2">Amount</th>
              <th className="border text-orange-500 px-4 py-2">Status</th>
              <th className="border text-orange-500 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.length > 0 ? (
              issues.map((issue, index) => (
                <tr key={issue._id} className="hover:bg-yellow-300">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border text-secondary px-4 py-2">
                    {issue.title}
                  </td>
                  <td className="border text-primary px-4 py-2">
                    {issue.category}
                  </td>
                  <td className="border text-red-500 font-semibold px-4 py-2">
                    ${issue.amount}
                  </td>
                  <td className="border px-4 py-2">{issue.status}</td>
                  <td className="border px-4 py-2 flex justify-evenly ">
                    <button
                      onClick={() => handleEdit(issue)}
                      className="btn btn-sm btn-accent flex items-center gap-1"
                    >
                      <FaEdit /> Update
                    </button>
                    <button
                      onClick={() => handleDelete(issue._id)}
                      className="btn btn-sm btn-error flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No issues found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {showUpdateModal && selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Update Issue</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <div>
                <label className="block font-semibold">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedIssue.title}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={selectedIssue.category}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold">Amount</label>
                <input
                  type="number"
                  name="amount"
                  defaultValue={selectedIssue.amount}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedIssue.description}
                  className="textarea textarea-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold">Status</label>
                <select
                  name="status"
                  defaultValue={selectedIssue.status}
                  className="input input-bordered w-full"
                  required
                >
                  <option value="ongoing">Ongoing</option>
                  <option value="ended">Ended</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-accent">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyIssues;
