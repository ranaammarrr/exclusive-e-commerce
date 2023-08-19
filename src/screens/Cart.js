import React, { useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import Typography from "@mui/material/Typography";
import { Col, Image, Row } from "react-bootstrap";
import { Container, Grid, List, Paper, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "styled-components";
import QuantityControls from "../components/QuantityControls";
import Buttons from "../components/Buttons";
import { useNavigate } from "react-router-dom";

import "../components/Carousel.css";

const Cart = () => {
  const { cartItems, setCartItems, removeFromCart, clearCart, decrementCartItem, incrementCartItem } = useCartContext();

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems && savedCartItems.length > 0) {
      setCartItems(savedCartItems);
    }
  }, [setCartItems]);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const navigate = useNavigate();
  const StyledGrid = styled(Grid)`
  margin-top: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  
`;
  const StyledPaper = styled(Paper)`
box-shadow: 0px 2px 5px rgba(231, 231, 231, 0.8);
`;
  const StyledCouponButton = styled(Button)`
    && {
      background-color: #DB4444;
      color: white;
      padding: 6px 12px;
      margin-top: 1.3rem;
      margin-left:1rem;
      text-transform: none;
      transition: background-color 0.3s;

      &:hover {
        background-color: #E07575;
        
      }
    }
  `;
  const StyledInput = styled(TextField)`
  margin-bottom: 2rem;
  & .MuiInputBase-root {
      height: 40px; /* Adjust the height as needed */
    }
    & .MuiInputLabel-root {
    
      position: relative;
      top: 15px;
      font-size: 14px
    }

   &:hover fieldset {
      border-color: black;
    }
    & fieldset {
      border-color: black;
    }
    
`;

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const getItemTotalPrice = (cartItem) => {
    const totalPrice = cartItem.item.price * cartItem.quantity;
    return totalPrice;
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, cartItem) => total + getItemTotalPrice(cartItem), 0);
    return totalPrice.toFixed(2);
  };
  const handleCheckoutNavigate = () => {
    navigate('/checkout')
  }
  const handleProductsNavigate = () => {
    navigate('/products')

  }
  return (
    <Container  >
      <Typography className="mt-2" variant="h4">Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography className="text-center text-danger mt-4" variant="h5">
          YOUR CART IS EMPTY!
        </Typography>
      ) : (
        <>
          <StyledCouponButton
            onClick={handleClearCart}
            variant="outline-dark"
            className="m-4 px-4"
          >
            Clear Cart
          </StyledCouponButton>

          <List  >
            <Container>
              <StyledPaper elevation={2} >
                <StyledGrid container >
                  <Grid
                    alignItems="center"
                    justifyContent="center"
                    item xs={3} md={4}>
                    <Typography variant="p" component={'h6'}>Product</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="p" component={'h6'} >Price</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="p" component={'h6'} >Quantity</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="p" component={'h6'} >Subtotal</Typography>
                  </Grid>
                </StyledGrid>
              </StyledPaper>
            </Container>
            {cartItems.map((cartItem) => (
              <Container key={cartItem.item.id}>
                <StyledPaper elevation={2}>
                  <StyledGrid container >
                    <Grid item xs={3} md={1}>
                      <div className="position-relative image-container">
                        <Image
                          src={cartItem.item.image}
                          alt={cartItem.item.title}
                          style={{ height: "80px", objectFit: "contain" }}
                        />
                        <DeleteIcon
                          className="position-absolute top-0 end-0 transparent-icon"
                          onClick={() => handleRemoveItem(cartItem.item.id)}
                        />
                      </div>
                    </Grid>
                    <Grid item className="ms-4" md={2}>
                      <Typography variant="p" className="mt-4" component={'h6'}>{cartItem.item.title.split(" ")[0]}</Typography>
                    </Grid>
                    <Grid item md={2}>
                      <Typography variant="p" component={'h6'} className="text-center mt-4">${cartItem.item.price.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item md={2}>
                      <Typography variant="p" component={'h6'} className="text-center mt-3 ">
                        <QuantityControls
                          quantity={cartItem.quantity}
                          onDecrement={() => decrementCartItem(cartItem.item.id)}
                          onIncrement={() => incrementCartItem(cartItem.item.id)}
                        />
                      </Typography>
                    </Grid>
                    <Grid item md={2}>
                      <Typography variant="p" component={'h6'} className="text-center mt-4">${getItemTotalPrice(cartItem).toFixed(2)}</Typography>
                    </Grid>
                    <Grid item md={1}>
                      <Button
                        sx={{ textTransform: 'none', mt: 2 }}
                        variant="danger"
                        onClick={() => handleRemoveItem(cartItem.item.id)}
                      >
                        Remove
                      </Button>
                    </Grid>
                  </StyledGrid>
                </StyledPaper>

              </Container>
            ))}
          </List>
          <Row>
            <Col md={9}>
              <Buttons
                onClick={handleProductsNavigate}
                class={'px-4'}
                variant='outline-dark'
                category='Return to Shop'
              />
            </Col>
            <Col md={3} className="flex-end">
              <Buttons
                onClick={handleCheckoutNavigate}
                class={'px-4'}
                variant='outline-dark'
                category='Proceed to checkout'
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={8}>
              <StyledInput id="outlined-basic" label="Coupon Code" variant="outlined" />
              <StyledCouponButton className="px-4" variant="contained">Apply Coupon</StyledCouponButton>

            </Col>
            <Col>
              <h4>Total Price: ${getTotalPrice()}</h4>

            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;
