import React from "react";
import { Button } from "react-bootstrap";

const QuantityControls = ({ quantity, onDecrement, onIncrement }) => {
    return (
        <>
            <Button
                variant={quantity <= 0 ? "secondary" : "outline-secondary"}
                className="m-1"
                onClick={onDecrement}
                disabled={quantity <= 0}
            >
                -
            </Button>
            <span className="m-1">{quantity}</span>
            <Button
                className="m-1"
                variant="outline-secondary"
                onClick={onIncrement}
            >
                +
            </Button>
        </>
    );
};

export default QuantityControls;
