// Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Link, IconButton, Paper, styled, Button, Hidden, Drawer, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; 
  
  return (
    <AppBar position="sticky">
      <Toolbar>
      <Link href="/home" sx={{ '&:hover img': { filter: 'brightness(90%)', transform: 'scale(1.1)' } }}>
      {/* Add your logo here */}
      <img
        aria-label="Go to home page"
        src="/logo_cupcake_round.png"
        role="link"
        alt="Cupcake Wonderland's Logo"
        style={{ width: '70px', height: '70px', marginRight: '10px', transition: 'filter 0.0s' }}
      />
    </Link>
        <Box >
        <Typography aria-label="Go to home page" variant="h3" component={RouterLink} to="/home" textAlign='left' fontFamily={'Pacifico'} color="inherit" sx={{ textDecoration: 'none', flexGrow: 1, '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}> {/* TODO Check font */} {/* TODO Make it clickable */} {/* TODO Add logo */}
          Cupcake Wonderland
        </Typography>
        </Box>

        {/* Display IconButton (MenuIcon) only on small screens */}
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            type="button"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Open navigation menu"
            onClick={toggleMenu}
            sx={{ marginLeft: 'auto', '&:hover': { backgroundColor: 'hoverShade', color: 'primary.main' } }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        {/* Display other buttons */} {/* TODO Center text in menu */} {/* TODO Make design in menu */} {/* TODO Add feedback */}
        <Hidden smDown>
        <Box sx={{ marginLeft: 'auto' }}>
        <Typography aria-label="Go to home page" variant="h3" component={RouterLink} to="/home" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}>
          Home
        </Typography>
        <Typography aria-label="Go to cupcakes page" variant="h3" component={RouterLink} to="/cupcakes" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}>
          Cupcakes
        </Typography>
        <Typography aria-label="Go to about us page" variant="h3" component={RouterLink} to="/about" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': {textDecoration: 'underline',  backgroundColor: 'hoverShade', color: 'primary.main' } }}>
          About us
        </Typography>
        <Typography aria-label="Go to our shops page" variant="h3" component={RouterLink} to="/shops" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}>
          Our Shops
        </Typography>
        <Typography aria-label="Go contact page" variant="h3" component={RouterLink} to="/contact" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}>
          Contact
        </Typography>
        </Box>
        </Hidden>

        {/* Drawer for menu on small screens */} {/* TODO Center text in menu pk un a margin right et pas les autres*/}
        <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
        <Paper sx={{ width: '100%', maxWidth: '100vw', height:'100%', backgroundColor: 'primary.main', overflow: 'hidden' }}>
          <Stack paddingTop={3}>
        <Typography aria-label="Go to home page" padding={3} variant="h3" component={RouterLink} to="/home" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main'} }}>
          Home
        </Typography>
        <Typography aria-label="Go to cupcakes page" padding={3} variant="h3" component={RouterLink} to="/cupcakes" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main'} }}>
          Cupcakes
        </Typography>
        <Typography aria-label="Go to about us page" padding={3} variant="h3" component={RouterLink} to="/about" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main'} }}>
          About us
        </Typography>
        <Typography aria-label="Go to our shops page" padding={3} variant="h3" component={RouterLink} to="/shops" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main'} }}>
          Our shops
        </Typography>
        <Typography aria-label="Go contact page" padding={3} variant="h3" component={RouterLink} to="/contact" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main'} }}>
          Contact
        </Typography>
          </Stack>
          </Paper>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


