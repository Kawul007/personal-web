import React from "react";
import {
  BugImage,
  BugInfo,
  BugWrapper,
  TopBug,
  MoreBug,
} from "../../components/DailyBug/DailyBug.style";
import Img01 from "../../images/blog-img14.jpg";
import Img02 from "../../images/blog-img13.jpg";
import Img03 from "../../images/blog-img15.jpg";
import Img04 from "../../images/blog-img16.jpg";
const DailyBug = () => {
  return (
    <BugWrapper id="bug">
      <TopBug></TopBug>
      <TopBug></TopBug>
      <TopBug></TopBug>
      <TopBug></TopBug>
      <TopBug></TopBug>
      <TopBug></TopBug>
      <MoreBug>
        查看更多
        <span className="moreIcon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-icon_right-pixel"></use>
          </svg>
        </span>
      </MoreBug>
    </BugWrapper>
  );
};

export default DailyBug;
