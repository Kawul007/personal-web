import React from "react";
import {
  TalkImage,
  TalkInfo,
  TalkWrapper,
  TopTalk,
  MoreTalk,
} from "../../components/DailyTalk/DailyTalk.style";
import Img01 from "../../images/blog-img14.jpg";
import Img02 from "../../images/blog-img13.jpg";
import Img03 from "../../images/blog-img15.jpg";
import Img04 from "../../images/blog-img16.jpg";
const DailyTalk = () => {
  return (
    <TalkWrapper id="talk">
      <TopTalk></TopTalk>
      <TopTalk></TopTalk>
      <TopTalk></TopTalk>
      <TopTalk></TopTalk>
      <TopTalk></TopTalk>
      <TopTalk></TopTalk>
      <MoreTalk>
        查看更多
        <span className="moreIcon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-icon_right-pixel"></use>
          </svg>
        </span>
      </MoreTalk>
    </TalkWrapper>
  );
};

export default DailyTalk;
