import React, { useContext } from "react";
import { getData } from "../DATA/data";
import SingleMovie from "../components/SingleMovie";
import { movieContext } from "../context";

export default function AllMovies({ onClickHandler }) {
  const { searchQuery, selectedCategory, favorites } = useContext(movieContext);
  const allMovies = getData();

  // Filter movies based on selected category and search query
  const getFilteredMovies = () => {
    let movies = allMovies;

    // First filter by category
    switch (selectedCategory) {
      case "favourites":
        movies = favorites;
        break;
      case "trending":
        // For now, show all movies as trending. You can add specific logic later
        movies = allMovies;
        break;
      case "newRelease":
        // For now, show all movies as new releases. You can add specific logic later
        movies = allMovies;
        break;
      case "comingSoon":
        // For now, show all movies as coming soon. You can add specific logic later
        movies = allMovies;
        break;
      case "watchLater":
        // For now, show all movies as watch later. You can add specific logic later
        movies = allMovies;
        break;
      default:
        movies = allMovies;
    }

    // Then filter by search query if present
    if (searchQuery.trim()) {
      movies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return movies;
  };

  const filteredMovies = getFilteredMovies();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {searchQuery.trim()
          ? `Search Results for "${searchQuery}"`
          : selectedCategory === "favourites"
          ? "Your Favorites"
          : selectedCategory === "trending"
          ? "Trending Movies"
          : selectedCategory === "newRelease"
          ? "New Releases"
          : selectedCategory === "comingSoon"
          ? "Coming Soon"
          : selectedCategory === "watchLater"
          ? "Watch Later"
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
              : selectedCategory === "favourites"
              ? "You haven't added any movies to your favorites yet. Click the heart icon on any movie to add it to your favorites!"
              : "No movies available at the moment."}
          </p>
        </div>
      )}
    </div>
  );
}
