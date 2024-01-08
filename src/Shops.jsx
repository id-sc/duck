import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';

const CupcakeShops = () => {
  const [cupcakeShops, setCupcakeShops] = useState([
    {
      id: 1,
      name: 'Cupcake Wonderland',
      address: '10 avenue de France',
      country: 'France',
      city: 'Paris',
      phone: '+33 6 XX XX XX XX',
      email: '@cupcake-wonderland.com',
      openingHours: '9:30 AM - 7:30 PM',
    },
    {
      id: 2,
      name: 'Sweet Delights',
      address: '57 rue Léon Gambetta',
      country: 'France',
      city: 'Lille',
      phone: '+33 6 XX XX XX XX',
      email: '@cupcake-wonderland.com',
      openingHours: '9:00 AM - 6:00 PM',
    },
    {
      id: 3,
      name: 'Cupcake Paradise',
      address: '660 Stanford Shopping Center',
      country: 'United States',
      city: 'Palo Alto',
      phone: '+1 202 XXX XXXX',
      email: '@cupcake-wonderland.com',
      openingHours: '9:00 AM - 7:00 PM',
    },
    {
      id: 4,
      name: 'Cupcake Paradise',
      address: 'calle de la Independència, 67', //TODO couleurs en alternance dans le tableau
      country: 'Spain',
      city: 'Barcelona',
      phone: '+34 6XX XX XX XX',
      email: '@cupcake-wonderland.com',
      openingHours: '11:00 AM - 9:00 PM', // TODO add a sort by alphabetical order
    },
    {
      id: 5,
      name: 'Cupcake Paradise',
      address: 'calle de Preciados, 42',
      country: 'Spain',
      city: 'Madrid',
      phone: '+34 6XX XX XX XX',
      email: '@cupcake-wonderland.com',
      openingHours: '12:00 AM - 11:00 PM',
    },
    // Add more cupcake shops as needed
  ]);

  const [filter, setFilter] = useState({
    country: 'Country',
    city: 'City',
  });

  const handleFilterChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  const filteredCupcakeShops = cupcakeShops.filter((shop) => {
    const filterByCountry = filter.country === 'Country' || shop.country === filter.country;
    const filterByCity = filter.city === 'City' || shop.city === filter.city;
    return filterByCountry && filterByCity;
  });

  const uniqueCountries = Array.from(new Set(cupcakeShops.map((shop) => shop.country)));
  const uniqueCities = Array.from(new Set(cupcakeShops.map((shop) => shop.city)));

  return (
    <Container>
      <Typography paddingTop={3} variant="h2" gutterBottom>
        Our Shops
      </Typography>
      <Typography paddingBottom={3} variant="body2" gutterBottom>
      We have lovely shops in three beautiful countries—France, Spain, and the United States. 
      Each place has its own special feel and offers yummy cupcakes made with love. 
      Come along on a sweet journey with us as we spread happiness to cupcake fans all around the world. 
      Experience the magic at our delightful cupcake shops, where every bite is a celebration!
      </Typography>
      <FormControl style={{ minWidth: 120, minHeight: 100 }}>
        <InputLabel id="filter-label"></InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          name="country"
          value={filter.country}
          onChange={handleFilterChange}
        >
          <MenuItem value="Country">
          <Typography variant="body2">Country</Typography>
          </MenuItem>
          {uniqueCountries.map((country) => (
            <MenuItem key={country} value={country}>
              <Typography variant="body2">{country}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ minWidth: 120, minHeight: 100 }}>
        <InputLabel id="filter-city-label"></InputLabel>
        <Select
          labelId="filter-city-label"
          id="filter-city"
          name="city"
          value={filter.city}
          onChange={handleFilterChange}
        >
          <MenuItem value="City">
          <Typography variant="body2">City</Typography>
          </MenuItem>
          {uniqueCities.map((city) => (
            <MenuItem key={city} value={city}>
              <Typography variant="body2">{city}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box paddingBottom={3}>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
          <Table sx={{ minWidth: 'auto' }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCupcakeShops.map((shop) => (
                <TableRow style={{ fontSize: 'large' }} key={shop.id}>
                <TableCell style={{ fontSize: 'large' }}>{shop.id}</TableCell>
                <TableCell style={{ fontSize: 'large' }}>{shop.address}</TableCell>
                <TableCell style={{ fontSize: 'large' }}>{shop.city}</TableCell>
                <TableCell style={{ fontSize: 'large' }}>{shop.country}</TableCell>
                <TableCell style={{ fontSize: 'large' }}>{shop.phone}</TableCell>
                <TableCell style={{ fontSize: 'large' }}>{shop.email}</TableCell>
              </TableRow>

              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default CupcakeShops;