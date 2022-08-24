import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { AiOutlineTool } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import "../../index.css";
import "../../fonts/iconfont.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavLinks,
  MobileIcon,
  NavMenu,
  NavHeader,
  NavBtn,
  NavBtnLink,
} from "./NavBar.style";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavHeader>
            <NavLogo to="/">Kai4234</NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  {/* <BiHome /> */}
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-a-fangzipixel_huaban1"></use>
                  </svg>
                  &nbsp;首页
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="blogs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  {/* <BiNotepad /> */}
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-a-xingpixel_huaban1"></use>
                  </svg>
                  &nbsp;精选博客
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="technical"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  {/* <AiOutlineTool /> */}
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-a-rilipixel_huaban1"></use>
                  </svg>
                  &nbsp;技术便签
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="messages"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  {/* <BiMessageAltDetail /> */}
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-a-xinfengpixel_huaban1"></use>
                  </svg>
                  &nbsp;留言板
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavHeader>

          {/* <NavBtn>
            <NavBtnLink to='singup'>Sing in</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;