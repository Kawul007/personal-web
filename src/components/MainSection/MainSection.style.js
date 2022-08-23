import styled from "styled-components";
import { Link } from "react-router-dom";
export const MainWrapper = styled.div`
  width: 100%;
  height: 1100px;
`;

export const ProfileSection = styled.div`
  float: left;
  width: 20%;
  margin: 15px 10px 0px 10px;
  height: 1000px;
`;
export const ProfileContent = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  border-radius: 1.2rem;

  img {
    display: inline-block;
    height: 80px;
    width: 80px;
    margin: 20px 80px;
    &:hover {
      transform: rotate(0.9turn);
    }
  }
  p {
    font-size: 14px;
    font-weight: 700;
    color: #000;
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  ul {
    list-style: none;
    text-align: center;
    margin-top: 20px;
  }
  ul li {
    display: inline-block;
    margin: 0px 25px;
  }
  ul li p {
    font-size: 10px;
  }
  .block {
    width: 150px;
    height: 1px;
    margin: 10px auto;
    background-color: #000;
  }
  .socail {
    display: inline-block;
    width: 80%;
    height: 60px;
    margin: 0 22%;
  }
  .socailItem {
    display: inline-block;
    width: 40px;
    height: 40px;
    align-items: center;
    margin: 10px 5px;
  }
  .socailItem img {
    width: 25px;
    height: 25px;
    margin: 0px 0px;
  }
`;

export const ProfileCard = styled.div`
  width: 100%;
  height: 150px;
  background-color: #000;
  margin-top: 25px;
  border-radius: 1.2rem;
`;
export const CardContent = styled.div``;

export const CardTitle = styled.div``;

export const BlogSection = styled.div`
  float: left;
  width: 65%;
  height: 1000px;
  margin: 15px 12px 0px 80px;
`;

export const BlogItem = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 1.2rem;
  margin-top: 20px;
  background-color: #fff;
`;
export const BlogItemImg = styled.img`
  width: 45%;
  height: 100%;
  /* border-radius: 1.2rem 0 0  1.2rem;
  border-radius: 0 1.2; */
  background-size: cover;
`;
