import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack, Paper, styled, Divider, Avatar } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const Diagnosis = () => {

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
    paddingLeft:15,
    fontFamily:"cursive"
  }));
  return (
    <>
    <Divider orientation='horizontal' flexItem sx={{backgroundColor:"#eee8eb"}} />
    <Accordion sx={{maxHeight:300,overflow:'auto','&::-webkit-scrollbar': { display: 'none' },
    '-ms-overflow-style': 'none',"&:hover":{backgroundColor:'#2d2f33'}}} >
      <AccordionSummary
          expandIcon={<ExpandMoreIcon
             />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          <Stack sx={{display:"flex",alignItems:"center",flexDirection:"row",}}>
          <Avatar  src='../../../static/images/2.jpg' sx={{mr:2,}} />
          
          <Typography sx={{color:"#EC4899",fontFamily:"serif",fontWeight:"bold",fontSize:20,}}>DIAGNOSIS</Typography>
          </Stack>
          

        </AccordionSummary>

    <AccordionDetails >
        
     <Typography  fontSize={15} mb={2}>
     The most valuable in diagnosis and determining etiology is history.
     </Typography>

        <Stack>
     <SubTitle fontWeight={"bold"}>HISTORY</SubTitle>
     <Hr style={{width:"100%"}}/>
     <Stack gap={2}mt={2}>
     <Typography  fontSize={15}>
     Menstrual history: onset, severity (quantified by pad/tampon use, presence and size of clots), timing of bleeding (unpredictable or episodic) over the last 6 months; also assess menopausal status.
     </Typography>
     <Typography  fontSize={15}>
     Association with other factors (e.g., coitus, contraception, weight loss/gain) 
        </Typography>
     <Typography  fontSize={15}>
     Gynecologic history: gravidity and parity, STI history, previous Pap smear results
     </Typography>
     <Typography  fontSize={15}>
     Review of systems (Exclude symptoms of pregnancy, bleeding disorders, stress, exercise, recent weight change, visual changes, headaches, and galactorrhea.)
     </Typography>
     </Stack>
     </Stack>

    <Paper sx={{bgcolor:'#f77979',p:2,my:3}}>

    <Stack>
     <SubTitle>ALERT</SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography  fontSize={15} pt={2}>
     Postmenopausal bleeding is any bleeding that
      occurs {'>'} 1 year after the last menstrual period; cancer
must always be ruled out (1)[C].

     </Typography>
     </Stack>
    </Paper>

    <Stack  mt={3}>
     <SubTitle>PHYSICAL EXAM
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Stack gap={2} mt={2}>
     <Typography  fontSize={15}>
     Evaluate for:

     </Typography>
     <Typography  fontSize={15}>
     Body mass index, pallor, vital signs, visual field defects (may suggest a pituitary lesion), vaginal discharge, hirsutism or 
     acne, goiter, galactorrhea, purpura, ecchymosis
     </Typography>
     <Typography  fontSize={15}>
     Pelvic exam: uterine irregularities and Tanner stage, foreign bodies; rule out rectal or urinary tract 
     bleeding; include Pap smear and tests for STIs (2)[C].
     </Typography>
     </Stack>
     </Stack>

     <Stack  mt={3}>
     <SubTitle>DIFFERENTIAL DIAGNOSIS
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography  fontSize={15} mt={2}>
     See “Etiology and Pathophysiology.”
     </Typography>
     </Stack>

     <Stack  mt={3}>
     <SubTitle>DIAGNOSTIC TESTS & INTERPRETATION
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <SubTitle mt={2}>Initial Tests (lab, imaging)
     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Stack gap={2} mt={2}>
     <Typography  fontSize={15}>
     All patients: urine hCG and
      CBC: For acute heavy/hemorrhagic
       bleeding, a type and crossmatch should be
     obtained.
     </Typography>
     <Typography  fontSize={15}>
     If coagulopathy is suspected, prothrombin time (PT),
      activated partial thromboplastin time (aPTT), and fibrinogen level; if abnormal, get von Willebrand
      factor, ristocetin cofactor assay, and factor VIII.
    </Typography>
    <Typography  fontSize={15}>
    Consider other tests based on differential diagnosis:
    </Typography>
    <UnderTypo>
    Suspected hormonal abnormalities: TSH, prolactin level,
     follicle-stimulating hormone (FSH) Concern for
    </UnderTypo>
    <UnderTypo>
    infection: STI screening, KOH prep, vaginitis panel
    </UnderTypo>
    <UnderTypo>
    Possible congenital adrenal hyperplasia: 17-Hydroxyprogesterone
    </UnderTypo>
    <UnderTypo>
    Possible PCOS: testosterone and/or
     dehydroepiandrosterone sulfate (DHEA-S) if PCOS is suspected
    </UnderTypo>
    <Typography  fontSize={15}>
    TVUS in postmenopausal AUB

    </Typography>
    <UnderTypo>
    American College of Obstetricians and Gynecologists (ACOG) continues to recommend endometrial sampling for postmenopausal women with AUB but states that a thin, homogeneous endometrial thickness (ET) {'<'} 4 mm does not require endometrial sampling unless bleeding is persistent or recurrent, whereas ET {'>'}4 mm should prompt further evaluation (based on ACOG 2018 guidelines) (3) [C]. Sampling of thin
         endometrium is often unsatisfactory for histologic evaluation. 
        </UnderTypo>
        <UnderTypo>
        Incidentally found endometrial measurement &gt;4 mm without associated bleeding in postmenopausal women should not trigger evaluation; however, assessment based on individual risk factors is appropriate.
        </UnderTypo>
        <Typography  fontSize={15}>
        TVUS, sonohysterography, and hysteroscopy may be similarly effective in detection of intrauterine pathology in premenopausal women with AUB.
        </Typography>
     </Stack>
     </Stack>
     <Stack  mt={3}>
     <SubTitle >
     Follow-Up Tests & Special Considerations

     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography fontSize={15} mt={2}>It is appropriate to initiate medical therapy in females {'<'} 35 years of age if low risk of uterine anatomic/histologic abnormality or adenomyosis prior
      to performing an endometrial biopsy (EMB)
     </Typography>
     </Stack>

     <Stack  mt={3}>
     <SubTitle fontWeight={"bold"}>
     Diagnostic Procedures/Other

     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Stack gap={2} mt={2}>
     <Typography fontSize={15}>
     Pap smear to screen for cervical cancer if age {'>'}21 years (2)[C] EMB
     </Typography>
     <UnderTypo>
     Women aged &gt;45 years with AUB to rule out cancer or premalignancy Postmenopausal women with ET ≥4 mm
     </UnderTypo>
     <UnderTypo>
     Women aged 18 to 45 years with AUB, a history of unopposed estrogen, and failed medical management
</UnderTypo>
<UnderTypo>
Women of any age without risk factors if they have abnormal findings following imaging (2)
</UnderTypo>
<UnderTypo>
Perform on or after day 18 of cycle, if known; secretory endometrium confirms that ovulation occurred.
</UnderTypo>
<Typography fontSize={15} >
Hysteroscopy with targeted biopsy if suspected intrauterine lesion with negative EMB; NPV for endometrial cancer with negative hysteroscopy at any age is 99.5%.
</Typography>
</Stack>
     </Stack>
     <Stack  mt={3}>
     <SubTitle>
     Test Interpretation

     </SubTitle>
     <Hr style={{width:"100%"}}/>
     <Typography fontSize={15} mt={2}>
     Pap smear could reveal carcinoma or inflammation indicative of cervicitis. Most EMBs show proliferative or dyssynchronous endometrium (suggesting anovulation) but can show simple or complex hyperplasia without atypia, hyperplasia with atypia, or endometrial adenocarcinoma.
     </Typography>
     </Stack>
    </AccordionDetails>
  </Accordion>
  </>
  )
}

export default Diagnosis
