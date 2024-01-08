import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Alert } from '@mui/material';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Track the current input error state
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error states
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    // Validate each field
    const nameValue = e.target.elements.name.value.trim();
    const emailValue = e.target.elements.email.value.trim();
    const messageValue = e.target.elements.message.value.trim();

    if (!nameValue) {
      setNameError(true);
    }
    if (!emailValue) {
      setEmailError(true);
    }
    if (!messageValue) {
      setMessageError(true);
    }

    // If any field is empty, set the global error state
    if (!nameValue || !emailValue || !messageValue) {
      setError(true);
      return;
    }

    // Implement your form submission logic here
    console.log('Form submitted!');

    // Simulate an error for demonstration purposes
    if (Math.random() < 0.5) {
      setError(true);
      return;
    }

    // Reset state after successful submission
    setFormSubmitted(true);
    setError(false);

    // Reset state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <Container>
      <Typography paddingTop={3} variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography paddingBottom={1} variant="body2" gutterBottom>
        We're delighted to assist you. Whether you have questions, feedback, or just want to share your love for cupcakes, we're here for you.
        Feel free to drop us a message using the form below. All fields are required and are marked with an asterisk (*). Our team will get back to you as soon as possible.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              required
              InputLabelProps={{ 'aria-required': true, style: { fontSize: '1.2rem' }}}
              error={nameError}
              helperText={nameError && "Please enter a valid name"}
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              required
              InputLabelProps={{ 'aria-required': true, style: { fontSize: '1.2rem' }}}
              type="email"
              error={emailError}
              helperText={emailError && "Please enter a valid email address"}
              name="email"
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
              InputLabelProps={{ 'aria-required': true, style: { fontSize: '1.2rem' }}}
              error={messageError}
              helperText={messageError && "Please enter a message"}
              name="message"
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
            Please fill in all required fields.
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
