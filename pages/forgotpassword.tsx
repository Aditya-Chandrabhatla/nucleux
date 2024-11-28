/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography, Snackbar, Alert,Link } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
   const navigate = useRouter();


  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!email  ) {
      setSnackbarMessage('Please fill in all fields.');
      setOpenSnackbar(true);
    } else if (!validateEmail(email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setOpenSnackbar(true);
    } else {
      // setOpenSnackbar(true);
      // setTimeout(() => navigate("/"), 3000); 
     
      try{
        const response =  await axios.post('https://wikitube-new.vercel.app/api/password-reset/', { email });
        if (response.status === 200) {
          setSnackbarMessage('Reset Password Link Sent To Your Email');
          setOpenSnackbar(true);
           setTimeout(() => navigate.push("/"), 3000); 
      }
    }catch(error:unknown){
      setSnackbarMessage(error.response?.data?.email );
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
error={!validateEmail(email) && email.length > 0}
helperText={!validateEmail(email) && email.length > 0 ? "Invalid email format" : ""}
placeholder="Email address"
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






        <Button
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
          Forgot Password
        </Button>

        
<Box sx={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <Link href="/register" underline="hover" sx={{ color: 'white' }}>
            Create a new account
          </Link>

          <Link href="/" underline="hover" sx={{ color: 'white' }}>
            Login
          </Link>
        </Box>





      </Box>
    </Box>



          
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity={snackbarMessage === 'Reset Password Link Sent To Your Email' ? 'success' : 'error'} sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
          
  </Box>

  );
}

export default ForgotPassword;