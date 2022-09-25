import React from "react";
import {
  TalkImg,
  TalkWrapper,
  TopTalk,
  MoreTalk,
  TalkContent,
} from "../../components/DailyTalk/DailyTalk.style";
import TalkItem from "./TalkItem";
const DailyTalk = () => {
  return (
    <TalkWrapper id="talk">
      {TalkItem.map((item) => (
        <TopTalk>
          <TalkImg src={item.image}></TalkImg>
          <TalkContent>
            <span>
              {item.date}&nbsp;&nbsp;&nbsp;{item.type}
            </span>
            <h4>{item.title}</h4>
            {/* <p>{item.info}</p> */}
          </TalkContent>
        </TopTalk>
      ))}
      {/* <MoreTalk>
        <a>
          查看更多
          <span className="moreIcon">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-icon_right-pixel"></use>
            </svg>
          </span>
        </a>
      </MoreTalk> */}
    </TalkWrapper>
  );
};

export default DailyTalk;
