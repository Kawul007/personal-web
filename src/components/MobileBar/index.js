import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./Mobile.style";
const MobileBar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>首页</SidebarLink>
          <SidebarLink to="technical" onClick={toggle}>精选博客</SidebarLink>
          <SidebarLink to="blogs" onClick={toggle}>外语学习</SidebarLink>
          <SidebarLink to="blogs" onClick={toggle}>摸会儿鱼</SidebarLink>
          <SidebarLink to="messages" onClick={toggle}>留言板</SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
            <SidebarRoute to='/singin'>Sing In</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default MobileBar;
