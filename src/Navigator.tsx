import React from "react";
import Navbar from "./view/navbar/Navbar";
import Carousel from "./view/Carousel/Carousel";
import Cards from "./view/Cards/Cards";
import Footer from "./view/Footer/Footer";
import Homepage from "./view/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./view/About";

function Navigator() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <div>
                <h1>wrong page</h1>
              </div>
            }
          />
          <Route
            path="/tunahangor.com"
            element={
              <div>
                <Homepage></Homepage>
              </div>
            }
          />
          <Route
            path="/tunahangor.com/about"
            element={
              <div>
                <About></About>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default Navigator;
