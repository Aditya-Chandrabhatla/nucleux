/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator({selectedSection,selectedSubsection,selectedTopic,
    selectedSubtopic
}) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="" onClick={handleClick}>
      {selectedSection}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href=""
      onClick={handleClick}
    >
      {selectedSubsection}
    </Link>,
    <Link underline="hover" key="3" color="inherit" href="" onClick={handleClick}>
    {selectedTopic}
  </Link>,

    <Typography key="4" sx={{ color: 'text.primary' }}>
      {selectedSubtopic}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

