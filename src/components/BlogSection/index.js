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
import "../../iconfont.css";
import BlogImg1 from "../../images/blog-img04.jpg";
import BlogImg2 from "../../images/blog-img03.jpg";
import BlogImg3 from "../../images/blog-img01.jpg";
const BlogSection = () => {
  return (
    <BlogWrapper id="blog">
      <CardItem>
        <Cards>
          <CardImg src={BlogImg1}></CardImg>
          <CardContent>
            <CardTag>前端Related</CardTag>
            {/* <CardInfo>
              这里主要是用来记录个人的日常学习、工作生活的。人生漫长，何不及时行乐呢。But we can be better!
            </CardInfo> */}
            <CardInfo>React相关函数、组件、API调用、JS遇到的坑、Vanilla JS、CSS布局相关调试方法</CardInfo>
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
            {/* <CardInfo>本网站搭建的一个心理路程+相关搭建技术的实现+日常实现过程当中的一些无脑的Bug+还有一些新技术学习笔记,i++;</CardInfo> */}
            <CardInfo>日常前端相关、项目部署【以github-pages为例】、后端学习过程当中出现的bug记录解决方法思路</CardInfo>
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
            <CardTag>后端Related</CardTag>
            {/* <CardInfo>新技术--开心去学习--遇到很多的Bug--OMG好累--解决了Bug好开心--哦又来了--哦耶解决了Bug开心一整天--OVER~~</CardInfo> */}
            <CardInfo>学习和使用有关SpringBoot、以及MySQL数据库搭建本网站后端相关其余技术栈的过程和学习实践记录</CardInfo>
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
