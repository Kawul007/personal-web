import React, { useState } from "react";
import ActiveSection from "../components/ActiveSection";
import BlogSection from "../components/BlogSection";
import NavBar from "../components/NavBar";
import MobileBar from "../components/MobileBar";
import TimeLine from "../components/TimeLine";
import LeaveMessage from "../components/LeaveMessage";
import Footer from "../components/Footer";
import FloatBtn from "../components/FloatBtn";
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
      <TimeLine />
      <LeaveMessage />
      <Footer />
      <FloatBtn></FloatBtn>
      {/* <div></div> */}
    </>
  );
};

export default HomePage;
