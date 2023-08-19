import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import about from '../assets/about.png'
import Frame874 from '../assets/Frame 874.png'
import Frame875 from '../assets/Frame 875.png'
import Frame876 from '../assets/Frame 876.png'

const About = () => {
    return (
        <>
            <Box sx={{ mt: 12, mr: 0 }} >
                <Grid container>
                    <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Container sx={{ ml: 16 }}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Our Story</Typography>
                            <Box>
                                <Typography variant='body1' sx={{ mt: 2 }} >  Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </Typography>
                                <Typography variant='body1' sx={{ mt: 2 }}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</Typography>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                className="mb-3"
                                style={{
                                    maxHeight: "837px",
                                    maxWidth: "70%",

                                }}
                                variant="right"
                                image={about}
                                alt="side image"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Container sx={{ mb: 4, mt: 16 }}>
                <Grid container className='image-container' sx={{
                    mt: 8, '& .MuiCard-root': { boxShadow: 'none', outline: 'none' },
                    justifyContent: 'center',
                }}>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={Frame874}
                                style={{
                                    maxHeight: "564px",
                                    maxWidth: "287px",

                                }}
                            />
                            <CardContent>
                                <Typography fontWeight='bold' gutterBottom variant="h5" component="div">
                                    Tom Cruise
                                </Typography>
                                <Typography variant="body2" fontWeight='bold'>Founder & Chairman</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={Frame875}
                                style={{
                                    maxHeight: "564px",
                                    maxWidth: "287px",

                                }}
                            />
                            <CardContent>
                                <Typography gutterBottom fontWeight='bold' variant="h5" component="div">
                                    Emma Watson
                                </Typography>
                                <Typography variant="body2" fontWeight='bold'>Managing Director</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={Frame876}
                                style={{
                                    maxHeight: "564px",
                                    maxWidth: "287px",

                                }}
                            />
                            <CardContent>
                                <Typography gutterBottom fontWeight='bold' variant="h5" component="div">
                                    Will Smith
                                </Typography>
                                <Typography variant="body2" fontWeight='bold'>Product Designer</Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                </Grid>
            </Container>
        </>
    )
}

export default About