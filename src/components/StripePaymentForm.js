import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const StripePaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            const { error } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
            });

            if (error) {
                setPaymentError(error.message);
                setPaymentSuccess(false);
            } else {
                setPaymentError(null);
                setPaymentSuccess(true);
            }
        } catch (error) {
            console.error('Error creating payment method:', error);
            setPaymentError('An error occurred while processing your payment.');
            setPaymentSuccess(false);
        }
    };

    return (
        <Container maxWidth="xl">
            <Box elevation={3} sx={{ padding: 2 }}>


                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                            },
                        },
                    }}
                />
                {paymentError && (
                    <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
                        {paymentError}
                    </Typography>
                )}
                {paymentSuccess && (
                    <Typography variant="body2" color="success" sx={{ marginBottom: 2 }}>
                        Payment successful!
                    </Typography>
                )}
                <Box display="flex" justifyContent="center">
                    <Button type="submit" onSubmit={handleSubmit} variant="contained" color="primary">
                        Pay Now
                    </Button>
                </Box>

            </Box>
        </Container>
    );
};

export default StripePaymentForm;
