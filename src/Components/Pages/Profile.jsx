import { getAuth } from "firebase/auth";
import { Link } from "react-router";

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser; // Firebase এর signed in user

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            className="w-32 h-32 rounded-full border-4 border-indigo-300"
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User Avatar"
          />
        </div>

        {/* Name & Email */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">
            {user?.displayName || "No Name Set"}
          </h2>
          <p className="text-md text-gray-600">{user?.email}</p>
        </div>

        <div className="mt-6 text-center text-gray-600">
          <p>This is your profile page!</p>
          <Link to="/dashboard" className="btn btn-info my-3">
            Go To DashBoard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
