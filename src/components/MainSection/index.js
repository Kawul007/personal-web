import React from "react";
import {
  MainWrapper,
  MainContent,
  MainNav,
  MainProfile,
  NavWrapper,
  NavItem,
  NavLinks,
  BlogSearch,
  ProfileImage,
  ProfileContent,
} from "./MainSection.style";
import "../../iconfont.css";
import DailyBug from "../DailyBug/index";
import DailyTalk from "../DailyTalk/index";
import CoomingSoon from "../ComingSoon/index";
import SayHi from "../SayHi/index";
import ProfileImg from "../../images/profile.png"
const MainSection = () => {
  // let searchBtn = document.getElementById('search')
  // const searchClear = () =>(
  //   document.getElementById('search').value = " "
  // )
  return (
    <MainWrapper>
      <MainNav>
        {/* <NavItem>
          <a href="/personal-web">首页</a>
        </NavItem> */}
        <NavItem>
          <NavLinks
            to="bug"
            smooth={true}
            duration={800}
            spy={true}
            exact={true}
          >
            {/* {" "}
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-a-gongjudaopixel_huaban1"></use>
            </svg>
            &nbsp; */}
            日常Bug
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="talk"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
          >
            {/* {" "}
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-a-fangzipixel_huaban1"></use>
            </svg>
            &nbsp; */}
            外语学习
          </NavLinks>
        </NavItem>
        {/* <NavItem>
          <NavLinks
            to="messages"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
          >
            {" "}
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-a-dianchipixel_huaban1"></use>
            </svg>
            &nbsp;
            留言板
          </NavLinks>
        </NavItem> */}
        <NavItem>
          <NavLinks
            to="comingsoon"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
          >
            {/* {" "}
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-a-shandianpixel_huaban1"></use>
            </svg>
            &nbsp; */}
            Coming~
          </NavLinks>
        </NavItem>
      </MainNav>
      <MainContent>
        <DailyBug />
        <DailyTalk />
        {/* <SayHi/> */}
        <CoomingSoon />
      </MainContent>
      <MainProfile>
        <BlogSearch>
          <input id="search" type="text" placeholder="请输入关键词"></input>
          <span class="iconfont" >&#xe62e;</span>
        </BlogSearch>
        <ProfileImage>
          <img src={ProfileImg}></img>
          <ul>
            <li><span class="iconfont">&#xe898;</span><a href="github.com/Kawul007">个人Github</a></li>
            <li><span class="iconfont">&#xe61d;</span><a href="https://tw9tyeil4i.feishu.cn/docx/doxcnwoIOiKTJKug3GKNBHqZQ8d">在线简历</a></li>
            <li><span class="iconfont">&#xe7e8;</span>kai423455@gmail.com</li>
          </ul>
          <p>Don`t Squander It Thinking. Do!</p>
        </ProfileImage>
        <ProfileContent></ProfileContent>
      </MainProfile>
    </MainWrapper>
  );
};
export default MainSection;
// const MainSection = () => {
//   return (
//     <MainWrapper>
//       <BlogSection>
//         <div className="item">
//           <img className="face" src={BlogImg9}></img>
//           <div className="back">
//             <a href="/blodDetails">hahahahahahah</a>
//           </div>
//         </div>
//       </BlogSection>
//       <ProfileSection>
//         <ProfileContent>
//           <img src={Profile}></img>
//           <h2>Kawuli</h2>
//           <p>Don`t Squander It Thinking Do!</p>
//           <ul>
//             <li>
//               <p>文章</p>
//               <p style={{ color: "#615e5e" }}>14</p>
//             </li>
//             <li>
//               <p>分类</p>
//               <p style={{ color: "#615e5e" }}>16</p>
//             </li>
//             <li>
//               <p>标签</p>
//               <p style={{ color: "#615e5e" }}>11</p>
//             </li>
//           </ul>
//           <div className="block"></div>
//           <div className="socail">
//             <div className="socailItem">
//               <a href="https://github.com/Kawul007">
//                 <img src={Github} style={{ height: 20, width: 20 }}></img>
//               </a>
//             </div>
//             <div className="socailItem">
//               <a href="https://youtube.com">
//                 <img src={Youtube} style={{ height: 20, width: 20 }}></img>
//               </a>
//             </div>
//             <div className="socailItem">
//               <a href="https://Thoughtworks.com">
//                 <img src={QQ}></img>
//               </a>
//             </div>
//           </div>
//         </ProfileContent>
//         <ProfileCard>
//           <CardTitle></CardTitle>
//           <CardContent></CardContent>
//         </ProfileCard>
//       </ProfileSection>
//     </MainWrapper>
//   );
// };

// export default MainSection;
