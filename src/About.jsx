import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/material';

const AboutUsPage = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
    <div >
        <Box>
          <Typography variant="h2" paddingTop={3} gutterBottom>
            About Us
          </Typography>
  
          </Box>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2%',
            flexDirection: isSmallScreen ? 'column' : 'row',
          }}
        >
          <Box flex="1" paddingX="5%" paddingBottom="2%" textAlign={isSmallScreen ? 'center' : 'left'}>
            <Typography variant="body2" paragraph>
              Welcome to Cupcake Wonderland! We take pride in creating delicious and beautifully crafted cupcakes that bring joy to our customers. Our passion for baking is reflected in every treat we make. Curious to learn more about the fascinating history behind Cupcake Wonderland and the talented bakers who brought this sweet haven to life? Keep reading to uncover the delightful journey that shaped our story!
            </Typography>
          </Box>
          <Box flex="1" paddingX="5%" paddingBottom="2%">
            <img
              src="https://media.istockphoto.com/id/1270395931/fr/photo/une-serveuse-retenant-et-servant-un-cupcake-de-velours-rouge.jpg?s=612x612&w=0&k=20&c=GEBW4T7Hf7HOq8CFFp453Jm7MmP9PePFAtGQedfMhZQ="
              alt="A delicious cupcake handed towards you on a plate"
              aria-label="A delicious cupcake handed towards the viewer on a plate"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2%',
          flexDirection: isSmallScreen ? 'column' : 'row',
        }}
      >
        <Box flex="1" paddingX="5%" paddingBottom="2%">
          <Typography variant="body2" paragraph>
          Our story began in 1973 when Amaury's enchanting creations met Françoise's experimental wonders during a local baking competition. The spark ignited, and Cupcake Wonderland was born: a bakery where each cupcake is a delectable masterpiece, telling the sweet tales of our founders. Step back in time with us, as we invite you to experience the legacy of Amaury and Françoise. Picture an era where the art of crafting cupcakes was a blend of passion and innovation. Today, Cupcake Wonderland stands as a timeless haven where their stories come alive in every bite.
          </Typography>
        </Box>
        <Box flex="1" paddingX="5%" paddingBottom="2%">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/5f/7c/cupcake-shop-interior.jpg"
            alt="The inside of our first cupcake shop in Paris"
            aria-label="Inside of a cupcake shop with a presentation desk on the right, a window in which we see the kitchen, and tables for the customers on the left."
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>

      <Box
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%',
    flexDirection: isSmallScreen ? 'column' : 'row',
  }}
>
    <Box flex="1" paddingX="5%" paddingBottom="2%">
      <Typography variant="body2" paragraph>
        But the story doesn't end there. As time unfolded, Amaury and Françoise not only created a magical world of cupcakes but also built a family. They celebrated their love with a union that brought four wonderful children into their lives. Each child, inspired by the magic of their parents' bakery, embarked on their own sweet adventures. Fast forward to the present, and you'll find that Cupcake Wonderland has multiplied into a family of cupcake shops. Each of their four children now oversees a Cupcake Wonderland in different locations, weaving their own tales of sweetness. Join us on this sweet journey where the magic of 1973 lives on in the flavors we create. Welcome to Cupcake Wonderland – where the past meets the present in a delightful dance of flavors and stories.
      </Typography>
    </Box>
    <Box flex="1" paddingX="5%" paddingBottom="2%">
      <img
        src="https://media.istockphoto.com/id/1257383362/photo/delicatessen-bakery-store-with-variety-of-cupcakes.jpg?s=612x612&w=0&k=20&c=J8qVvGHA6_zTL_ezrppnz5w3nTg2rjcnqcqMJay-EdI="
        alt="A selection of our delicious cupcakes"
        aria-label="Lots of cupcakes aligned on a presentation desk in a shop"
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  </Box>

      <Typography paddingLeft= '75' variant="h2" gutterBottom>
        Meet Our Bakers
      </Typography>
      <List style={{ paddingLeft: '75px', paddingRight: '75px', }}>
        <ListItem alignItems="flex-start" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2%', flexDirection: isSmallScreen ? 'column' : 'row' }}>
          <ListItemAvatar>
            <Avatar alt="Amaury Payard" aria-label="Amaury Payard" src="https://media.istockphoto.com/id/1160452280/fr/photo/voici-votre-caf%C3%A9.jpg?s=612x612&w=0&k=20&c=6alO1sxUufRzG17OZjnhhLomdhmlpQomdhavH8y7-8c=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Amaury Payard"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Visionary Pastry Artist
                </Typography>
                {' — With over 50 years of experience, Amaury is the creative mind behind our unique cupcake designs. He creates enchanting and intricate cupcake designs that are almost too beautiful to eat. He manages the original shop in Paris, France along with Françoise.'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider /> 
        <ListItem alignItems="flex-start"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2%', flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <ListItemAvatar>
            <Avatar alt="Françoise Guichon" src="https://media.istockphoto.com/id/1275246551/fr/photo/femme-de-boulanger-retenant-un-plateau-vide-de-moule-de-cupcake.jpg?s=612x612&w=0&k=20&c=g7dDXx8pXz5VYyPjX9SwTsYMIoC6EiE1sdoqnguoW0Q=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Françoise Guichon" //TODO Add some colors here to each name
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Flavor Alchemist
                </Typography>
                {' — With over 50 years of experience, Françoise is the secret of our cupcake\'s rich flavor. Her bold and innovative flavor combinations that elevate each cupcake to a unique culinary experience. She manages the original shop in Paris, France along with Amaury.'}
              </React.Fragment>
            }
          />
        
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2%', flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <ListItemAvatar>
            <Avatar alt="Olivia Payard" aria-label="Olivia Payard" src="https://media.istockphoto.com/id/1219703935/fr/photo/une-femme-p%C3%A2tissi%C3%A8re-ou-boulanger-d%C3%A2ge-moyen-pr%C3%A9pare-un-g%C3%A2teau.jpg?s=612x612&w=0&k=20&c=VXmSVi4TbEL2GACr41buHPBorxB2mGgIexbB1etYTNA=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Olivia Payard"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Whimsical Decorator
                </Typography>
                {' — Olivia has mastered the craft of frosting, skillfully crafting silky and delightful toppings that enhance the cupcakes. She has extended her expertise by establishing a second shop in Lille, France.'}
              </React.Fragment>
            }
          />        
          </ListItem>
        <Divider />
        <ListItem alignItems="flex-start"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2%', flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <ListItemAvatar>
            <Avatar alt="Liam Payard" aria-label="Liam Payard" src="https://media.istockphoto.com/id/1401171013/fr/photo/portrait-dun-barman-souriant.jpg?s=612x612&w=0&k=20&c=IBQ7xGyHcOOw_duwPUwbPrvfmc65s3xB7LJxmEfM8bQ=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Liam Payard"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Cupcake Explorer
                </Typography>
                {' — Liam travels the world in search of new inspirations. Infusing a touch of freshness into our designs and flavors at Cupcake Wonderland. Currently overseeing the shop in Palo Alto, US, his explorations contribute to the diverse and delightful culinary experiences we offer.'}
              </React.Fragment>
            }
          />        
          
          </ListItem>
        <Divider />
        <ListItem alignItems="flex-start"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2%', flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <ListItemAvatar>
            <Avatar alt="Amélia Payard" aria-label="Amélia Payard" src="https://media.istockphoto.com/id/1461115751/fr/photo/cupcakes-faits-%C3%A0-la-main-jolie-jeune-femme-p%C3%A2tissi%C3%A8re-souriante-montrant-de-savoureuses.jpg?s=612x612&w=0&k=20&c=HoW_LG7EIGC7gEB6dONUQ6Zp6KFmWTkeE_wO9wKmtCI=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Amélia Payard"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Chocolatier Extraordinaire
                </Typography>
                {' — Specializing in decadent chocolate cupcakes and delightful cocoa-infused creations, Amélia oversees the operations of our Cupcake Wonderland in Barcelona, Spain.'}
              </React.Fragment>
            }
          />        

        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2%', flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <ListItemAvatar>
            <Avatar alt="Miles Payard" aria-label="Miles Payard" src="https://media.istockphoto.com/id/895242106/fr/photo/barista.jpg?s=612x612&w=0&k=20&c=kX-3uQvflmFH6XtdWfAugoHNjA0BLDFyzaL3V7WrB00=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Miles Payard"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Junior Cupcake Apprentice
                </Typography>
                {' — Despite being the youngest, Miles is showing promise as a cupcake artist. He learning the ropes from the rest of the family. He recently opened his own shop in Madrid, Spain.'}
              </React.Fragment>
            }
          />              
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default AboutUsPage;
