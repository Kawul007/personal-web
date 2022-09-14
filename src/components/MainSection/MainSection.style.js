import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  /* overflow: hidden; */
`;

export const MainNav = styled.ul`
  float: left;
  position: fixed;
  margin-top: 200px;
  width: 8%;
`;
// export const NavWrapper = styled.ul`
//   display: block;
//   text-align: center;
//   list-style: none;
//   height: 200px;
//   width: 100%;
//   margin-top: 40vh;
//   background-color: aqua;
// `;
export const NavItem = styled.li`
  margin: auto 0;
  color: black;
  width: 100%;
  text-align: center;

  /* line-height: 50px; */
  .icon {
    width: 1.1em;
    height: 1.1em;
    fill: currentColor;
    display: inline-block;
  }

  &.active {
    color: #4eb9dc;
    font-weight: 700;
    border-bottom: 3px solid #20809f;
  }
  a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    align-items: center;
  }
  /* &:hover {
    background-color: #4eb9dc;
  } */
`;
export const NavLinks = styled(LinkS)`
  color: #000;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 1rem;
  height: 100%;
  cursor: pointer;
  .icon {
    width: 1.1em;
    height: 1.1em;
    fill: currentColor;
    display: inline-block;
  }

  &.active {
    color: #4eb9dc;
    font-weight: 700;

    /* border-bottom: 3px solid #20809f; */
  }
`;
export const MainContent = styled.div`
  float: left;
  width: 72%;
  height: auto;
  margin-left: 8%;
  border-left: 1px solid gray;
  /* background-color: yellow; */
`;
export const MainProfile = styled.div`
  float: right;
  position: fixed;
  right: 0;
  top: 0;
  width: 20%;
  height: 800px;
  /* background-color: red; */
`;
export const BlogSearch = styled.div`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 35px 2%;

  #search {
    float: left;
    width: 82%;
    height: 30px;
    outline: none;
    border: 1px solid #4eb9dc;
  }
  span {
    display: inline-block;
    width: 30px;
    height: 32px;
    border-top: 1px solid #4eb9dc;
    border-bottom: 1px solid #4eb9dc;
    border-right: 1px solid #4eb9dc;
    line-height: 32px;
    text-align: center;
  }
`;

export const ProfileImage = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  /* background-color: aqua; */
  img {
    width: 60px;
    height: 60px;
    padding: 10px;
  }
  p{
    font-weight: 700;
  }
  ul {
    padding: 10px;
  }
  li {
    box-sizing: border-box;
    width: auto;
    height: 30px;
    list-style: none;
    /* padding: 10px; */
    font-size: 16px;
    a {
      text-decoration: none;
      color: black;
    }
    /* span {
      display: inline-block;
      width: 50px;
      height: 30px;
    } */
  }
`;

export const ProfileContent = styled.div`
  width: 100%;
  height: 500px;
  background-color: beige;
`;
