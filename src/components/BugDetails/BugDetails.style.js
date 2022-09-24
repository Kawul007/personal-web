import styled from "styled-components";

export const BugDetailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

export const BugDetailImage = styled.div`
  display: inline-block;
  width: 100%;
  height: 400px;
  /* background-color: rgba(255, 255, 255, 0.9); */

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: -50px;
    background-size: cover;
    vertical-align: top;
    z-index: -1;
   
  }
  .demo {
    width: 100%;
    height: fit-content;
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
  .back {
    width: 100%;
    height: 50px;
    z-index: 111111;
    a {
      margin: 5px 50px;
      text-decoration: none;
      color: white;
      font-weight: 700;
      font-size: 22px;
    }
  }
`;
export const BugImageInfo = styled.div`
  position: relative;
  width: 90%;
  height: fit-content;
  margin: 0px 5%;
  color: white;
  z-index: 1111;
`;
export const BugDetailContent = styled.div`
  position: relative;
  float: left;
  width: 80%;
  height: auto;
  margin: 15px 0px;
  border-radius: 10px;
  background-color: #c4fbec;
  #intro {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0px 0px;
    /* box-shadow: 5px 0px 5px 5px grey; */

  }
  #logic {
    width: 100%;
    height: 100vh;
    /* box-shadow: 5px 5px 5px grey; */
  }
  #process {
    width: 100%;
    height: 100vh;
    /* box-shadow: 0px 0px 5px grey; */
  }
  #all {
    width: 100%;
    height: 100vh;
    border-radius: 0px 0px 10px 10px;
    /* box-shadow: 5px 5px 5px grey; */
  }
  h3 {
    width: 90%;
    color: #000;
    font-weight: 700;
    padding: 30px;
    margin-block-start: 0;
    margin-block-end: 0;
    border-bottom: 1px solid #000;
  }
  p {
    padding: 10px;
    color: #000;
  }
`;

export const BugDetailRecomend = styled.div`
  position: sticky;
  float: right;
  width: 20%;
  height: 100vh;
  

  /* background-color: #f0bdef; */
`;
export const BugDetailCategroy = styled.div`
  margin: 15px 5%;
  width: 90%;
  height: 200px;
  border-radius: 10px;
  background-color: #c4fbec;
  /* box-shadow: 5px 5px 5px grey; */
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
  h3 {
    padding: 5px;
    width: fit-content;
    color: #000;
    font-weight: 700;
    padding-left: 20px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  h3 a {
    text-decoration: none;
    color: #000;
  }
  ul li {
    margin-top: 5px;
    width: 70%;
    padding-left: 20px;
    font-size: 18px;
    list-style: none;
    &:hover {
      background-color: #f0bdef;
    }
  }
  ul li a {
    width: 70%;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    &:active {
      color: #f0bdef;
    }
  }
`;
export const BugDetailMore = styled.div`
  margin: 15px 5%;
  width: 90%;
  height: 350px;
  border-radius: 10px;
  background-color: #c4fbec;
  /* box-shadow: 5px 5px 5px grey; */
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
  h3 {
    color: #000;
    padding: 10px;
    margin-left: 10px;
  }
  ul {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  ul li {
    width: 90%;
    height: 60px;
    margin: 5px 5%;
    list-style: none;
    /* background: #000; */
  }
  ul li a img {
    float: left;
    margin: 5px 0px;
    width: 35%;
    height: 50px;
    &:hover {
      transform: scale(1.1);
    }
  }
  ul li a div {
    float: left;
    margin-left: 8px;
  }
  ul li a div p {
    color: #000;
    font-weight: 500;
    padding: 5px;
    font-size: 12px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;
