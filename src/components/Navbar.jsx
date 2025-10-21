// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context.jsx";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white shadow-md transition-colors duration-300">
      <div className="container flex justify-between items-center py-4 px-4 mx-auto">
        <h1 className="text-2xl font-bold">PLP Task Manager</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
          <li><NavLink to="/tasks" className="hover:underline">Tasks</NavLink></li>
          <li><NavLink to="/posts" className="hover:underline">API Data</NavLink></li>
          <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
          <button
            onClick={toggleTheme}
            className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-105 transition-transform"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </ul>

        {/* Mobile toggle button */}
        <button
          className="md:hidden p-2 bg-gray-800 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center bg-blue-700 dark:bg-gray-800 space-y-4 py-4 md:hidden">
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/tasks" onClick={() => setMenuOpen(false)}>Tasks</NavLink></li>
          <li><NavLink to="/posts" onClick={() => setMenuOpen(false)}>API Data</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
