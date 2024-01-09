import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Link, IconButton, Paper, Hidden, Drawer, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppBar position="sticky" sx={{ overflowX: 'hidden' }}>
      <Toolbar>
        <Link href="/home" sx={{ '&:hover img': { filter: 'brightness(90%)', transform: 'scale(1.1)' } }}>
          {/* Add your logo here */}
          <img
            aria-label="Go to Home page"
            src="/logo_cupcake_round.png"
            role="link"
            alt="Cupcake Wonderland's Logo"
            style={{ width: '70px', height: '70px', marginRight: '10px', transition: 'filter 0.3s' }}
          />
        </Link>
        <Box>
          <Typography
            aria-label="Go to home page"
            variant="h3"
            component={RouterLink}
            to="/home"
            textAlign="left"
            fontFamily={'Pacifico'}
            color="inherit"
            sx={{
              textDecoration: 'none',
              flexGrow: 1,
              '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' },
            }}
          >
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

        {/* Display text links based on window width */}
        {windowWidth > 900 && (
          <Box sx={{ marginLeft: 'auto' }}>
            <Typography
              aria-label="Go to Home page"
              variant="h3"
              component={RouterLink}
              to="/home"
              color="inherit"
              sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}
            >
              Home
            </Typography>
            <Typography
              aria-label="Go to Cupcakes page"
              variant="h3"
              component={RouterLink}
              to="/cupcakes"
              color="inherit"
              sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}
            >
              Cupcakes
            </Typography>
            <Typography
              aria-label="Go to About page"
              variant="h3"
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}
            >
              About
            </Typography>
            <Typography
              aria-label="Go to Shops page"
              variant="h3"
              component={RouterLink}
              to="/shops"
              color="inherit"
              sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}
            >
              Shops
            </Typography>
            <Typography
              aria-label="Go to Contact page"
              variant="h3"
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={{ marginLeft: 2, marginRight: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline', backgroundColor: 'hoverShade', color: 'primary.main' } }}
            >
              Contact
            </Typography>
          </Box>
        )}

        {/* Drawer for menu on small screens */}
        <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
          <Paper sx={{ width: '300px', maxWidth: '100%', height: '100%', backgroundColor: 'primary.main', overflow: 'auto', padding: '2%', textAlign:'center' }}>
            <Stack>
              <Typography
                aria-label="Go to Home page"
                variant="h3"
                component={RouterLink}
                to="/home"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main' } }}
                onClick={closeMenu}
              >
                Home
              </Typography>
              <Typography
                aria-label="Go to Cupcakes page"
                padding={'1%'}
                variant="h3"
                component={RouterLink}
                to="/cupcakes"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main' } }}
                onClick={closeMenu}
              >
                Cupcakes
              </Typography>
              <Typography
                aria-label="Go to About page"
                padding={'1%'}
                variant="h3"
                component={RouterLink}
                to="/about"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main' } }}
                onClick={closeMenu}
              >
                About
              </Typography>
              <Typography
                aria-label="Go to Shops page"
                padding={'1%'}
                variant="h3"
                component={RouterLink}
                to="/shops"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main' } }}
                onClick={closeMenu}
              >
                Shops
              </Typography>
              <Typography
                aria-label="Go Contact page"
                padding={'1%'}
                variant="h3"
                component={RouterLink}
                to="/contact"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', backgroundColor: 'hoverShade', color: 'primary.main' } }}
                onClick={closeMenu}
              >
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
