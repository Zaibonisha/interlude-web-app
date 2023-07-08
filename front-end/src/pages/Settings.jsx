import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, TextField, Button,
Box,
Stack,
Paper,
FormControl,
InputAdornment,
IconButton,
CircularProgress } from '@mui/material';
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {  styled } from "@mui/material/styles";
import axios from 'axios';
import API from '../services'
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";


const CardComponent = () => {

  const navigate = useNavigate()
  const [userInfoSuccessMessage, setUserInfoSuccessMessage] = useState('');
  const [userInfoErrorMessage, setUserInfoErrorMessage] = useState('');
  const [creditCardSuccessMessage, setCreditCardSuccessMessage] = useState('');
  const [creditCardErrorMessage, setCreditCardErrorMessage] = useState('');
  const [profilePicSuccessMessage, setProfilePicSuccessMessage] = useState('');
  const [profilePicErrorMessage, setProfilePicErrorMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    username: "",
  });

  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: ""
  })

  const BootstrapInput = styled(TextField)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    input: {
      fontFamily:
        "'jua', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#667085",
      "&::placeholder": {
        opacity: 1,
      },
      "&:-webkit-autofill": {
        "-webkit-box-shadow": "0 0 0 100px #FFFFFF inset",
        "-webkit-text-fill-color": "#667085",
      },
    },
  
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      background: "#FFFFFF",
      borderColor: "1px solid #D0D5DD",
      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      fontSize: 16,
      height: "50px",
  
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "jua",
        "-apple-system",
        '"Segoe UI"',
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ].join(","),
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  }));

  useEffect(() => {
    getUser()
  }, [])
  const handleChange = (prop) => (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [prop]: event.target.value });
    validate({ [name]: value });
  };

  const getUser = async() => {
    const {data: res} = await API.getUserData()
    setUserInfo(res)
    setValues({
      first_name: res.first_name,
      last_name: res.last_name,
      email: res.email,
      username: res.username
    })
  }

  const updateProfile = async () => {
    if (formIsValid()) {
      try {
        setLoading(true)
        const {data: res} = await API.updateUserInfo({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          username: values.username,
          password: values.password,
        });

        if (res) {
          getUser();
          toast.success("Successfully updated");
          navigate("/dashboard");
        }

      } catch(error) {
        setLoading(false)
        toast.error("Unable to update your information")
      }
    } else {
      validate();
    }
  }

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "E-mail is required";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }
    if ("username" in fieldValues) {
        temp.username = fieldValues.username ? "" : "username is required";
      }
    if ("first_name" in fieldValues) {
        temp.first_name = fieldValues.first_name ? "" : "first name is required";
      }
    if ("last_name" in fieldValues) {
        temp.last_name = fieldValues.last_name ? "" : "last name is required";
      }
    if ("password" in fieldValues) {
      temp.password = fieldValues.password ? "" : "Password is required";
    }
    setErrors({ ...temp });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.first_name &&
      fieldValues.last_name &&
      fieldValues.email &&
      fieldValues.username &&
      fieldValues.password &&
      Object.values(errors).every((ele) => ele === "");
    return isValid;
  };
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
      <Box>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '85vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                User Info
              </Typography>
              <form>
                <div style={{ marginBottom: '1rem' }}>
                  <TextField 
                    id="first_name" 
                    name="first_name" 
                    placeholder='enter your first name'
                    onChange={handleChange("first_name")}
                    onBlur={handleChange("first_name")} 
                    variant="outlined" 
                    value={values.first_name}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          // Do code here
                          e.preventDefault();
                          updateProfile();
                      }
                      }}
                    InputProps={{
                      endAdornment: (
                          <InputAdornment position="end">
                          <PersonIcon
                              fontSize="small"
                              sx={{ color: "#D3D3D3" }}
                              style={{ marginRight: "-1px" }}
                          />
                          </InputAdornment>
                      ),
                      }} 
                    fullWidth />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <TextField 
                    id="enter last name" 
                    name="last_name"
                    placeholder='enter your last name' 
                    variant="outlined" 
                    value={values.last_name} 
                    onChange={handleChange("last_name")}
                    onBlur={handleChange("last_name")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          // Do code here
                          e.preventDefault();
                          updateProfile();
                      }
                      }}
                    InputProps={{
                      endAdornment: (
                          <InputAdornment position="end">
                          <PersonIcon
                              fontSize="small"
                              sx={{ color: "#D3D3D3" }}
                              style={{ marginRight: "-1px" }}
                          />
                          </InputAdornment>
                      ),
                      }}
                    fullWidth />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <TextField 
                    id="username" 
                    name="username" 
                    placeholder='enter your username'
                    variant="outlined" 
                    value={values.username} 
                    onChange={handleChange("username")}
                    onBlur={handleChange("username")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          // Do code here
                          e.preventDefault();
                          updateProfile();
                      }
                      }}
                    InputProps={{
                      endAdornment: (
                          <InputAdornment position="end">
                          <PersonIcon
                              fontSize="small"
                              sx={{ color: "#D3D3D3" }}
                              style={{ marginRight: "-1px" }}
                          />
                          </InputAdornment>
                      ),
                      }}
                    fullWidth />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <TextField 
                    id="email" 
                    name="email" 
                    placeholder='enter your email'
                    variant="outlined" 
                    value={values.email} 
                    onChange={handleChange("email")}
                    onBlur={handleChange("email")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          // Do code here
                          e.preventDefault();
                          updateProfile();
                      }
                      }}
                    InputProps={{
                      endAdornment: (
                          <InputAdornment position="end">
                          <EmailIcon
                              fontSize="small"
                              sx={{ color: "#D3D3D3" }}
                              style={{ marginRight: "-1px" }}
                          />
                          </InputAdornment>
                      ),
                      }}
                    fullWidth />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <TextField 
                    id="password"
                    placeholder='enter your password' 
                    name="password" 
                    variant="outlined"
                    type={values.showPassword ? "text" : "password"} 
                    value={values.password} 
                    onChange={handleChange("password")}
                    onBlur={handleChange("password")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          // Do code here
                          e.preventDefault();
                          updateProfile();
                      }
                      }}
                    InputProps={{
                      endAdornment: (
                          <InputAdornment position="end">
                          <div style={{ marginRight: "4px" }}>
                              <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              >
                              {values.showPassword ? (
                                  <VisibilityOff
                                  fontSize="small"
                                  sx={{ color: "#D3D3D3" }}
                                  />
                              ) : (
                                  <Visibility
                                  fontSize="small"
                                  sx={{ color: "#D3D3D3" }}
                                  />
                              )}
                              </IconButton>
                          </div>
                          </InputAdornment>
                      ),
                      }}
                    fullWidth 
                    />
                </div>
                <div style={{ marginTop: "25px" }}>
                            <LoadingButton
                                fullWidth
                                variant="outlined"
                                size="large"
                                sx={{
                                textTransform: "none",
                                borderRadius: "20px",
                                float: "right",
                                color: "#272727",
                                backgroundColor: "#FF1368",
                                fontSize: "14px",
                                height: "50px",
                                fontFamily:
                                    "'AllianceNo1', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                                border: "1px solid #272727 !important",
                                lineHeight: "24px",
                                }}
                                onClick={(e) => {
                                  e.preventDefault()
                                  updateProfile()
                                }}
                                loading={loading}
                                loadingIndicator={
                                <CircularProgress sx={{ color: "#272727" }} size="25px" />
                                }
                            >
                                Update Profile
                            </LoadingButton>
                            </div>
              </form>

              {/* {userInfoSuccessMessage && <div style={{ color: 'green', marginTop: '1rem' }}>{userInfoSuccessMessage}</div>}
              {userInfoErrorMessage && <div style={{ color: 'red', marginTop: '1rem' }}>{userInfoErrorMessage}</div>} */}
            </CardContent>
          </Card>
        </Grid>
      </Box>

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


