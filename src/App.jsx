import React from "react";
import Container from "./container/Container";
import {
  CategoriesComponent,
  FooterComponent,
  HeaderComponent,
} from "./components";

const App = () => {
  return (
    <Container>
      <HeaderComponent />
      <CategoriesComponent />
      <FooterComponent />
    </Container>
  );
};

export default App;
