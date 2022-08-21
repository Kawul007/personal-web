import React, { useState } from "react";
import ActiveSection from "../components/ActiveSection";
import BlogSection from "../components/BlogSection";
import NavBar from "../components/NavBar";
import MobileBar from "../components/MobileBar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ActiveSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
