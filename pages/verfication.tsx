import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

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
    <Box>
      <h2>Enter OTP</h2>
      <OTPInput length={6} onChange={handleOtpChange} />
    </Box>
  );
};

export default Verification;
