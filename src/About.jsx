import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const AboutUsPage = () => {
  return (
  <div >
      <Box>
        <Typography variant="h2" paddingTop={3} gutterBottom>
          About Us
        </Typography>
      </Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box paddingLeft={15} paddingRight={5} paddingBottom={5}>
          <Typography variant="body2" paragraph>
            Welcome to Cupcake Wonderland! We take pride in creating delicious and
            beautifully crafted cupcakes that bring joy to our customers. Our passion for baking
            is reflected in every treat we make. 
            Curious to learn more about the fascinating history behind Cupcake Wonderland and the 
            talented bakers who brought this sweet haven to life? 
            Keep reading to uncover the delightful journey that shaped our story!
          </Typography>
        </Box>
        <Box paddingLeft={5} paddingRight={15} paddingBottom={3}>
        <img
          src="https://media.istockphoto.com/id/1270395931/fr/photo/une-serveuse-retenant-et-servant-un-cupcake-de-velours-rouge.jpg?s=612x612&w=0&k=20&c=GEBW4T7Hf7HOq8CFFp453Jm7MmP9PePFAtGQedfMhZQ="
          alt="A delicious cupcake handed towards you on a plate"
          style={{ height: 250, marginRight: 20 }} /* TODO Make this image resizable */
        />
      </Box>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box paddingLeft={15} paddingRight={5} paddingBottom={3}>
          <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/5f/7c/cupcake-shop-interior.jpg" 
          alt="The inside of our first cupcake shop in Paris"
          title="l"
          style={{ height: 250, marginRight: 20 }}
        />
        </Box>        
        <Box paddingLeft={5} paddingRight={15} paddingBottom={5}>
        <Typography variant="body2" paragraph>
        Our story began in 1973 when Amaury's enchanting creations met Yasmine's experimental wonders during a local baking competition. 
        The spark ignited, and Cupcake Wonderland was born: a bakery where each cupcake is a delectable masterpiece, 
        telling the sweet tales of our founders. Step back in time with us, as we invite you to experience the legacy of Amaury and Yasmine.
        Picture an era where the art of crafting cupcakes was a blend of passion and innovation. 
        Today, Cupcake Wonderland stands as a timeless haven where their stories come alive in every bite.
          </Typography>
      </Box>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box paddingLeft={15} paddingRight={5} paddingBottom={5}>
          <Typography variant="body2" paragraph>
        But the story doesn't end there. As time unfolded, Amaury and Yasmine not only created a magical world of cupcakes but also built a family. 
        They celebrated their love with a union that brought four wonderful children into their lives. 
        Each child, inspired by the magic of their parents' bakery, embarked on their own sweet adventures.
        Fast forward to the present, and you'll find that Cupcake Wonderland has multiplied into a family of cupcake shops. 
        Each of their four children now oversees a Cupcake Wonderland in different locations, weaving their own tales of sweetness.
        Join us on this sweet journey where the magic of 1973 lives on in the flavors we create. Welcome to Cupcake Wonderland – 
        where the past meets the present in a delightful dance of flavors and stories.
          </Typography>
        </Box>
        <Box paddingLeft={5} paddingRight={15} paddingBottom={3}>
        <img
          src="https://media.istockphoto.com/id/1257383362/photo/delicatessen-bakery-store-with-variety-of-cupcakes.jpg?s=612x612&w=0&k=20&c=J8qVvGHA6_zTL_ezrppnz5w3nTg2rjcnqcqMJay-EdI="
          alt="A selection of our delicious cupcakes"
          style={{ height: 250, marginRight: 20 }} /* TODO Make this image resizable */
        />
      </Box>
      </Box>
      <Typography paddingLeft= '75' variant="h2" gutterBottom>
        Meet Our Bakers
      </Typography>
      <List style={{ paddingLeft: '75px', paddingRight: '75px', }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Amaury Zumbo" src="https://media.istockphoto.com/id/1160452280/fr/photo/voici-votre-caf%C3%A9.jpg?s=612x612&w=0&k=20&c=6alO1sxUufRzG17OZjnhhLomdhmlpQomdhavH8y7-8c=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Amaury Zumbo"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Visionary Pastry Artist
                </Typography>
                {' — With over 50 years of experience, Amaury is the creative mind behind our unique cupcake flavors. He creates enchanting and intricate cupcake designs that are almost too beautiful to eat.'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider /> 
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Yasmine Guichon" src="https://media.istockphoto.com/id/1313399157/fr/photo/verticale-de-femme-%C3%A2g%C3%A9e-a%C3%AEn%C3%A9e-heureuse-asiatique-restant-dans-la-cuisine-%C3%A0-la-maison-se.jpg?s=612x612&w=0&k=20&c=vKuuLJmPcD8ZyNhVJOsryLtpe7gYkgIydXdkV44WRls=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Yasmine Guichon" //TODO Add some colors here to each name
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Flavor Alchemist
                </Typography>
                {' — With over 50 years of experience, Yasmine\'s bold and innovative flavor combinations that elevate each cupcake to a unique culinary experience.'}
              </React.Fragment>
            }
          />
        
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Olivia Zumbo" src="https://media.istockphoto.com/id/1219703935/fr/photo/une-femme-p%C3%A2tissi%C3%A8re-ou-boulanger-d%C3%A2ge-moyen-pr%C3%A9pare-un-g%C3%A2teau.jpg?s=612x612&w=0&k=20&c=VXmSVi4TbEL2GACr41buHPBorxB2mGgIexbB1etYTNA=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Olivia Zumbo"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Whimsical Decorator
                </Typography>
                {' — Olivia has perfected the art of frosting, creating silky and delightful toppings that complement the cupcakes.'}
              </React.Fragment>
            }
          />        
          </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Liam Zumbo" src="https://media.istockphoto.com/id/1401171013/fr/photo/portrait-dun-barman-souriant.jpg?s=612x612&w=0&k=20&c=IBQ7xGyHcOOw_duwPUwbPrvfmc65s3xB7LJxmEfM8bQ=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Liam Zumbo"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Cupcake Explorer
                </Typography>
                {' — Liam Traveling the world to discover new inspirations and bringing global flavors to Cupcake Wonderland.'}
              </React.Fragment>
            }
          />        
          
          </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Amelia Zumbo" src="https://media.istockphoto.com/id/1461115751/fr/photo/cupcakes-faits-%C3%A0-la-main-jolie-jeune-femme-p%C3%A2tissi%C3%A8re-souriante-montrant-de-savoureuses.jpg?s=612x612&w=0&k=20&c=HoW_LG7EIGC7gEB6dONUQ6Zp6KFmWTkeE_wO9wKmtCI=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Amelia Zumbo"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Chocolatier Extraordinaire
                </Typography>
                {' — Amelia specializing in decadent chocolate cupcakes and delightful cocoa-infused creations.'}
              </React.Fragment>
            }
          />        

        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Milo Zumbo" src="https://media.istockphoto.com/id/895242106/fr/photo/barista.jpg?s=612x612&w=0&k=20&c=kX-3uQvflmFH6XtdWfAugoHNjA0BLDFyzaL3V7WrB00=" style={{ width: 200, height: 200 }} /* TODO Make this image resizable TODO change this image */ /> 
          </ListItemAvatar>
          <ListItemText style={{ paddingLeft: '50px', paddingRight: '50px' }}
            primary="Milo Zumbo"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary">
                  The Junior Cupcake Apprentice
                </Typography>
                {' — Despite being the youngest, Milo is showing promise as a budding cupcake artist. He learning the ropes from the rest of the family.'}
              </React.Fragment>
            }
          />              
        </ListItem>
        <Divider />
        {/* Add more bakers as needed */}
      </List>
    </div>
  );
};

export default AboutUsPage;
