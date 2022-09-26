import styled from "styled-components";

export const GameWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
export const TitleSection = styled.div`
  float: left;
  text-align: center;
  width: 50%;
  height: 100%;
  h1 {
    margin-top: 30%;
  }
  #games {
    width: 440px;
    height: 200px;
    margin: 10px auto;
    /* background-color: red; */

    p {
      float: left;
      text-align: center;
      width: 220px;
      height: 40px;
      line-height: 40px;
      font-weight: 700;
      &:hover {
        background-color: mediumaquamarine;
      }
    }
  }
`;

export const ImgSection = styled.div`
  float: right;
  width: 50%;
  height: 100%;
  background-color: #000;
 
`;


