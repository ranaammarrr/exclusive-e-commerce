import React from "react";
import ProductCard from "../components/ProductCard";
import { ButtonGroup, Container, Typography } from '@mui/material'
import { Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import { useCartContext } from "../context/CartContext";
import CategorySelect from "../components/CategorSelect";
import Buttons from '../components/Buttons'
const Products = () => {
  const {
    categories,
    selectedCategories,
    loading,
    handleCategorySelection,
    filteredProducts,
    sortProductsByTitle,
  } = useCartContext();


  return (
    <Container maxWidth='xl' sx={{ m: 4 }} >
      <Row className="mt-2">
        <Typography variant="h4" fontWeight='bold' className=" ms-4">Best Selling Products</Typography>
        <div className="d-flex flex-wrap mt-4 ms-1">
          <ButtonGroup variant="outlined">
            {categories.map((category) => (
              <Buttons
                isSelected={selectedCategories.includes(category)}
                variant={
                  selectedCategories.includes(category)
                    ? "dark"
                    : "outline-dark"
                }
                onClick={() => handleCategorySelection(category)}
                key={category}
                category={category}
              />
            ))}
          </ButtonGroup>
        </div>
        <div className="d-flex  my-4 ms-3">
          <CategorySelect
            categories={categories}
            selectedCategories={selectedCategories}
            onChange={handleCategorySelection}
            width="250px"
          />
        </div>
      </Row>

      <Row className="ms-4">
        {loading ? (
          <Loader />
        ) : (
          sortProductsByTitle(filteredProducts).map((product) => (
            <Col className="mb-4" key={product.id} sm={6} md={6} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
