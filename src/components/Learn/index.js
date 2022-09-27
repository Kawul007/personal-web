import React from "react";
import { LearnContainer, LearnWrapper } from "./Learn.style";
import Article01 from "../../images/article01.jpg";
import Article02 from "../../images/article02.jpg";
import Article03 from "../../images/article03.jpg";
function Learn() {
  return (
    <LearnWrapper id="learn">
      
      <LearnContainer>
        <img src={Article01}></img>
        <p className="date">
          <strong>EPISODE 220825</strong> / 25 AUG 2022
        </p>
        <a>
          <h3>Being a beauty influencer</h3>
        </a>

        <p className="info">
          Hear about women who are using social media to change attitudes to
          beauty
        </p>
      </LearnContainer>
      <LearnContainer>
        <img src={Article02}></img>
        <p className="date">
          <strong>EPISODE 220525</strong> / 25 MAY 2022
        </p>
        <a>
          <h3>Can VR treat fears and phobias?</h3>
        </a>

        <p className="info">
          Hear how tech is helping people change their behaviour for the better
        </p>
      </LearnContainer>
      <LearnContainer>
        <img src={Article03}></img>
        <p className="date">
          <strong>EPISODE 220125</strong> / 25 JAN 2022
        </p>
        <a>
          <h3>Connecting remote communities</h3>
        </a>

        <p className="info">How can you connect the unconnected?</p>
      </LearnContainer>
      {/* <h2>3 Article veryDay, Let English Fly Fly</h2> */}
    </LearnWrapper>
  );
}

export default Learn;
