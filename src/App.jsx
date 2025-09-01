import React from "react";

// eslint-disable-next-line no-unused-vars
import { movieContext, themeContext } from "./context";
import RootPage from "./pages/RootPage";

function App() {
  const [cartData, setCartData] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("trending");
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <themeContext.Provider value={{ darkMode, setDarkMode }}>
      <movieContext.Provider
        value={{
          cartData,
          setCartData,
          searchQuery,
          setSearchQuery,
          favorites,
          setFavorites,
          selectedCategory,
          setSelectedCategory,
        }}
      >
        <RootPage />
      </movieContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
