import { Stack,Typography } from '@mui/material'
import React from 'react'
import Basic from '@/src/components/Topic/Basic';
import Diagnosis from '@/src/components/Topic/Diagnosis';
import Treatment from '@/src/components/Topic/Treatment';
import Codes from '@/src/components/Topic/Codes';
import OngoingCare from '@/src/components/Topic/OngoingCare';




const ViewTopic = () => {




  return (
    <Stack p={3} >
    
    <Stack display={'flex'} 
    justifyContent={{md:'space-between',xs:"flex-start"}}
    flexDirection={{md:'row',xs:'column'}}
    alignItems={{md:"center",xs:'flex-start'}}>
    <Typography fontWeight={"bold"} fontSize={28} >
    Abnormal (Dysfunctional) Uterine Bleeding
    </Typography>

    <Typography fontSize={13}>
    Last edited: Oct 01, 2024
    </Typography>
    </Stack>

        <Stack mt={4} display={"flex"} 
        flexDirection={"column"}
        justifyContent={"center"} mx={{md:'10%'}}> 
            

      <Basic/>
    
      <Diagnosis/>
      <Treatment/>
    
      <OngoingCare/>
      <Codes/>
        </Stack>
        </Stack>

  )
}

export default ViewTopic
