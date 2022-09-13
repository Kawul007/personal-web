import React from "react";
import {
  BugImage,
  BugContent,
  BugWrapper,
  TopBug,
  MoreBug,
  BugImg,
} from "../../components/DailyBug/DailyBug.style";
import BugItem from "./BugItem";
import Img01 from "../../images/blog-img14.jpg";
import Img02 from "../../images/blog-img13.jpg";
import Img03 from "../../images/blog-img15.jpg";
import Img04 from "../../images/blog-img16.jpg";
const DailyBug = () => {
  return (
    <>
      <BugWrapper id="bug">
        {BugItem.map((item) => (
          <TopBug>
            <BugContent>
              {" "}
              <p>{item.date}</p>
              <h2>{item.title}</h2>
              <p>{item.info}</p>
              <p>{item.type}</p>
            </BugContent>
            <BugImg src={item.image}></BugImg>
          </TopBug>
        ))}
        <MoreBug>
            <a>
              查看更多
              <span className="moreIcon">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-icon_right-pixel"></use>
                </svg>
              </span>
            </a>
          </MoreBug>
      </BugWrapper>
    </>
  );
};

export default DailyBug;
