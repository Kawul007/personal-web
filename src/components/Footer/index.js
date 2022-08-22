import React from "react";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksTite,
  FooterLinksWrapper,
  FooterWrapper,
  FooterLink,
} from "./Footer.style";
import {FaGithubSquare} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {ImYoutube2} from 'react-icons/im';
import {BiArrowToTop} from 'react-icons/bi';
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
const toggleHome = () => {
  scroll.scrollToTop();
}

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              {/* <FooterLinksTite>About Me</FooterLinksTite> */}
              <FooterLink to="/" onClick={toggleHome}><BiArrowToTop style={{width:50,height:50}} /></FooterLink>
              <FooterLink to="/https://www.youtube.com/"><ImYoutube2 style={{width:50,height:50}}/></FooterLink>
              <FooterLink to="/https://www.google.com/"><FcGoogle style={{width:50,height:50}}/></FooterLink>
              <FooterLink to="/https://github.com/ComeAndSeeMe"><FaGithubSquare style={{width:50,height:50}}/></FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
