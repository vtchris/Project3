import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import products from "../productlist.json";
import { Row } from 'reactstrap';

function Products() {
  console.log(products);
  return (
    <div>
      <Hero backgroundImage="/img/dandelion28.jpg">
        <h1>Wish List</h1>
        <h2>Buy Something Special</h2>
      </Hero>
      <Container style={{ marginTop: 50 }}>
        <Row>
          {products.map((product) => {
            return(<ProductCard key={product.id} product={product} />)
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
