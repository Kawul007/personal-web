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
              这一块主要是来记录技术博客分享，日常积累，记录bug的主要的网站；
            </CardInfo>
            <MoreInfo>
              <span className="moreCont">查看更多</span>
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
            <CardInfo>这一块主要是来记录技术博客分享，日常积累，记录bug的主要的网站；</CardInfo>
            <MoreInfo>
              <span className="moreCont">查看更多</span>
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
            <CardInfo>这一块主要是来记录技术博客分享，日常积累，记录bug的主要的网站；</CardInfo>
            <MoreInfo>
              <span className="moreCont">查看更多</span>
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
