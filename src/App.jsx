import React from "react";
// eslint-disable-next-line no-unused-vars
import { movieContext } from "./context";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import MainSection from "./pages/MainSection";

function App() {
  const [cartData, setCartData] = React.useState([]);
  console.log(cartData);
  return (
    <movieContext.Provider value={{ cartData, setCartData }}>
      <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        <Header />
        <MainSection />
        <Footer />
      </div>
    </movieContext.Provider>
  );
}

export default App;
