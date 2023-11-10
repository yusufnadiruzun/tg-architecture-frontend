import React from "react";
import Navbar from "./view/Homepage/navbar/Navbar";
import Homepage from "./view/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./view/About/About";
import Login from "./view/Admin/Login";
import Projects from "./view/Projects/Projects";
import Proje from "./view/Projects/Proje";

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
            path="/hakkimizda"
            element={
              <div>
                <Navbar></Navbar>
                <About></About>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Login></Login>
              </div>
            }
          />
           <Route
            path="/projeler"
            element={
              <div>
                 <Navbar></Navbar>
                <Projects></Projects>
              </div>
            }
          />
           <Route
            path="/proje"
            element={
              <div>
                 <Navbar></Navbar>
                <Proje></Proje>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default Navigator;
