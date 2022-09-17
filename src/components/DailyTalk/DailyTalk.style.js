import styled from "styled-components";

export const TalkWrapper = styled.div`
  width: 100%;
  height: 1350px;
  margin: 0;
  padding: 0;
  font-size: 0;
  border-bottom: 1px solid transparent;
  /* background-color: blue; */
`;
export const TopTalk = styled.a`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  border-bottom: 1px solid #eeeeee;
  &:hover {
    img {
      transform: scale(1.1);
    }
    /* background-color:  #d9eff7; */
  }
`;
export const TalkImg = styled.img`
  float: right;
  width: 30%;
  height: 180px;
  box-sizing: border-box;
  padding: 20px;
`;
export const TalkContent = styled.div`
  float: left;
  width: 70%;
  height: 180px;
  /* background-color: aqua; */
  box-sizing: border-box;
  padding: 20px;
  h3 {
    font-size: 20px;
    color: #000;
    font-weight: 700;
    /* text-indent: 2rem; */
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    -webkit-line-clamp: 3;
    word-break: break-all; /*允许在单词内换行，更美观*/
    display: -webkit-box; /*元素作为box伸缩盒子*/
    -webkit-line-clamp: 2; /*设置文本行数限制*/
    -webkit-box-orient: vertical; /*设置文本排列方式*/
    color: #1b1b1b;
    /*  */
  }
  span {
    font-size: 12px;
    color: #909090;
  }
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
