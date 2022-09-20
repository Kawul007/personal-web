import React from "react";
import {
  BugDetailContent,
  BugDetailWrapper,
  BugDetailImage,
  BugImageInfo,
  BugDetailRecomend,
} from "./BugDetails.style";
import FloatBtn from "../FloatBtn/index";
import Img from "../../images/blog-img14.jpg";
import "../../iconfont.css";
const BugDetails = () => {
  return (
    <BugDetailWrapper>
      <BugDetailImage>
        <img src={Img}></img>
        <div className="demo">
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
            <h4>项目概述</h4>
          </div>
          <div id="logic">
            <h4>实现逻辑</h4>
          </div>
          <div id="process">
            <h4>实现过程</h4>
          </div>
          <div id="all">
            <h4>综述</h4>
          </div>
        </BugDetailContent>
        <BugDetailRecomend>
          <h3>
            {" "}
            <i className="iconfont icon-category"></i>
            &nbsp;目录
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
        </BugDetailRecomend>
      </BugImageInfo>
      <FloatBtn />
    </BugDetailWrapper>
  );
};

export default BugDetails;
