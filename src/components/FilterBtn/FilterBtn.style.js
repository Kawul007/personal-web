import styled from "styled-components";

export const FilterContainer = styled.div`
width: 100%;
height: 50px;
background-color: red;
justify-content: center;
align-items: center;
button{
   margin-right : 2rem;
   min-width: 5rem;
   padding: 0.5rem 1rem;
   border: none;
   background-color: #fff;
   color: rgb(65,98,168);
   border-radius: 1rem;
   border: 2px solid rgb(65,98,168);
   font-weight: bold;
   cursor: pointer;
   button.active{
    background-color: rgb(65,98,168);
    color: #fff;
   }

}
`;