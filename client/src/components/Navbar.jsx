import React from "react";
import styled from "styled-components";

const TopContainer = styled.div`
  height: 30vh;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  .search {
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search input {
    width: 90%;
    height: 1.8rem;
    box-sizing: border-box;
    border: 1px solid orange;
    padding: 0.3rem 0.3rem;
    border-radius: 0.2rem;
    background-color: transparent;
  }

  @media (min-width: 375px) {
    font-size: 2.2rem;

    .search input {
      height: 2rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 90%;
    gap: unset;
    justify-content: space-between;

    .search {
      width: 20%;
    }

    .search input {
      width: 100%;
      height: 2.4rem;
      padding: 0.4rem 0.5rem;
      border-radius: 0.4rem;
    }
  }
`;

const Header = styled.div`
  font-size: 1.8rem;
  font-weight: 800;

  @media (min-width: 375px) {
    font-size: 2.2rem;
  }
`;

const FilterContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const FilterButton = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  padding: 0.2rem 0.4rem;
  border-radius: 0.3rem;
  background-color: orange;
  color: white;

  &:hover {
    background-color: rgb(168, 67, 23);
  }

  @media (min-width: 375px) {
    padding: 0.4rem 0.6rem;
  }

  @media (min-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-weight: 600;
  }
`;

const Navbar = ({ handleBreakfast, handleLunch, handleDinner }) => {
  return (
    <TopContainer>
      <InnerContainer>
        <Header>FoodZone</Header>
        <div className="search">
          <input type="text" placeholder="Search foods..." />
        </div>
      </InnerContainer>

      <FilterContainer>
        <FilterButton>All</FilterButton>
        <FilterButton
          onClick={() => {
            handleBreakfast();
          }}
        >
          Breakfast
        </FilterButton>
        <FilterButton
          onClick={() => {
            handleLunch();
          }}
        >
          Lunch
        </FilterButton>
        <FilterButton
          onClick={() => {
            handleDinner();
          }}
        >
          Dinner
        </FilterButton>
      </FilterContainer>
    </TopContainer>
  );
};

export default Navbar;
