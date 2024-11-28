/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';

const Profile = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    country: '',
    role: '',
    university: '',
    graduationYear: '',
    objective: '',
    focusArea: '',
    firstName: '',
    lastName: '',
    receiveEmails: false,
    betaTester: false,
    termsAccepted: false,
    referralSource: '',
  });

  const steps = [
    'Country & Role',
    'Study Profile',
    'Preferences',
  ];

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleFinish = () => {
    console.log('Form submitted:', formData);
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box display="flex" flexDirection="column" gap={2}>
            <FormControl fullWidth>
              <InputLabel>Country where you currently work or study</InputLabel>
              <Select
                value={formData.country}
                onChange={(e) => updateFormData('country', e.target.value)}
                label="Country where you currently work or study"
              >
                <MenuItem value="">
                  <em>Select country</em>
                </MenuItem>
                <MenuItem value="India">India</MenuItem>
                {/* Add more countries */}
              </Select>
            </FormControl>
            <Typography variant="body2" color="textSecondary">
              The country of your medical school.
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {['Doctor, resident or fellow', 'Medical Student', 'Other Clinician, Professional, or Student'].map(
                (role) => (
                  <Button
                    key={role}
                    variant="outlined"
                    color={formData.role === role ? 'primary' : 'inherit'}
                    onClick={() => updateFormData('role', role)}
                    fullWidth
                  >
                    {role}
                  </Button>
                )
              )}
            </Box>
          </Box>
        );
      case 1:
        return (
          <Box display="flex" flexDirection="column" gap={2}>
            <FormControl fullWidth>
              {/* <InputLabel>University</InputLabel> */}
              {/* <Select
                value={formData.university}
                onChange={(e) => updateFormData('university', e.target.value)}
                label="University"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>

              </Select> */}
            <TextField 
              onChange={(e) => updateFormData('university', e.target.value)}
              placeholder='University'

            />

            </FormControl>
            <FormControl fullWidth>
              {/* <InputLabel>Expected Graduation Year</InputLabel> */}
              {/* <Select
                value={formData.graduationYear}
                onChange={(e) => updateFormData('graduationYear', e.target.value)}
                label="Expected Graduation Year"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
               
              </Select> */}
              <TextField
              
              onChange={(e) => updateFormData('graduationYear', e.target.value)}
              label="Expected Graduation Year" />
            </FormControl>
          </Box>
        );
      case 2:
        return (
          <Box display="flex" flexDirection="column" gap={2}>
           
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.receiveEmails}
                  onChange={(e) => updateFormData('receiveEmails', e.target.checked)}
                />
              }
              label="I want to receive emails about updates and offers."
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.betaTester}
                  onChange={(e) => updateFormData('betaTester', e.target.checked)}
                />
              }
              label="I want early access to new features as a Beta tester."
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.termsAccepted}
                  onChange={(e) => updateFormData('termsAccepted', e.target.checked)}
                />
              }
              label="I understand and accept the limitation of liability for clinical use."
            />
              <FormControl fullWidth>
              <InputLabel>How did you hear about us? (Optional)</InputLabel>
              <Select
                value={formData.referralSource}
                onChange={(e) => updateFormData('referralSource', e.target.value)}
                label="How did you hear about us? (Optional)"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                {/* Add referral sources */}
              </Select>
            </FormControl>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box minHeight="100vh" bgcolor="background.default" color="text.primary" p={4} mx={{xs:"10%",lg:"25%"}}>
      <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} >
        <Typography variant="h4" gutterBottom>
          Let&#39;s tailor things to your needs
        </Typography>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box my={4}>{renderStepContent(step)}</Box>
        <Box display="flex" justifyContent="space-between">
          <Button disabled={step === 0} onClick={handleBack}>
            Back
          </Button>
          {step === steps.length - 1 ? (
            <Button variant="contained" onClick={handleFinish}>
              Finish
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
