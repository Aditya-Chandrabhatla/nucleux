/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Grid, IconButton, Typography, Snackbar, Alert, Select, MenuItem, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useRouter } from 'next/router';
// import { MuiPhone } from '@/src/components/MuiPhone';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [phonenumber, setPhonenumber] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = React.useState(false);
  const [confPassword, setConfPassword] = React.useState('');
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [waiting, setwaiting] = React.useState(false);
  const [showConfPassword, setShowConfPassword] = React.useState(false);
  

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: { preventDefault: () => any; }) => event.preventDefault();
  const navigate = useRouter();
  const handleClickShowConfPassword = () => setShowConfPassword((show) => !show);

  const validateEmail = (email: string) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDateOfBirth = (date: string) => {
    // Check if the entered date matches the format yyyy-mm-dd and is between 2006 and now
    const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
    const match = date.match(dateRegex);

    if (!match) return false;

    const year = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const day = parseInt(match[3], 10);
    const now = new Date();

    if (year > 2006 || year > now.getFullYear()) return false;
    if (month < 1 || month > 12) return false;

    const lastDayOfMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > lastDayOfMonth) return false;

    return true;
  };

  

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !gender || !dateOfBirth || !confPassword) {
      setSnackbarMessage('Please fill in all fields.');
      setOpenSnackbar(true);
    } else if (!validateEmail(email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setOpenSnackbar(true);
    } else if (password !== confPassword) {
      setSnackbarMessage('Password and Confirm Password Should Be Same');
      setOpenSnackbar(true);
    } else if (!validateDateOfBirth(dateOfBirth)) {
      setSnackbarMessage('Please enter a valid date of birth (YYYY-MM-DD) above 2006 ');
      setOpenSnackbar(true);
    } else {
      setwaiting(true);
      try {
        const response = await axios.post('https://nucleux-puce.vercel.app/api/register/', {
          first_name: firstName,
          last_name: lastName,
          email,
          password: confPassword,
          confirm_password:confPassword,
          date_of_birth: dateOfBirth,
          gender,
        });
        if (response.status === 201 || response.status === 200) {
          setSnackbarMessage('User registered and activated successfully.');
          setOpenSuccessSnackbar(true);
          setwaiting(false);
          setTimeout(() => navigate.push("/"), 3000);
        }
      } catch (error: any) {
        setwaiting(false);
        setSnackbarMessage(error.response?.data?.email);
        setOpenSnackbar(true);
        console.log(error)
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setOpenSuccessSnackbar(false);
  };

  return (
    <Box  sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #1a237e, #311b92)',
        color: 'white',
      }}>
              <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #42a5f5, #ab47bc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 4,
          }}
        >
          NUCLEUX
        </Typography>
        {/* Tagline */}
        <Typography variant="h6" sx={{ marginBottom: 0}}>
          Medical knowledge for on the go.
        </Typography>
        </Box>
        <Stack>
          <Stack
            elevation={3}
            sx={{
              display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: "center",
               mb:10, p: 3, mx: { md: "20%", xs: "5%" }, width: "450"
            }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {/* <Typography fontSize={{ md: "20", xs: 25 }} textAlign={"center"} fontWeight={"bold"} my={3} >Create a new account</Typography> */}

            <Grid container display={"flex"} justifyContent={"center"}>
              <Grid xs={12} md={6}>
                <FormControl sx={{ ml: {xs:0,md:2}, width: { md: '90%', xs: "100%" } }} variant="outlined">
                  <TextField
                    id="FirstName"
                    required
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    sx={{ mb: 3 }}
                    InputProps={{
                        sx: {
                          backgroundColor: 'rgba(17, 24, 39, 0.5)', // Matches bg-gray-900/50
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent', // Default border
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.7)', // Hover border color
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#7e57c2', // Focus border color (purple)
                          },
                        },
                      }}
                      inputProps={{
                        sx: {
                          color: 'white', // Text color
                          '&::placeholder': {
                            color: 'gray', // Placeholder color
                            opacity: 1, // Ensures the placeholder is visible
                          },
                        },
                      }}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl sx={{ml: {xs:0,md:2}, width: { md: '90%', xs: "100%" } }} variant="outlined">
                  <TextField
                    id="LastName"
                    required
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    sx={{ mb: 3 }}
                    InputProps={{
                        sx: {
                          backgroundColor: 'rgba(17, 24, 39, 0.5)', // Matches bg-gray-900/50
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent', // Default border
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.7)', // Hover border color
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#7e57c2', // Focus border color (purple)
                          },
                        },
                      }}
                      inputProps={{
                        sx: {
                          color: 'white', // Text color
                          '&::placeholder': {
                            color: 'gray', // Placeholder color
                            opacity: 1, // Ensures the placeholder is visible
                          },
                        },
                      }}
                  />
                </FormControl>
              </Grid>

              <Grid xs={12} md={6}>
                <FormControl sx={{ml: {xs:0,md:2}, width: { md: '90%', xs: "100%" } }} variant="outlined">
                  <TextField
                    id="dateOfBirth"
                    required
                    placeholder="YYYY-MM-DD"
                    value={dateOfBirth}
                    sx={{ mb: 3 }}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    helperText={!validateDateOfBirth(dateOfBirth) && dateOfBirth.length > 0 ? "Invalid date format or age above 16" : ""}
                    InputProps={{
                        sx: {
                          backgroundColor: 'rgba(17, 24, 39, 0.5)', // Matches bg-gray-900/50
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent', // Default border
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.7)', // Hover border color
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#7e57c2', // Focus border color (purple)
                          },
                        },
                      }}
                      inputProps={{
                        sx: {
                          color: 'white', // Text color
                          '&::placeholder': {
                            color: 'gray', // Placeholder color
                            opacity: 1, // Ensures the placeholder is visible
                          },
                        },
                      }}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
              <FormControl
  sx={{
    ml: {xs:0,md:2}, width: { md: '90%', xs: "100%" },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(17, 24, 39, 0.5)', // Matches bg-gray-900/50
      color: 'white',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent', // Default border
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.7)', // Hover border color
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#7e57c2', // Focus border color (purple)
      },
    },
  }}
  variant="outlined"
>
  <Select
    labelId="Genderlabel"
    id="gender"
    required
    value={gender}
    displayEmpty
    sx={{
      mb: 3,
      color: 'white', // Text color
      '& .MuiSelect-select': {
        color: gender ? 'white' : 'gray', // Use gray color for the placeholder
      },
    }}
    onChange={(e) => setGender(e.target.value)}
  >
    {/* Placeholder item */}
    <MenuItem value="" disabled>
      Gender
    </MenuItem>
    <MenuItem value={"M"}>Male</MenuItem>
    <MenuItem value={"F"}>Female</MenuItem>
    <MenuItem value={"O"}>Others</MenuItem>
  </Select>
</FormControl>


              </Grid>

              <Grid xs={12} md={12}>
                <FormControl sx={{ml: {xs:0,md:2}, width: { md: '95%', xs: "100%" } }} variant="outlined">

          <TextField
          id="email"
          required
  fullWidth
  variant="outlined"
  type='email'
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email address"
  sx={{ mb: 3 }}
  InputProps={{
    sx: {
      backgroundColor: 'rgba(17, 24, 39, 0.5)', // Matches bg-gray-900/50
      color: 'white',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent', // Default border
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.7)', // Hover border color
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#7e57c2', // Focus border color (purple)
      },
    },
  }}
  inputProps={{
    sx: {
      color: 'white', // Text color
      '&::placeholder': {
        color: 'gray', // Placeholder color
        opacity: 1, // Ensures the placeholder is visible
      },
    },
  }}
/>
                </FormControl>
              </Grid>

{/* 
              <Grid xs={12}>
                <FormControl  variant="outlined" sx={{width:"95%"}}>
                  <Stack flexDirection={"row"} sx={{ ml: 2, width: { md: '100%', xs: "100%" },mb:2 }}>
               
                  <MuiPhone value={phonenumber} onChange={setPhonenumber} />
                  </Stack>
                </FormControl>
              </Grid> */}

              <Grid xs={12} md={6}>
                <FormControl sx={{ ml: {xs:0,md:2}, width: { md: '90%', xs: "100%" } }} variant="outlined">

                  <TextField
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mb: 3 }}
                    InputProps={{
                        sx: {
                          backgroundColor: 'rgba(17, 24, 39, 0.5)', // Matches bg-gray-900/50
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.7)',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#7e57c2',
                          },
                        },
                    endAdornment:(
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                          
                        </IconButton>
                      </InputAdornment>
  ),}}
  inputProps={{
    sx: {
      color: 'white', // Text color
      '&::placeholder': {
        color: 'gray', // Placeholder color
        opacity: 1,
      },
    },
  }}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl sx={{ ml: {xs:0,md:2}, width: { md: '90%', xs: "100%" } }} variant="outlined">
                  <TextField
                    id="outlined-adornment-password"
                    type={showConfPassword ? 'text' : 'password'}
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder='Confirm Password'
                    sx={{ mb: 3 }}
                    InputProps={{
                        sx: {
                          backgroundColor: 'rgba(17, 24, 39, 0.5)', // Matches bg-gray-900/50
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.7)',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#7e57c2',
                          },
                        },
                    
                    endAdornment:(
                                              <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
   ) }   }
   inputProps={{
    sx: {
      color: 'white', // Text color
      '&::placeholder': {
        color: 'gray', // Placeholder color
        opacity: 1,
      },
    },
  }}                 
                  />
                </FormControl>
              </Grid>

              <Grid xs={12} md={12}>
                <FormControl sx={{ ml: {xs:0,md:2}, width: { md: '95%', xs: "100%" }}} variant="outlined">
                  <Button type='submit' fullWidth
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #1e88e5, #8e24aa)',
              '&:hover': {
                background: 'linear-gradient(to right, #1565c0, #6a1b9a)',
              },
            }} disabled={waiting}>Register</Button>
                </FormControl>
              </Grid>
            </Grid>



            <Typography mt={2} mb={1}>Already have an account? <Link href="/" underline='hover' sx={{color:"white"}}>Sign in</Link></Typography>
          </Stack>
        </Stack>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                {snackbarMessage}
              </Alert>
            </Snackbar>

            <Snackbar open={openSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
    </Box>
  );
};

export default Register;