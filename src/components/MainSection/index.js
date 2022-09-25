import React, { Components, useState } from "react";
import * as ReactDOM from "react-dom";
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
import ImageProfile from "../../images/profile.png";
import Man from "../../images/man.png";
import MyGit from "../../images/mygit.png";
import Mail from "../../images/mail.png";
import Tele from "../../images/telphone .png";
import Linked from "../../images/Linkedin.png";
import FloatBtn from "../FloatBtn/index";
import Footer from "../Footer/index"
const MainSection = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <MainContainer id="blog">
      <DailyBug/>
      {/* <DailyTalk/> */}
      {/* <MainProfile>
        <img src={ImageProfile} id="image"></img>
        <ul>
          <li>
            <a href="https://github.com/Kawul007">
              <img src={MyGit} title="Follow Me On Github"></img>
            </a>
          </li>
          <li>
            <img src={Mail} title="kai423455@gmail.com"></img>
          </li>
          <li>
            <a href="https://tw9tyeil4i.feishu.cn/docx/doxcnwoIOiKTJKug3GKNBHqZQ8d">
              <img src={Man} title="Online-CV"></img>
            </a>
          </li>
          <li>
            <img src={Tele} title="My Phone +86-18306014646"></img>
          </li>

          <li>
            <a href="www.linkedin.com/in/kawul4234">
              <img src={Linked} title="Follow Me on LinkedIN"></img>
            </a>
          </li>
        </ul> */}
        {/* <MainBlog>
        <h4 style={{ color: "black", marginLeft: 15 }}><i className="iconfont icon-shijian"></i>
                &nbsp;Latest changes</h4>
        <div class="container">
          <ul>
            <li>
              <span></span>
              <div>
              
                <div class="info">Let&apos;s make coolest things in css</div>
              
              </div>
            </li>
            <li>
              <div>
                <span></span>
                
                <div class="info">
                  Let&apos;s make coolest things in javascript
                </div>
              
              </div>
              <span class="number">
                <span></span>
                <span></span>
              </span>
            </li>
            <li>
              <div>
                <span></span>
                <div class="info">Let&apos;s make coolest things in css</div>
              </div>
              <span class="number">
                <span></span>
                <span></span>
              </span>
            </li>
            <li>
              <div>
                <span></span>
                <div class="info">Let&apos;s make coolest things in css</div>
              </div>
              <span class="number">
                <span></span>
                <span></span>
              </span>
            </li>
            <li>
              <div>
                <span></span>
                <div class="info">Let&apos;s make coolest things in css</div>
              </div>
              <span class="number">
                <span></span>
                <span></span>
              </span>
            </li>
          </ul>
        </div>
      </MainBlog> */}
      {/* </MainProfile> */}
      {/* <MainContent>
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
