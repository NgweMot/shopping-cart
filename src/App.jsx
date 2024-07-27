import React from "react";
import Container from "./container/Container";
import {
  CategoriesComponent,
  FooterComponent,
  HeaderComponent,
  ProductSection,
} from "./components";

const App = () => {
  return (
    <Container>
      <HeaderComponent />
      <CategoriesComponent />
      <ProductSection />
      <FooterComponent />
    </Container>
  );
};

export default App;
