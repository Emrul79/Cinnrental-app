import React, { useContext } from "react";
import { getData } from "../DATA/data";
import SingleMovie from "../components/SingleMovie";
import { movieContext } from "../context";

export default function AllMovies({ onClickHandler }) {
  const { searchQuery } = useContext(movieContext);
  const allMovies = getData();

  // Filter movies based on search query
  const filteredMovies = searchQuery.trim()
    ? allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allMovies;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {searchQuery.trim()
          ? `Search Results for "${searchQuery}"`
          : "All Movies"}
      </h1>

      {filteredMovies.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {filteredMovies.map((movie) => (
            <SingleMovie
              key={movie.id}
              movie={movie}
              onClickHandler={onClickHandler}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-gray-500 mb-2">No movies found</p>
          <p className="text-sm text-gray-400">
            {searchQuery.trim()
              ? `No movies match "${searchQuery}". Try a different search term.`
              : "No movies available at the moment."}
          </p>
        </div>
      )}
    </div>
  );
}
