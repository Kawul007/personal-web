import React from "react";
import {
  MainWrapper,
  BlogSection,
  ProfileSection,
  ProfileContent,
  ProfileCard,
  BlogItem,
  CardContent,
  CardTitle,
  BlogItemImg,
  ContentSection,
} from "./MainSection.style";
import { FrameGrid } from "@egjs/react-grid";
import Profile from "../../images/profile.png";
import Github from "../../images/github.png";
import Youtube from "../../images/youtube7.png";
import QQ from "../../images/qq-circle.png";
import BlogImg1 from "../../images/blog-img08.jpg";
import BlogImg2 from "../../images/blog-img09.jpg";
import BlogImg3 from "../../images/blog-img10.png";
import BlogImg4 from "../../images/blog-img11.jpg";
import BlogImg5 from "../../images/blog-img12.jpg";
import BlogImg6 from "../../images/blog-img13.jpg";
import BlogImg7 from "../../images/blog-img14.jpg";
import BlogImg8 from "../../images/blog-img15.jpg";
import BlogImg9 from "../../images/blog-img16.jpg";

const MainSection = () => {
  return (
    <MainWrapper>
      <BlogSection>
        <div className="item">
          <img className="face" src={BlogImg1}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
        <div className="item">
          <img className="face" src={BlogImg2}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
        <div className="item">
          <img className="face" src={BlogImg3}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
        <div className="item">
          <img className="face" src={BlogImg4}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
        <div className="item">
          <img className="face" src={BlogImg5}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
        <div className="item">
          <img className="face" src={BlogImg6}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
        <div className="item">
          <img className="face" src={BlogImg7}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
        <div className="item">
          <img className="face" src={BlogImg8}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
        <div className="item">
          <img className="face" src={BlogImg9}></img>
          <div className="back">
            <a href="/blodDetails">hahahahahahah</a>
          </div>
        </div>
      </BlogSection>
      <ProfileSection>
        <ProfileContent>
          <img src={Profile}></img>
          <h2>Kawuli</h2>
          <p>Don`t Squander It Thinking Do!</p>
          <ul>
            <li>
              <p>文章</p>
              <p style={{ color: "#615e5e" }}>14</p>
            </li>
            <li>
              <p>分类</p>
              <p style={{ color: "#615e5e" }}>16</p>
            </li>
            <li>
              <p>标签</p>
              <p style={{ color: "#615e5e" }}>11</p>
            </li>
          </ul>
          <div className="block"></div>
          <div className="socail">
            <div className="socailItem">
              <a href="https://github.com/Kawul007">
                <img src={Github} style={{ height: 20, width: 20 }}></img>
              </a>
            </div>
            <div className="socailItem">
              <a href="https://youtube.com">
                <img src={Youtube} style={{ height: 20, width: 20 }}></img>
              </a>
            </div>
            <div className="socailItem">
              <a href="https://Thoughtworks.com">
                <img src={QQ}></img>
              </a>
            </div>
          </div>
        </ProfileContent>
        <ProfileCard>
          <CardTitle></CardTitle>
          <CardContent></CardContent>
        </ProfileCard>
      </ProfileSection>
    </MainWrapper>
  );
};

export default MainSection;
