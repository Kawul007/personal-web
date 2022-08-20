import styled from "styled-components";
// import "../../index.css"
export const BlogWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const CardItem = styled.ul`
width: 100%;
height: auto;
list-style: none;
  
`;
export const Cards = styled.li`
  display: inline-block;
  width: 250px;
  height: 300px;
  margin: 100px 80px;
  /* vertical-align: middle; */
  background-color: aquamarine;
  @media screen and (max-width: 768px) {
    margin: 30px 75px;
  }
`;
