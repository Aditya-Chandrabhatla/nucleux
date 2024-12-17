import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography, styled, Divider } from '@mui/material';
import React from 'react'

const Codes = () => {
    
  const SubTitle = styled(Typography)(({  }) => ({
    fontWeight:'bold',
    fontSize:20,
    color:'#3B82F6'
  }));

  const Hr = styled(Divider)(({  }) => ({
    backgroundColor:'#3B82F6',
    width:'100%',
    color:'#3B82F6',
    padding:1
  }));

  const UnderTypo = styled(Typography)(({  }) => ({
    fontSize:15,
    color:'#babbbf',
    paddingLeft:15
  }));
  return (
    <>
    <Divider orientation='horizontal' flexItem sx={{backgroundColor:"#eee8eb"}} />
   <Accordion sx={{maxHeight:300,overflow:'auto','&::-webkit-scrollbar': { display: 'none' },
   '-ms-overflow-style': 'none',"&:hover":{backgroundColor:'#2d2f33'}}}>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1-content"
             id="panel1-header"
             sx={{color:"#EC4899",fontFamily:"serif",fontWeight:"bold",fontSize:20}}
           >
             CODES
   
           </AccordionSummary>
           <AccordionDetails >
               <Stack >
            <SubTitle>ICD10</SubTitle>
            <Hr />
            <Stack gap={2}mt={2}>
            <Typography  fontSize={15}>N93.9 Abnormal uterine
                and vaginal bleeding, unspecified</Typography>
            <Typography  fontSize={15}>N93.8 Other specified abnormal uterine and vaginal bleeding</Typography>
            </Stack>
            </Stack>
            <Stack  mt={3}>
            <SubTitle fontWeight={"bold"}>Clinical Pearls
            </SubTitle>
            <Hr style={{width:"100%"}}/>
            <Stack gap={2} mt={2}>
            <Typography  fontSize={15}>
            AUB is irregular uterine bleeding that occurs in the absence of pregnancy or pathology, making it a
            diagnosis of exclusion
               </Typography>
               <Typography  fontSize={15}>
               Anovulation accounts for 90% of AUB.
   
               </Typography>
               <Typography  fontSize={15}>
               EMB should be performed in
   
               </Typography>
               <UnderTypo>
               Women aged &gt;45 years with AUB
               </UnderTypo>
               <UnderTypo>
               Women aged 18 to 45 years with AUB and a history of unopposed estrogen and failed medical
               management
               </UnderTypo>
               </Stack>
            </Stack>
            
           </AccordionDetails>
         </Accordion>
         </>
   
  )
}

export default Codes
