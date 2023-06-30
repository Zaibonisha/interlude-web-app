import React, {useState} from 'react';
import { alpha, styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import { FormControl } from '@mui/material';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import API from '../../../services'

import './styles.css'

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
      color: "#260063",
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

const SignIn = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
        email: "",
        username: "",
      });
    const [errors, setErrors] = useState({});

    const handleChange = (prop) => (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [prop]: event.target.value });
        validate({ [name]: value });
      };

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("username" in fieldValues) {
          temp.username = fieldValues.username ? "" : "username is required";
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

      const handleSignIn = async () => {
        if (formIsValid ()) {
          try {
            let val = {
              username: values.username,
              password: values.password
            };
            // setLoading(true)
            const {data: res} = await API.signIn(val);
            console.log(res.token)
            localStorage.setItem('token', res.token)
            if (res) {
              toast.success("Successfully logedin");
              navigate("/dashboard");
            }
          } catch (error) {
            setLoading(false)
          }
        } else {
          validate();
        }
      };
      const formIsValid = (fieldValues = values) => {
        const isValid =
          fieldValues.username &&
          fieldValues.password &&
          Object.values(errors).every((ele) => ele === "");
        return isValid;
      };

    return (
        <Box
        component={Paper}
        display={"flex"}
        width={'100%'}
        minHeight={"100vh"}
        justifyContent="center"
        alignItems={"center"}
        elevation={3}
        className='container__section'>
            <Grid
            component={Paper} 
            
            container
            width={"400px"}
            height={"500px"}
            sx={{
              px: 2,
              m: 4,
              borderRadius: "20px"
            }}
            elevation={3}>
                <Grid
                item
                xs={12}
                sm={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                    <Stack>
                        <div>
                            <Typography
                            fontSize={36}
                            fontWeight={600}
                            className='text'>
                                Login
                            </Typography>
                        </div>
                        <div>
                            <Box component="form" noValidate autoComplete="off">
                                <FormControl variant="standard" fullWidth sx={{ mb: 3, mt: 2 }}>
                                    <BootstrapInput
                                        id="username"
                                        name="username"
                                        autoComplete="off"
                                        placeholder="Enter your username"
                                        variant="outlined"
                                        value={values.username}
                                        onChange={handleChange("username")}
                                        onBlur={handleChange("username")}
                                        onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            // Do code here
                                            e.preventDefault();
                                            handleSignIn();
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
                                        {...(errors["username"] && {
                                        error: true,
                                        helperText: errors["username"],
                                        })}
                                    />
                                </FormControl>
                                <FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
                                    <BootstrapInput
                                        id="password"
                                        name="password"
                                        autoComplete="off"
                                        placeholder="Enter your password"
                                        variant="outlined"
                                        type={values.showPassword ? "text" : "password"}
                                        value={values.password}
                                        onChange={handleChange("password")}
                                        onBlur={handleChange("password")}
                                        onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            // Do code here
                                            e.preventDefault();
                                            handleSignIn();
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
                                        {...(errors["password"] && {
                                        error: true,
                                        helperText: errors["password"],
                                        })}
                                    />
                                    </FormControl>
                            </Box>
                        </div>
                        <div style={{ marginTop: "25px" }}>
                            <LoadingButton
                                fullWidth
                                variant="outlined"
                                size="medium"
                                sx={{
                                textTransform: "none",
                                borderRadius: "20px",
                                float: "right",
                                backgroundColor: "#FF1368",
                                color: "#272727",
                                fontSize: "4px",
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
                                onClick={handleSignIn}
                                loading={loading}
                                loadingIndicator={
                                <CircularProgress sx={{ color: "#272727" }} size="25px" />
                                }
                            >
                                Sign in
                            </LoadingButton>
                            </div>
                            <div
                              style={{
                                textAlign: "center",
                                fontFamily:
                                  "'AllianceNo1', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'",
                                marginTop: "50px",
                              }}
                              className="button-text"
                            >
                              <span style={{ color: "#475467" }}>
                                Don’t have an account?
                                {"  "}
                                <Link
                                  underline="hover"
                                  onClick={() => navigate("/sign-up")}
                                  color={"#272727"}
                                  sx={{ ml: 0.5 }}
                                >
                                  Sign up
                                </Link>
                              </span>
                            </div>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignIn