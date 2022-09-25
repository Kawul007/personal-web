import styled from "styled-components"

export const Wrapper = styled.div`
width: 100%;
height: 100%;
.popular-movies{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
img{
   height :100% ;
   width: 30vh;
   object-fit: cover;
   border-radius: 1rem;
   margin-bottom: 1rem;
}
h2{
    font-size: 0.8rem;
}

.bbbtn-container button{
    margin-left: 2rem;
    min-width: 5rem;
    padding: 0.5rem 1rem;
    border: none;
    background: white;
    color: rgb(65,98,168);
    border-radius: 1rem;
    border: 2px solid rgb(65,98,168);
    font-weight: 700;
    cursor: pointer;
}
button.active{
    background-color: rgb(65,98,168);
    color: white;
}
`;

