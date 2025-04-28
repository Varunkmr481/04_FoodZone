import React from "react";
import styled from "styled-components";

const CardItemContainer = styled.div`
  /* background-color: blue; */
  box-sizing: border-box;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  margin-top: 1.5rem;
  border-radius: 1rem;
  width: 90%;
  gap: 0.3rem;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 7rem;
  }

  @media (min-width: 375px) {
    gap: 0.5rem;

    img {
      width: 7.5rem;
    }
  }

  @media (min-width: 425px) {
    gap: 0.7rem;

    img {
      width: 8.5rem;
    }
  }

  @media (min-width: 596px) {
    gap: 0.5rem;
    width: 100%;

    img {
      width: 5rem;
    }
  }

  @media (min-width: 768px) {
    height: 35vh;
  }

  @media (min-width: 1024px) {
    height: 30vh;
  }
`;

const CardButton = styled.button`
  background-color: orange;
  color: white;
  border-radius: 0.3rem;
  border: none;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;

  @media (min-width: 375px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    padding: 0.4rem 0.6rem;
    font-size: 1rem;
  }
`;

const CardButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const CardItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  h2 {
    color: white;
    font-size: 1rem;
  }

  p {
    font-size: 0.6rem;
    font-weight: 500;
    color: white;
  }

  @media (min-width: 375px) {
    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.7rem;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const CardItem = ({ name, info, price, image }) => {
  return (
    <CardItemContainer>
      <div>
        <img src={image} alt={name}></img>
      </div>

      <CardItemInfo>
        <div>
          <h2>{name}</h2>
          <p>{info}</p>
        </div>

        <CardButtonContainer>
          <CardButton>${price}</CardButton>
        </CardButtonContainer>
      </CardItemInfo>
    </CardItemContainer>
  );
};

export default CardItem;
