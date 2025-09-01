import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import commingSoon from "../assets/icons/commingSoon.svg";
import newRelease from "../assets/icons/newRelease.svg";
import tranding from "../assets/icons/trending.svg";
import watchLater from "../assets/icons/watchLater.svg";
import { movieContext } from "../context";

export default function SideBar() {
  const { state, dispatch } = useContext(movieContext);

  const handleCategoryClick = (category) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category });
  };

  const getCategoryClass = (category) => {
    const baseClass = "flex items-center space-x-2 px-5 py-3.5 rounded-lg";
    return state.selectedCategory === category
      ? `${baseClass} bg-emerald-500 text-black`
      : `${baseClass} hover:bg-gray-100 transition-colors duration-200`;
  };

  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className={getCategoryClass("trending")}
            href="#"
            onClick={() => handleCategoryClick("trending")}
          >
            <img src={tranding} width="24" height="24" alt="" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className={getCategoryClass("newRelease")}
            href="#"
            onClick={() => handleCategoryClick("newRelease")}
          >
            <img src={newRelease} width="24" height="24" alt="" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className={getCategoryClass("comingSoon")}
            href="#"
            onClick={() => handleCategoryClick("comingSoon")}
          >
            <img src={commingSoon} width="24" height="24" alt="" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className={getCategoryClass("favourites")}
            href="#"
            onClick={() => handleCategoryClick("favourites")}
          >
            <FaHeart />
            <span>Favorites</span>
          </a>
        </li>
        <li>
          <a
            className={getCategoryClass("watchLater")}
            href="#"
            onClick={() => handleCategoryClick("watchLater")}
          >
            <img src={watchLater} width="24" height="24" alt="" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
