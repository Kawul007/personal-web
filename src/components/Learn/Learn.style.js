import styled from "styled-components";

export const LearnWrapper = styled.div`
height: 100vh;
width: 100%;
display:flex;
flex-direction: row;
justify-content:space-around;
box-sizing: border-box;
padding: 50px;
`;
export const LearnContainer = styled.div`

width: 28%;
height: 70%;
background-color: #fff;
margin-top: 50px;
img{
    display: inline-block;
    height: 50%;
    width: 100%;
}
p{
    margin-block-start: 0em;
    margin-block-end: 0em;
}
a{
    color: #0f6461;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
h3{
    font-size: 1.6rem;
    color: #0f6461;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-bottom: 10px;
}
.date{
    font-size: 0.3rem;
    margin-bottom: 10px;
}
.info{
    font-size: 1.2rem;
}

`;