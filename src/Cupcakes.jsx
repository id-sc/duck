// pages/Cupcakes.js
import React, { useState } from 'react';
import { Container, Typography, Grid, Alert, Box, Card, CardContent, CardMedia, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const cupcakesData = [
  {
    id: 1,
    title: 'Chocolate Chip',
    image: 'https://ibakeheshoots.com/wp-content/uploads/2014/07/Banana-Chocolate-Chip-Cupcakes-2-680x1024.jpg', // Replace with actual image URL
    description: 'Divine cupcake adorned with smooth vanilla frosting and chocolate chips.',
    bestseller: '1', // the lower the better, ex: top 1 best or top 9 best
  },
  {
    id: 2,
    title: 'Vanilla Rainbow',
    image: 'https://lovingitvegan.com/wp-content/uploads/2021/06/Vegan-Gluten-Free-Vanilla-Cupcakes-13.jpg', // Replace with actual image URL
    description: 'Vegan and gluten free vanilla cupcake topped with fluffy frosting and sprinkles.',
    bestseller: '8', 
  },
  {
    id: 3,
    title: 'Triple Chocolate',
    image: 'https://www.tamingtwins.com/wp-content/uploads/2023/12/chocolate-cupcakes-recipe-9-e1702304324685.jpg', // Replace with actual image URL
    description: 'Delicious chocolate cupcake with creamy chocolate frosting and sprinkles.',
    bestseller: '5',
  },
  {
    id: 4,
    title: 'Cookie Dough',
    image: 'https://thefoodcharlatan.com/wp-content/uploads/2023/03/Cookie-Dough-Cupcakes-19.jpg', // Replace with actual image URL
    description: 'Moist vanilla cupcake with cookie dough frosting and mini chocolate chips.',
    bestseller: '4',
  },
  {
    id: 5,
    title: 'Blueberry',
    image: 'https://bakerbynature.com/wp-content/uploads/2017/04/untitled-51-of-68-2.jpg', // Replace with actual image URL
    description: 'Blueberry cupcake topped with white chocolate frosting and juicy fruits.',
    bestseller: '7',
  },
  {
    id: 6,
    title: 'Red Velvet',
    image: 'https://www.aheadofthyme.com/wp-content/uploads/2023/02/red-velvet-cupcakes-2.jpg', // TODO resize the image
    description: 'Vegan red velvet cupcake topped with cream cheese frosting and sprinkles.',
    bestseller: '6',
  },
  {
    id: 7,
    title: 'Triple Berry',
    image: 'https://bakerbynature.com/wp-content/uploads/2017/04/untitled-40-of-62.jpg', // TODO resize the image
    description: 'Berry cupcake topped with raspberry frosting and refreshing fruits.',
    bestseller: '3',
  },

  {
    id: 8,
    title: 'Triple Berry',
    image: 'https://cdn.pixabay.com/photo/2018/07/01/19/50/muffin-3510308_1280.jpg', // TODO Change this one
    description: 'Vegan and gluten free lemon cupcake topped with icing sugar and juicy fruits.',
    bestseller: '9',
  },

  {
    id: 9,
    title: 'Winter Breeze',
    image: 'https://w4s8p5t8.rocketcdn.me/wp-content/uploads/2023/11/vegan-gingerbread-cupcakes.jpg', // TODO resize the image
    description: 'Gluten free apple cinnamon cupcakes with caramel frosting and gingerbread cookie.',
    bestseller: '2',
  },
  // TODO Add more cupcake data as needed
];

const Cupcakes = () => {
  const [filter, setFilter] = useState('all'); // Initial filter value
  const [sort, setSort] = useState('title'); // Initial sort value
  const [notification, setNotification] = useState('');

  // Filter cupcakes based on the selected filter
  const filteredCupcakes = cupcakesData.filter(cupcake => filter === 'all' || cupcake.description.toLowerCase().includes(filter.toLowerCase()));

  // Sort cupcakes based on the selected sort criteria
  const sortedCupcakes = filteredCupcakes.slice().sort((a, b) => a[sort].localeCompare(b[sort]));

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setNotification('Filter changed to ' + event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
    setNotification('Sorting changed to ' + event.target.value);
  };

  return (
    <Container>
      <Box paddingTop={3} paddingBottom={0}>
      <Typography variant="h2" gutterBottom>
        Cupcakes
      </Typography>
      </Box>
      <Box paddingBottom={3}>
      <Typography variant="body2" gutterBottom>
      Embark on a delectable journey with our diverse range of homemade cupcakes! Their flavors and themes change throughout the seasons, 
      so make sure to visit us frequently for a taste of our upcoming cupcakes! Utilize the filter and sorting options to discover the perfect treat for you.
      </Typography>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
        <Box>
        <FormControl style={{ minWidth: 120, minHeight: 100 }}>
          <InputLabel id="filter-label">
          <Typography variant="body2">Filter</Typography>
          </InputLabel>
          <Select
            labelId="filter-label"
            id="filter"
            value={filter} 
            onChange={handleFilterChange} 
            arial-label="Filter the cupcakes"
          >
            <MenuItem value="all"> {/* TODO Was working fine but now when i put all it doesn't work anymore */}
            <Typography variant="body2">All</Typography>
            </MenuItem>

            <MenuItem value="chips">
            <Typography variant="body2">Chips</Typography>
            </MenuItem>

            <MenuItem value="chocolate">
            <Typography variant="body2">Chocolate</Typography>
            </MenuItem>

            <MenuItem value="fruit">
            <Typography variant="body2">Fruit</Typography>
            </MenuItem>

            <MenuItem value="gluten">
            <Typography variant="body2">Gluten Free</Typography>
            </MenuItem>

            <MenuItem value="sprinkles">
            <Typography variant="body2">Sprinkles</Typography>
            </MenuItem>

            <MenuItem value="vanilla">
            <Typography variant="body2">Vanilla</Typography>
            </MenuItem>

            <MenuItem value="vegan">
            <Typography variant="body2">Vegan</Typography>
            </MenuItem>
            
            {/* TODO Change font size */}
          </Select>
        </FormControl>
        <FormControl style={{ minWidth: 120, minHeight: 100 }}>
          <InputLabel id="sort-label">
          <Typography variant="body2">Sort by</Typography>
          <MenuItem value="all">
            </MenuItem>
            </InputLabel>
          <Select
            labelId="sort-label"
            id="sort"
            value={sort}
            onChange={handleSortChange}
            arial-label="Sort the cupcakes"
          >
            <MenuItem value="title">
            <Typography variant="body2">Alphabetical</Typography>
            </MenuItem>

            <MenuItem value="bestseller">
            <Typography variant="body2">Best Seller</Typography>
            </MenuItem>
            {/* Add more sort options as needed */}
          </Select>
        </FormControl>
        </Box>
        <Box marginLeft='10%'>
            {/* ARIA live region for notifications */}
            <div role="status" aria-live="polite">
          {notification && (
            <Alert variant="outlined" severity="info" style={{ fontSize: '1.3rem' }}>
              {notification}
            </Alert>
          )}
        </div>
        </Box>
      </div>
      <Grid container spacing={3}>
        {sortedCupcakes.map((cupcake) => (
          <Grid paddingBottom={3} item key={cupcake.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                title={cupcake.title}
                alt={cupcake.title + ' - ' + cupcake.description}
                height="400"
                image={cupcake.image}
                style={{ objectFit: 'cover' }}
                aria-label={cupcake.title + ' - ' + cupcake.description}
              />
              <CardContent>
                <Typography variant="h4" component="div" gutterBottom>
                  {cupcake.title}
                </Typography>
                <Typography variant="body2">
                  {cupcake.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cupcakes;
