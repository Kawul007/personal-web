import React, { useEffect, useState } from "react";
import { FloatBtnWrapper, BtnCard, BtnProfile } from "./FloatBtn.style";
import { BiArrowToTop } from "react-icons/bi";
import { animateScroll as scroll } from "react-scroll";
import ProfileBtn from "../../images/profile.webp";
const FloatBtn = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const [scrollScre, setScrollScre] = useState(false);
  const changeScre = () => {
    if (window.scrollY >= 350) {
      setScrollScre(true);
    } else {
      setScrollScre(false);
    }
    
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScre);
  }, []);
  return (
    <>
      <FloatBtnWrapper scrollScre={scrollScre}>
        <BtnCard onClick={toggleHome}>
          <BiArrowToTop style={{ width: 30, height: 30 }} />
        </BtnCard>
        <BtnProfile href="https://tw9tyeil4i.feishu.cn/docx/doxcnwoIOiKTJKug3GKNBHqZQ8d">
          <img src={ProfileBtn} title="个人在线简历"></img>
        </BtnProfile>
      </FloatBtnWrapper>
    </>
  );
};

export default FloatBtn;
