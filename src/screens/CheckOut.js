import React, { useEffect } from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { Card, Col, Row } from 'react-bootstrap'
// import {  useNavigate } from 'react-router-dom'
import Input from '../components/Input'
// import { useFormik } from 'formik'
// import { signUpSchema } from '../schema/Schema'
// import { addDoc, collection } from 'firebase/firestore'
// import { UserAuth } from '../context/AuthContext'
// import { db } from '../firebase'
//import Buttons from '../components/Buttons'
import { composeValidators, required, minLength, isEmail, isValidPhoneNumber } from '../validations/validationHelpers';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import CheckOutCard from '../components/CheckOutCard';
import { useCartContext } from '../context/CartContext';



const CheckOut = () => {
    const { cartItems, setCartItems } = useCartContext();

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems && savedCartItems.length > 0) {
            setCartItems(savedCartItems);
        }
    }, [setCartItems]);

    // Save cart items to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleSubmit = (values) => {
        console.log(values);
    };
    const StyledCouponButton = styled(Button)`
    && {
      background-color: #DB4444;
      color: white;
      padding: 6px 12px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #E07575;
        
      }
    }
  `;
    const StyledInput = styled(TextField)`
 
  & .MuiInputBase-root {
      height: 40px;
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

    console.log('cartItems:', cartItems);
    return (
        <Container>
            <Row>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Body style={{ marginTop: "80px", marginBottom: '50px', width: '80%' }}>

                        <Typography sx={{ mb: 2 }} variant='h4' component='h6' >Billing Details</Typography>
                        <Form onSubmit={handleSubmit}
                            render={({ handleSubmit }) => (


                                <>
                                    <Field name="name" validate={composeValidators(required, minLength(3))}>
                                        {({ input, meta }) => (
                                            <Input
                                                id="name"
                                                name="name"
                                                label="Name"
                                                type="text"
                                                class={`styled-input gray-input`}
                                                value={input.value}
                                                onBlur={input.onBlur}
                                                onChange={input.onChange}
                                                error={meta.error}
                                                touch={meta.touched}
                                            />
                                        )}
                                    </Field>
                                    <Field name="companyname" >
                                        {({ input, meta }) => (
                                            <Input
                                                id="companyname"
                                                name="companyname"
                                                label="Company Name"
                                                type="text"
                                                class={`styled-input gray-input`}
                                                value={input.value}
                                                onBlur={input.onBlur}
                                                onChange={input.onChange}
                                                error={meta.error}
                                                touch={meta.touched}
                                            />
                                        )}
                                    </Field>
                                    <Field name="address" validate={required}>
                                        {({ input, meta }) => (
                                            <Input
                                                id="address"
                                                name="address"
                                                label="Address"
                                                type="address"
                                                class={`styled-input gray-input`}
                                                value={input.value}
                                                onBlur={input.onBlur}
                                                onChange={input.onChange}
                                                error={meta.error}
                                                touch={meta.touched}
                                            />
                                        )}
                                    </Field>
                                    <Field name="city" validate={required}>
                                        {({ input, meta }) => (
                                            <Input
                                                id="city"
                                                name="city"
                                                label="Town/City"
                                                type="city"
                                                class={`styled-input gray-input`}
                                                value={input.value}
                                                onBlur={input.onBlur}
                                                onChange={input.onChange}
                                                error={meta.error}
                                                touch={meta.touched}
                                            />
                                        )}
                                    </Field>
                                    <Field
                                        name="phone"
                                        validate={composeValidators(required, isValidPhoneNumber)}
                                        render={({ input, meta }) => (
                                            <Input
                                                id="phone"
                                                label="Phone Number"
                                                name="phone"
                                                class={`styled-input gray-input`}
                                                value={input.value}
                                                onBlur={input.onBlur}
                                                onChange={input.onChange}
                                                type="tel"
                                                error={meta.error}
                                                touch={meta.touched}
                                            />
                                        )}
                                    />
                                    <Field name="email" validate={composeValidators(required, isEmail)}>
                                        {({ input, meta }) => (
                                            <Input
                                                id="email"
                                                name="email"
                                                label="Email"
                                                type="email"
                                                class={`styled-input gray-input`}
                                                value={input.value}
                                                onBlur={input.onBlur}
                                                onChange={input.onChange}
                                                error={meta.error}
                                                touch={meta.touched}
                                            />
                                        )}
                                    </Field>

                                </>
                            )}
                        />


                    </Card.Body>
                </Col>
                <Col md={6} >


                    <CheckOutCard />
                    <StyledInput className="d-inline " label="Coupon Code" variant="outlined" />
                    <StyledCouponButton className="px-3 ms-2" variant="contained">Apply Coupon</StyledCouponButton>
                    <StyledCouponButton className="px-3 my-4 d-block " variant="contained">Place Order</StyledCouponButton>
                    {/* <Row>
                        <Col md={12} >
                        </Col>
                        <Col md={12}>
                        </Col>
                    </Row> */}
                </Col>
            </Row>
        </Container>
    )
}

export default CheckOut