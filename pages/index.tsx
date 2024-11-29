/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, InputAdornment, IconButton, Snackbar, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [waiting, setwaiting] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useRouter()
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!email || !password) {
      setSnackbarMessage('Please fill in all fields.');
      setOpenSnackbar(true);
    } else if (!validateEmail(email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setOpenSnackbar(true);
    } else {

      setwaiting(true)
      try{
        setwaiting(true)
        const response =  await axios.post('https://nucleux-puce.vercel.app/api/login/', { email, password, });
        
        if (response.status === 200) {
          
          setSnackbarMessage('Login successful!');
          setwaiting(false)
          setOpenSnackbar(true);
          Cookies.set('access_token', response.data.access, { expires: 7 });
          setTimeout(() => navigate.push("/home"), 3000); 
        
      }
    }catch(error:any){
      setwaiting(false)
      setSnackbarMessage(error.response?.data?.error || "No user found with this email address! ");
        setOpenSnackbar(true);
      }
    }
  };


  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #1a237e, #311b92)',
        color: 'white',
      }}
    >

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
        <Typography variant="h6" sx={{ marginBottom: 8 }}>
          Medical knowledge for on the go.
        </Typography>

        {/* Login Form */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Email Input */}
          <TextField
  fullWidth
  variant="outlined"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email address"
  error={!validateEmail(email) && email.length > 0}
helperText={!validateEmail(email) && email.length > 0 ? "Invalid email format" : ""}
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

<TextField
        fullWidth
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
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
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                edge="end"
                sx={{ color: 'white' }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
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


<Box sx={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <Link href="/register" underline="hover" sx={{ color: 'white' }}>
              Create a new account
            </Link>

            <Link href="/forgotpassword" underline="hover" sx={{ color: 'white' }}>
              Forgot password?
            </Link>
          </Box>

          {/* Login Button */}
         {waiting ? <Button
            fullWidth
            variant="contained"
            disabled
            onClick={handleSubmit}
           
          >
            LOGIN
          </Button> : <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{
              background: 'linear-gradient(to right, #1e88e5, #8e24aa)',
              '&:hover': {
                background: 'linear-gradient(to right, #1565c0, #6a1b9a)',
              },
            }}
          >
            LOGIN
          </Button>}
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarMessage === 'Login successful!' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </Box>
  );
};

export default LoginPage;
