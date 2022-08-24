import { element } from "prop-types";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import BlogPage from "./pages/BlogPage";
import BugPage from "./pages/BugPage";
import ComingPage from "./pages/ComingPage";
import MessagePage from "./pages/MessagePage";
import UpdateLog from "./pages/UpdateLog";
function App() {
  return (
    <>
      <BrowserRouter basename="/personal-web">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/mainpage" element={<MainPage />} /> */}
          <Route path="/blogPage" element={<BlogPage />} />
          <Route exact path="/bugPage" element={<BugPage />} />
          <Route path="/comingPage" element={<ComingPage />} />
          <Route path="/messagePage" element={<MessagePage />} />
          <Route path="/updateLog" element={<UpdateLog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
