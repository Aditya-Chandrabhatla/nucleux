// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
  TextField,
  Typography,
} from '@mui/material';

const Profile = () => {
  const [step, setStep] = useState(1);
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

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleFinish = () => {
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
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
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            </Box>
          </Box>
        );

      case 2:
        return (
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="body1">Your current role</Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {[
                'Doctor, resident or fellow',
                'Medical Student',
                'Other Clinician, Professional, or Student',
              ].map((role) => (
                <Button
                  key={role}
                  variant="outlined"
                  color={formData.role === role ? 'primary' : 'inherit'}
                  onClick={() => updateFormData('role', role)}
                  fullWidth
                >
                  {role}
                </Button>
              ))}
            </Box>
            <Typography variant="body2" color="textSecondary">
              Please choose &lsquo;Doctor&#39; if you have already graduated/completed internship.
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            </Box>
          </Box>
        );

      case 3:
        return (
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h6">Your Current Study Profile</Typography>
            <Box display="flex" gap={2}>
              <FormControl fullWidth>
                <InputLabel>University</InputLabel>
                <Select
                  value={formData.university}
                  onChange={(e) => updateFormData('university', e.target.value)}
                  label="University"
                >
                  <MenuItem value="">
                    <em>Please select</em>
                  </MenuItem>
                  {/* Add universities */}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Expected Graduation Year</InputLabel>
                <Select
                  value={formData.graduationYear}
                  onChange={(e) => updateFormData('graduationYear', e.target.value)}
                  label="Expected Graduation Year"
                >
                  <MenuItem value="">
                    <em>Please select</em>
                  </MenuItem>
                  {/* Add years */}
                </Select>
              </FormControl>
            </Box>
            <FormControl fullWidth>
              <InputLabel>Current Objective</InputLabel>
              <Select
                value={formData.objective}
                onChange={(e) => updateFormData('objective', e.target.value)}
                label="Current Objective"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                {/* Add objectives */}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Current Area of Focus (Optional)</InputLabel>
              <Select
                value={formData.focusArea}
                onChange={(e) => updateFormData('focusArea', e.target.value)}
                label="Current Area of Focus (Optional)"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                {/* Add focus areas */}
              </Select>
            </FormControl>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            </Box>
          </Box>
        );

      case 4:
        return (
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h6">Name</Typography>
            <Box display="flex" gap={2}>
              <TextField
                label="First Name"
                value={formData.firstName}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                fullWidth
              />
              <TextField
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                fullWidth
              />
            </Box>
            <Typography variant="h6">Preferences</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.receiveEmails}
                  onChange={(e) => updateFormData('receiveEmails', e.target.checked)}
                />
              }
              label="I want to receive emails about updates and offers — unsubscribe anytime."
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
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={handleFinish}>
                Finish set-up
              </Button>
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box minHeight="100vh" bgcolor="background.default" color="text.primary" p={4}>
      <Box maxWidth="md" mx="auto">
        <Typography variant="h4" gutterBottom>
          Let&#39;s tailor things to your needs
        </Typography>
        {renderStep()}
      </Box>
    </Box>
  );
};

export default Profile;
