import React from "react";
import { getData } from "../DATA/data";
import SingleMovie from "../components/SingleMovie";

export default function AllMovies({ onClickHandler }) {
  const data = getData();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Movies</h1>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {data.map((movie) => (
          <SingleMovie
            key={movie.id}
            movie={movie}
            onClickHandler={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
}
