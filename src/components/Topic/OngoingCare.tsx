import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography, Paper, styled, Divider, Avatar } from '@mui/material';
import React from 'react'

const OngoingCare = () => {

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


  return (
    <>
    <Divider orientation='horizontal' flexItem sx={{backgroundColor:"#eee8eb"}} />
    <Accordion sx={{maxHeight:300,overflow:'auto','&::-webkit-scrollbar': { display: 'none' },
    '-ms-overflow-style': 'none',"&:hover":{backgroundColor:'#2d2f33'}}}  >
       <AccordionSummary
          expandIcon={<ExpandMoreIcon
             />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          <Stack sx={{display:"flex",alignItems:"center",flexDirection:"row",}}>
          <Avatar  src='../../../static/images/4.jpg' sx={{mr:2,}} />
          
          <Typography sx={{color:"#EC4899",fontFamily:"serif",fontWeight:"bold",fontSize:20,}}>ONGOING CARE</Typography>
          </Stack>
          

        </AccordionSummary>

    <AccordionDetails >
        <Stack >
     <SubTitle>FOLLOW-UP RECOMMENDATIONS
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography  fontSize={15} mt={2}>Once stable from acute management, recommend follow-up evaluation in 4 to 6 months for further
evaluation.
</Typography>
     </Stack>
     <Stack mt={2}>
     <SubTitle>Patient Monitoring
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography  fontSize={15} mt={2}>
     Women treated with estrogen or OCPs should keep a menstrual diary to document bleeding patterns and
their relation to therapy
        </Typography>
    
     </Stack>
     <Stack  mt={3}>
     <SubTitle>DIET
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography  fontSize={15} mt={2}>
     No restrictions, although a 5% reduction in weight can induce ovulation in anovulation caused by PCOS
        </Typography>
    
     </Stack>
     <Stack mt={3}>
     <SubTitle fontWeight={"bold"}>PATIENT EDUCATION

     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography  fontSize={15} mt={2}>
     https://www.acog.org/Patients

     </Typography>
    
     </Stack>
     <Stack  mt={3}>
     <SubTitle fontWeight={"bold"}>PROGNOSIS
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Stack  gap={2} mt={2}>
     <Typography  fontSize={15}>
     Varies with pathophysiologic process
     </Typography>
     <Typography  fontSize={15}>
     Most anovulatory cycles can be treated with medical therapy and do not require surgical intervention.
     </Typography>
     </Stack>
     </Stack>

     <Paper sx={{mt:3,p:2,bgcolor:'#f77979'}}>
     <Stack>
     <SubTitle>COMPLICATIONS
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography  fontSize={15} mt={2}>
     Iron deficiency anemia, mood disorders
     </Typography>
    
    
     </Stack>
     </Paper>

     <Stack  mt={3}>
     <SubTitle fontWeight={"bold"}>REFERENCES
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Stack  gap={2} mt={2}>
     <Typography  fontSize={15}>
    1. Wouk N, Helton M. Abnormal uterine bleeding in premenopausal women. Am Fam Physician. 2019;99(7):435-443.


     </Typography>
     <Typography  fontSize={15}>
    2. Committee on Practice Bulletins—Gynecology. Practice Bulletin No. 128: diagnosis of abnormal uterine bleeding in reproductive-aged women. Obstet Gynecol. 2012;120(1):197-206. Ovid Full Text
    </Typography>
    <Typography  fontSize={15}>
    3. Khafaga A, Goldstein SR. Abnormal uterine bleeding. Obstet Gynecol Clin North Am. 2019;46(4):595- 605.
    </Typography>
    <Typography  fontSize={15}>
    4. Marjoribanks J, Lethaby A, Farquhar C. Surgery versus medical therapy for heavy menstrual bleeding.

Cochrane Database Syst Rev. 2016;2016(1):CD003855. Full Text
    </Typography>
    <Typography  fontSize={15}>
    5. Lethaby A, Irvine G, Cameron I. Cyclical progestogens for heavy menstrual bleeding. Cochrane Database Syst Rev. 2008;(1):CD001016.
    </Typography>
     
     </Stack>
     </Stack>
    </AccordionDetails>
  </Accordion>

<Divider orientation='horizontal' flexItem sx={{backgroundColor:"#eee8eb"}} />
<Accordion sx={{maxHeight:300,overflow:'auto','&::-webkit-scrollbar': { display: 'none' },
'-ms-overflow-style': 'none',"&:hover":{backgroundColor:'#2d2f33'}}}  >
   <AccordionSummary
          expandIcon={<ExpandMoreIcon
             />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          <Stack sx={{display:"flex",alignItems:"center",flexDirection:"row",}}>
          <Avatar  src='../../../static/images/5.jpg' sx={{mr:2,}} />
          
          <Typography sx={{color:"#EC4899",fontFamily:"serif",fontWeight:"bold",fontSize:20,}}>SEE ALSO</Typography>
          </Stack>
          

        </AccordionSummary>

<AccordionDetails >

<Typography  fontSize={15}>
Dysmenorrhea; Menorrhagia (Heavy Menstrual Bleeding)
</Typography>
<Typography  fontSize={15} mt={2}>
Algorithm: Abnormal Uterine Bleeding

</Typography>
</AccordionDetails>
</Accordion>
</>
  )
}

export default OngoingCare
