import React from "react";
import ActiveSection from "../components/ActiveSection";
import BlogSection from "../components/BlogSection";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <ActiveSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
