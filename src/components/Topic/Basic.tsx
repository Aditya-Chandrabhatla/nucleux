/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography, styled, Divider, Avatar } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'






// const Rough = [
//   {
//     heading:"basics",
//     img:"../../../static/images/1.jpg",
//     basic_content:[""],
//     contentLIs:[{
//       header:["description","epidemiology","incidence","prevalence",{"etiology and pathophysiology":['Coagulopathy','Diseases causing ovulatory dysfunction',
//   'Medications (iatrogenic causes)']},"genetics","risk factors","general prevention"],
//       content:[{
//         header:'1',
//         content:['Abnormal uterine bleeding (AUB) is uterine bleeding that is irregular in quantity, frequency, or duration.',
//           'May be acute or chronic (occurring >6 months)',
//           ' The International Federation of Gynecology and Obstetrics (FIGO) now uses AUB rather thandysfunctional uterine bleeding (DUB).']
//       },
//       {
//         header:'2',
// 	content:["Adolescent and perimenopausal women are affected most often."]
//       },
//       {header:"3",
// 	content:[" 5% of reproductive-aged women will see a doctor in any given year for AUB"]},
// 	{header:"4",
// 	content:[" 3-30% of reproductive-aged women have AUB."]},
//     ]
//     },
//  {
//         header:'6',
// 	content:["Unclear but can include inherited disorders of hemostasis"]
//       },
// {
//         header:'7',
// 	content:["Unopposed estrogen therapy (no. 1 risk factor for endometrial cancer)Increasing age, typically >40 years old; obesity; PCOS; diabetes mellitus; nulliparity; early menarche orlate menopause (>55 years of age); chronic anovulation or infertility; history of breast cancer orendometrial hyperplasia; tamoxifen use; family history: gynecologic, breast, or colon cancer; thyroiddisease"]
//       }
//    }
// ]


const Basic = () => {
  
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
    <Accordion sx={{maxHeight:300,overflow:'auto','&::-webkit-scrollbar': { display: 'none' },
     '-ms-overflow-style': 'none',"&:hover":{backgroundColor:'#2d2f33'}}}>
      
        <AccordionSummary
          expandIcon={<ExpandMoreIcon
             />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          <Stack sx={{display:"flex",alignItems:"center",flexDirection:"row",}}>
          <Avatar  src='../../../static/images/1.jpg' sx={{mr:2,}} />
          
          <Typography sx={{color:"#EC4899",fontFamily:"serif",fontWeight:"bold",fontSize:20,}}>BASICS</Typography>
          </Stack>
          

        </AccordionSummary>
        <AccordionDetails >
        <Stack>
            <Stack>
         <SubTitle>DESCRIPTION</SubTitle>
         <Hr/>
         <Stack gap={2} mt={2}>
         <Typography  fontSize={15}>Abnormal uterine bleeding (AUB) is uterine bleeding that is irregular in quantity, frequency, or duration.
         </Typography>
         <Typography fontSize={15}>May be acute or chronic (occurring {'>'} 6 months)
         </Typography>
         <Typography fontSize={15}>The International Federation of Gynecology and Obstetrics (FIGO) now uses AUB rather than
         dysfunctional uterine bleeding (DUB).</Typography>
         </Stack>
         </Stack>
         <Stack mt={3} >
         <SubTitle>EPIDEMIOLOGY</SubTitle>
         <Hr />
         <Stack mt={2}>
         <Typography  fontSize={15}>
         Adolescent and perimenopausal women are affected most often.
         </Typography>
         </Stack>
         </Stack>
         <Stack  mt={3}>
         <SubTitle>Incidence</SubTitle>
         <Hr />
         <Typography  fontSize={15} mt={2}>
         5% of reproductive-aged women will see a doctor in any given year for AUB.
         </Typography>
         </Stack>
         <Stack mt={3}>
         <SubTitle fontWeight={"bold"}>Prevalence</SubTitle>
         <Hr/>
         <Typography  fontSize={15} mt={2}>
         3-30% of reproductive-aged women have AUB.
         </Typography>
         </Stack>
         <Stack mt={3}>
         <SubTitle fontWeight={"bold"}>ETIOLOGY AND PATHOPHYSIOLOGY</SubTitle>
         <Hr />
         <Stack gap={2} mt={2}>
         <Typography  fontSize={15}>
         Anovulation accounts for 90% of AUB.
         </Typography>
         <Typography  fontSize={15}>
         Adolescent AUB is usually due to an immature hypothalamic-pituitary-ovarian (HPO) axis that leads to anovulatory cycles.
         </Typography>
         <Typography  fontSize={15}>
         The mnemonic PALM-COEIN (1) was developed to describe AUB in reproductive aged women. PALM
         </Typography>
         <Typography  fontSize={15}>
         (structural causes): polyp, adenomyosis, leiomyoma, and malignancy and/or hyperplasia

COEIN (nonstructural causes): coagulopathy, ovulatory disorders, endometrial, iatrogenic, and not yet classified
</Typography>
<Typography  fontSize={15}>
Coagulopathy
         </Typography>
         <UnderTypo>
         
20% of patients with heavy menstrual bleeding have a bleeding disorder.
        </UnderTypo>
        <UnderTypo>
Two most common coagulopathies involved: von Willebrand disease and thrombocytopenia
         </UnderTypo>
         <Typography  fontSize={15}>
         Diseases causing ovulatory dysfunction
         </Typography>
         <UnderTypo>
         Hyperparathyroidism, hypothyroidism, adrenal disorders, pituitary disease (prolactinoma), PCOS, eating disorders 
         </UnderTypo>
         <Typography  fontSize={15}>
         Medications (iatrogenic causes)
         </Typography>
         <UnderTypo>
         Anticoagulants, steroids, tamoxifen (estrogen receptor antagonists), hormonal contraception, copper IUD, antipsychotic medications (mostly first generation), postmenopausal hormone replacement therapy, antiemetics (metoclopramide and domperidone specifically)
         </UnderTypo>
         <Typography  fontSize={15}>
         Other causes of AUB not defined in PALM-COEIN: ectopic pregnancy, threatened or incomplete abortion or hydatidiform mole, upper genital tract infections, advanced or fulminant liver disease, chronic renal disease, nutritional deficiencies, inflammatory bowel disease, excessive weight gain, increased exercise
         </Typography>
         </Stack>
         </Stack>
         <Stack mt={3}>
         <SubTitle>Genetics</SubTitle>
         <Hr style={{width:"100%"}}/>
         <Typography  fontSize={15} mt={2}>
         Unclear but can include inherited disorders of hemostasis
         </Typography>
         </Stack>
         <Stack mt={3}>
         <SubTitle>RISK FACTORS</SubTitle>
         <Hr style={{width:"100%"}}/>
         <Stack mt={2} gap={2}>
         <Typography  fontSize={15}>
         Unopposed estrogen therapy (no. 1 risk factor for endometrial cancer)
         </Typography>
         <Typography  fontSize={15}>
         Increasing age, typically &gt;40 years old; obesity; PCOS; diabetes mellitus; nulliparity; early menarche or late menopause (&gt;55 years of age); chronic anovulation or infertility; history of breast cancer or endometrial hyperplasia; tamoxifen use; family history: gynecologic, breast, or colon cancer; thyroid disease
         </Typography>
         </Stack>
         </Stack>
         <Stack  mt={3}>
         <SubTitle>GENERAL PREVENTION</SubTitle>
         <Hr style={{width:"100%"}}/>
         <Typography  fontSize={15} mt={2}>
         No direct preventive measure for AUB
         </Typography>

         </Stack>
         </Stack>
        </AccordionDetails>
      </Accordion>
  )
}

export default Basic
