import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allSportsEquipment"}>All Sports Equipment</NavLink>
      </li>
      <li>
        <NavLink to={"/addEquipment"}>Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to={`/myEquipments/${user?.email}`}>My Equipment</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full  shadow-md fixed top-0 left-0 right-0 z-10 glass-effect">
      <Tooltip anchorSelect=".my-anchor-element" place="bottom">
        {user?.displayName}
      </Tooltip>
      <div className="navbar  w-10/12 mx-auto  ">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <li>
                {user && (
                  <>
                    <a className="my-anchor-element">
                      <img
                        className="w-9 h-9 rounded-full object-cover"
                        src={user.photoURL}
                        alt=""
                      />
                    </a>
                  </>
                )}
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Equipment</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="lg:flex gap-3 mr-6 items-center hidden">
            {user && (
              <>
                <a className="my-anchor-element">
                  <img
                    className="w-9 h-9 rounded-full object-cover"
                    src={user.photoURL}
                    alt=""
                  />
                </a>
              </>
            )}
          </div>
          {user ? (
            <button
              onClick={logOut}
              className="btn bg-[#F4C724] text-[#333333]"
            >
              Log out
            </button>
          ) : (
            <Link to={"/login"} className="btn bg-[#F4C724] text-[#333333]">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
