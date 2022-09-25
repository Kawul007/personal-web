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
const DailyBug = () => {
  return (
    <>
      <BugWrapper id="bug">
        {BugItem.map((item) => (
          <TopBug href="/personal-web/bugDetail">
            <BugImg src={item.image}></BugImg>
            <BugContent>
              <span>
                {item.date}&nbsp;&nbsp;&nbsp;{item.type}
              </span>
              <h4>{item.title}</h4>
              {/* <p>{item.info}</p> */}
            </BugContent>
          </TopBug>
        ))}
        {/* <MoreBug>
            <a>
              查看更多
              <span className="moreIcon">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-icon_right-pixel"></use>
                </svg>
              </span>
            </a>
          </MoreBug> */}
      </BugWrapper>
    </>
  );
};

export default DailyBug;
