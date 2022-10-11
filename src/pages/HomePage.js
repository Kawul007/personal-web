import React, { useState } from "react";
import ActiveSection from "../components/ActiveSection";
import BlogSection from "../components/BlogSection";
import NavBar from "../components/NavBar";
import MobileBar from "../components/MobileBar";
import TimeLine from "../components/TimeLine";
import LeaveMessage from "../components/LeaveMessage";
import Footer from "../components/Footer";
import FloatBtn from "../components/FloatBtn";
import MainSection from "../components/MainSection";
import TodoForm from "../components/TodoList/TodoForm";
import Games from "../components/Games";
import Learn from "../components/Learn";
import Filter from "../components/Filter";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Filter /> */}
      <MobileBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ActiveSection />
     
      <BlogSection />
      <MainSection />

      <Games />
      {/* <Learn /> */}
      <FloatBtn />
      <LeaveMessage />
      <Footer />
    </>
  );
};

export default HomePage;
