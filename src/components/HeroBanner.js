import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography 
      color="#FF2625" 
      fontWeight="600" 
      fontSize="26px">Gym Club
      </Typography>
    <Typography 
      fontWeight={700} 
      sx={{ fontSize: { lg: '44px', xs: '40px' } }} 
      mb="23px" mt="30px">
        Sweat, Smile <br />
        And Repeat
    </Typography>
      <Typography 
        fontSize="22px" 
        fontFamily="Alegreya" 
        lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
    <Stack>
      <a href="#exercises" style={{ 
        marginTop: '45px', 
        textDecoration: 'none', 
        width: '200px', 
        textAlign: 'center', 
        background: '#A9A9A9', 
        padding: '14px', 
        fontSize: '22px', 
        textTransform: 'none', 
        color: 'black', 
        borderRadius: '4px' }}>Explore Exercises
      </a>
    </Stack>
    <Typography 
      fontWeight={600} 
      color="#FF2625" sx={{ 
      opacity: '0.7', 
      width:'1200px',
      display: { lg: 'block', xs: 'none' }, 
      fontSize: '200px' }}>
      Work Hard
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;