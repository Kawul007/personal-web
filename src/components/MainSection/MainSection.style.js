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
  width: 10%;
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
  width: 70%;
  height: auto;
  margin-left: 10%;
  /* background-color: yellow; */
`;
export const MainProfile = styled.div`
  float: right;
  position:fixed;
  right: 0;
  top: 0;
  width: 20%;
  height: 800px;
  background-color: red;
`;
