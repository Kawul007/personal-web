import styled from "styled-components";

export const TalkWrapper = styled.div`
width: 100%;
height:1350px;
margin:0;
padding: 0;
font-size: 0;
border-top: 1px solid transparent;
`;

export const TopTalk = styled.div`
  /* width: 33%;
  height: 40%; */
  width: 100%;
  height: 200px;
  /* background-color: royalblue; */
  float: left;
  margin-left: 2px;
  margin-top: 2%;
  box-sizing: border-box;
  background-color: #ababab;
  padding: 20px;
`;
export const MoreTalk = styled.div`
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
    &:hover {
      color: #0074e8;
    }
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
