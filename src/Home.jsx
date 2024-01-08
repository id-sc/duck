import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Paper,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const QuiltedImageList = () => {
  return (
    <ImageList
      sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
      cols={4}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ flex: '1 1 calc(25% - 16px)' }}>
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            aria-label={item.title + ' - ' + item.description}
            alt={item.description}
            title={item.title}
            loading="lazy"
          />

          <ImageListItemBar
            title={<span style={{ fontSize: '20px' }}>{item.title}</span>}
            subtitle={<span style={{ fontSize: '16px' }}>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1555420460-5551f716b44c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxjdXBjYWtlfGVufDB8MHwwfHx8MA%3D%3D',
    title: 'Baker\'s Haven',
    author: '@lollipop',
    description: 'Cupcakes on a work surface filled with flour and sprinkles',
  },
  {
    img: 'https://images.unsplash.com/photo-1590080875852-ba44f83ff2db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGJha2VyfGVufDB8MHwwfHx8MA%3D%3D',
    title: 'Chocolate Bliss',
    author: '@lili7up',
    description: 'Chocolate ganache in a bowl',
  },
  {
    img: 'https://images.unsplash.com/photo-1692106898229-4fd64261f052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGJha2VyJTIwY3VwY2FrZXxlbnwwfDB8MHx8fDA%3D',
    title: 'Sweet Harmony',
    author: '@idsc',
    description: 'A strawberry placed next to a chocolate cupcake both on an icing sugar surface',
  },
  {
    img: 'https://images.unsplash.com/photo-1582760999860-bc6c933093da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGN1cGNha2V8ZW58MHwwfDB8fHww',
    title: 'Chocolate Explosion',
    author: '@asteroid',
    description: 'Three chocolate cupcakes aligned on chocolate powder',
  },
  {
    img: 'https://images.unsplash.com/photo-1519881965905-ad3bc8c2ecce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGJha2VyJTIwY3VwY2FrZXxlbnwwfDB8MHx8fDA%3D',
    title: 'After Work',
    author: '@cupcake_lover',
    description: 'A tea set with cupcakes',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661765284433-2d104c0db1da?w=500&=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJha2VyJTIwY3VwY2FrZXxlbnwwfDB8MHx8fDA%3D',
    title: 'Generations of Frosting',
    author: '@sofiiia_cielo',
    description: 'A family icing some cupcakes',
  },
  {
    img: 'https://images.unsplash.com/photo-1625455709563-2f967ec26e87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJha2VyJTIwY3VwY2FrZXxlbnwwfDB8MHx8fDA%3D',
    title: 'Essentials',
    author: '@croissant231',
    description: 'Icing bags, decorating tips, and cupcakes wrappers',
  },
  {
    img: 'https://images.unsplash.com/photo-1603532583196-b102aba7ebab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJha2VyJTIwY3VwY2FrZXxlbnwwfDB8MHx8fDA%3D',
    title: 'Pink Blooms',
    author: '@delightful',
    description: 'Cupcakes with babypink frosting imitating a rose pattern',
  },
  {
    img: 'https://images.unsplash.com/photo-1486428128344-5413e434ad35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5rbGVzJTIwY3VwY2FrZXxlbnwwfDB8MHx8fDA%3D',
    title: 'Irresistible Bite',
    author: '@arwinneil',
    description: 'One half eaten cupcake in a multitude of cupcakes',
  },
  {
    img: 'https://images.unsplash.com/photo-1640806354740-d47c98c190ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxiYWtlciUyMGN1cGNha2V8ZW58MHwwfDB8fHww',
    title: 'Winter is Coming',
    author: '@rv_lj',
    description: 'Chocolate frosting cupcakes with icing sugar and a snowflake on top',
  },
  {
    img: 'https://images.unsplash.com/photo-1514910440960-0b0fe5b56501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxiYWtlciUyMGN1cGNha2V8ZW58MHwwfDB8fHww',
    title: 'First Date',
    author: '@iki_bg',
    description: 'Two identical plates with a coffee and a cupcake',
  },
  {
    img: 'https://www.mapa-assurances.fr/var/ayaline/storage/images/actualites/alimentation-saine-gastronomie/le-metier-de-patissier/150671-1-fre-FR/Le-metier-de-patissier_newsdetail.jpg',
    title: 'Sweet Preparations',
    author: '@sosophie',
    description: 'A chef frosting some cupcakes',
  },
];


const HomePage = () => {
  const mainFeaturedPost = {
    title: 'Welcome to Cupcake Wonderland!',
    description: 'Dive into joy with our homemade cupcakes. Your taste buds are about to embark on a delightful journey.',
    linkText: 'Explore Cupcakes',
    image: 'https://blog.feeriecake.fr/files/2016/06/cupcakes2-1.png',
    imageText: 'Red berries cupcakes',
  };

  return (
    <Container>
    {/* Main */}
    <Box paddingTop={2}>
      <Paper 
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: '4',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${mainFeaturedPost.image})`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {<img style={{ display: 'none' }} src={mainFeaturedPost.image} alt={mainFeaturedPost.imageText} aria-label={mainFeaturedPost.imageText + ' - ' + mainFeaturedPost.description} />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
        <Grid container>
          <Grid item xs={12} md={11}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                overflow: 'hidden',
                maxWidth: '100%',
                textAlign: 'center',
              }}
            >
              <Typography variant="h1" color="inherit" gutterBottom sx={{ wordWrap: 'break-word' }}>  {/*or overflowWrap: 'break-word'*/}
                {mainFeaturedPost.title}
              </Typography>
              <Typography variant="body1" color="inherit" paragraph>
                {mainFeaturedPost.description}
              </Typography>
              <Box>
                <Button aria-label="Go to Cupcakes page" variant="contained" size="large" aria-label="View Cupcakes" href="/cupcakes">
                  Explore Cupcakes
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>

      {/* Additional content */}
      <Typography variant="h2" paddingTop={4} paragraph>
      Discover the Latest Flavors
      </Typography>
      <Typography variant="body2" paragraph>
      Explore a sweet world of delicious treats where we reveal our latest cupcake creations made with love and packed with amazing flavors. 
      From special seasonal flavors to treats available for a limited time, each cupcake has its own unique story waiting for you to taste. 
      Be the first to discover our exciting new cupcakes, special promotions, and community events. 
      Because who does not love a surprise that involves cupcakes?
      </Typography>

      <Grid container spacing={2} sx={{ mt: 3 }}>
        {/* Featured Cupcakes */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ bgcolor: '#F5F5F5'}}> {/* TODO change bg color */}
              <Typography variant="h4" gutterBottom>
                New Cupcake: Winter Bites
              </Typography>
              <Typography variant="body3">
              Introducing Winter Bites, a cinnamon apple cupcake adorned with rich caramel frosting and coulis and crowned with a gingerbread cookie - a festive treat capturing winter's essence.
              </Typography>
              <Box paddingTop={1} textAlign='center'>
                <Button aria-label="Go to Cupcakes page" variant="outlined" size="medium" color="button" href="/cupcakes">
                  Explore Cupcakes
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ bgcolor: '#F5F5F5'}}> {/* TODO change bg color */}
              <Typography variant="h4" gutterBottom>
                Cupcake Crafting Workshops
              </Typography>
              <Typography variant="body3">
                Discover the art of baking and decorating cupcakes at Cupcake Wonderland. Perfect for all levels of baking enthusiasts! Find more information at your local shop.
              </Typography>
              <Box paddingTop={1} textAlign='center'>
                <Button aria-label="Go to Shops page" variant="outlined" size="medium" color="button" href="/shops">
                  Nearby Shops
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ bgcolor: '#F5F5F5'}}> {/* TODO change bg color */} {/* TODO Add a background color for each card */}
              <Typography variant="h4" gutterBottom>
                Special Winter Offer
              </Typography>
              <Typography variant="body3">
              Did not love your Christmas gifts? No worries! Our winter offer is here to sweeten the deal. Treat yourself to joy – buy two cupcakes, get one free. Limited time offer.
              </Typography>
              <Box paddingTop={1} textAlign='center'>
                <Button aria-label="Go to Cupcakes page" variant="outlined" size="medium" color="button" href="/cupcakes">
                  Explore Cupcakes
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container paddingBottom={5} spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ bgcolor: '#F5F5F5'}}> {/* TODO change bg color */}
              <Typography variant="h4" gutterBottom>
              Meet Our Newest Baker: Milo Payard
              </Typography>
              <Typography variant="body3">
              Introducing the youngest member of our Cupcake Wonderland family, Miles Payard! Miles has opened our newest shop in the heart of Madrid, Spain.
              </Typography>
              <Box paddingTop={1} textAlign='center'>
                <Button aria-label="Go to About page" variant="outlined" size="medium" color="button" href="/about">
                  Meet Miles
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ bgcolor: '#F5F5F5'}}> {/* TODO change bg color */} {/* TODO Add a background color for each card */}
              <Typography variant="h4" gutterBottom>
                Create Our Next Cupcake?
              </Typography>
              <Typography variant="body3">
                You want to be the mind behind the next cupcake we sell in all of our shops? Send us the description of you idea through our contact form!
              </Typography>
              <Box paddingTop={1} textAlign='center'>
                <Button aria-label="Go to Contact page" variant="outlined" size="medium" color="button" href="/contact">
                  Contact us
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box paddingBottom={5} textAlign='center' >
      <Typography variant="h2" paragraph>
        Sweet Gallery
      </Typography>
      <Typography paddingBottom={1} variant="body2" paragraph>
        Welcome to our Sweet Gallery, a delightful space where we showcase the sweet moments captured by our amazing customers. 
        Our cupcakes have been a part of countless celebrations, and now it's time to shine the spotlight on you!
        Explore the beautiful snapshots shared by our community, each telling a unique story of joy, celebrations, and the love for cupcakes.
      </Typography>
        <QuiltedImageList /> {/* Add the QuiltedImageList component */}
        </Box>
    </Container>
  );
};

export default HomePage;
