import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";

  function Yourlist() {
  return (
    <div>
      <Hero backgroundImage="/img/dandelion26.jpg">
        <h1>Your List</h1>
        <h2>Buy Something Special</h2>
      </Hero>
      <Container style={{ marginTop: 50 }}>

        <ProductCard 
        />

      </Container>
    </div>
  );
}

export default Yourlist;
