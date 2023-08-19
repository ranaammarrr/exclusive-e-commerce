import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const Buttons = (props) => {
  const StyledCouponButton = styled(Button)`
  && {
    background-color:${props.isSelected ? "black" : "white"};
    color: ${props.isSelected ? "white" : "black"};
    padding: 6px 12px;
    border: 1px solid black;
    text-transform: none;
    margin-top: 1.3rem;
    margin-left:1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: black;
      color:white
      
    }
  }
`;
  return (
    <StyledCouponButton
      className={props.class}
      variant='contained'
      onClick={props.onClick}
    >
      {props.category}
    </StyledCouponButton>
  );
};

export default Buttons;
