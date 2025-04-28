import React from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import CategoryMenu from "./components/CategoryMenu";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <CategoryMenu />
    </MainContainer>
  );
};

export default App;
