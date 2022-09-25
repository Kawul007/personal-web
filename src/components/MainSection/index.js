import React, { useEffect, useState } from "react";
import {
  MainTitle,
  MainBlog,
  MainContent,
  MainProfile,
  ContentNav,
  ContentDetail,
  MainContainer,
} from "./MainSection.style";
import DailyBug from "../DailyBug/index";
import DailyTalk from "../DailyTalk/index";
import FilterBtn from "./FilterBtn";
import Items from "../../BlogItems.json"
import { motion, AnimatePresence } from "framer-motion";
import ResultItem from "./ResultItem";
const MainSection = () => {
  const [blog, setBlog] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeBtn, setActiveBtn] = useState(0);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  const fetchBlogs = async () => {
    const data = fetch (
      "../../BlogItems.json"
    );
    console.log(data);
    const items = data.json();
    setBlog(items.results);
    console.log(items);
    setFiltered(items.results);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  // useEffect(() => {
  //   fetch("./BlogItems.json")
  //     .then((response) => response.json())
  //     .then((items) => {
  //       setBlog(items.resoults);
  //       console.log(items);
  //       setFiltered(items.resoults);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // .finally(() => {
  //   //   setLoading(false);
  //   // });
  // }, []);
  return (
    <MainContainer id="blog">
      <FilterBtn
        blog={blog}
        setFiltered={setFiltered}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <motion.div className="blog-container">
        <AnimatePresence>
          {filtered.map((item) => {
            return <ResultItem key={item.id} item={item} />;
          })}
        </AnimatePresence>
      </motion.div>
      {/* <MainContent>
        <div className="container">
          <div className="bloc-tabs">
          <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              全部内容
            </button>
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              前端相关
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              后端相关
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Bug记录
            </button>
            
          </div>
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <DailyBug />
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <DailyTalk />
            </div>
            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Content 3</h2>
            </div>
            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <h2>Content 4</h2>
            </div>
          </div>
        </div>
      </MainContent> */}

      {/* <Footer/> */}
    </MainContainer>
  );
};

export default MainSection;
