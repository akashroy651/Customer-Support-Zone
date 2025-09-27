import React from "react";
import { FiX } from 'react-icons/fi';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa'; 
import { FiMessageSquare } from 'react-icons/fi'; 

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral  p-10">
        <nav className="max-w-80 text-[#A1A1AA] text-[16px]">
          <h1 className="text-white font-bold text-2xl">CS — Ticket System</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>
        <nav className="text-[#A1A1AA] text-[16px]">
          <h6 className="text-white font-medium text-[20px]">Company</h6>
          <a className="">About us</a>
          <a className="">Our Mission</a>
          <a className="">Contact Saled</a>
        </nav>
        <nav className="text-[#A1A1AA] text-[16px]">
          <h6 className=" text-white font-medium text-[20px]">Services</h6>
          <a className="">Products & Services</a>
          <a className="">Customer Stories</a>
          <a className="">Download Apps</a>
        </nav>
        <nav className="text-[#A1A1AA] text-[16px]">
          <h6 className=" text-white font-medium text-[20px]">Information</h6>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
          <a>Join Us </a>
        </nav>
        <nav className="text-[#A1A1AA] text-[16px]">
          <h6 className=" text-white font-medium text-[20px]">Social Links</h6>
         
          <div className="flex items-center gap-2">
            <FiX size={30} color="#fff" />
            <a className=" text-lg font-medium">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-2">
            <FaFacebook size={30} color="#fff" />
            <a className=" text-lg font-medium">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin size={30} color="#fff" />
            <a className=" text-lg font-medium">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-2">
            <FiMessageSquare size={30} color="#fff" />
            <a className=" text-lg font-medium">@CS — Ticket System</a>
          </div>

          
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
