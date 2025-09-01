import React, { useContext, useState } from "react";

import { toast } from "react-toastify";
import moon from "../assets/icons/moon.svg";
import logo from "../assets/movie-covers/logo.svg";
import ring from "../assets/movie-covers/ring.svg";
import shoffingCart from "../assets/movie-covers/shopping-cart.svg";
import CartDetails from "../components/CartDetails";
import { movieContext } from "../context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData, searchQuery, setSearchQuery } = useContext(movieContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for: ${searchQuery}`);
    } else {
      toast.error("Please enter a search term");
    }
  };

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container relative py-4 sm:py-6 px-4">
        {/* Logo and Icons Container - Maintains justify-between */}
        <div className="w-full flex items-center justify-between mb-4 sm:mb-0">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-3 sm:space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCart(true)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={shoffingCart} width="24" height="24" alt="" />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>

        {/* Search Box - Positioned absolutely to not interfere with justify-between */}
        <div className="w-full sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:max-w-md sm:top-1/2 sm:-translate-y-1/2">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-16 sm:pr-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
              />
              {/* Search Icon */}
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              {/* Search Button */}
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-4 sm:px-5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-r-xl transition-colors duration-200 flex items-center justify-center min-w-[60px] sm:min-w-[80px] h-full"
              >
                <span className="hidden sm:inline text-sm font-semibold">
                  Search
                </span>
                <svg
                  className="h-5 w-5 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}
