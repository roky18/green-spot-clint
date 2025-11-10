import { Link, NavLink } from "react-router";



const Navbar = () => {
  
 
  const links = (
    <>
      <div className="flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100  shadow-sm">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="w-10 rounded-xl" src="" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* <div className="login-btn navbar-end flex gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src={`${user ? user.photoURL : profileIcon}`}
            alt=""
          />
          {user ? (
            <button onClick={handleLogout} className="btn btn-outline btn-success px-6">
              LogOut
            </button>
          ) : (
            <button>
              <Link to="/login" className="btn btn-outline btn-secondary px-6">
                Login
              </Link>
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
