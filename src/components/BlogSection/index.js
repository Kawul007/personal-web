import React from "react";
import {
  BlogWrapper,
  CardContent,
  CardImg,
  CardInfo,
  CardItem,
  Cards,
  CardTag,
  MoreInfo,
} from "./BlogSection.style";
import "../../index.css";
import "../../fonts/iconfont.css";
import BlogImg1 from "../../images/blog-img04.jpg";
import BlogImg2 from "../../images/blog-img03.jpg";
import BlogImg3 from "../../images/blog-img01.jpg";
const BlogSection = () => {
  return (
    <BlogWrapper id="blogs">
      <CardItem>
        <Cards>
          <CardImg src={BlogImg1}></CardImg>
          <CardContent>
            <CardTag>日常生活</CardTag>
            <CardInfo>
              这里主要是用来记录个人的日常学习、工作生活的。人生漫长，何不及时行乐呢。But we can be better!
            </CardInfo>
            <MoreInfo>
              <span className="moreCont"><a href="/personal-web/blogPage">查看更多</a></span>
              <span className="moreIcon">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-icon_right-pixel"></use>
                </svg>
              </span>
            </MoreInfo>
          </CardContent>
        </Cards>
        <Cards>
          {" "}
          <CardImg src={BlogImg3}></CardImg>
          <CardContent>
            <CardTag>Bug记录</CardTag>
            <CardInfo>本网站搭建的一个心理路程+相关搭建技术的实现+日常实现过程当中的一些无脑的Bug+还有一些新技术学习笔记,i++;</CardInfo>
            <MoreInfo>
              <span className="moreCont"><a href="/personal-web/blogPage">查看更多</a></span>
              <span className="moreIcon">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-icon_right-pixel"></use>
                </svg>
              </span>
            </MoreInfo>
          </CardContent>
        </Cards>
        <Cards>
          {" "}
          <CardImg src={BlogImg2}></CardImg>
          <CardContent>
            <CardTag>杂谈</CardTag>
            <CardInfo>新技术--开心去学习--遇到很多的Bug--OMG好累--解决了Bug好开心--哦又来了--哦耶解决了Bug开心一整天--OVER~~</CardInfo>
            <MoreInfo>
              <span className="moreCont"><a href="/personal-web/blogPage">查看更多</a></span>
              <span className="moreIcon">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-icon_right-pixel"></use>
                </svg>
              </span>
            </MoreInfo>
          </CardContent>
        </Cards>
      </CardItem>
    </BlogWrapper>
  );
};

export default BlogSection;
