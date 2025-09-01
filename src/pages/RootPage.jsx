import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { themeContext } from "../context";
import Footer from "./Footer";
import Header from "./Header";
import MainSection from "./MainSection";
export default function RootPage() {
  const { darkMode } = useContext(themeContext);
  return (
    <div className={`${darkMode ? "dark" : "light"} font-[Sora]`}>
      <Header />
      <MainSection />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
