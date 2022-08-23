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
} from "./MainSection.style";
import Profile from "../../images/profile.png";
import Github from "../../images/github.png";
import Youtube from "../../images/youtube7.png";
import QQ from "../../images/qq-circle.png";
import BlogImg1 from "../../images/blog-img08.jpg";
import BlogImg2 from "../../images/blog-img09.jpg";
import BlogImg3 from "../../images/blog-img10.png";
import BlogImg4 from "../../images/blog-img11.jpg";
const MainSection = () => {
  return (
    <MainWrapper>
      <BlogSection>
        <BlogItem style={{ marginTop: 0 }}>
          <BlogItemImg
            style={{ float: "left", borderRadius: "1.2rem 0 0 1.2rem" }}
            src={BlogImg1}
          ></BlogItemImg>
        </BlogItem>
        <BlogItem>
          <BlogItemImg
            style={{ float: "right", borderRadius: "0 1.2rem  1.2rem 0" }}
            src={BlogImg2}
          ></BlogItemImg>
        </BlogItem>
        <BlogItem>
          <BlogItemImg
            style={{ float: "left", borderRadius: "1.2rem 0 0 1.2rem" }}
            src={BlogImg3}
          ></BlogItemImg>
        </BlogItem>
        <BlogItem>
          <BlogItemImg
            style={{ float: "right", borderRadius: "0 1.2rem  1.2rem 0" }}
            src={BlogImg4}
          ></BlogItemImg>
        </BlogItem>
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
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
      </ProfileSection>
    </MainWrapper>
  );
};

export default MainSection;
