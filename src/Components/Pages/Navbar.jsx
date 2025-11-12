import { Link, NavLink } from "react-router";
import icon from "../../assets/Grn-icon.jpg";
import logo from "../../assets/logo.png";
import { use } from "react";
import { AuthContext } from "../Contex/AuthContex";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <div>
        {user ? (
          <div className="flex text-white text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allIssues">All Issues</NavLink>
            </li>
            <li>
              <NavLink to="/addIssues">Add Issues</NavLink>
            </li>
            <li>
              <NavLink to="/myIssues">My Issues</NavLink>
            </li>
            <li>
              <NavLink to="/myContribution">My Contribution</NavLink>
            </li>
          </div>
        ) : (
          <div className="flex text-white text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allIssues">All Issues</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </div>
        )}
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar  bg-pink-400 mb-6 shadow-sm">
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
              className="menu menu-sm dropdown-content bg-blue-500 items-center rounded-box z-1 mt-3 w-[400px] p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="w-30 h-10 rounded-xl" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="login-btn navbar-end flex gap-2">
          <img
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full"
            src={`${user ? user.photoURL : icon}`}
            alt=""
          />
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-success px-6"
            >
              LogOut
            </button>
          ) : (
            <button>
              <Link to="/login" className="btn btn-dash btn-primary px-6">
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
