import styled from "styled-components";
export const MainContainer = styled.div``;
export const MainProfile = styled.div`
  float: left;
  width: 18%;
  height: 600px;
  margin-left: 1%;
  margin-top: 40px;
  background-color: white;
  box-shadow: 5px 5px 5px grey;
  z-index: 111;
  #image {
    display: inline-block;
    width: 70px;
    height: 70px;
    /* border-radius: 50%; */
    margin: 55px 30%;
  }
  ul {
    margin-block-start: 0em;
    margin-block-end: 0em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
  }
  ul li img {
    /* float: left; */
    display: inline-block;
    height: 20px;
    width: 20px;
  }
  ul li a {
    float: left;
    /* margin-left: 10px; */
    text-align: center;
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
      color: #02a7dd;
    }
  }
  ul li {
    display: inline-block;
    /* margin-top: 50px; */
    height: 20px;
    width: 20px;
    text-align: center;
    margin: 0px 10px;
    list-style: none;
    color: white;
    font-weight: 700;
  }
`;
export const MainContent = styled.div`
  float: left;
  width: 60%;
  height: fit-content;
  margin-left: 1%;
  margin-top: 40px;
  background-color: white;
  box-shadow: 5px 5px 5px grey;

  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;

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

  .active-content {
    display: block;
  }
`;
export const MainBlog = styled.div`
  display: inline-block;
  width: 18%;
  height: 800px;
  margin-left: 1%;
  margin-top: 40px;
  background-color: white;
  box-shadow: 5px 5px 5px grey;
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
    width: 120px;
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
