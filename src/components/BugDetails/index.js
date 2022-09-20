import React from "react";
import {
  BugDetailContent,
  BugDetailWrapper,
  BugDetailImage,
  BugImageInfo,
  BugDetailRecomend,
  BugDetailCategroy,
  BugDetailMore,
} from "./BugDetails.style";
import FloatBtn from "../FloatBtn/index";
import Img from "../../images/blog-img14.jpg";
import Img01 from "../../images/blog-img28.jpg";
import Img02 from "../../images/blog-img29.jpg";
import Img03 from "../../images/blog-img23.png";
import Img04 from "../../images/blog-img24.png";
import Img05 from "../../images/blog-img22.png";
import "../../iconfont.css";
const BugDetails = () => {
  return (
    <BugDetailWrapper>
      <BugDetailImage>
        <div className="back">
          <a href="/personal-web/blogPage">Kai4234</a>
        </div>
        <img src={Img}></img>
        <div className="demo" id="title">
          <h2>本网站技术总结</h2>
          <p>
            <span>
              <i className="iconfont icon-shijian"></i>
              &nbsp;发表于&nbsp;2022-09-11
            </span>
            &nbsp;|&nbsp;
            <span>
              <i className="iconfont icon-gengxin"></i>
              &nbsp;更新于&nbsp;2022-09-19
            </span>
            &nbsp;|&nbsp;
            <span>
              <i className="iconfont icon-category"></i>
              &nbsp;前端相关
            </span>
          </p>
          <p>
            <span>
              <i className="iconfont icon-fabiaowenzhang"></i>
              &nbsp;字数统计&nbsp;888
            </span>
            &nbsp;|&nbsp;
            <span>
              <i className="iconfont icon-changdu"></i>
              &nbsp;阅读时长：&nbsp;2分钟
            </span>
            &nbsp;|&nbsp;
            <span>
              <i className="iconfont icon-yueduxiao"></i>
              &nbsp;浏览次数:&nbsp;999
            </span>
            &nbsp;|&nbsp;
            <span>
              <i className="iconfont icon-pinglun1"></i>
              &nbsp;评论次数:&nbsp;111
            </span>
          </p>
        </div>
      </BugDetailImage>
      <BugImageInfo>
        <BugDetailContent>
          <div id="intro">
            <h3>1.项目概述</h3>
            <p>
              (1)&nbsp;本站主要是用来记录个人学习前后端以及语言相关的知识，主要使用技术有：
            </p>
            <p>(2)&nbsp;前端React、Js、HTML、CSS等；</p>
            <p>(3)&nbsp;后端SpringBoot、Mybatis-Plus、MYSQL编写的调试过程.</p>
          </div>
          <div id="logic">
            <h3>2.实现逻辑</h3>
          </div>
          <div id="process">
            <h3>3.实现过程</h3>
          </div>
          <div id="all">
            <h3>4.综述</h3>
          </div>
        </BugDetailContent>
        <BugDetailRecomend>
          <BugDetailCategroy>
            {" "}
            <h3>
              <a href="#title">
                <i className="iconfont icon-category"></i>
                &nbsp;目录
              </a>
            </h3>
            <ul>
              <li>
                <a href="#intro">1.项目概述</a>
              </li>
              <li>
                <a href="#logic">2.实现逻辑</a>
              </li>
              <li>
                <a href="#process">3.实现过程</a>
              </li>
              <li>
                <a href="#all">4.综述</a>
              </li>
            </ul>
          </BugDetailCategroy>
          <BugDetailMore>
            <h3>
              {" "}
              <i className="iconfont icon-shijian"></i>
              &nbsp;更多内容
            </h3>
            <ul>
              <li>
                <a>
                  <img src={Img01}></img>
                  <div>
                    <p>我的2022</p>
                    <p>2022-12-31</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img src={Img02}></img>
                  <div>
                    <p>CSS三大布局</p>
                    <p>2022-09-20</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img src={Img03}></img>
                  <div>
                    <p>SpringBoot</p>
                    <p>2022-11-31</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img src={Img04}></img>
                  <div>
                    <p>我的大学</p>
                    <p>2018-2022</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img src={Img05}></img>
                  <div>
                    <p>MySQL相关</p>
                    <p>2022-10-31</p>
                  </div>
                </a>
              </li>
            </ul>
          </BugDetailMore>
        </BugDetailRecomend>
      </BugImageInfo>
      <FloatBtn />
    </BugDetailWrapper>
  );
};

export default BugDetails;
