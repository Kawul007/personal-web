import styled from "styled-components";

export const FloatBtnWrapper = styled.div`
float:left;
position: fixed;
width: 30px;
height: 60px;
/* background-color: aqua; */
top: 70%;
/* left: 98%; */
visibility: ${({scrollScre}) => (scrollScre ? "visible" : "hidden")};
z-index: 99999;
`;

export const BtnCard = styled.div`
width: 100%;
height: 30px;
justify-content: center;
z-index: 99999;
`;

export const BtnProfile = styled.a`
display: inline-block;
width: 100%;
height: 30px;
z-index: 99999;
img{
    display: inline-block;
    width: 100%;
    height: 30px;
}
`;