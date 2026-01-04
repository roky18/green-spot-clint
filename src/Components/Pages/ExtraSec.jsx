import { useEffect, useState } from "react";
import {
  FaUsers,
  FaCheckCircle,
  FaHourglassHalf,
  FaHandsHelping,
} from "react-icons/fa";

const ExtraSec = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://green-spot-api-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Community Stats 
          </h2><hr className="mb-5" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="stat shadow hover:bg-cyan-200 rounded-lg">
              <div className="stat-figure text-primary">
                <FaUsers size={40} />
              </div>

              <div className="stat-title">Total Registered Users</div>

              <div className="stat-value">
                totalUsers <span className="text-pink-500">{users.length}</span>
              </div>
            </div>
            <div className="stat shadow hover:bg-cyan-200 rounded-lg">
              <div className="stat-figure text-success">
                <FaCheckCircle size={40} />
              </div>
              <div className="stat-title">Issues Resolved</div>
              <div className="stat-value">issuesResolved</div>
            </div>
            <div className="stat shadow hover:bg-cyan-200 rounded-lg">
              <div className="stat-figure text-warning">
                <FaHourglassHalf size={40} />
              </div>
              <div className="stat-title">Issues Pending</div>
              <div className="stat-value">issuesPending</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold">Join Our Clean Drive!</h3>
            <p className="mt-2">
              Be a volunteer and help make our community cleaner and safer.
            </p>
          </div>
          <button className="btn btn-accent btn-lg flex items-center gap-2">
            <FaHandsHelping size={20} />
            <span>Become a Volunteer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtraSec;
