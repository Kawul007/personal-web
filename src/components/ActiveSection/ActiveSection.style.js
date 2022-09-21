import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const IconLink = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding: 0 1rem;
  height: 100%; */
  margin-top: 200px;
  display: block;
  position: relative;
  overflow: hidden;
  text-align: center;
  align-items: center;
  text-align: center;
  animation-name: beat;
  /*动画名称*/
  animation-duration: 0.5s;
  /*设置秒数*/
  animation-timing-function: linear;
  /*速度曲线*/
  animation-iteration-count: infinite;
  /*播放次数*/
  animation-direction: alternate;
  /*逆向播放*/
  animation-play-state: running;
  /*正在运行*/

  @keyframes beat {
    0% {
      bottom: 15%;
    }

    100% {
      bottom: 14%;
    }
  }
`;

export const SectionContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 750px;
  position: relative;
  z-index: 1;
`;

export const SectionBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media screen and (min-width: 1160px) {
    transition: 0.8s all ease;
  }
`;

export const BackgroundVedio = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000;
  background-color: black;
  opacity: 0.4;
`;
export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000;
  background-color: black;
  opacity: 0.6;
`;
export const SectionContent = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
  /* background-color: black;
  opacity: 0.4; */
  font-size: 30px;
  font-weight: 700;
  margin-top: 500px;
  text-align: center;
  color: white;
  h3{
    font-size: 1.0em;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  /* z-index: 1000; */
 
  /* @media screen and (min-width: 1160px) {
    h3 {
      font-size: 20px;
    }
  } */
`;

export const SectionItem = styled.div`
  /* width: 650px;
  height: 50px; */
  margin-top: 50px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  text-align: center;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  font-family: sans-serif;
  /* margin: 0 auto; */
  /* justify-content: center; */
  justify-content: space-around;
  /* margin-left: 350px; */
  @keyframes typing {
    from {
      width: 0;
    }
  }
  /* @keyframes typing20 {
  from {
    width: 0;
  }
  50% {
    width: 20ch;
  }
  100% {
    width: 0
  }
} */
  @keyframes caret {
    50% {
      border-color: currentColor;
    }
  }
  h3 {
    /* width: 30ch; 文本长度 */
    overflow: hidden;
    white-space: nowrap;
    border-right: 0.06em solid transparent;
    animation: typing 6s steps(30), caret 1s steps(1) infinite;
    font-family: Consolas, Monaco, monospace;
  }
  @media screen and (min-width: 1160px) {
    transition: 0.8s all ease;
    font-size: 25px;
  }
`;

export const SectionIcon = styled.div`
  margin-top: 400px;
  display: block;
  position: relative;
  overflow: hidden;
  text-align: center;
  align-items: center;
  text-align: center;
  animation-name: beat;
  /*动画名称*/
  animation-duration: 0.5s;
  /*设置秒数*/
  animation-timing-function: linear;
  /*速度曲线*/
  animation-iteration-count: infinite;
  /*播放次数*/
  animation-direction: alternate;
  /*逆向播放*/
  animation-play-state: running;
  /*正在运行*/

  @keyframes beat {
    0% {
      bottom: 15%;
    }

    100% {
      bottom: 14%;
    }
  }
`;
