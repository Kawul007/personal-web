import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";
import {
  CardContainer,
  NoteContainer,
  NoteTitle,
  NoteWrapper,
  SubTitle,
  LetterBoxContainer,
  LetterAnimation,
  Message,
} from "./LeaveMessage.style";
import Trip from "../../images/trip.png"
import Exercise from "../../images/exercise.png"
import Cooking from "../../images/cookin.png"
import Study from "../../images/study.png"
import Photo from "../../images/photography.png"
const LeaveMessage = () => {
  return (
    <NoteContainer id="messages">
      <NoteTitle>Intrests</NoteTitle>
      <SubTitle>What I Like</SubTitle>
      <NoteWrapper>
        <CardContainer>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Trip}
                  alt="Avatar"
                  style={{ width: 100, height: 100, marginTop: 20 }}
                />
                <h3>Trips</h3>
              </div>
              <div className="flip-card-back">
                <h2 style={{ marginTop: 40 }}>Dream Trips</h2>
                <span>Spain & the UK</span>
                <span>Japan & Italy</span>
              </div>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Exercise}
                  alt="Avatar"
                  style={{ width: 100, height: 100, marginTop: 20 }}
                />
                <h3>Exercising</h3>
              </div>
              <div className="flip-card-back">
                <h2 style={{ marginTop: 40 }}>运动有益健康</h2>
                <span>平时跑步、健身</span>
                <span>打乒乓球、羽毛球、踢足球</span>
              </div>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Cooking}
                  alt="Avatar"
                  style={{ width: 100, height: 100, marginTop: 20 }}
                />
                <h3>Cooking</h3>
              </div>
              <div className="flip-card-back">
                <h2 style={{ marginTop: 40 }}>Cooking</h2>
                <span>西红柿炒鸡蛋哈哈哈</span>
                <span> Spaghetti & Lasagna </span>
                <span> Sushi</span>
              </div>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Study}
                  alt="Avatar"
                  style={{ width: 100, height: 100, marginTop: 20 }}
                />
                <h3>Reading</h3>
              </div>
              <div className="flip-card-back">
                <h2 style={{ marginTop: 40 }}>Favorites</h2>
                <span>Educated,</span>
                <span>《纳尼亚传奇-Ⅶ》</span>
                <span>《悲惨世界》,《三四郎》,《月亮与六便士》</span>
                <span></span>
              </div>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Photo}
                  alt="Avatar"
                  style={{ width: 100, height: 100, marginTop: 20 }}
                />
                <h3>Photography</h3>
              </div>
              <div className="flip-card-back">
                <h2 style={{ marginTop: 40 }}>记录生活</h2>
                <span>业余摄影师</span>
                <span>还在学习当中</span>
                <span>努力赚钱，买一台属于自己的相机</span>
              </div>
            </div>
          </div>
        </CardContainer> 
        <Message>
          <Link to="/messagePage" style={{ textDecoration: "none" }}>
            <FaEnvelopeOpenText style={{ width: 35, height: 25 }} />
            To Say Hi ~!
          </Link>
        </Message>
      </NoteWrapper>
      {/* <LetterBoxContainer>
        <LetterAnimation>
          <div class="letter-image">
            <div class="animated-mail">
              <div class="back-fold"></div>
              <div class="letter">
                <div class="letter-border"></div>
                <div class="letter-title"></div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                  <div class="letter-stamp-inner"></div>
                </div>
              </div>
              <div class="top-fold"></div>
              <div class="body"></div>
              <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
          </div>
        </LetterAnimation>
      </LetterBoxContainer> */}
    </NoteContainer>
  );
};

export default LeaveMessage;

// class Notes extends React.Component {
//   constructor() {
//     super();
//       this.state = {
//       isFlipped: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//   }

//   render() {
//     return (
//       <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
//         <div>
//           This is the front of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </div>

//         <div>
//           This is the back of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </div>
//       </ReactCardFlip>
//     )
//   }
// }
// export default Notes
