import styled from "styled-components";

export const TalkWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-column-gap: 0.5rem;
  grid-row-gap: 1rem;
`;
export const TopTalk = styled.a`
 width: 220px;
  height: 260px;
  color:#000;
  text-decoration:none;
  &:hover {
    h4 {
      text-decoration: underline;
      color: #25c0ad;
    }
    /* img {
      transform: scale(0.9);
    } */
    /* background-color:  #d9eff7; */
  }
`;
export const TalkImg = styled.img`
   width: 100%;
  height: 50%;
`;
export const TalkContent = styled.div`
   width: 100%;
   height: 50%;
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
