
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography, styled, Divider, Avatar } from '@mui/material';
import React from 'react'

const Treatment = () => {
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
    '-ms-overflow-style': 'none',"&:hover":{backgroundColor:'#2d2f33'}}}  >
       <AccordionSummary
          expandIcon={<ExpandMoreIcon
             />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          <Stack sx={{display:"flex",alignItems:"center",flexDirection:"row",}}>
          <Avatar  src='../../../static/images/3.jpg' sx={{mr:2,}} />
          
          <Typography sx={{color:"#EC4899",fontFamily:"serif",fontWeight:"bold",fontSize:20,}}>TREATMENT</Typography>
          </Stack>
          

        </AccordionSummary>

    <AccordionDetails sx={{gap:2}}>
        <Stack>
     <SubTitle>GENERAL MEASURES</SubTitle>
     <Hr style={{width:"100%"}}/>
     <Stack gap={2} mt={2} >
     <Typography  fontSize={15}>
     NSAIDs (naproxen sodium 500 mg BID, mefenamic acid 500 mg TID, ibuprofen 600 to 1,200 mg/day)
        </Typography>
        <Typography  fontSize={15}>
        Decreases amount of blood loss and pain compared with placebo
        </Typography>
        <Typography  fontSize={15}>
        “Surgical” approaches (including LNG-IUD) generally superior to medical approaches for long-term control (4)[A]

        </Typography>
    
     </Stack>
     </Stack>

     <Stack mt={3}>
     <SubTitle>MEDICATION</SubTitle>
     <Hr style={{width:"100%"}}/>
     <SubTitle mt={2}>First Line</SubTitle>
     <Hr style={{width:"100%"}}/>
     <Stack gap={2} mt={2} >
     <Typography  fontSize={15}>
     Acute, emergent, nonovulatory bleeding
     </Typography>
     <UnderTypo>
     Conjugated equine estrogen (Premarin): 25 mg IV q4h (max of 6 doses) stops bleeding within 8 hours
     in 72% of individuals, or 2.5 mg Premarin PO q6h should control bleeding in 12 to 24 hours (2)[A].
     </UnderTypo>
     <UnderTypo>
     Tranexamic acid (TXA) 1.3 g PO or 10 mg/kg IV (max of 600 mg/dose) TID
      </UnderTypo>
      <UnderTypo>
      Intrauterine tamponade by lling 26F foley bulb with 30 mL saline

      </UnderTypo>
      <UnderTypo>
      D&C if no response after 2 to 4 doses of Premarin or sooner if bleeding {">"} 1 pad per hour
      </UnderTypo>
      <UnderTypo>
      Change to oral contraceptive pill (OCP) or progestin for cycle regulation

      </UnderTypo>
      <Typography  fontSize={15}>
      Acute, nonemergent, nonovulatory bleeding:
      </Typography>

      <UnderTypo>
      Monophasic combined OCPs with 35 µg of estrogen TID for 7 days shown to stop bleeding in 88% of
women
      </UnderTypo>
      <UnderTypo>
      Medroxyprogesterone acetate 20 mg PO TID for 7 days shown to stop bleeding in 76% of women in 3
      days
      </UnderTypo>

      <Typography  fontSize={15}>
      Nonacute, nonovulatory bleeding
      </Typography>
      <UnderTypo>
      Levonorgestrel IUD (Mirena) is the most eective (71-95% decrease in blood loss) form of
progesterone delivery and not inferior to surgical management (4)[A].

      </UnderTypo>
      <UnderTypo>
      Progestins: medroxyprogesterone acetate (Provera) 10 mg/day for 5 to 10 days each month; daily
progesterone for 21 days per cycle results in signicantly less blood loss (5)[A]; medroxyprogesterone
acetate (Depo-Provera) 150 mg q12wk

      </UnderTypo>
      <UnderTypo>
      OCPs: 20 to 35 µg daily estrogen plus progesterone (Consider especially for anovulatory females {"< "}
years old who are not yet sexually active.)

      </UnderTypo>
      <UnderTypo>
      TXA 1.0 to 1.5 g by mouth three times a day; avoid in patients with hypercoagulable states. 
      </UnderTypo>

      <Typography  fontSize={15}>
      Do not use estrogen if contraindications exist (suspicion for endometrial hyperplasia or carcinoma,
history of DVT, migraine with aura, or smoking in women {"> "}35 years of age [relative contraindication]).

      </Typography>
      <Typography  fontSize={15}>
      Precautions

      </Typography>
      <UnderTypo>
      Failed medical treatment requires further workup and consideration of surgical management.
      </UnderTypo>
      <UnderTypo>
      Consider DVT prophylaxis when treating with high-dose estrogens (2)[C].

      </UnderTypo>
    
     </Stack>
     </Stack>

        <Stack mt={3}>
          <SubTitle>
          Second Line
          </SubTitle>
          <Hr/>
          <Stack gap={2} mt={2}>
            <Typography fontSize={15}>
            Gonadotropin-releasing hormone (GnRH) agonists: leuprolide (varying doses and duration of action)

            </Typography>
            <Typography fontSize={15}>
            GnRH antagonists (elagolix 300 mg BID): FDA approved for heavy menstrual bleeding due to uterine
broids in premenopausal women combined with add-back therapy (1 mg estradiol/0.5 mg
norethindrone acetate once a day)

            </Typography>
            <Typography fontSize={15}>
            Danazol (200 to 400 mg/day for a maximum of 9 months) is more eective than NSAIDs but is limited by
androgenic side eects and cost; now replaced by GnRH agonists

            </Typography>
            <Typography fontSize={15}>
            Metformin or clomifene (Clomid) alone or in combination in women with PCOS who desire ovulation and
pregnancy

            </Typography>
          </Stack>
        </Stack>
      <Stack mt={3}>
        <SubTitle>
        ISSUES FOR REFERRAL 
        </SubTitle>
        <Hr/>
        <Typography fontSize={15}>
        If an obvious cause for vaginal bleeding is not found in a pediatric patient, refer to a pediatric
endocrinologist or pediatric/adolescent gynecology.

        </Typography>
      </Stack>
      <Stack mt={3}>
        <SubTitle>
        ADDITIONAL THERAPIES
        </SubTitle>
        <Hr/>
        <Stack gap={2} mt={2}>
        <Typography fontSize={15}>
        Antiemetics if treating with high-dose estrogen or progesterone (2)[C]

        </Typography>
        <Typography fontSize={15}>
        Iron supplementation if anemia (usually iron deciency) is identified

        </Typography>
      </Stack>
      </Stack>

      <Stack mt={3}>
        <SubTitle>
        SURGERY/OTHER PROCEDURES
        </SubTitle>
        <Hr/>
        <Stack gap={2} mt={2}>
        <Typography fontSize={15}>
        Hysterectomy in cases of endometrial cancer, if medical therapy fails, or if other uterine pathology is
found

        </Typography>
        <Typography fontSize={15}>
        Endometrial ablation, less expensive than hysterectomy and associated with high patient satisfaction; this
is a permanent procedure and should be avoided in patients who desire continued fertility
        </Typography>
        <Typography fontSize={15}>
        Uterine artery embolization if bleeding is refractory to medications or conrmed fibroids
        </Typography>
      </Stack>
      </Stack>

      <Stack mt={3}>
        <SubTitle>
        ADMISSION, INPATIENT, AND NURSING CONSIDERATIONS
        </SubTitle>
        <Hr/>
        <Stack gap={2} mt={2}>
        <Typography fontSize={15}>
        Signicant hemorrhage causing acute anemia with signs of hemodynamic instability; with acute bleeding,
replace volume with crystalloid and blood, as necessary.

       </Typography>
       <Typography fontSize={15}>
       Pad counts and clot size can be helpful to determine and monitor amount of bleeding.

       </Typography>
       <Typography fontSize={15}>
       Discharge criteria: hemodynamic stability and control of vaginal bleeding
       </Typography>
      </Stack>
      </Stack>
     
    </AccordionDetails>
  </Accordion>

  </>

  )
}

export default Treatment
