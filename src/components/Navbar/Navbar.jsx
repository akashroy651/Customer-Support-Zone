import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm max-w-[1600px] mx-auto">
      <div className="navbar w-full max-w-[1440px] mx-auto">
        {/* Left side Logo */}
        <div className="flex-1">
          <a className="font-bold text-xl">CS — Ticket System</a>
        </div>

        {/* Mobile Dropdown */}
        <div className="flex-none sm:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
             
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Right side Button */}
        <div className="ml-4">
          <a className="btn font-semibold text-[16px] text-[#fff] bg-[#643FDD]">
            <span>+</span> New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
