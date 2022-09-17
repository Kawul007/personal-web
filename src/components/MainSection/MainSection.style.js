import styled from "styled-components";

export const MainTitle = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: aqua;
  z-index: 1000;
`;
export const MainProfile = styled.div`
  position: fixed;
  float: left;
  height: 100vh;
  width: 18%;
  margin-top: 40px;
  background-color: #071117;
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
  background-color: black;
`;
