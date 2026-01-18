import React from 'react';
import { Box, Container, Typography, Grid, Link, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1A2027', // Dark background
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: Brand/About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              BBQ MAZE
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              Serving the most authentic BBQ, Biryani, and Handi in town since 2015. 
              Quality and taste are our top priorities.
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              Main Street, Food Avenue, Karachi
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              Phone: +92 300 1234567
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              Email: info@flavorjunction.com
            </Typography>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit"><FacebookIcon /></Link>
              <Link href="#" color="inherit"><InstagramIcon /></Link>
              <Link href="#" color="inherit"><TwitterIcon /></Link>
            </Stack>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}