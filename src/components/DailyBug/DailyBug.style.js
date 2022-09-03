import styled from "styled-components";

export const BugWrapper = styled.div`
width: 100%;
height: 100vh;
/* background-color: blue; */

`;
export const TopBug = styled.div`
width: 50%;
height: 50%;
/* background-color: royalblue; */
float: left;
box-sizing: border-box;
padding: 20px;

`;
export const BugImage = styled.img`
/* display: inline-block; */
float: right;
height: 60%;
width: 40%;
margin:10% 0px;
background-size: contain;
background-color: black;

`;
export const BugInfo = styled.div`
float: left;
background-color: white;
width: 60%;
margin:10% 0px;
height: 60%;
text-indent: 2rem;
`;