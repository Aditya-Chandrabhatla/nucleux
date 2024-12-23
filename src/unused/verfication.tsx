import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const OTPInput = ({ length = 6, onChange }: { length?: number; onChange: (otp: string) => void }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));

  const handleChange = (value: string, index: number) => {
    if (value.length > 1 || isNaN(Number(value))) return; // Allow only single digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Automatically focus the next input
    if (value && index < length - 1) {
      const nextField = document.getElementById(`otp-input-${index + 1}`);
      nextField?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevField = document.getElementById(`otp-input-${index - 1}`);
      prevField?.focus();
    }
  };

  return (
    <Box display="flex" gap={1}>
      {otp.map((digit, index) => (
        <TextField
          key={index}
          id={`otp-input-${index}`}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
          variant="outlined"
          size="small"
          sx={{ width: 40 }}
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

        />
      ))}
    </Box>
  );
};

const Verification = () => {
  const handleOtpChange = (otp: string) => {
    console.log('Current OTP:', otp);
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
 

 <Box display={"flex"} justifyContent={"center"} mb={5}>
  <OTPInput length={6} onChange={handleOtpChange} />
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
      Verify OTP
    </Button>





  </Box>
</Box>


</Box>
  );
};

export default Verification;
