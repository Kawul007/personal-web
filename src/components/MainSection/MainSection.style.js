import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const MainWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const MainNav = styled.div`
  float: left;
  position: fixed;
  width: 10%;
  height: 800px;
  background-color: blue;
`;
export const NavWrapper = styled.ul`
  display: block;
  text-align: center;
  list-style: none;
  height: 200px;
  width: 100%;
  margin-top: 40vh;
  background-color: aqua;
`;
export const NavItem = styled.li`
  margin: auto 0;
  color: black;
  font-weight: 700;
`;
export const NavLinks = styled(LinkS)``;
export const MainContent = styled.div`
  float: left;
  width: 70%;
  height: 800px;
  margin-left: 10%;
  background-color: yellow;
`;
export const MainProfile = styled.div`
  float: right;
  width: 20%;
  height: 800px;
  background-color: red;
`;
