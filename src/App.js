import { element } from "prop-types";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <>
      <BrowserRouter basename="/personal-web">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
