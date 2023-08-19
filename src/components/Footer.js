import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import InputSubscription from "./InputSubscription";
import '../components.css'



const Footer = () => {

  return (
    <Box maxWidth="xxl"
      sx={{
        backgroundColor: "black",

      }}
    >

      <Grid container sx={{ m: '38px' }}>
        <Grid item xs={12} md={2} lg={2} sx={{ mt: '28px', ml: '56px' }}>
          <Typography color={"white"} variant="h5">
            Exclusive
          </Typography>
          <Typography color={"white"} variant="h6">
            Subscribe
          </Typography>
          <Typography color={"white"} variant="subtitle">
            Get 10% off your first order
          </Typography>
          <InputSubscription />
        </Grid>

        <Grid item xs={12} md={3} lg={2} sx={{ mt: '28px' }} >

          <Box
            id="category-a"
            sx={{}}
          >
            <Typography color={"white"} variant="h5"> Support</Typography>
            <Typography color={"white"} variant="subtitle1">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Typography>
            <Typography color={"white"} variant="subtitle1">exclusive@gmail.com</Typography>
            <Typography color={"white"} variant="subtitle1">+88015-88888-9999</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} lg={2} sx={{ mt: '28px' }}>

          <Box
            id="category-a"

          >
            <Typography color={"white"} variant="h5">Account</Typography>
            <Typography color={"white"} variant="subtitle1">My Account</Typography>
            <Typography color={"white"} variant="subtitle1">Login / Register</Typography>
            <Typography color={"white"} variant="subtitle1">Cart</Typography>
            <Typography color={"white"} variant="subtitle1">Wishlist</Typography>
            <Typography color={"white"} variant="subtitle1">Shop</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} lg={2} sx={{ mt: '28px' }}>
          <Box>
            <Typography color={"white"} variant="h5">Quick Link</Typography>
            <Typography color={"white"} variant="subtitle1">Privacy Policy</Typography>
            <Typography color={"white"} variant="subtitle1">Terms of use</Typography>
            <Typography color={"white"} variant="subtitle1">FAQ</Typography>
            <Typography color={"white"} variant="subtitle1">Contac</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} lg={2} sx={{ mt: '28px' }}>
          <Box>
            <Typography color={"white"} variant="h5">Download App</Typography>
            <Typography color={"white"} variant="subtitle1">Save $3 with App New User only</Typography>

          </Box>
        </Grid>
      </Grid>
      <Divider className="custom-divider" />
      <Grid container direction="column" alignItems="center" sx={{ py: 3 }}>

        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="subtitle1">
            © Copyright Exclusive {`${new Date().getFullYear()} All right reserved`}
          </Typography>
        </Grid>

      </Grid>

    </Box>
  );
};

export default Footer;
