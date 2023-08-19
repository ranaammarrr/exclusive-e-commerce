import React from "react";
import Products from "./Products";
import { Col, Row } from "react-bootstrap";
import { slides } from "../data/data";
import Carousel from "../components/Carousel";

const HomeScreen = () => {

  return (
    <>
      <Carousel data={slides} />
      <Row>
        <Col>
          <Products />
        </Col>
      </Row>

    </>
  );
};

export default HomeScreen;
