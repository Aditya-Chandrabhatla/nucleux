/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';

import Cookies from 'js-cookie';




const Profile = () => {
  const [step, setStep] = useState(0);
  const [year, setYear] = useState<string>('')
  const [waiting, setWaiting]= useState(false)
  const [universities, setUniversities] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [objectives, setObjectives] = useState([]);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const bearer_token = (Cookies.get('access_token'))

useEffect(() => {
  const fetching = async () => {
    try {
      const response = await axios.get('https://nucleux-puce.vercel.app/api/university/');
      const data = response.data;

      setUniversities(data.universities.map((uni) => uni.university_name));
      setReferrals(data.referrals.map((ref) => ref.referral_name));
      setProfessions(data.professions.map((prof) => prof.profession_name));
      setObjectives(data.objectives.map((obj) => obj.objective_name));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetching();
}, []);


const handleCloseSnackbar = () => {
  setOpenSnackbar(false);

};
  const [formData, setFormData] = useState({
    country: '',
    role: '',
    university: '',
    graduationYear: '',
    objective: '',
    focusArea: '',
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Allow only numeric input and restrict length to 4 characters
    if (/^\d{0,4}$/.test(value)) {
      setYear(value);
    updateFormData('graduationYear',value)
    }

    


  };


const handleFinish = async () => {
  console.log('Form submitted:', formData);

  if (!formData) {
    return null;
  } else {
    try {
      setWaiting(true);

      // Map names to their corresponding IDs
      const universityId = universities.find((uni) => uni.university_name === formData.university)?.id || null;
      const professionId = professions.find((prof) => prof.profession_name === formData.role)?.id || null;
      const objectiveId = objectives.find((obj) => obj.objective_name === formData.objective)?.id || null;

      const payload = {
        country: formData.country,
        university: universityId,
        profession: professionId,
        expected_graduation_date: `${formData.graduationYear}-01-01`,
        current_area_of_focus: 2, // Replace with the appropriate value or logic
        objectives: objectiveId,
      };

      const response = await axios.put(
        "https://nucleux-puce.vercel.app/api/edit-profile/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${bearer_token}`,
          },
        }
      );

      if (response.status === 200) {
        setSnackbarMessage("Profile Updated");
        setOpenSnackbar(true);
      }
    } catch (err) {
      console.log(err);
      setSnackbarMessage("Profile Updating Error");
      setOpenSnackbar(true);
      setWaiting(false);
    }
  }
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
  {professions.map((role) => (
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

          </Box>
        );
      case 1:
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
    {universities.map((uni) => (
      <MenuItem key={uni} value={uni}>
        {uni}
      </MenuItem>
    ))}
  </Select>
</FormControl>
            <FormControl fullWidth>
              {/* <InputLabel>Expected Graduation Year</InputLabel>
              <Select
                value={formData.graduationYear}
                onChange={(e) => updateFormData('graduationYear', e.target.value)}
                label="Expected Graduation Year"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>

              </Select> */}
              <TextField
        placeholder='Expected Graduation Year'
        value={year}
        onChange={handleChange}
        inputProps={{ maxLength: 4, inputMode: 'numeric', pattern: '\\d*' }}
        helperText="Enter a valid year (e.g., 2025)"
        fullWidth
      />
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
    {objectives.map((obj) => (
      <MenuItem key={obj} value={obj}>
        {obj}
      </MenuItem>
    ))}
  </Select>
</FormControl>
          {/* <FormControl fullWidth>
            <InputLabel>Current Area of Focus (Optional)</InputLabel>
            <Select
              value={formData.focusArea}
              onChange={(e) => updateFormData('focusArea', e.target.value)}
              label="Current Area of Focus (Optional)"
            >
              <MenuItem value="">
                <em>Please select</em>
              </MenuItem>

            </Select>
          </FormControl> */}

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
    {referrals.map((ref) => (
      <MenuItem key={ref} value={ref}>
        {ref}
      </MenuItem>
    ))}
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
            <Button variant="contained" disabled={waiting} onClick={handleFinish}>
              Finish
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity={`${snackbarMessage==='Profile Updated'?'success':'error'}`} sx={{ width: '100%' }}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
    </Box>
  );
};

export default Profile;
