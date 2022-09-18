import styled from "styled-components";

export const MainTitle = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #071117;
  color: white;
  line-height: 40px;
  z-index: 1000;
  a {
    float: left;
    height: 100%;
    margin-left: 100px;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    color: White;
  }
`;
export const MainProfile = styled.div`
  position: fixed;
  float: left;
  height: 100vh;
  width: 18%;
  margin-top: 40px;
  background-color: #071117;
  #image {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 5px 30%;
  }
  ul li img {
    float: left;
    /* display: inline-block; */
    height: 20px;
    width: 20px;
    margin-left: 10px;
    border-radius: 50%;
  }
  ul li a {
    float: left;
    margin-left: 10px;
    text-align: center;
    text-decoration: none;
    color:white;
    &:hover {
      text-decoration: underline;
      color: #02a7dd;
    }
  }
  ul li {
    /* margin-top: 50px; */
    height: 40px;
    width: 100%;
    text-align: center;
    list-style: none;
    color: white;
    font-weight: 700;
  }
`;

export const MainContent = styled.div`
  float: left;
  height: 1200px;
  width: 62%;
  margin-left: 18%;
  background-color: black;
  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 800px;
    background: #f1f1f1;
    margin-top: 40px;
    z-index: 1;
  }

  .bloc-tabs {
    display: flex;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 80%;
    font-size: 16px;
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
    outline: none;
  }

  .active-tabs {
    border-bottom: 2px solid #2dd288;
    font-weight: 700;
  }

  .active-tabs::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
  }

  button {
    border: none;
    background-color: #fff;
    color: #000;
  }
  .content-tabs {
    flex-grow: 1;
  }
  .content {
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
    color: white;
  }
  .content h2 {
    padding: 0px 0 5px 0px;
  }
  /* .content p {
    width: 100%;
    height: 100%;
  } */
  .active-content {
    display: block;
  }
`;
export const MainBlog = styled.div`
  float: right;
  height: 100vh;
  width: 20%;
  background-color: white;
  .container ul {
    margin: 0;
    list-style: none;
    position: relative;
    padding: 5px 15px;
    color: #000;
    font-size: 13px;
  }
  .container ul:before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    border-left: 2px dashed #000;
  }
  .container ul li {
    position: relative;
    margin-left: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 14px;
    border-radius: 6px;
    width: 150px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
  }
  .container ul li:not(:first-child) {
    margin-top: 20px;
  }
  .container ul li > span {
    width: 2px;
    height: 100%;
    background: #000;
    left: -30px;
    top: 0;
    position: absolute;
  }
  .container ul li > span:before,
  .container ul li > span:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #000;
    position: absolute;
    background: #229377;
    left: -5px;
    top: 0;
  }
  .container ul li span:after {
    top: 100%;
  }
  .container ul li > div {
    margin-left: 10px;
  }
  .container div .title,
  .container div .type {
    font-weight: 600;
    font-size: 12px;
  }
  .container div .info {
    font-weight: 300;
  }
  .container div > div {
    margin-top: 5px;
  }
  .container span.number {
    height: 100%;
  }
  .container span.number span {
    position: absolute;
    font-size: 10px;
    left: -35px;
    font-weight: bold;
  }
  .container span.number span:first-child {
    top: 0;
  }
  .container span.number span:last-child {
    top: 100%;
  }
`;
