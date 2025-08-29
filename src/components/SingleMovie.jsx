import React from "react";
import { getImage } from "../utils/cine_utils";
import Rating from "./rating";

export default function SingleMovie({ movie }) {
  return (
    <figure className="flex flex-col h-full p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <div className="w-full h-80 overflow-hidden rounded-lg">
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
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src="./assets/tag.svg" alt="" />
          <span>${movie.price} | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
}
