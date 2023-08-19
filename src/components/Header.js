import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink, useLocation } from "react-router-dom";
import { Divider } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useCartContext } from "../context/CartContext";
import '../components.css'
import DropDownMenu from "./DropDownMenu";
import { UserAuth } from "../context/AuthContext";


const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { cartItems } = useCartContext();
  const { isAuthenticated } = UserAuth();


  const totalQuantity = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  const location = useLocation();


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Navbar expand="md" className="navBar">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="me-5"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography sx={{ color: 'black', fontWeight: 'bold' }} variant="h5">Exclusive</Typography>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end">
              <Nav.Link
                as={NavLink}
                to="/"
                className={`mx-4  ${location.pathname === '/' ? ' mx-4 active-link' : 'mx-4 underline'}`}

              >
                <Typography sx={{ color: 'black' }} variant="overline">Home</Typography>
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/products"
                className={`me-4 ${location.pathname === '/products' ? 'me-4 active-link' : 'me-4 underline'}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >

                <Typography sx={{ color: 'black' }} variant="overline">Products</Typography>
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className={`me-4 ${location.pathname === '/about' ? 'me-4 active-link' : 'me-4 underline'}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >

                <Typography sx={{ color: 'black' }} variant="overline">About</Typography>
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/signup"
                className={location.pathname === '/signup' ? 'active-link' : 'underline'}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography sx={{ color: 'black' }} variant="overline">Sign Up</Typography>
              </Nav.Link>
            </Nav>
            <Nav.Link
              as={NavLink}
              to="/cart"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography sx={{ color: 'black' }} variant="overline">

                {isHovered ? (
                  <ShoppingCartIcon className="ms-1" />
                ) : (
                  <ShoppingCartOutlinedIcon className="ms-1" />
                )}
                {totalQuantity > 0 && (
                  <span className="badge  bg-danger quantity">
                    {totalQuantity}
                  </span>
                )}
              </Typography>
            </Nav.Link>
          </Navbar.Collapse>
          <Nav.Link as={NavLink}

            style={{ textDecoration: "none", color: "inherit" }}
          >
            {isAuthenticated === true && (
              <DropDownMenu />)}
          </Nav.Link>


        </Container>
      </Navbar>
      <Divider />
    </>
  );
};

export default Header;
