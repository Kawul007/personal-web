import { element } from "prop-types";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  TechAnimation,
  TechContainer,
  TechImg,
  TechWrapper,
} from "./TimeLine.style";
import TimeLineElements from "./TimeLineElements";
import { ReactComponent as WorkIcon } from "../TimeLine/work.svg";
import { ReactComponent as SchoolIcon } from "../TimeLine/school.svg";
import { hover } from "@testing-library/user-event/dist/hover";
import TimeBg from "../../images/img-2.jpg";
const TimeLine = () => {
  let workIconStyles = { background: "#05c2c2" };
  let schoolIconStyles = { background: "#555ea6" };

  return (
    <TechContainer
      id="technical"
      
    ><img className="img" src={TimeBg}></img>
      <VerticalTimeline>
        {TimeLineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="data"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              {/* <TechAnimation> */}
              <h3>{element.title}</h3>
              <h5>{element.location}</h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`Button${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/techDetails"
                >
                  {element.buttonText}
                </a>
              )}
              {/* </TechAnimation> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </TechContainer>
  );
};

export default TimeLine;
