import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import tag from "../assets/movie-covers/tag.svg";
import { movieContext } from "../context";
import { getImage } from "../utils/cine_utils";
import MovieDetailsPopUp from "./MovieDetailsPopUp";
import Rating from "./rating";

export default function SingleMovie({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(movieContext);

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCartData([...cartData, movie]);
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
            <div className="flex items-center space-x-1 mb-4">
              <Rating value={movie.rating} />
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
