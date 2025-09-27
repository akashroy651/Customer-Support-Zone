import React from "react";

const navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm max-w-[1600px] mx-auto">
      <div className="navbar  w-[1440px] mx-auto">
        <div className="flex-1">
          <a className="font-bold text-xl">CS — Ticket System</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
            
          <a className="btn font-semibold text-[16px] text-[#fff] bg-[#643FDD]"><span>+</span>New Ticket</a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
