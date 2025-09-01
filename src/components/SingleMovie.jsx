import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import tag from "../assets/movie-covers/tag.svg";
import { movieContext } from "../context";
import { getImage } from "../utils/cine_utils";
import MovieDetailsPopUp from "./MovieDetailsPopUp";
import Rating from "./rating";

export default function SingleMovie({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(movieContext);

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      dispatch({ type: "ADD_TO_CART", payload: movie });
      toast.success(`Added ${movie.title} to cart`);
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the cart already`
      );
    }
  };

  const handleClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleSelectedMovie = (movie) => () => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleToggleFavorite = (event, movie) => {
    event.stopPropagation();
    const isFavorite = state.favorites.find((item) => item.id === movie.id);

    if (isFavorite) {
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: movie });
      toast.success(`Removed ${movie.title} from favorites`);
    } else {
      dispatch({ type: "ADD_TO_FAVORITES", payload: movie });
      toast.success(`Added ${movie.title} to favorites`);
    }
  };

  const isFavorite = state.favorites.find((item) => item.id === movie.id);
  return (
    <>
      {showModal && (
        <MovieDetailsPopUp
          movie={selectedMovie}
          onClose={handleClose}
          handleAddToCart={handleAddToCart}
        />
      )}
      <figure className="flex flex-col min-h-[500px] p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <div onClick={handleSelectedMovie(movie)} className="cursor-pointer">
          <div
            onClick={() => setShowModal(true)}
            className="w-full h-80 overflow-hidden rounded-lg"
          >
            <img
              className="w-full h-full object-cover"
              src={getImage(movie.img)}
              alt={movie.title}
            />
          </div>
          <figcaption className="flex flex-col flex-1 pt-4">
            <h3 className="text-xl mb-1 line-clamp-2">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center justify-between space-x-1 mb-4">
              <Rating value={movie.rating} />
              <button
                onClick={(e) => handleToggleFavorite(e, movie)}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                  isFavorite
                    ? "text-red-800 bg-red-50 dark:bg-red-900/20"
                    : "text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                }`}
                title={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
              >
                <FaHeart
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isFavorite ? "fill-current" : ""
                  }`}
                />
              </button>
            </div>
            <div className="flex-1"></div>
            <button
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-emerald-500 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm hover:bg-emerald-600 transition-colors duration-200"
            >
              <img src={tag} />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
