import React from 'react'
import { BarContainer,BarWrapper,BarLogo, BarItem } from './FixedBar.styled'
import "../../index.css";
import "../../fonts/iconfont.css";
const FixedBar = () => {
  return (
    <BarWrapper>
      <BarLogo><a href='/personal-web'>Kai4234</a></BarLogo>
      <BarContainer>
        <BarItem><a href='/personal-web/blogPage'>精选博客</a></BarItem>
        <BarItem><a href='/personal-web/bugPage'>BUG日常</a></BarItem>
        <BarItem><a href='/personal-web/messagePage'>留言板</a></BarItem>
        <BarItem><a href='/personal-web/comingPage'>探索中心</a></BarItem>
        <BarItem><a href='/personal-web/updateLog'>更新日志</a></BarItem>
      </BarContainer>
    </BarWrapper>
  )
}

export default FixedBar