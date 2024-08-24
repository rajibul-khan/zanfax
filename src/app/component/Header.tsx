"use client";
import React, { useState } from 'react';
import { Cancel01Icon, UserIcon, Search01Icon, ShoppingCart02Icon, Menu04Icon } from "hugeicons-react";
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>(["Air Force 1", "Jordan", "Air Max", "Blazer"]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery(''); // Clear search query when opening search bar
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Optionally, update suggestions based on search query
    // setSuggestions(...);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="relative fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 bg-white shadow-md z-50">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <img src="/nike-logo.png" alt="Logo" className="h-6" />
      </div>

      {/* Search Input */}
      <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-full' : 'w-auto'} ml-auto group hover:bg-gray-100 rounded-full`}>
        {isSearchOpen ? (
          <div className="flex items-center w-full bg-gray-100 p-2 rounded-full relative">
            <Search01Icon className="h-5 w-5 text-gray-600 ml-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search"
              className="flex-grow px-3 py-2 bg-gray-100 border-0 outline-none"
              autoFocus
            />
            <button onClick={toggleSearch} className="ml-2 text-gray-600 hover:text-gray-800">
              Cancel
            </button>

            {/* Suggestions Dropdown */}
            {searchQuery && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 z-10">
                <ul>
                  {suggestions
                    .filter(suggestion => suggestion.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          handleSearch();
                        }}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {suggestion}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button aria-label="Open Search" onClick={toggleSearch} className="relative group p-2 bg-gray-100 rounded-full flex items-center">
            <Search01Icon className="h-5 w-5 text-gray-600" />
            <span className="ml-2 text-gray-600">Search</span>
          </button>
        )}
      </div>

      {/* Icons on the Right */}
      {!isSearchOpen && (
        <div className="flex items-center space-x-6 text-gray-800">
          <button aria-label="User Account" className="relative group p-2 hover:bg-gray-200 rounded-full flex items-center">
            <a href='/user-login'>
              <UserIcon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 z-10 relative" />
            </a>
          </button>
          <button aria-label="Cart" className="relative group p-2 hover:bg-gray-200 rounded-full flex items-center">
            <ShoppingCart02Icon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 z-10 relative" />
          </button>
          <button aria-label="Menu" onClick={toggleNav} className="relative group p-2 hover:bg-gray-200 rounded-full flex items-center">
            <Menu04Icon className="h-5 w-5 text-gray-600 group-hover:text-gray-800 z-10 relative" />
          </button>
        </div>
      )}

      {/* Slide Navigation */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black transition-transform duration-300 ease-in-out ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        } w-[30%] z-40`}
      >
        <button
          className="p-2 m-4 text-black bg-white rounded-md"
          onClick={toggleNav}
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
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleNav}
        ></div>
      )}
    </header>
  );
};

export default Header;
