import React, { useState } from 'react';
import { Info } from 'lucide-react';
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
      {/* Header */}
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft />
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Search
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2">11:25 PM</Typography>
          <Typography variant="body2">Sun 24 Nov</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2">37%</Typography>
            <svg
              className="battery-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect x="7" y="7" width="10" height="10" strokeWidth="2" />
            </svg>
          </Box>
        </Box>
      </Box> */}

      {/* Main Content */}
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

          {/* Forgot Password */}
          <Box sx={{ textAlign: 'center' }}>
            <Link href="#" underline="hover" sx={{ color: 'white' }}>
              Forgot password?
            </Link>
          </Box>

          {/* Info Section */}
          <Box sx={{ display: 'flex', gap: 1, marginTop: 4 }}>
            <Info />
            <Typography variant="body2">
              Signed up using Google, Facebook or your Institution?{' '}
              <Link href="#" underline="hover" sx={{ color: '#8e24aa' }}>
                {`You'll need to set a password first.`}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>


    </Box>
  );
};

export default LoginPage;
