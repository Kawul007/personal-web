import React from "react";
import { FooterContainer, MainProfile } from "./Footer.style";
import { animateScroll as scroll } from "react-scroll";
import ImageProfile from "../../images/profile.png";
import Man from "../../images/man.png";
import MyGit from "../../images/mygit.png";
import Mail from "../../images/mail.png";
import Tele from "../../images/telphone .png";
import Linked from "../../images/Linkedin.png";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    // <FooterContainer>
    //   <FooterWrapper>
    //     <FooterLinksContainer>
    //       <FooterLinksWrapper>
    //         <FooterLinksItems>
    //           {/* <FooterLinksTite>About Me</FooterLinksTite> */}
    //           {/* <FooterLink to="/" onClick={toggleHome}><BiArrowToTop style={{width:50,height:50}} /></FooterLink> */}
    //           <FooterLink to="/https://www.youtube.com/"><ImYoutube2 style={{width:50,height:50}}/></FooterLink>
    //           <FooterLink to="/https://www.google.com/"><FcGoogle style={{width:50,height:50}}/></FooterLink>
    //           <FooterLink to="/https://github.com/ComeAndSeeMe"><FaGithubSquare style={{width:50,height:50}}/></FooterLink>
    //         </FooterLinksItems>
    //       </FooterLinksWrapper>
    //     </FooterLinksContainer>
    //   </FooterWrapper>
    // </FooterContainer>
    <FooterContainer>
      <MainProfile>
        {/* <img src={ImageProfile} id="image"></img> */}
        <h2>Don`t Squander It Thinking. Do!</h2>
        <h3>Follow Me On My Social Media</h3>
        <ul>
          <li>
            <a href="https://github.com/Kawul007">
              <img src={MyGit} title="Follow Me On Github"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Mail} title="kai423455@gmail.com"></img>
            </a>
          </li>
          <li>
            <a href="https://tw9tyeil4i.feishu.cn/docx/doxcnwoIOiKTJKug3GKNBHqZQ8d">
              <img src={Man} title="Online-CV"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Tele} title="My Phone +86-18306014646"></img>
            </a>
          </li>

          <li>
            <a href="www.linkedin.com/in/kawul4234">
              <img src={Linked} title="Follow Me on LinkedIN"></img>
            </a>
          </li>
        </ul>
      </MainProfile>
    </FooterContainer>
  );
};

export default Footer;
