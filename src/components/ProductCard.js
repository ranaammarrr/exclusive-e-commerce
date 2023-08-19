import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import "../components.css";
import QuantityControls from "./QuantityControls";

const ProductCard = ({ product }) => {
  const [quantityInCart, setQuantityInCart] = useState(1);
  const [showQuantityControls, setShowQuantityControls] = useState(true);

  const { addToCart, removeFromCart, cartItems } = useCartContext();


  const handleDecrement = () => {
    if (quantityInCart > 0) {
      setQuantityInCart((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantityInCart((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    if (quantityInCart > 0) {
      addToCart(product, quantityInCart);
      setQuantityInCart(0);
      setShowQuantityControls(false);
    } else {
      const cartItem = cartItems.find((item) => item.item.id === product.id);
      if (cartItem) {
        removeFromCart(product.id);
        setShowQuantityControls(true);
        setQuantityInCart(1);
      }
    }
  };

  const getItemQuantityInCart = () => {
    const cartItem = cartItems.find((item) => item.item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const quantityInCartDisplay = getItemQuantityInCart();

  return (
    <>
      <Card style={{ height: "100%" }} className="me-3">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <Card.Img
            className=" m-2 mt-5 zoom"
            style={{
              maxHeight: "150px",
              maxWidth: "90%",
              objectFit: "contain",
            }}
            variant="top"
            src={product.image}
            alt={product.title}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Row>
          <Col className="m-2">
            {showQuantityControls && (
              <QuantityControls
                quantity={quantityInCart}
                onDecrement={handleDecrement}
                onIncrement={handleIncrement}
              />
            )}
          </Col>
          <Col className="m-2">
            <Button
              className="m-1 px-3"
              variant={quantityInCartDisplay > 0 ? "danger" : "outline-dark"}
              onClick={handleAddToCart}
            >
              {quantityInCartDisplay > 0 ? "Remove" : "Add to Cart"}
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProductCard;
