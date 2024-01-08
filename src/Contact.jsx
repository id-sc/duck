import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Alert } from '@mui/material';

const Contact = () => {
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(null);
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
  
    // Check input values and set specific error states
    const nameValue = e.target.elements.name.value.trim();
    const emailValue = e.target.elements.email.value.trim();
    const messageValue = e.target.elements.message.value.trim();
  
    if (!nameValue) {
      setNameError(true);
    }
  
    if (!emailValue || !emailValue.includes('@')) {
      setEmailError(true);
    }
  
    if (!messageValue) {
      setMessageError(true);
    }
  
    // Log error states
    console.log('Name error:', !nameValue);
    console.log('Email error:', !emailValue);
    console.log('Message error:', !messageValue);
  
    // Check if there are any errors
    if (!nameValue || !emailValue || !emailValue.includes('@') || !messageValue) {
      setError(true);
      setFormSubmissionStatus(null); // Clear the success message if there was one
      return;
    }
  
    // Implement your form submission logic here
    console.log('Form submitted!');
  
    setFormSubmissionStatus('success');
    setError(false);
  };
  
  

  return (
    <Container>
      <Typography paddingTop={3} variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography paddingBottom={1} variant="body2" gutterBottom>
        We are delighted to assist you. Whether you have questions, feedback, or just want to share your love for cupcakes, we are here for you.
        Feel free to drop us a message using the form below. All fields are required and are marked with an asterisk (*). Our team will get back to you as soon as possible.
      </Typography>
      <form onSubmit={handleSubmit} noValidate> {/* noValidate blocks the browser's built-in change of focus / allows the error messages to be displayed */}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Your Name"
              variant="outlined"
              required
              InputLabelProps={{ 'aria-required': 'Enter your name', style: { fontSize: '1.2rem' } }}
              InputProps={{ style: { fontSize: '1.5rem' } }}  
              error={nameError}
              helperText={nameError && <Typography fontSize='1.1rem' color='red'> Please enter a name </Typography>}
              aria-describedby={nameError ? 'name-error' : undefined}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              required
              InputLabelProps={{ 'aria-required': 'Enter your email address', style: { fontSize: '1.2rem' } }}
              InputProps={{ style: { fontSize: '1.5rem' } }}  
              type="email"
              error={emailError}
              helperText={emailError && <Typography fontSize='1.1rem' color='red'> Please enter a valid email address </Typography>}
              name="email"
              aria-describedby={nameError ? 'email-error' : undefined}
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
              InputLabelProps={{ 'aria-required': 'Enter your message', style: { fontSize: '1.2rem' } }}
              InputProps={{ style: { fontSize: '1.5rem' } }}  
              error={messageError}
              helperText={messageError && <Typography fontSize='1.1rem' color='red'> Please enter a message </Typography>}
              name="message"
              aria-describedby={nameError ? 'message-error' : undefined}
            />
          </Grid>
          <Grid paddingBottom={1} textAlign={'center'} item xs={12}>
            <Button type="submit" size="large" variant="outlined" color="button" aria-label="Submit Form">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* Display alerts based on form submission status and errors */}
      <Box paddingBottom={3} aria-live="polite">
      {formSubmissionStatus === 'success' && (
          <Alert variant="outlined" severity="success">
            Form submitted successfully!
          </Alert>
        )}
        {error && (
          <Alert variant="outlined" severity="error" style={{ fontSize: '1.3rem' }}>
            Oops! Make sure you completed all the fields and try again.
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
