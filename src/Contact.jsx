// pages/Contact.js
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Alert } from '@mui/material';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted!');
    if (Math.random() < 0.5) {
      setError(true);
    } else {
      setFormSubmitted(true);
      setError(false);

      // Reset state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <Container>
      <Typography paddingTop={3} variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography paddingBottom={1} variant="body2" gutterBottom>
      We're delighted to assist you. Whether you have questions, feedback, or just want to share your love for cupcakes, we're here for you.
      Feel free to drop us a message using the form below. Our team will get back to you as soon as possible.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              required
              InputLabelProps={{style: { fontSize: '1.1rem' }}} // Adjust the fontSize as needed TODO mettre astérix au bon endroit et bonne taille
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Email" // label="Your Email"
              variant="outlined"
              required
              InputLabelProps={{style: { fontSize: '1.1rem' }}}
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              required
              InputLabelProps={{style: { fontSize: '1.1rem' }}}
            />
          </Grid>
          <Grid paddingBottom={3} textAlign={'center'} item xs={12}>
            <Button type="submit" size="large" variant="outlined" color="button">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
     {/* Display alerts based on form submission status and errors */}
     <Box paddingBottom={3}>
     {formSubmitted && (
        <Alert variant="outlined" severity="success">
          Form submitted successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="outlined" severity="error">
          Oops! Something went wrong. Please try again later.
        </Alert>
      )}
      </Box>
    </Container>
  );
};

{/* Include a feedback when form is submitted and when something is wrong */}
export default Contact;
