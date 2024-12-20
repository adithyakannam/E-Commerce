import React from "react";
import { useLocation } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  let location = useLocation().pathname;
  const paths = [
    "/home",
    "/men",
    "/women",
    "/jewelery",
    "/electronics",
  ];
  if (!paths.includes(location)) {
    return null;
  }

  return (
    <footer className="bg-slate-700 mt-10 text-center h-[25vh] flex flex-col justify-center items-center text-white text-lg p-2">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Follow Us</h2>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="text-sm">
        <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
        <p>Contact us: <a href="mailto:support@ecommerce.com" className="text-blue-400 hover:underline">support@ecommerce.com</a></p>
      </div>
      <div>
      <p><a href="https://new-site-60y.pages.dev/" className="text-blue-400 text-[10px] hover:underline">Credits</a></p>
      </div>
    </footer>
  );
};

export default Footer;