import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "../../index.css";
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  /* opacity: 0.5; */
  /* background-color: #1c776b; */
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 1160px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1160px) {
    display: block;
    position: absolute;
    top: 0%;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavHeader = styled.div`
  width: 100%;
  height: 80px;
`;
export const NavLogo = styled(LinkR)`
  float: left;
  color: white;
  margin: auto 30px;
  /* justify-self: flex-start; */
  cursor: 1.5rem;
  display: flex;
  align-items: center;
  width: 50px;
  height: 80px;
  font-weight: bold;
  text-decoration: none;
`;
export const NavMenu = styled.ul`
  float: right;
  height: 80px;
  overflow: hidden;
  list-style: none;

  @media screen and (max-width: 1160px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  float: left;
  height: 80px;
  display: flex;
  font-size: 20px;
  /* padding: 0px !important; */
  margin: auto 20px;
  align-items: center;
  /* width: 200px; */
`;

export const NavLinks = styled(LinkS)`
  color: white;
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

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1160px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &：hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
