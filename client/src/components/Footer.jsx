import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box className="customFooter">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">About Us</Typography>
          <Typography>
            We are a kawaii gift company dedicated to delivering quality products. Our focus is on excellence and customer satisfaction.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className="quickLinks">
          <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
          <Link href="#" color="inherit" display="block">
            Home
          </Link>
          <Link href="#" color="inherit" display="block">
            About
          </Link>
          <Link href="#" color="inherit" display="block">
            Services
          </Link>
          <Link href="#" color="inherit" display="block">
            Contact
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Connect</Typography>
          <Box>
            <IconButton color="inherit" href="#" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="#" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="#" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="#" aria-label="Instagram">
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="body2">
          © {new Date().getFullYear()} Gift Boutique. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
