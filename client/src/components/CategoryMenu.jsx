import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const ImageContainer = styled.div`
  width: 100%;
  /* height: 70vh; */
  min-height: 70vh;
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

const CategoryMenu = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(function () {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodData(data);
      });
  }, []);

  return (
    <ImageContainer>
      <CardContainer>
        {/* <CardItem
          name="Burger"
          info="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras
            eget est."
          price="10.00"
        /> */}
        {foodData.map((food, index) => (
          <CardItem
            key={`${food.name}-${index}`}
            name={food.name}
            info={food.text}
            price={food.price}
            image={food.image}
          />
        ))}
      </CardContainer>
    </ImageContainer>
  );
};

export default CategoryMenu;
