import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <Box minHeight={500} sx={{ marginTop: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h1' className='text-center ' sx={{ fontWeight: 'bold' }}>404 Not Found</Typography>
            <Typography variant='h6' className='text-center ' sx={{ justifyContent: 'center', alignContent: 'center', fontSize: '14px' }}>Your visited page not found. You may go home page.</Typography>

            <StyledCouponButton onClick={handleNavigate} sx={{ alignItems: 'center', justifyContent: 'center' }} className='px=2'>Back to home page</StyledCouponButton>
        </Box>
    )
}

export default NotFound


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