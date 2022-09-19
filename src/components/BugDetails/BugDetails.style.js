import styled from "styled-components";

export const BugDetailWrapper = styled.div`
  width: 100%;
  height: 1300px;
`;
export const BugDetailImage = styled.div`
  display: inline-block;
  width: 100%;
  height: 300px;
  /* overflow: hidden; */
  img {
    display: inline-block;
    /* overflow: hidden; */
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .demo {
    position: absolute;
    width: 100%;
    height: 300px;
    /* background-color: aliceblue; */
    margin-top: -300px;
    color: white;
    text-align: center;
    h2 {
      margin-top: 110px;
    }
    p {
      .icon {
        width: 1.1em;
        height: 1.1em;
        fill: currentColor;
        display: inline-block;
      }
    }
  }
`;
export const BugImageInfo = styled.div`
  position: absolute;
  width: 90%;
  height: 1000px;
  /* margin-top: -100px; */
  /* padding: 0px;
  margin: 0px; */
  margin: 0px 5%;
  text-align: center;
  color: white;
  z-index: 1111;
  background-color: black;
`;
export const BugDetailContent = styled.div`
  float: left;
  width: 80%;
  height: 100%;
  #intro{
    width: 100%;
    height: 250px;
    background-color: blue;
  }
  #logic{
    width: 100%;
    height: 250px;
    background-color: violet;
  }
  #process{
    width: 100%;
    height: 250px;
    background-color: green;
  }
  #all{
    width: 100%;
    height: 250px;
    background-color:greenyellow;
  }
`;

export const BugDetailRecomend = styled.div`
  position: sticky;
  float: right;
  width: 20%;
  height: 1000px;
  top: 0px;
  background-color: yellow;
  h3 {
    color: #000;
    font-weight: 700;
  }
  ul li{
    list-style: none;
  }
`;
