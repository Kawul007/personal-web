import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
/* height: 200px;
width: 100%; */
/* position: fixed;
bottom:0px; */
width: 100%;
background-color: black;
@media screen and (max-width:1160px){
    transition: 0.8s all ease;
}
`;

export const FooterWrapper = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* width: 100%; */
margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width:1160px){
    padding-top: 20px;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;
@media screen and (max-width:1160px){
    flex-direction: column;
}
`;

export const FooterLinksItems = styled.div`
display: inline-block;
/* flex-direction: column;
align-items: flex-start; */
margin: 16px;
text-align: left;
/* width: 460px; */
box-sizing: border-box;
color: #fff;
@media screen and(max-width:1160px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;

export const FooterLinksTite = styled.h1`
font-size: 14px;
margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
color:#fff;
margin-left: 40px;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
&:hover{
    color:#01bf71;
    transition: 0.3s ease-out;
}
`;