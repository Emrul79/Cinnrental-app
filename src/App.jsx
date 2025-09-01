import React, { useReducer } from "react";

// eslint-disable-next-line no-unused-vars
import { movieContext, themeContext } from "./context";
import RootPage from "./pages/RootPage";
import { movieReducer, initialState } from "./Reducer/movieReducer";
function App() {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <themeContext.Provider value={{ darkMode, setDarkMode }}>
      <movieContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <RootPage />
      </movieContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
