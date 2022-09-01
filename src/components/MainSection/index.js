import React from "react";
import {
  MainWrapper,
  MainContent,
  MainNav,
  MainProfile,
  NavWrapper,
  NavItem,
} from "./MainSection.style";

const MainSection = () => {
  return (
    <MainWrapper>
      <MainNav>
        <NavWrapper>
          <NavItem>精选博客</NavItem>
          <NavItem>精选博客</NavItem>
          <NavItem>精选博客</NavItem>
          <NavItem>精选博客</NavItem>
        </NavWrapper>
      </MainNav>
      <MainContent></MainContent>
      <MainProfile></MainProfile>
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
