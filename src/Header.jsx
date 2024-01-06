// Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Paper, styled, Button, Hidden, Drawer, Stack } from '@mui/material';
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
         {/* Add your logo here */}
         <img src="/logo_cupcake_round.png" alt="Cupcake Logo" style={{ width: '70px', height: '70px', marginRight: '10px' }} /> 
        {/* Always show the title */}
        <Typography variant="h3" component={RouterLink} to="/home" textAlign='left' fontFamily={'Pacifico'} color="inherit" sx={{ textDecoration: 'none', flexGrow: 1 }}> {/* TODO Check font */} {/* TODO Make it clickable */} {/* TODO Add logo */}
          Cupcake Wonderland
        </Typography>

        {/* Display IconButton (MenuIcon) only on small screens */}
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        {/* Display other buttons */} {/* TODO Center text in menu */} {/* TODO Make design in menu */} {/* TODO Add feedback */}
        <Hidden smDown>
        <Typography variant="h3" component={RouterLink} to="/home" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none' }}>
          Home
        </Typography>
        <Typography variant="h3" component={RouterLink} to="/cupcakes" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none' }}>
          Cupcakes
        </Typography>
        <Typography variant="h3" component={RouterLink} to="/about" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none' }}>
          About us
        </Typography>
        <Typography variant="h3" component={RouterLink} to="/shops" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none' }}>
          Our Shops
        </Typography>
        <Typography variant="h3" component={RouterLink} to="/contact" color="inherit" sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none' }}>
          Contact
        </Typography>
          {/* Add more buttons as needed */}
        </Hidden>

        {/* Drawer for menu on small screens */} {/* TODO Center text in menu pk un a margin right et pas les autres*/}
        <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
        <Paper sx={{ width: '100%', maxWidth: '100vw', height:'100%', backgroundColor: '#020711', overflow: 'hidden' }}>
          <Stack>
        <Typography paddingTop={6} paddingBottom={3} paddingLeft={3} paddingRight={3} variant="h3" component={RouterLink} to="/home" sx={{ textDecoration: 'none' }}>
          Home
        </Typography>
        <Typography padding={3} variant="h3" component={RouterLink} to="/cupcakes" sx={{ textDecoration: 'none' }}>
          Cupcakes
        </Typography>
        <Typography padding={3} variant="h3" component={RouterLink} to="/about" sx={{ textDecoration: 'none' }}>
          About us
        </Typography>
        <Typography padding={3} variant="h3" component={RouterLink} to="/shops" sx={{ textDecoration: 'none' }}>
          Our shops
        </Typography>
        <Typography padding={3} variant="h3" component={RouterLink} to="/contact" sx={{ textDecoration: 'none' }}>
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


