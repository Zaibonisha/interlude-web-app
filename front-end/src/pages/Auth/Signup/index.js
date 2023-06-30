import React, {useState} from 'react';
import { alpha, styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
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

const SignUp = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
        email: "",
        first_name: "",
        last_name: "",
        username: "",
        password2: ""
      });
    const [errors, setErrors] = useState({});

    const handleChange = (prop) => (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [prop]: event.target.value });
        validate({ [name]: value });
      };

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
        if ("password2" in fieldValues) {
            temp.password2 = fieldValues.password2 ? "" : "Password not matched";
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

      const register = async () => {
        if (formIsValid ()) {
          try {
            let val = {
              first_name: values.first_name,
              last_name: values.last_name,
              email: values.email,
              username: values.username,
              password: values.password,
              password2: values.password2
            };
            setLoading(true)

            const {data: res} = await API.signUp(val);
            if (res) {
                toast.success("Successfully registered");
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
          fieldValues.first_name &&
          fieldValues.last_name &&
          fieldValues.email &&
          fieldValues.username &&
          fieldValues.password &&
          fieldValues.password2 &&
          Object.values(errors).every((ele) => ele === "");
        return isValid;
      };

    return (
        <Box
        component={Paper}
        display={"flex"}
        minHeight={"100vh"}
        justifyContent="center"
        alignItems={"center"}
        elevation={3}
        className='container'>
            <Grid
            component={Paper} 
            container
            width={"400px"}
            height={"800px"}
            elevation={3}
            sx={{
                px: 2,
                m: 5,
                borderRadius: "20px",
            }}>
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
                                Register
                            </Typography>
                        </div>
                        <div>
                            <Box component="form" noValidate autoComplete="off">
                            <FormControl variant="standard" fullWidth sx={{ mb: 3, mt: 2 }}>
                                    <BootstrapInput
                                        id="first_name"
                                        name="first_name"
                                        autoComplete="off"
                                        placeholder="Enter your first name"
                                        variant="outlined"
                                        value={values.first_name}
                                        onChange={handleChange("first_name")}
                                        onBlur={handleChange("first_name")}
                                        onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            // Do code here
                                            e.preventDefault();
                                            register();
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
                                        {...(errors["first_name"] && {
                                        error: true,
                                        helperText: errors["first_name"],
                                        })}
                                    />
                                </FormControl>
                                <FormControl variant="standard" fullWidth sx={{ mb: 3, mt: 2 }}>
                                    <BootstrapInput
                                        id="last_name"
                                        name="last_name"
                                        autoComplete="off"
                                        placeholder="Enter your last name"
                                        variant="outlined"
                                        value={values.last_name}
                                        onChange={handleChange("last_name")}
                                        onBlur={handleChange("last_name")}
                                        onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            // Do code here
                                            e.preventDefault();
                                            register();
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
                                        {...(errors["last_name"] && {
                                        error: true,
                                        helperText: errors["last_name"],
                                        })}
                                    />
                                </FormControl>
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
                                            register();
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
                                <FormControl variant="standard" fullWidth sx={{ mb: 3, mt: 2 }}>
                                    <BootstrapInput
                                        id="email"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Enter your email"
                                        variant="outlined"
                                        value={values.email}
                                        onChange={handleChange("email")}
                                        onBlur={handleChange("email")}
                                        onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            // Do code here
                                            e.preventDefault();
                                            register();
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
                                        {...(errors["email"] && {
                                        error: true,
                                        helperText: errors["email"],
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
                                            register();
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
                                    <FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
                                        <BootstrapInput
                                            id="password2"
                                            name="password2"
                                            autoComplete="off"
                                            placeholder="confirm your password"
                                            variant="outlined"
                                            type={values.showPassword ? "text" : "password"}
                                            value={values.password2}
                                            onChange={handleChange("password2")}
                                            onBlur={handleChange("password2")}
                                            onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                // Do code here
                                                e.preventDefault();
                                                register();
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
                                            {...(errors["password2"] && {
                                            error: true,
                                            helperText: errors["password2"],
                                            })}
                                        />
                                    </FormControl>
                            </Box>
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
                                onClick={register}
                                loading={loading}
                                loadingIndicator={
                                <CircularProgress sx={{ color: "#272727" }} size="25px" />
                                }
                            >
                                Sign Up
                            </LoadingButton>
                            </div>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignUp