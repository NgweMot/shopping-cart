import React from "react";
import Container from "./container/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FooterComponent, HeaderComponent } from "./components";
import { HomePage, MyCart } from "./pages";
import ProductDetail from "./components/detail/ProductDetail";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/MyCart"} element={<MyCart />} />
          <Route path={"/ProductDetail/:id"} element={<ProductDetail />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </Container>
  );
};

export default App;
