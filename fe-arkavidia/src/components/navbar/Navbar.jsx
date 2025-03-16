import React from "react";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GiPortal } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);

  const navLinks = [
    { href: "/", label: "Find Jobs" },
    { href: "/companies", label: "Companies" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-7 px-4 z-50 border-b border-neutral-200">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-2xl text-sky-500 font-bold mr-16 flex items-center"
        >
          <GiPortal />
          JobSync
        </Link>

        {/* Toggle button */}
        <button
          onClick={handleClick}
          className="flex-1 lg:hidden text-neutral-600 ease-in-out duration-300 flex items-center justify-end"
        >
          {open ? (
            <LiaTimesSolid className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>

        <div
          className={`${
            open
              ? "flex absolute top-16 left-[50%] translate-x-[-50%] w-[95%] h-auto md:h-auto md:relative"
              : "hidden"
          } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-4 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-neutral-50 md:border-none border border-neutral-200 md:shadow-none sm:shadow-md shadow-md rounded-md`}
        >
          <ul className="list-none flex md:items-center sm:items-start items-start gap-x-7 gap-y-3 flex-wrap md:flex-row sm:flex-col flex-col text-base text-neutral-500 font-medium">
            {navLinks.map((nav) => (
              <li key={nav.href}>
                <Link
                  to={nav.href}
                  onClick={handleClose}
                  className="hover:text-sky-500 ease-in-out duration-300"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-x-5 relative">
            {/* Notification Icon */}
            <button
              className="text-neutral-600 hover:text-sky-500 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <IoNotificationsOutline className="text-2xl" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute top-10 right-0 w-64 bg-white shadow-md border border-neutral-200 rounded-md p-3">
                <p className="text-sm text-neutral-500">Newest Notifications</p>
                <ul className="mt-2 text-sm text-neutral-700">
                  <li className="p-2 border-b">New job posted</li>
                  <li className="p-2 border-b">Company viewed your profile</li>
                  <li className="p-2 border-b">Interview scheduled</li>
                </ul>
                <Link
                  to="/notification"
                  className="block text-center text-sky-500 hover:text-sky-600 text-sm mt-2"
                >
                  View More
                </Link>
              </div>
            )}

            {/* Sign In Button */}
            <button className="px-6 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white ease-in-out duration-300">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
