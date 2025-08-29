import React from "react";
import AllMovies from "./AllMovies";
import SideBar from "./SideBar";

export default function MainSection() {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <AllMovies />
      </div>
    </main>
  );
}
