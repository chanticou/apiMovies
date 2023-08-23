import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentMovies } from "./components/ContentMovies/index";
import { MovieDetail } from "./components/MovieDetail/index";
import { NavBar } from "./components/NavBar/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="contentBody">
                <ContentMovies />
              </div>
            }
          />

          <Route path="/movieDetail/:id_movie" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
