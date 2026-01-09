import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { use } from "react";
import { AuthContext } from "../Contex/AuthContex";
import Swal from "sweetalert2";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { user, logout } = use(AuthContext);
  const navigate = useNavigate();

  // logout handler
  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <div className="dark:text-white">
        {user ? (
          <div className="flex">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allIssues">All Issues</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/myIssues">My Issues</NavLink>
            </li>
          </div>
        ) : (
          <div className="flex text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allIssues">All Issues</NavLink>
            </li>
          </div>
        )}
      </div>
    </>
  );
  return (
    <div className="navbar mb-6 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content items-center rounded-box z-1 mt-3 w-[370px] md:w-[400px] p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img className="w-30 h-10 rounded-xl" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-lg mr-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
        >
          {theme === "dark" ? <FaSun className="w-2 h-2" /> : <FaMoon className="w-2 h-2" />}
        </button>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  src={user.photoURL}
                  alt="User"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow dark:bg-black bg-base-100 rounded-xl w-52"
            >
              <li className="font-semibold text-center py-2">
                {user.displayName}
              </li>

              {user ? (
                <li>
                  <button
                    onClick={() => navigate(`/dashboard/profile/${user.email}`)}
                  >
                    Profile
                  </button>
                </li>
              ) : (
                ""
              )}

              {user ? (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link className="btn btn-outline btn-info" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline btn-accent" to="/register">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
