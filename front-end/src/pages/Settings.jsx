import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';
import axios from 'axios';

const CardComponent = () => {
  const [userInfoSuccessMessage, setUserInfoSuccessMessage] = useState('');
  const [userInfoErrorMessage, setUserInfoErrorMessage] = useState('');
  const [creditCardSuccessMessage, setCreditCardSuccessMessage] = useState('');
  const [creditCardErrorMessage, setCreditCardErrorMessage] = useState('');
  const [profilePicSuccessMessage, setProfilePicSuccessMessage] = useState('');
  const [profilePicErrorMessage, setProfilePicErrorMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(''); // New state variable

  const handleUserInfoSubmit = async (event) => {
    event.preventDefault();
    
    // Assuming the form submission is successful
    const validationPassed = true; // Replace with actual validation logic
    if (validationPassed) {
      try {
        // Perform user info form submission logic here
        const response = await axios.post('/api/userinfo', {
          // Pass the form data to the server
          // Replace the following placeholders with the actual form field values
          username: 'JohnDoe',
          fullName: 'John Doe',
          email: 'john.doe@example.com',
          password: 'password123',
        });
        
        // Assuming the server returns a success message
        setUserInfoSuccessMessage(response.data.message);
        setUserInfoErrorMessage('');
      } catch (error) {
        // Handle any error that occurred during the request
        setUserInfoSuccessMessage('');
        setUserInfoErrorMessage('Failed to update user info.');
      }
    } else {
      setUserInfoSuccessMessage('');
      setUserInfoErrorMessage('Invalid user info. Please try again.');
    }
  };

  const handleCreditCardSubmit = async (event) => {
    event.preventDefault();

    // Assuming the form submission is successful
    const creditCardValidationPassed = true; // Replace with actual validation logic
    if (creditCardValidationPassed) {
      try {
        // Perform credit card info form submission logic here
        const response = await axios.post('/api/creditcard', {
          // Pass the form data to the server
          // Replace the following placeholders with the actual form field values
          cardNumber: '1234567890123456',
        });

        // Assuming the server returns a success message
        setCreditCardSuccessMessage(response.data.message);
        setCreditCardErrorMessage('');
      } catch (error) {
        // Handle any error that occurred during the request
        setCreditCardSuccessMessage('');
        setCreditCardErrorMessage('Failed to save credit card info.');
      }
    } else {
      setCreditCardSuccessMessage('');
      setCreditCardErrorMessage('Invalid credit card information. Please try again.');
    }
  };

  const handleUpgrade = (upgradeType) => {
    // Perform the upgrade logic here
    // You can replace the code below with your actual logic
    if (upgradeType === '45 Minutes') {
      setUserInfoSuccessMessage('Successfully upgraded to 45 minutes!');
    } else if (upgradeType === '60 Minutes') {
      setUserInfoSuccessMessage('Successfully upgraded to 60 minutes!');
    } else {
      setUserInfoErrorMessage('Upgrade failed!');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Perform validation logic here
      if (file.type === 'image/jpeg') {
        setProfilePicSuccessMessage('Profile picture uploaded successfully.');
        setProfilePicErrorMessage('');
      } else {
        setProfilePicErrorMessage('Invalid file format. Please upload a JPEG image.');
        setProfilePicSuccessMessage('');
      }
    } else {
      setProfilePicErrorMessage('Please select an image.');
      setProfilePicSuccessMessage('');
    }
  };

  const handleSubmit = () => {
    if (!profilePicErrorMessage) {
      // Submit logic here
      setSubmissionStatus('submitting'); // Set submission status to indicate submission in progress
      setTimeout(() => {
        // Simulating asynchronous submission
        setSubmissionStatus('error'); // Set submission status to indicate an error occurred
      }, 2000);
    } else {
      setSubmissionStatus('error'); // Set submission status to indicate an error occurred
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <Card style={{ height: '70vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              User Info
            </Typography>

            <form onSubmit={handleUserInfoSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="field1" style={{ marginRight: '3rem' }}>Username:</label>
                <TextField id="field1" variant="outlined" style={{ width: '20vw' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="field2" style={{ marginRight: '3rem' }}>Full name:</label>
                <TextField id="field2" variant="outlined" style={{ width: '20vw' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="field3" style={{ marginRight: '4.8rem' }}>Email:</label>
                <TextField id="field3" variant="outlined" style={{ width: '20vw' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="field4" style={{ marginRight: '3rem' }}>Password:</label>
                <TextField id="field4" variant="outlined" style={{ width: '20vw' }} />
              </div>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Edit User Info
              </Button>
            </form>

            {userInfoSuccessMessage && <div style={{ color: 'green', marginTop: '1rem' }}>{userInfoSuccessMessage}</div>}
            {userInfoErrorMessage && <div style={{ color: 'red', marginTop: '1rem' }}>{userInfoErrorMessage}</div>}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card style={{ height: '65vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Upgrade plan
            </Typography>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <div>
                <Typography variant="body1" color="text.secondary" style={{ marginBottom: '4px' }}>
                  Current plan:
                </Typography>
                <Button variant="contained" color="primary" style={{ marginBottom: '16px', width: '20vw', float: 'right' }}>
                  30 Minutes
                </Button>
              </div>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                style={{ marginBottom: '16px' }}
                onClick={() => handleUpgrade('45 Minutes')}
              >
                Upgrade to 45 Minutes
              </Button>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                style={{ marginBottom: '16px' }}
                onClick={() => handleUpgrade('60 Minutes')}
              >
                Upgrade to 60 Minutes
              </Button>
            </div>

            {userInfoSuccessMessage && (
              <Typography variant="body1" color="primary" style={{ marginBottom: '16px' }}>
                {userInfoSuccessMessage}
              </Typography>
            )}
            {userInfoErrorMessage && (
              <Typography variant="body1" color="error" style={{ marginBottom: '16px' }}>
                {userInfoErrorMessage}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card style={{ height: '65vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Credit Card Info
            </Typography>

            <form onSubmit={handleCreditCardSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="cardNumber" style={{ marginRight: '1rem' }}>Card Number:</label>
                <TextField id="cardNumber" variant="outlined" style={{ width: '20vw' }} />
              </div>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Save Credit Card Info
              </Button>
            </form>

            {creditCardSuccessMessage && (
              <div style={{ color: 'green', marginTop: '1rem' }}>{creditCardSuccessMessage}</div>
            )}
            {creditCardErrorMessage && (
              <div style={{ color: 'red', marginTop: '1rem' }}>{creditCardErrorMessage}</div>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
      <Card style={{ height: '65vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
          <CardContent>
          <Typography variant="h5" component="div">
                 Profile Picture
          </Typography>

          <div style={{ marginBottom: '1rem' }}>
             <input type="file" accept="image/jpeg, image/png" onChange={handleFileUpload} />
          </div>

          <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit} style={{ marginTop: '1rem' }}>
          Submit
          </Button>


            {submissionStatus === 'error' && (
              <div style={{ color: 'red', marginTop: '1rem' }}>Error: Please select an image.</div>
            )}
            {profilePicSuccessMessage && (
              <div style={{ color: 'green', marginTop: '1rem' }}>{profilePicSuccessMessage}</div>
            )}
            {profilePicErrorMessage && (
              <div style={{ color: 'red', marginTop: '1rem' }}>{profilePicErrorMessage}</div>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardComponent;


