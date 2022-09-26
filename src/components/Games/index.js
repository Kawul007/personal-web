import React from "react";
import {
  GameWrapper,
  TitleSection,
  ImgSection,
 
} from "./Games.style";
import Play from "../../images/playgame.gif";
import Video from "../../videos/ocean.mp4";
const Games = () => {
  return (
    <GameWrapper id="play">
      <TitleSection>
        <h1>More games Coming Sooon..</h1>
        <div id="games">
          <p>Card 24</p>
          <p>Calculate</p>
          <p>hahahah</p>
          <p>外界游戏</p>
        </div>
      </TitleSection>
      <ImgSection>
  
       
      </ImgSection>
    </GameWrapper>
  );
};

export default Games;
