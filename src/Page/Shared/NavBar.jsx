import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);


  const email = user?.email;
  const photoURL = user?.photoURL;
  const displayName = user?.displayName;
  const navigate = useNavigate();

  const alreadyUser = user?.email;

  const handleLogout = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };

  return (
   <div className="navbar bg-white shadow-md py-3 px-5 rounded-lg mt-2 z-40">
    <div className="navbar-start">
      {/* Mobile Menu */}
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
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
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white rounded-lg mt-3 w-52 p-2 shadow-lg border"
        >
          <li><NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink></li>
          <li><NavLink to="/rooms" className="text-gray-700 hover:text-green-600">Rooms</NavLink></li>
          <li><NavLink to="/bookings" className="text-gray-700 hover:text-green-600">My Bookings</NavLink></li>
        </ul>
      </div>

      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold text-green-600">
        Hotel 11
      </Link>
    </div>

    {/* Desktop Menu */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-6">
        <li><NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink></li>
        <li><NavLink to="/rooms" className="text-gray-700 hover:text-green-600">Rooms</NavLink></li>
        <li><NavLink to="/bookings" className="text-gray-700 hover:text-green-600">My Bookings</NavLink></li>
      </ul>
    </div>

    {/* Right Side */}
    <div className="navbar-end flex items-center gap-4">

      {/* Profile Image */}
      <div className="border-2 border-green-500 rounded-full w-[42px] h-[42px] overflow-hidden">
        <img
          src={photoURL || "https://i.ibb.co/2kRj5R0/default-avatar.png"}
          alt={displayName || "User"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Buttons */}
      {alreadyUser ? (
        <button
          onClick={handleLogout}
          className="btn bg-green-500 hover:bg-green-600 text-white px-5"
        >
          Logout
        </button>
      ) : (
        <>
          <NavLink to="/login">
            <button className="btn bg-green-500 hover:bg-green-600 text-white px-5">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-5">
              Register
            </button>
          </NavLink>
        </>
      )}
    </div>
  </div>
  );
};

export default NavBar;
