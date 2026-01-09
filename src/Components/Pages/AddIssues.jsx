import { use } from "react";
import { useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../Contex/AuthContex";

const AddIssues = () => {
  const { user } = use(AuthContext);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newIssue = {
      title: e.target.title.value,
      category: e.target.category.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      amount: e.target.amount.value,
      status: e.target.status.value,
      date: new Date().toISOString(),
      email: user?.email,
    };

    try {
      const res = await fetch(
        "https://green-spot-api-server.vercel.app/issues",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newIssue),
        }
      );
      const data = await res.json();
      if (data.insertedId) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Issue posted successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
        setLoading(false);
        document.getElementById("issueForm").reset();
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-11/12 md:max-w-5/12 lg:max-w-6/12 mx-auto p-6 dark:bg-gray-400 dark:text-black bg-white rounded-lg shadow-lg my-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Report a New Issue
      </h2>
      <form id="issueForm" onSubmit={handleSubmit} className="space-y-4">
        {/* Issue Title */}
        <div>
          <label className="block font-semibold mb-1">Issue Title</label>
          <input
            type="text"
            name="title"
            required
            className="input input-bordered w-full"
            placeholder="Enter issue title"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            required
            className="input input-bordered w-full"
            defaultValue=""
          >
            <option value="" disabled>
              Select Category
            </option>
            <option className="font-semibold text-cyan-500
            " value="Garbage">
              Garbage
            </option>
            <option
              className="font-semibold text-cyan-500"
              value="Road Damage"
            >
              Road Damage
            </option>
            <option
              className="font-semibold text-cyan-500"
              value="Illegal Construction"
            >
              Illegal Construction
            </option>
            <option
              className="font-semibold text-cyan-500"
              value="Broken Public Property"
            >
              Broken Public Property
            </option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            required
            className="input input-bordered w-full"
            placeholder="Enter location"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            required
            className="textarea textarea-bordered w-full"
            placeholder="Describe the issue..."
          />
        </div>

        {/* Image */}

        <div>
          <label className="block font-semibold mb-1">Image (optional)</label>
          <input
            name="image"
            required
            className="input input-bordered w-full"
            placeholder="Enter a valid Image Link"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block font-semibold mb-1">
            Suggested Fix Budget ($)
          </label>
          <input
            type="number"
            name="amount"
            required
            className="input input-bordered w-full"
            placeholder="Enter suggested budget"
          />
        </div>

        {/* Status  */}
        <div>
          <label className="block font-semibold mb-1">Status</label>
          <select
            name="status"
            required
            className="input input-bordered w-full"
            defaultValue="ongoing"
          >
            <option value="ongoing">Ongoing</option>
            <option value="ended">Ended</option>
          </select>
        </div>

        {/* Email  */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            readOnly
            value={user?.email || ""}
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-accent w-full mt-4 text-lg"
        >
          {loading ? "Posting..." : "Post Issue"}
        </button>
      </form>
    </div>
  );
};

export default AddIssues;
