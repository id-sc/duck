import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="subtitle2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/home" aria-label="Go to Home page" sx={{ textDecoration: 'underline', '&:hover': { backgroundColor: 'hoverShade', color: 'primary.main' } }}>
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
    <Box component="footer" sx={{ bgcolor: '#020711', py: 6, overflowX: 'hidden' }}> {/* Add overflowX: 'hidden' here */}
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
          <Box paddingRight={'3%'}>
            <Link href="https://www.instagram.com/" sx={{ '&:hover img': { filter: 'brightness(90%)', transform: 'scale(1.3)', filter: 'brightness(80%)' } }}>
              <img
                aria-label="Link to Instagram"
                title="Visit Instagram"
                src="/icons8-instagram-48.png"
                role="link"
                alt="Instagram Logo"
                style={{ width: '40px', height: '40px', transition: 'filter 0.3s' }}
              />
            </Link>
          </Box>
          <Box paddingRight={'3%'}>
            <Link href="https://www.facebook.com/" sx={{ '&:hover img': { filter: 'brightness(90%)', transform: 'scale(1.3)', filter: 'brightness(80%)' } }}>
              <img
                aria-label="Link to Facebook"
                title="Visit Instagram"
                src="/icons8-facebook-48.png"
                role="link"
                alt="Facebook Logo"
                style={{ width: '40px', height: '40px', transition: 'filter 0.3s' }}
              />
            </Link>
          </Box>
          <Box paddingRight={'3%'}>
            <Link href="https://www.tiktok.com/" sx={{ '&:hover img': { filter: 'brightness(90%)', transform: 'scale(1.3)', filter: 'brightness(80%)' } }}>
              <img
                aria-label="Link to TikTok"
                title="Visit TikTok"
                src="/icons8-tiktok-48.png"
                role="link"
                alt="TikTok Logo"
                style={{ width: '40px', height: '40px', transition: 'filter 0.3s' }}
              />
            </Link>
          </Box>
          <Box>
            <Link href="https://www.youtube.com/" sx={{ '&:hover img': { filter: 'brightness(90%)', transform: 'scale(1.3)', filter: 'brightness(80%)' } }}>
              <img
                aria-label="Link to Youtube"
                title="Visit Youtube"
                src="/icons8-youtube-48.png"
                role="link"
                alt="Youtube Logo"
                style={{ width: '40px', height: '40px', transition: 'filter 0.3s' }}
              />
            </Link>
          </Box>
        </Box>

        <Copyright />
      </Container>
    </Box>
  );
}
