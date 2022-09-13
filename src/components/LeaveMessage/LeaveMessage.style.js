import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NoteContainer = styled.div`
  width: 100%;
  height: 650px;
  margin: 0;
  padding: 0;
  /* font-size: 0px; */
  border-top: 1px solid transparent;
  overflow: hidden;

  @media screen and (max-width: 1160px) {
    transition: 0.8s all ease;
    height: 1600px;
  }
`;

export const NoteTitle = styled.div`
  margin: 50px auto;
  width: 150px;
  height: 50px;
  position: relative;
  display: flex;
  color: royalblue;
  align-items: center;
  justify-content: center;
  font-size: 45px !important;
  overflow: hidden;
`;
export const SubTitle = styled.div`
  margin: 0px auto;
  width: 150px;
  height: 50px;
  position: relative;
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  font-size: 20px !important;
`;

export const NoteWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 260px;
  text-align: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1160px) {
    width: 100%;
    /* display: block; */
    height: 1500px;
  }
  .flip-card {
    /* display: inline-block; */
    background-color: transparent;
    width: 200px;
    height: 200px;
    /* perspective: 1000px; */
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    .p {
      margin-bottom: 0;
    }
  }

  .flip-card-front {
    background-color: #36b6e7;
    color: black;
  }

  .flip-card-back {
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #36b6e7;
    color: white;

    transform: rotateY(180deg);
  }
`;
export const CardContainer = styled.div`
  display: inline-block;
  width: 200px;
  height: 50px;
  margin: 10px 20px;
  .p {
    margin-bottom: 0;
  }
  @media screen and (max-width: 1160px) {
    width: 80%;
    margin: 100px 25%;
  }
`;

export const Message = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  font-size: 20px !important;
  margin-top: 180px;
  justify-content: center;
  /* background-color: antiquewhite; */
  color: black;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    color: rgb(214, 122, 127);
  }
`;

export const LetterBoxContainer = styled.div`
  width: 100%;
  height: 960px;
  background-color: yellow;
`;

export const LetterAnimation = styled.div`
  width: 100%;
  height: 850px;
  background: linear-gradient(70.2deg, #f2eb88, #ffc0cb);
  .letter-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .animated-mail {
    position: absolute;
    height: 150px;
    width: 200px;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    transition: 0.4s;
  }
  .animated-mail .body {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 100px 200px;
    border-color: transparent transparent #725ef2 transparent;
    z-index: 2;
  }
  .animated-mail .top-fold {
    position: absolute;
    top: 50px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 100px 0 100px;
    -webkit-transform-origin: 50% 0%;
    -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
    -moz-transform-origin: 50% 0%;
    -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
    transform-origin: 50% 0%;
    transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
    border-color: #cf4a43 transparent transparent transparent;
    z-index: 2;
  }
  .animated-mail .back-fold {
    position: absolute;
    bottom: 0;
    width: 200px;
    height: 100px;
    background: #cf4a43;
    z-index: 0;
  }
  .animated-mail .left-fold {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 0 50px 100px;
    border-color: transparent transparent transparent #3767a6;
    z-index: 2;
  }
  .animated-mail .letter {
    left: 20px;
    bottom: 0px;
    position: absolute;
    width: 160px;
    height: 60px;
    background: white;
    z-index: 1;
    overflow: hidden;
    -webkit-transition: 0.4s 0.2s;
    -moz-transition: 0.4s 0.2s;
    transition: 0.4s 0.2s;
  }
  .animated-mail .letter .letter-border {
    height: 10px;
    width: 100%;
    background: repeating-linear-gradient(
      -45deg,
      #7756bf,
      #cb5a5e 8px,
      transparent 8px,
      transparent 18px
    );
  }
  .animated-mail .letter .letter-title {
    margin-top: 10px;
    margin-left: 5px;
    height: 10px;
    width: 40%;
    background: #3767a6;
  }
  .animated-mail .letter .letter-context {
    margin-top: 10px;
    margin-left: 5px;
    height: 10px;
    width: 20%;
    background: #3767a6;
  }
  .animated-mail .letter .letter-stamp {
    margin-top: 30px;
    margin-left: 120px;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    background: black;
    opacity: 0.5;
  }
  .shadow {
    position: absolute;
    top: 200px;
    left: 50%;
    width: 400px;
    height: 30px;
    transition: 0.4s;
    transform: translateX(-50%);
    -webkit-transition: 0.4s;
    -webkit-transform: translateX(-50%);
    -moz-transition: 0.4s;
    -moz-transform: translateX(-50%);
    border-radius: 100%;
    background: radial-gradient(
      rgba(78, 30, 211, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
  }
  .letter-image:hover .animated-mail {
    transform: translateY(50px);
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
  }
  .letter-image:hover .animated-mail .top-fold {
    transition: transform 0.4s, z-index 0.2s;
    transform: rotateX(180deg);
    -webkit-transition: transform 0.4s, z-index 0.2s;
    -webkit-transform: rotateX(180deg);
    -moz-transition: transform 0.4s, z-index 0.2s;
    -moz-transform: rotateX(180deg);
    z-index: 0;
  }
  .letter-image:hover .animated-mail .letter {
    height: 180px;
  }
  .letter-image:hover .shadow {
    width: 250px;
  }
`;

export const NoteCards = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  /* &:hover  {
  transform: rotateY(180deg);
} */
`;
export const NoteCardsInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: rotateY(180deg);
  }
`;
export const NoteCardsFront = styled.div`
  background-color: #bbb;
  color: black;
`;

export const NoteCardsBack = styled.div`
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`;

// export const NoteLink = styled(LinkS)``;
