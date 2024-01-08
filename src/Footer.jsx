import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Instagram, Facebook } from '@mui/icons-material';

function Copyright() {
  return (
    <Typography variant="subtitle2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/home" sx={{ textDecoration: 'underline', '&:hover': { backgroundColor: 'hoverShade', color: 'primary.main' } }}>
        Cupcake Wonderland
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;
    {/* TODO Check footer consistency */}
  return (
    <Box component="footer" sx={{ bgcolor: '#020711', py: 6 }}> {/* TODO Change bgcolor */}
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>
          {"Cupcake Wonderland"}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p">
          {"Homemade Cupcakes"}
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          component="p">
          {"by Heïdi Sainte-Catherine & Nicholas Beltramini"}
        </Typography>

        {/* Social Media Links */} {/* TODO sx={{ '&:hover img': { filter: 'brightness(90%)', transform: 'scale(1.1)' } }}e */}
        <Box display="flex" justifyContent="center" sx={{ textAlign: 'center', mt: 2 }}>
          <Box>
          <Link href="https://www.instagram.com/" sx={{ '&:hover img': { filter: 'brightness(90%)', transform: 'scale(1.1)' } }}>
            <img
            aria-label="Link to Instagram"
            title="Visit Instagram"
            src="https://icons8.com/icon/118489/facebook"
            role="link"
            alt="Instagram Logo"
            style={{ width: '40px', height: '40px', transition: 'filter 0.3s' }}
            />
          </Link>
          </Box>
          <Box>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" sx={{ mx: 2, '&:hover': { filter: 'brightness(60%)'} }} title="Visit Facebook"> {/* <img> style={{ width: '70px', height: '70px', marginRight: '10px', transition: 'filter 0.3s' }} </img> */}
          <svg aria-label="Link to Facebook" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24" role="link" alt="Facebook logo">
            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.395,4.275,9.78,9.621,9.981v-6.942H9.278v-2.725h2.343v-2.005 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365v6.659C18.768,20.613,22,16.689,22,12C22,6.477,17.523,2,12,2z" fill="#ffffff"></path>
          </svg>
          </Link>
          </Box> 
          <Link aria-label="Link to TikTok" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" sx={{ mx: 2, '&:hover': { filter: 'brightness(60%)'} }} title="Visit TikTok"> {/* TODO add hover over links in footer and header */}
          <svg aria-label="Link to TikTok" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24" role="link" alt="TikTok logo">
            <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z" fill="#ffffff"></path>
          </svg>
          </Link>
          <Box>
          <Link aria-label="Link to Youtube" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" sx={{ mx: 2, '&:hover': { filter: 'brightness(60%)'} }} title="Visit Youtube">
          <svg aria-label="Link to Youtube" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24" role="link" alt="Youtube logo"> {/* TODO add name to element?? chatgpt says we usually don't for image links */}
            <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" fill="#ffffff"></path>
          </svg>
          </Link>
          </Box>
        </Box>

        <Copyright />
      </Container>
    </Box>
  );
}