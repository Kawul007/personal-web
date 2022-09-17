import React, { Components, useState } from "react";
import * as ReactDOM from "react-dom";
import {
  MainTitle,
  MainBlog,
  MainContent,
  MainProfile,
  ContentNav,
  ContentDetail,
} from "./MainSection.style";
import DailyBug from "../DailyBug/index"
const MainSection = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <MainTitle></MainTitle>
      <MainProfile></MainProfile>
      <MainContent>
        <div className="container">
          <div className="bloc-tabs">
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
              学习外语
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              摸会儿鱼
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              {/* <h2>Content 1</h2> */}
              <DailyBug />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Content 2</h2>
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
      </MainContent>
      <MainBlog></MainBlog>
    </>
  );
};

export default MainSection;
