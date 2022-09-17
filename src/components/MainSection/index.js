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
import DailyBug from "../DailyBug/index";
import DailyTalk from "../DailyTalk/index";
import ImageProfile from "../../images/profile.png"
import Man from "../../images/man.png"
import MyGit from "../../images/mygit.png"
import Mail from "../../images/mail.png"
import Tele from "../../images/telphone .png"
import Linked from "../../images/Linkedin.png"
import FloatBtn from "../FloatBtn/index"
const MainSection = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <MainTitle>
        <a>Kai4234</a>
      </MainTitle>
      <FloatBtn/>
      <MainProfile>
        <img src={ImageProfile}></img>
        <ul>
          <li><img src={MyGit}></img><a href="girhub.com/Kawul007">GitHube</a></li>
          <li><img src={Mail}></img><a href="#">kai423455@gmail.com</a></li>
          <li><img src={Man}></img><a href="https://tw9tyeil4i.feishu.cn/docx/doxcnwoIOiKTJKug3GKNBHqZQ8d">Online-CV</a></li>
          <li><img src={Tele}></img><a href="#">+86 18306014646</a></li>
          <li><img src={Linked}></img><a href="www.linkedin.com/in/kawul4234"> Linkedin</a></li>
        </ul>
      </MainProfile>
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
              {/* <h2>Content 2</h2> */}
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
      </MainContent>
      <MainBlog>
        <h4 style={{ color: "black", marginTop: 45, marginLeft: 15 }}>
          Latest changes
        </h4>
        <div class="container">
          <ul>
            <li>
              <span></span>
              <div>
                <div class="title">Codify</div>
                <div class="info">Let&apos;s make coolest things in css</div>
                <div class="type">Presentation</div>
              </div>
            </li>
            <li>
              <div>
                <span></span>
                <div class="title">Codify</div>
                <div class="info">
                  Let&apos;s make coolest things in javascript
                </div>
                <div class="type">Presentation</div>
              </div>
              <span class="number">
                <span></span>
                <span></span>
              </span>
            </li>
            <li>
              <div>
                <span></span>
                <div class="title">Codify</div>
                <div class="info">Let&apos;s make coolest things in css</div>
                <div class="type">Review</div>
              </div>
              <span class="number">
                <span></span>
                <span></span>
              </span>
            </li>
            <li>
              <div>
                <span></span>
                <div class="title">Codify</div>
                <div class="info">Let&apos;s make coolest things in css</div>
                <div class="type">Review</div>
              </div>
              <span class="number">
                <span></span>
                <span></span>
              </span>
            </li>
            <li>
              <div>
                <span></span>
                <div class="title">Codify</div>
                <div class="info">Let&apos;s make coolest things in css</div>
                <div class="type">Review</div>
              </div>
              <span class="number">
                <span></span>
                <span></span>
              </span>
            </li>
          </ul>
        </div>
      </MainBlog>
    </>
  );
};

export default MainSection;
