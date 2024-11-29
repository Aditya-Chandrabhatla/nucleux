import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


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
            <Link href="/forgotpassword" underline="hover" sx={{ color: 'white' }}>
              Forgot password?
            </Link>
            <Link href="/register" underline="hover" sx={{ color: 'white' }}>
              Create a new account
            </Link>
          </Box>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #1e88e5, #8e24aa)',
              '&:hover': {
                background: 'linear-gradient(to right, #1565c0, #6a1b9a)',
              },
            }}
          >
            LOGIN
          </Button>





        </Box>
      </Box>


    </Box>
  );
};

export default LoginPage;
