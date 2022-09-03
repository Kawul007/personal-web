import React from "react";
import {
  BugImage,
  BugInfo,
  BugWrapper,
  TopBug,
} from "../../components/DailyBug/DailyBug.style";
import Img01 from "../../images/blog-img14.jpg";
import Img02 from "../../images/blog-img13.jpg";
import Img03 from "../../images/blog-img15.jpg";
import Img04 from "../../images/blog-img16.jpg";
const DailyBug = () => {
  return (
    <BugWrapper id="bug">
      <TopBug>
        <BugInfo>
          <h4>网站搭建主要技术介绍和思路汇总以及将来添加的功能~~</h4>
          <p>主要内容</p>
          <p>时间、标签</p>
        </BugInfo>
        <BugImage src={Img01}></BugImage>
      </TopBug>
      <TopBug>
        <BugInfo>
          <h4>在使用Github-Pages当中遇到的一些坑！！</h4>
          <p>主要内容</p>
          <p>时间、标签</p>
        </BugInfo>{" "}
        <BugImage src={Img02}></BugImage>
      </TopBug>
      <TopBug>
        <BugInfo>
          <h4>个人学习CSS&HTML&JS学习心得~~</h4>
          <p>主要内容</p>
          <p>时间、标签</p>
        </BugInfo>{" "}
        <BugImage src={Img03}></BugImage>
      </TopBug>
      <TopBug>
        <BugInfo>
          <h4>CSS浮动、定位以及布局相关的知识整理‘</h4>
          <p>主要内容</p>
          <p>时间、标签</p>
        </BugInfo>{" "}
        <BugImage src={Img04}></BugImage>
      </TopBug>
    </BugWrapper>
  );
};

export default DailyBug;
