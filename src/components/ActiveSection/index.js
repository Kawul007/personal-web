import React, { startTransition } from "react";
import "animate.css";
// import Spline from "@splinetool/react-spline";
import Link from "react-scroll";
import { BiChevronsDown } from "react-icons/bi";
import {
  SectionBackground,
  SectionContainer,
  BackgroundVedio,
  SectionContent,
  SectionItem,
  SectionIcon,
  IconLink,
} from "./ActiveSection.style";
// import EasyTyper from "easy-typer-js";
import TypeWriter from "typewriter-effect";
import Video from "../../videos/ocean.mp4";

// "记得生活从不会对弱者同情！"
// let data = ["Don't Squander It Thinking Do! ","想要的都拥有，得不到的将释怀","面朝大海，春暖花开！"];
// for(let j =0;j<=data.length;j++){
// let letters = document.getElementsByTagName('h3');
// let letters = data[j];
// console.log(data[3]);
// let len = letters.length;
// console.log(len)
// for (let i=0; i < len; i++){
//     let textLen = letters[i].textContent.length;
//     let S = letters[i].style;
//     S.width = textLen + 'ch';
//     S.animationTimingFunction = "steps("+textLen+"),steps(1)"
// };
// }

// const letters = ['TypeScript','JavaScript','小程序','less','sass' ];//显示的文本
// const dom = document.getElementsByTagName('h3')
// let j = 0; //从数组第一个开始展示
// // 递归函数
// const Slogen =(j) => {
//   // console.log(letters.length);
//   if(j < 5){ // 当达到数组长度时，就从头开始继续
//     const item = letters[j];
//     const itemLen = item;
//     // const itemLen = item === '小程序' ? 6 : item.length; // 汉字是占两个ch
//     dom.innerHTML = item; // 显示文字
//     for (var i = 0, len = itemLen; i < len; i++) { // 添加文本效果
//       var textLen = dom.textContent.length, s = dom.style;
//       s.animationTimingFunction = "steps(" + textLen + "),steps(1)";; //动态设置steps
//       s.animationName = `typing${itemLen}`; //文本长度不同，展示的宽度就不同，所以需要动态设置
//       s.animationDuration = `${itemLen/2}s,0.5s`; //这儿设置速度
//     }
//     setTimeout(() => {
//       Slogen(j + 1)
//     },itemLen*500) //这儿和上面的animationDuration速度一致，只不过这儿是毫秒，所以要乘以1000

//   }else{
//     Slogen(0); //就从头开始继续
//   }
// }

const ActiveSection = () => {
  return (
    <SectionContainer id="home">
      <SectionBackground>
        <BackgroundVedio autoPlay loop muted src={Video} type="vedieo/mp4" />
        {/* <Spline scene="https://prod.spline.design/fkEJWq0QuvVeb23Y/scene.splinecode"></Spline> */}
      </SectionBackground>
      <SectionContent>
        <h3
          className="animate__animated animate__bounce"
          style={{ color: "white",fontFamily:"LHanoienne TypeFace" }}
        >
         Kawul~个人博客
        </h3>
        <SectionItem>
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(TypeWriter) => {
              TypeWriter.typeString("Don't Squander It Thinking. Do!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("参差多态，幸福本然")
                .pauseFor(2000)
                .deleteAll()
                .typeString("春风得意马蹄疾，一日看尽长安花")
                .pauseFor(2000)
                .deleteAll()
                .typeString("明年次日青云去，却笑人间举子忙")
                .pauseFor(2000)
                .deleteAll()
                .typeString("来日方长，未来可期~~")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          ></TypeWriter>
        </SectionItem>
        <IconLink
          to="technical"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
        >
          {/* <SectionIcon> */}
          <BiChevronsDown style={{ color: "white" }} />
          {/* </SectionIcon> */}
        </IconLink>
      </SectionContent>
    </SectionContainer>
  );
};

export default ActiveSection;
