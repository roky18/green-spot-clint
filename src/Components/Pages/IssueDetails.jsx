import { use, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Contex/AuthContex";
import Swal from "sweetalert2";
import ContributionDetails from "./ContributionDetails";
import { MdCategory, MdDateRange, MdLocationPin } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

const IssueDetails = () => {
  const today = new Date().toISOString();
  const issue = useLoaderData();
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);
  const [refresh, setRefresh] = useState(false);
  // console.log(issue);
  // console.log(user);

  const handleModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const issueId = issue._id;
    const category = issue.category;
    const title = issue.title;
    const name = e.target.contributorName.value;
    const email = e.target.email.value;
    const amount = e.target.amount.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const date = e.target.date.value;
    const addInfo = e.target.additionalInfo.value;

    const newDonet = {
      issueId: issueId,
      title: title,
      category: category,
      amount: amount,
      name: name,
      email: email,
      phone: phone,
      address: address,
      date: date,
      additionalInfo: addInfo,
    };

    fetch("https://green-spot-api-server.vercel.app/myContribution", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDonet),
    })
      .then((res) => res.json())
      .then((date) => {
        if (date.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your Donet has been successfully Save on MongoDB",
            showConfirmButton: false,
            timer: 2000,
          });
          setRefresh((r) => !r);
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto dark:bg-black bg-base-100 p-6 rounded-lg shadow-lg">
      <div className="max-w-11/12 bg-gray-100 dark:bg-gray-400 dark:text-black mx-auto p-6 rounded-lg grid grid-rows-1 md:grid-cols-12 gap-4 shadow-lg">
        <div className=" p-4 left col-span-5 ">
          <div className="mb-6">
            <img
              src={issue.image}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="bg-white p-4 rounded-2xl">
            <h1 className="font-bold mb-3 text-2xl">Issue Description</h1>
            <p className="mb-4 text-sm text-gray-500">{issue.description}</p>
          </div>
        </div>
        <div className=" py-4 right col-span-6">
          <h1 className="text-3xl font-bold mb-4">{issue.title}</h1>
          <div className="space-y-5 mb-6">
            <p className="flex gap-2 items-center font-semibold">
              <MdCategory />
              <span className="badge badge-dash">{issue.category}</span>
            </p>
            <p className="flex gap-2 items-center font-semibold">
              <MdLocationPin />
              <span className="badge badge-outline font-semibold ">
                {issue.location}
              </span>
            </p>

            <p className="flex gap-2 items-center font-semibold">
              <BsCashCoin />
              <span className=" text-red-500 badge badge-dash  font-semibold">
                ${issue.amount}
              </span>
            </p>
            <div className="flex items-center font-semibold">
              <MdDateRange />
              :- {issue.date}
            </div>
            <button
              onClick={handleModalOpen}
              className="btn btn-accent text-white  px-6 py-2 w-full mt-13 rounded-lg"
            >
              Pay Clean-Up Contribution
            </button>
            <Link className="flex mt-9 justify-center" to="/allIssues">
              <button className="btn btn-dash btn-info ">
                Back to All Issues
              </button>
            </Link>
            {/* Modall->> */}

            <dialog
              ref={bidModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box dark:bg-gray-400 ">
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
                      placeholder="Your Donation"
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
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="text"
                      name="date"
                      required
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={today}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Additional Info</span>
                    </label>
                    <textarea
                      name="additionalInfo"
                      className="textarea textarea-bordered w-full"
                      placeholder="Any extra info..."
                    />
                  </div>
                  <button className="btn text-black btn-accent mt-4 w-full text-xl">
                    Submit
                  </button>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <ContributionDetails
        issueId={issue._id}
        refresh={refresh}
        user={user}
      ></ContributionDetails>
    </div>
  );
};

export default IssueDetails;
