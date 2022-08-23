import styled from "styled-components";
import "../../index.css";
import "../../fonts/iconfont.css";
export const BarWrapper = styled.div`
  position: sticky;
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #000;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    &:hover {
      color: #4eb9dc;
      font-weight: 700;
      /* border-bottom: 3px solid #20809f; */
    }
  }
`;
export const BarContainer = styled.ul`
  float: right;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  margin: 5px 100px 5px 10px;
  /* background-color: aqua; */
  color: #fff;
`;

export const BarItem = styled.li`
  float: left;
  list-style: none;
  margin-right: 40px;
  font-size: 18px;
`;

export const BarLogo = styled.div`
  float: left;
  height: 50px;
  line-height: 50px;
  width: 100px;
  margin: 5px 30px 5px 80px;
  text-align: center;
  font-size: 20px !important;
  font-weight: 700;
  color: #fff;
`;
