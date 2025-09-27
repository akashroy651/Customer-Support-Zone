import React from "react";
import { FiX } from "react-icons/fi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col sm:flex-row sm:flex-wrap bg-neutral p-6 sm:p-10 gap-6 sm:gap-10">
        {/* Company Info */}
        <nav className="text-[#A1A1AA] text-[16px] sm:max-w-80 w-full sm:w-auto">
          <h1 className="text-white font-bold text-2xl mb-2">
            CS — Ticket System
          </h1>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>

        {/* Company */}
        <nav className="text-[#A1A1AA] text-[16px] w-full sm:w-auto">
          <h6 className="text-white font-medium text-[20px] mb-2">Company</h6>
          <a className="block">About us</a>
          <a className="block">Our Mission</a>
          <a className="block">Contact Sales</a>
        </nav>

        {/* Services */}
        <nav className="text-[#A1A1AA] text-[16px] w-full sm:w-auto">
          <h6 className="text-white font-medium text-[20px] mb-2">Services</h6>
          <a className="block">Products & Services</a>
          <a className="block">Customer Stories</a>
          <a className="block">Download Apps</a>
        </nav>

        {/* Information */}
        <nav className="text-[#A1A1AA] text-[16px] w-full sm:w-auto">
          <h6 className="text-white font-medium text-[20px] mb-2">
            Information
          </h6>
          <a className="block">Privacy Policy</a>
          <a className="block">Terms & Conditions</a>
          <a className="block">Join Us</a>
        </nav>

        {/* Social Links */}
        <nav className="text-[#A1A1AA] text-[16px] w-full sm:w-auto">
          <h6 className="text-white font-medium text-[20px] mb-2">
            Social Links
          </h6>

          <div className="flex items-center gap-2 mb-2">
            <FiX size={30} color="#fff" />
            <a className="text-lg font-medium">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaFacebook size={30} color="#fff" />
            <a className="text-lg font-medium">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaLinkedin size={30} color="#fff" />
            <a className="text-lg font-medium">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-2">
            <FiMessageSquare size={30} color="#fff" />
            <a className="text-lg font-medium">@CS — Ticket System</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
