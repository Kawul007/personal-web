import { Button } from "antd";
import styled from "styled-components";

// export const TechImg = styled.img`
// display: block;
// `;

export const TechContainer = styled.div`
  height: fit-content;
  /* background: #000; */
  width: 100%;
  height: fit-content;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: rgb(53, 53, 53);
  p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  /* background-image: url(../../images/img-2.jpg);
  background-size: cover; */
  /* background-color: black; */
  /* background: rgba(0,0,0,0.6); */
  .img{
    position: absolute;
    display: block;
    width: 100%;
    height: 1052px;
    background-size: contain;
    
  }
  @media screen and (max-width: 960px) {
    padding: 100px 0;
  }
  /* @media only screen and (max-width: 1700px) {
  .vertical-timeline-element-date {
    display: block !important;
    float: none !important;
    color: rgb(44, 44, 44);
    margin-top: 1.5em;
  } */
`;

export const TechAnimation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const TechContent = styled.div`
  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
    0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
  padding: 2em 3em !important;
`;

export const TechButton = styled(Button)`
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 5px;
  color: white;

  .workButton {
    background-color: #06d6a0;
  }

  .workButton:hover {
    background-color: #0ac593;
  }

  .schoolButton {
    background-color: #f9c74f;
  }

  .schoolButton:hover {
    background-color: #f3bc3c;
  }
`;
