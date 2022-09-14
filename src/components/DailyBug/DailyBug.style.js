import styled from "styled-components";

export const BugWrapper = styled.div`
  width: 100%;
  height: 1350px;
  margin: 0;
  padding: 0;
  font-size: 0;
  border-bottom: 1px solid transparent;
  /* background-color: blue; */
`;
export const TopBug = styled.a`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  &:hover {
   img{
    transform: scale(1.1);
   }
   background-color:  #d9eff7;
  }
`;
export const BugImg = styled.img`
  float: right;
  width: 30%;
  height: 200px;
  box-sizing: border-box;
  padding: 10px;
`;
export const BugContent = styled.div`
  float: left;
  width: 70%;
  height: 200px;
  /* background-color: aqua; */
  box-sizing: border-box;
  padding: 20px;
  h2 {
    font-size: 20px;
    color: black;
    font-weight: 700;
    /* text-indent: 2rem; */
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    color: black;
    /*  */
  }
  
`;
export const MoreBug = styled.div`
  float: right;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  &:hover {
    color: #0074e8;
  }
  .moreIcon {
    float: right;
    margin-right: 20px;
    text-align: center;
    line-height: 55px;
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
    font-size: 16px !important;
    &:hover {
      color: #0074e8;
      cursor: pointer;
    }
  }
`;
