// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mathias Mwaro. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
