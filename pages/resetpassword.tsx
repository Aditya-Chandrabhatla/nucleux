/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, IconButton, Typography, Snackbar, Alert, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

import { useRouter } from 'next/router';


const ResetPassword = () => {
const [confPassword,setConfPassword] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [waiting, setWaiting] = React.useState(false);
  const [showConfPassword, setShowConfPassword] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const navigate = useRouter();
  const { uidb64, token } = navigate.query;

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfPassword = () => setShowConfPassword((show) => !show);
   

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!confPassword || !password) {
      setSnackbarMessage('Please fill in all fields.');
      setOpenSnackbar(true);
    } else if (password !== confPassword) {
      setSnackbarMessage('Password and Confirm Password Should Be Same');
      setOpenSnackbar(true);
    } else {
        setWaiting(true)

     
      try{ 
        setWaiting(true)
        const response =  await axios.post(`https://wikitube-new.vercel.app/api/password-reset-confirm/${uidb64}/${token}/`, { 

          new_password: password,

      });

      console.log(response.status)

        if (response.status === 200) {
          setSnackbarMessage('Password Reseted successful!');
          setOpenSnackbar(true);
          setTimeout(() => navigate.push("/"), 3000); 
          setWaiting(false)
      }
    }catch(error:any){
      setSnackbarMessage(error.response?.data?.error|| "Error resetting password" );
        setOpenSnackbar(true);
        setWaiting(false)
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

<TextField
      fullWidth
      variant="outlined"
      type={showConfPassword ? 'text' : 'password'}
      value={confPassword}
      onChange={(e) => setConfPassword(e.target.value)}
      placeholder="Confirm Password"
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
              onClick={handleClickShowConfPassword}
              edge="end"
              sx={{ color: 'white' }}
            >
              {showConfPassword ? <VisibilityOff /> : <Visibility />}
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

{/* 
<Box sx={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <Link href="/register" underline="hover" sx={{ color: 'white' }}>
            Create a new account
          </Link>

          <Link href="/forgotpassword" underline="hover" sx={{ color: 'white' }}>
            Forgot password?
          </Link>
        </Box> */}

        {/* Login Button */}
       {!waiting&& <Button
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
          Reset Password
        </Button>}

        {waiting&& <Button
          fullWidth
          variant="contained"
          disabled
          onClick={handleSubmit}
          sx={{
            background: 'linear-gradient(to right, #1e88e5, #8e24aa)',
            '&:hover': {
              background: 'linear-gradient(to right, #1565c0, #6a1b9a)',
            },
          }}
        >
          Reset Password
        </Button>}





      </Box>
    </Box>

    <Snackbar
  open={openSnackbar}
  autoHideDuration={6000}
  onClose={handleCloseSnackbar}
>
  <Alert onClose={handleCloseSnackbar} severity={snackbarMessage === 'Password Reseted successful!' ? 'success' : 'error'} sx={{ width: '100%' }}>
    {snackbarMessage}
  </Alert>
</Snackbar>

  </Box>
  );
}

export default ResetPassword;