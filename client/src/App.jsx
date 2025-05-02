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

  function fetchFilteredData(type) {
    if (type === "all") {
      return fetch(`http://localhost:8000`);
    } else if (type === "breakfast") {
      return fetch(`http://localhost:8000/breakfast`);
    } else if (type === "lunch") {
      return fetch(`http://localhost:8000/lunch`);
    } else if (type === "dinner") {
      return fetch(`http://localhost:8000/dinner`);
    }
  }

  function handleFilteredData(type) {
    fetchFilteredData(type)
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }

  return (
    <MainContainer>
      <Navbar
        handleFilteredData={handleFilteredData}
        setFoodData={setFoodData}
      />
      <CategoryMenu foodData={foodData} />
    </MainContainer>
  );
};

export default App;
