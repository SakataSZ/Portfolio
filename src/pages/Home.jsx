import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const imgEyeCatch = 'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80.jpg'

export const Home = () => {
  return (
    <div className='Home'>
      <Box width='100%' height='100vh' position='fixed' zIndex={-1} padding={5} sx={{
        backgroundImage: `url(${imgEyeCatch})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <Grid container sx={{
          position: 'fixed',
          top: '50%',
          transform: `translateY(-50%)`
        }}>
          <Grid item xs={12} md={5}>
            <Typography variant='h3'>
              Welcome to<br />SakataSZ Portfolio
            </Typography>
          </Grid>
          <Grid item xs={0} md={7} />
        </Grid>
      </Box>
      <Box width='100%' height='100vh' position='relative' />
      <Box padding={100} sx={{ backgroundColor: 'black' }} />
    </div>
  )
}

export default Home;