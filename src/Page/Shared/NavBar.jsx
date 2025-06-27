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
    <div className="navbar bg-[#262626] text-white shadow-lg rounded-xl mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className="menu menu-sm dropdown-content bg-[#262626] rounded-box mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink></li>
            <li><NavLink to="/rooms" className="text-white hover:text-gray-300">Rooms</NavLink></li>
            <li><NavLink to="/bookings" className="text-white hover:text-gray-300">My Bookings</NavLink></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-extrabold text-white">
          Hotel 11
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink></li>
          <li><NavLink to="/rooms" className="text-white hover:text-gray-300">Rooms</NavLink></li>
          <li><NavLink to="/bookings" className="text-white hover:text-gray-300">My Bookings</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end px-2 gap-4">

        {/* user image set */}


        

      <div className=" border-2 rounded-full w-[40px] h-[40px]">
            <img
              src={photoURL || "https://i.ibb.co/2kRj5R0/default-avatar.png"}
              alt={displayName || "User"}
              className="w-full h-full object-cover rounded-full"
            />
          </div> 
       



        



        {alreadyUser ? (
          <>
            <button
              onClick={handleLogout}
              className="btn bg-green-500 hover:bg-green-600 text-white"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn bg-green-500 hover:bg-green-600 text-white">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white">
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
