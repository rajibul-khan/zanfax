"use client"
import React, { useState } from 'react';
import { Cancel01Icon, UserIcon, Search01Icon, ShoppingCart02Icon, Menu04Icon } from "hugeicons-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 bg-white shadow-md z-50">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <img src="/nike-logo.png" alt="Logo" className="h-6" />
      </div>

      {/* Icons on the Right */}
      <div className="flex items-center space-x-6 text-gray-800">
        <button aria-label="Search" className="relative group p-2">
          <Search01Icon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 z-10 relative" />
          <div className="absolute inset-0 rounded-full bg-transparent group-hover:bg-gray-200 transition-all duration-300"></div>
        </button>
        <button aria-label="User Account" className="relative group p-2">
          <a href='UC:\Users\rajibul\zanfaxWebcli\src\app\component\UserLogin.tsx'>
            <UserIcon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 z-10 relative" />
            <div className="absolute inset-0 rounded-full bg-transparent group-hover:bg-gray-200 transition-all duration-300"></div>
          </a>
        </button>
        <button aria-label="Cart" className="relative group p-2">
          <ShoppingCart02Icon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 z-10 relative" />
          <div className="absolute inset-0 rounded-full bg-transparent group-hover:bg-gray-200 transition-all duration-300"></div>
        </button>
        <button aria-label="Menu" onClick={toggleSlider} className="relative group p-2">
          <Menu04Icon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 z-10 relative" />
          <div className="absolute inset-0 rounded-full bg-transparent group-hover:bg-gray-200 transition-all duration-300"></div>
        </button>
      </div>

      {/* The Slider */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="p-2 m-4 text-black bg-white rounded-md"
          onClick={toggleSlider}
        >
          <Cancel01Icon className="w-6 h-6" />
        </button>
        <nav className="mt-8">
          <ul>
            <li className="p-4 hover:bg-gray-700">Home</li>
            <li className="p-4 hover:bg-gray-700">About</li>
            <li className="p-4 hover:bg-gray-700">Services</li>
            <li className="p-4 hover:bg-gray-700">Contact</li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSlider}
        ></div>
      )}
    </header>
  );
};

export default Header;
