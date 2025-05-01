import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import CategoryMenu from "./components/CategoryMenu";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const App = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(function () {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodData(data);
      });
  }, []);

  function handleAll() {
    fetch(`http://localhost:8000`)
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }

  function handleBreakfast() {
    fetch(`http://localhost:8000/breakfast`)
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }

  function handleLunch() {
    fetch(`http://localhost:8000/lunch`)
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }

  function handleDinner() {
    fetch(`http://localhost:8000/dinner`)
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }

  return (
    <MainContainer>
      <Navbar
        handleAll={handleAll}
        handleBreakfast={handleBreakfast}
        handleLunch={handleLunch}
        handleDinner={handleDinner}
      />
      <CategoryMenu foodData={foodData} />
    </MainContainer>
  );
};

export default App;
