import styled from "styled-components";

export const BugDetailWrapper = styled.div`
  width: 100%;
  height: auto;
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
    vertical-align: top;
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
  /* height: 1000px; */
  /* margin-top: -100px; */
  /* padding: 0px;
  margin: 0px; */
  top: 300px;
  margin: 0px 5%;
  /* text-align: center; */
  color: white;
  z-index: 1111;
`;
export const BugDetailContent = styled.div`
  float: left;
  width: 80%;
  height: auto;

  background-color: aqua;
  #intro {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: blue;
  }
  #logic {
    width: 100%;
    height: 100vh;
    background-color: violet;
  }
  #process {
    width: 100%;
    height: 100vh;
    background-color: green;
  }
  #all {
    width: 100%;
    height: 100vh;
    background-color: greenyellow;
  }
  h4 {
    padding: 30px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

export const BugDetailRecomend = styled.div`
  position: sticky;
  float: right;
  width: 20%;
  height: 100vh;
  top: 0px;
  left: 0;
  background-color: #d7d7d7;
  h3 {
    width: fit-content;
    color: #000;
    font-weight: 700;
    padding-left: 20px;
  }
  ul li {
    width: fit-content;
    padding-left: 20px;
    font-size: 18px;
    list-style: none;
  }
  ul li a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
  }
`;
