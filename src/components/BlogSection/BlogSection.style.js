import styled from "styled-components";
// import "../../index.css"
export const BlogWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const CardItem = styled.ul`
  width: 90%;
  height: auto;
  margin: 0px auto;
  justify-content: center;
  /* background-color: aqua; */
  list-style: none;
  @media screen and (max-width: 1160px) {
    /* height: 1200px; */
    width: 100%;
  }
`;
export const Cards = styled.li`
  display: inline-block;
  width: 20%;
  height: 350px;
  margin: 120px 6%;
  box-sizing: border-box;
  @media screen and (max-width: 1160px) {
    width: 80%;
    margin: 50px 10%;
  }
`;
export const CardImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 150px;
  position: static;
  z-index: -1;
  @media screen and (max-width: 1160px) {
    height: 180px;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  width: 210px;
  height: 250px;
  margin-left: 50px;
  margin-top: -4rem;
  background-color: whitesmoke;
  z-index: 999;
  &:hover {
    transform: translateX(-20px);
    box-shadow: 10px 10px 5px #888888;
  }
  @media screen and (max-width: 1160px) {
    width: 80%;
    margin-left: 0px;
    margin-top: -5px;
  }
`;

export const CardTag = styled.div`
  float: left;
  width: 170px;
  height: 40px;
  background-color: #000;
  color: white;
  font-weight: 700;
  margin-left: -35px;
  margin-top: -25px;
  text-align: center;
  line-height: 40px;
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 170px;
  margin-top: 25px;
  font-size: 18px;
  text-indent: 2em;
  font-weight: 500;
  box-sizing: border-box;
  padding: 10px;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MoreInfo = styled.div`
  width: 100%;
  height: 40px;
  .moreCont {
    float: left;
    text-align: center;
    line-height: 35px;
    margin-left: 50px;
  }
  .moreIcon {
    float: right;
    margin-right: 20px;
    text-align: center;
    line-height: 40px;
  }
  .icon {
    width: 1.1em;
    height: 1.1em;
    fill: currentColor;
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
  }
`;
