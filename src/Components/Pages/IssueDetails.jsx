import { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Contex/AuthContex";

const IssueDetails = () => {
  const issue = useLoaderData();
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);
  // console.log(issue);
  console.log(user);

  const handleModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-4xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
      <div className="max-w-11/12 bg-pink-100 mx-auto p-6 rounded-lg grid grid-rows-1 md:grid-cols-12 gap-4 shadow-lg">
        <div className=" p-4 left col-span-5 ">
          <div className="mb-6">
            <img
              src={issue.image}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="bg-green-50 p-4 rounded-2xl">
            <h1 className="font-bold mb-3 text-2xl">Issue Description</h1>
            <p className="mb-4 text-sm text-gray-500">{issue.description}</p>
          </div>
        </div>
        <div className=" py-4 right col-span-6">
          <h1 className="text-3xl font-bold mb-4 text-primary">
            {issue.title}
          </h1>
          <div className="space-y-5 mb-6">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              <span className="badge badge-dash text-red-500">
                {issue.category}
              </span>
            </p>
            <p>
              <span className="font-semibold">Location:</span> {issue.location}
            </p>

            <p>
              <span className="font-semibold">Amount:</span>{" "}
              <span className="text-blue-500 badge badge-dash  font-semibold">
                ${issue.amount}
              </span>
            </p>
            <div>
              <span className="font-semibold">Date:</span>{" "}
              <span className="badge badge-outline font-semibold text-green-600 ">
                {" "}
                {issue.date}
              </span>
            </div>
            <button
              onClick={handleModalOpen}
              className="btn btn-accent text-white bg-secondary hover:bg-secondary-focus px-6 py-2 w-full mt-20 rounded-lg"
            >
              Pay Clean-Up Contribution
            </button>

            {/* Modall->> */}

            <dialog
              ref={bidModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold  text-lg">For Contribution</h3>
                <p className="py-4">Please filap the form!</p>

                <form onSubmit={handleBidSubmit}>
                  <div>
                    <label placeholder className="label">
                      <span className="label-text">Issue Title</span>
                    </label>
                    <input
                      type="text"
                      name="issueTitle"
                      readOnly
                      defaultValue={issue.title}
                      className="input input-bordered w-full bg-base-200"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Amount</span>
                    </label>
                    <input
                      type="number"
                      name="amount"
                      required
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={issue.amount}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Contributor Name</span>
                    </label>
                    <input
                      type="text"
                      name="contributorName"
                      required
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={user?.displayName}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={user?.email}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      className="input input-bordered w-full"
                      placeholder="017XXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      className="input input-bordered w-full"
                      placeholder="Your address"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">
                        Additional Info (optional)
                      </span>
                    </label>
                    <textarea
                      name="additionalInfo"
                      className="textarea textarea-bordered w-full"
                      placeholder="Any extra info..."
                    />
                  </div>
                  <button className="btn btn-secondary mt-4 w-full text-xl">
                    Submit
                  </button>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
