import React, { useState } from 'react';
import { Typography, Box, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
import { useCartContext } from '../context/CartContext';
import styled from '@emotion/styled';
import StripePaymentForm from './StripePaymentForm';

const StyledCard = styled(Box)`
    margin-top: 40px;
    padding: 20px;
    width: 350px;
`;

const CheckoutCard = () => {
    const { cartItems } = useCartContext();
    const [cashPaymentMethod, setCashPaymentMethod] = useState('cash');
    const [stripePaymentMethod, setStripePaymentMethod] = useState('stripe');

    const getTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, cartItem) => {
            const itemTotalPrice = cartItem.item.price * cartItem.quantity;
            return total + itemTotalPrice;
        }, 0);
        return totalPrice.toFixed(2);
    };

    return (
        <StyledCard className="d-flex flex-column justify-content-center " >
            <Box sx={{ padding: '10px 0' }}>
                {cartItems.map((cartItem) => (
                    <Box key={cartItem.item.id} sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Box sx={{ flex: '0 0 auto', marginRight: '10px' }}>
                            <img
                                src={cartItem.item.image}
                                alt={cartItem.item.title}
                                style={{ maxWidth: '100%', maxHeight: '50px' }}
                            />
                        </Box>
                        <Box sx={{ flex: '1' }}>
                            <Typography variant="subtitle2">
                                {cartItem.item.title.split(" ")[0]}
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '0 0 auto', marginLeft: '50px' }}>
                            <Typography variant="subtitle2">
                                ${cartItem.item.price.toFixed(2)}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={{ display: 'flex', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
                <Box sx={{ flex: '1' }}>
                    <Typography variant="body2">Subtotal:</Typography>
                </Box>
                <Box sx={{ flex: '0 0 auto' }} className="text-end">
                    <Typography variant="body2">
                        ${getTotalPrice()}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
                <Box sx={{ flex: '1' }}>
                    <Typography variant="body2">Shipping:</Typography>
                </Box>
                <Box sx={{ flex: '0 0 auto' }} className="text-end">
                    <Typography variant="body2">
                        Free
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', padding: '10px 0' }}>
                <Box sx={{ flex: '1' }}>
                    <Typography variant="body2">Total:</Typography>
                </Box>
                <Box sx={{ flex: '0 0 auto' }} className="text-end">
                    <Typography variant="body2">
                        ${getTotalPrice()}
                    </Typography>
                </Box>
            </Box>
            <Box >
                <Grid container sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Grid item md={12}>
                        <RadioGroup
                            aria-label="payment-method"
                            name="payment-method"
                            value={cashPaymentMethod}
                            onChange={(event) => setCashPaymentMethod(event.target.value)}
                            sx={{ flexDirection: 'row' }}
                        >
                            <FormControlLabel value="cash" control={<Radio sx={{
                                color: (theme) => theme.palette.mode === 'dark' ? 'black' : '#000',
                                '&.Mui-checked': {
                                    color: 'black',
                                },
                            }} />} label="Cash on Delivery" />
                        </RadioGroup>
                    </Grid>
                    <Grid item >
                        <RadioGroup
                            aria-label="payment-method"
                            name="payment-method"
                            value={stripePaymentMethod}
                            onChange={(event) => setStripePaymentMethod(event.target.value)}
                            sx={{ flexDirection: 'row' }}
                        >
                            <FormControlLabel
                                value="stripe"
                                control={<Radio />}
                                label="Stripe Payment"
                                checked={stripePaymentMethod === 'stripe'}
                                onChange={() => setStripePaymentMethod('stripe')}
                                sx={{
                                    color: (theme) => theme.palette.mode === 'dark' ? 'black' : '#000',
                                    '&.Mui-checked': {
                                        color: 'black',
                                    },
                                }}
                            />
                        </RadioGroup>
                        {stripePaymentMethod === 'stripe' && <StripePaymentForm />}
                    </Grid>
                </Grid>
            </Box>


        </StyledCard>
    );
};

export default CheckoutCard;
