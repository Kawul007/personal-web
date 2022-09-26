import styled from "styled-components";
export const MainContainer = styled.div`
  /* position: relative; */
  width: 100%;
  height: fit-content;
  /* background-color: yellow; */
  .blog-container {
    /* background-color: black; */
    margin: 0px auto;
    width: 90%;
    height: 200vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.9fr));
    grid-column-gap: 0.8rem;
    grid-row-gap: 1.22rem;
  }
`;

export const MainContent = styled.div`
  float: left;
  width: 80%;
  height: max-content;
  margin-left: 10%;
  margin-top: 40px;
  margin-bottom: 40px;
  /* background-color: white; */
  /* box-shadow: 5px 5px 5px grey; */

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
    border: 2px solid #2dd288;
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
    /* display: block; */
    border: none;
    background-color: inherit;
    color: #000;
  }
  .content-tabs {
    flex-grow: 3;
  }
  .content {
    /* background: #fff; */
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
  position: sticky;
  width: 18%;
  margin-left: 2%;
  height: 100vh;
  margin-top: 40px;
  /* background-color: white; */
  .container ul {
    display: block;
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
    width: 130px;
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
  h4 {
    .icon {
      width: 1.1em;
      height: 1.1em;
      fill: currentColor;
      display: inline-block;
    }
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
    /* font-weight: 300; */
  }
  .container div > div {
    /* margin-top: 5px; */
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
export const BtnWrapper = styled.div`
  margin: 30px auto;
  width: 80%;
  height: 60px;
  .btn-container button {
    width: 25%;
    height: 60px;
    border: none;
    background: white;
    color: rgb(65, 98, 168);
    font-weight: 700;
    cursor: pointer;
  }
  button.active {
    background-color: rgb(65, 98, 168);
    color: white;
  }
`;
export const ResoultWrapper = styled.div`
  display: inline-block;
  width: 220px;
  height: 260px;
  margin-left: 25px;
  /* background-color: red; */
  .img {
    display: inline-block;
    width: 100%;
    height: 150px;
    background-size: cover;
    vertical-align: middle;
  }
  span {
    display: inline-block;
  }
`;
