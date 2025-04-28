import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  /* height: 70vh; */
  background-image: url("./bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -9999;
  border: none;
  box-sizing: border-box;
  background-color: black;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 1.5rem; */

  & > div:last-child {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 596px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    gap: 1.5rem;
  }
`;

const CardItem = styled.div`
  /* background-color: blue; */
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  margin-top: 1.5rem;
  border-radius: 1rem;
  height: 30vh;
  width: 90%;

  @media (min-width: 425px) {
    height: 35vh;
  }

  @media (min-width: 596px) {
    width: unset;
  }

  @media (min-width: 1024px) {
    height: 40vh;
  }
`;

const CategoryMenu = () => {
  return (
    <ImageContainer>
      <CardContainer>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
      </CardContainer>
    </ImageContainer>
  );
};

export default CategoryMenu;
