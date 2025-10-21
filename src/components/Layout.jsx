// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="bg-blue-600 dark:bg-gray-800 text-white text-center py-4 mt-8">
        <p>© {new Date().getFullYear()} PLP Task Manager</p>
      </footer>
    </div>
  );
};

export default Layout;
