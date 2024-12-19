/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Divider,
  Link,
  Paper,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Rough = [
    // Basics
    {
      "heading": "BASICS",
      "img": "../../../static/images/1.jpg",
      "contentLIs": [
        {
          "header": "DESCRIPTION",
          "content": [
            "Abnormal uterine bleeding (AUB) is *uterine bleeding* that is irregular in quantity, frequency, or duration.",
            "May be acute or chronic (occurring >6 months).",
            "The International Federation of Gynecology and Obstetrics (FIGO) now uses AUB rather than dysfunctional uterine bleeding (DUB)."
          ]
        },
        {
          "header": "EPIDEMIOLOGY",
          "content": ["Adolescent and perimenopausal women are affected most often."]
        },
        {
          "header": "Incidence",
          "content": ["5% of reproductive-aged women will see a doctor in any given year for AUB."]
        },
        {
          "header": "Prevalence",
          "content": ["3-30% of reproductive-aged women have AUB."]
        },
        {
          "header": "ETIOLOGY AND PATHOPHYSIOLOGY",
          "content": [
            "Anovulation accounts for 90% of AUB.",
            "Adolescent AUB is usually due to an immature hypothalamic-pituitary-ovarian (HPO) axis that leads to anovulatory cycles.",
            "The mnemonic PALM-COEIN was developed to describe AUB in reproductive-aged women.",
            "PALM (structural causes): polyp, adenomyosis, leiomyoma, and malignancy and/or hyperplasia.",
            "COEIN (nonstructural causes): coagulopathy, ovulatory disorders, endometrial, iatrogenic, and not yet classified.",
            {
              "header": "Coagulopathy",
              "content": [
                "20% of patients with heavy *menstrual bleeding* have a bleeding disorder.",
                "Two most common coagulopathies involved: von Willebrand disease and thrombocytopenia."
              ]
            },
            {
              "header": "Diseases causing ovulatory dysfunction",
              "content": [
                "Hyperparathyroidism, hypothyroidism, adrenal disorders, pituitary disease (prolactinoma), PCOS, eating disorders."
              ]
            },
            {
              "header": "Medications (iatrogenic causes)",
              "content": [
                "Anticoagulants, steroids, tamoxifen (estrogen receptor antagonists), hormonal contraception, copper IUD, antipsychotic medications (mostly first generation), postmenopausal hormone replacement therapy, antiemetics (metoclopramide and domperidone specifically)."
              ]
            },
            "Other causes of AUB not defined in PALM-COEIN: ectopic pregnancy, threatened or incomplete abortion or hydatidiform mole, upper genital tract infections, advanced or fulminant liver disease, chronic renal disease, nutritional deficiencies, inflammatory bowel disease, excessive weight gain, increased exercise."
          ]
        },
        {
          "header": "Genetics",
          "content": ["Unclear but can include inherited disorders of hemostasis."]
        },
        {
          "header": "RISK FACTORS",
          "content": [
            "Unopposed estrogen therapy (no. 1 risk factor for endometrial cancer).",
            "Increasing age, typically >40 years old; obesity; PCOS; diabetes mellitus; nulliparity; early menarche or late menopause (>55 years of age); chronic anovulation or infertility; history of breast cancer or endometrial hyperplasia; tamoxifen use; family history: gynecologic, breast, or colon cancer; thyroid disease."
          ]
        },
        {
          "header": "GENERAL PREVENTION",
          "content": ["No direct preventive measure for AUB."]
        },

      ]
    },
    // DIAGNOSIS
    {
      "heading": "DIAGNOSIS",
      "img": "../../../static/images/2.jpg",
      "basicText": ["The most valuable in diagnosis and determining etiology is history."],
      "contentLIs": [
        {
          "header": "HISTORY",
          "content": [
            "Menstrual history: onset, severity (quantified by pad/tampon use, presence and size of clots), timing of bleeding (unpredictable or episodic) over the last 6 months; also assess menopausal status.",
            "Association with other factors (e.g., coitus, contraception, weight loss/gain).",
            "Gynecologic history: gravidity and parity, STI history, previous Pap smear results.",
            "Review of systems (Exclude symptoms of pregnancy, bleeding disorders, stress, exercise, recent weight change, visual changes, headaches, and galactorrhea.)"
          ]
        },
        {
            "header": "ALERT",
            "content": [
             'Postmenopausal bleeding is any bleeding that occurs > 1 year after the last menstrual period; cancer must always be ruled out (1)[C].'
            ]
          },
        {
          "header": "PHYSICAL EXAM",
          "content": [
            {
              "header": "Evaluate for:",
              "content": [
                "Body mass index, pallor, vital signs, visual field defects (may suggest a pituitary lesion), vaginal discharge, hirsutism or acne, goiter, galactorrhea, purpura, ecchymosis.",
                "Pelvic exam: uterine irregularities and Tanner stage, foreign bodies; rule out rectal or urinary tract bleeding; include Pap smear and tests for STIs."
              ]
            }
          ]
        },
        {
          "header": "Pediatric Considerations",
          "content": [
            "Premenarchal children with vaginal bleeding should be evaluated for foreign bodies, physical/sexual abuse, possible infections, and signs of precocious puberty."
          ]
        },
        {
          "header": "DIFFERENTIAL DIAGNOSIS",
          "content": ["See 'Etiology and Pathophysiology.'"]
        },
        {
          "header": "DIAGNOSTIC TESTS & INTERPRETATION",
        },
        {
          "header": "Initial Tests (lab, imaging)",
          "content": [
            {
              "header": "All patients: urine hCG and CBC: For acute heavy/hemorrhagic bleeding, a type and crossmatch should be obtained."
            },
            {
              "header": "If coagulopathy is suspected, prothrombin time (PT), activated partial thromboplastin time (aPTT), and fibrinogen level; if abnormal, get von Willebrand factor, ristocetin cofactor assay, and factor VIII."
            },
            {
              "header": "Consider other tests based on differential diagnosis:",
              "content": [
                "Suspected hormonal abnormalities: TSH, prolactin level, follicle-stimulating hormone (FSH).",
                "Concern for infection: STI screening, KOH prep, vaginitis panel.",
                "Possible congenital adrenal hyperplasia: 17-Hydroxyprogesterone.",
                "Possible PCOS: testosterone and/or dehydroepiandrosterone sulfate (DHEA-S) if PCOS is suspected."
              ]
            }
          ]
        },

      ]
    },
    // TREATMENT
    {
    heading: 'TREATMENT',
    img: '../../../static/images/3.jpg',
    firstHeader :"FisrtHeader",
    contentLIs: [
      {
        header:' GENERAL MEASURES',
        content:['NSAIDs (naproxen sodium 500 mg BID, mefenamic acid 500 mg TID, ibuprofen 600 to 1,200 mg/day)',
        'Decreases amount of blood loss and pain compared with placebo',
        ' “Surgical” approaches (including LNG-IUD) generally superior to medical approaches for long-term control (4)[A]'],

      },
      {
        header:'MEDICATION',
        content:[],

      },

      {
        header: ' First Line',
        content: [
          {
            header: 'Acute, emergent, nonovulatory bleeding',
            content: [' Conjugated equine estrogen (Premarin): 25 mg IV q4h (max of 6 doses) stops bleeding within 8 hours in 72% of individuals, or 2.5 mg Premarin PO q6h should control bleeding in 12 to 24 hours (2)[A].',

           'Tranexamic acid (TXA) 1.3 g PO or 10 mg/kg IV (max of 600 mg/dose) TID',
            'Intrauterine tamponade by lling 26F foley bulb with 30 mL saline',
            'D&C if no response after 2 to 4 doses of Premarin or sooner if bleeding >1 pad per hour', 
            'Change to oral contraceptive pill (OCP) or progestin for cycle regulation']
          },
          {
            header: ' Acute, nonemergent, nonovulatory bleeding:',
            content:[' Monophasic combined OCPs with 35 µg of estrogen TID for 7 days shown to stop bleeding in 88% ofwomen',
            'Medroxyprogesterone acetate 20 mg PO TID for 7 days shown to stop bleeding in 76% of women in 3days'],
 
          },
          {
            header: ' Nonacute, nonovulatory bleeding',
            content:[' Levonorgestrel IUD (Mirena) is the most e ective (71-95% decrease in blood loss) form of progesterone delivery and not inferior to surgical management (4)[A].','Progestins: medroxyprogesterone acetate (Provera) 10 mg/day for 5 to 10 days each month; dailyacetate (Depo-Provera) 150 mg q12wk',' OCPs: 20 to 35 µg daily estrogen plus progesterone (Consider especially for anovulatory females <18 years old who are not yet sexually active.)','TXA 1.0 to 1.5 g by mouth three times a day; avoid in patients with hypercoagulable states.'],
          },
          {
            header:'Do not use estrogen if contraindications exist (suspicion for endometrial hyperplasia or carcinoma,history of DVT, migraine with aura, or smoking in women >35 years of age [relative contraindication]).',
},
          {
            header: 'Precautions',
            content:[' Failed medical treatment requires further workup and consideration of surgical management',
            ' Consider DVT prophylaxis when treating with high-dose estrogens (2)[C].',],
          },

        ],
      },
      {
        header:'Second Line',
        content:['Gonadotropin-releasing hormone (GnRH) agonists: leuprolide (varying doses and duration of action)',
                  ' GnRH antagonists (elagolix 300 mg BID): FDA approved for heavy menstrual bleeding due to uterine fibroids in premenopausal women combined with add-back therapy (1 mg estradiol/0.5 mgnorethindrone acetate once a day)',
                  'Danazol (200 to 400 mg/day for a maximum of 9 months) is more e ective than NSAIDs but is limited byndrogenic side effects and cost; now replaced by GnRH agonists',
                  'Metformin or clomifene (Clomid) alone or in combination in women with PCOS who desire ovulation and pregnancy',
                  ],

      },
      {
        header:'ISSUES FOR REFERRAL',
        content:['If an obvious cause for vaginal bleeding is not found in a pediatric patient, refer to a pediatric endocrinologist or pediatric/adolescent gynecology.'],
      },
      {
        header:'ADDITIONAL THERAPIES',
        content:[' Antiemetics if treating with high-dose estrogen or progesterone (2)[C]',
                  'Iron supplementation if anemia (usually iron de ciency) is identi ed'],
      },
      {
        header: 'SURGERY/OTHER PROCEDURES',
        content:[' Hysterectomy in cases of endometrial cancer, if medical therapy fails, or if other uterine pathology is found',
                  'Endometrial ablation, less expensive than hysterectomy and associated with high patient satisfaction; this is apermanent procedure and should be avoided in patients who desire continued fertility.',
                  'Uterine artery embolization if bleeding is refractory to medications or con rmed broids'],
      },
      {
        header:' ADMISSION, INPATIENT, AND NURSING CONSIDERATIONS',
        content:['Signi cant hemorrhage causing acute anemia with signs of hemodynamic instability; with acute bleeding,replace volume with crystalloid and blood, as necessary.',
                  'Pad counts and clot size can be helpful to determine and monitor amount of bleeding.',
                  'Discharge criteria: hemodynamic stability and control of vaginal bleeding'],
      },

    ],
  },

//   ONGOING CARE
  {
    heading: 'ONGOING CARE',
    img: '../../../static/images/4.jpg',
    firstHeader :"FisrtHeader",
    contentLIs: [
      {
        header:' FOLLOW-UP RECOMMENDATIONS',
        content:[' Once stable from acute management, recommend follow-up evaluation in 4 to 6 months for further evaluation.'],
      },
      {
        header:'Patient Monitoring',
        content:['Women treated with estrogen or OCPs should keep a menstrual diary to document bleeding patterns and their relation to therapy.'],
      },
      {
        header:' DIET',
        content:[' No restrictions, although a 5% reduction in weight can induce ovulation in anovulation caused by PCOS'],
      },
      {
        header:' PATIENT EDUCATION',
        content:['https://www.acog.org/Patients'],
      },
      {
        header:' COMPLICATIONS',
        content:['Iron deciency anemia, mood disorders'],
      },
      {
        header: ' PROGNOSIS',
        content: [' Varies with pathophysiologic process',
                  'Most anovulatory cycles can be treated with medical therapy and do not require surgical intervention'],
      },
      {
        header: ' REFERENCES',
        content: ['1. Wouk N, Helton M. Abnormal uterine bleeding in premenopausal women. Am Fam Physician.2019;99(7):435-443.',
                  '2. Committee on Practice Bulletins—Gynecology. Practice Bulletin No. 128: diagnosis of abnormal uterine bleeding in reproductive-aged women. Obstet Gynecol. 2012;120(1):197-206. Ovid Full Text',
                  '3. Khafaga A, Goldstein SR. Abnormal uterine bleeding. Obstet Gynecol Clin North Am. 2019;46(4):595605.',
                  '4. Marjoribanks J, Lethaby A, Farquhar C. Surgery versus medical therapy for heavy menstrual bleeding.Cochrane Database Syst Rev. 2016;2016(1):CD003855. Full Text',
                    ' 5. Lethaby A, Irvine G, Cameron I. Cyclical progestogens for heavy menstrual bleeding. Cochrane Database Syst Rev. 2008;(1):CD001016.'],
      },
    ],
  },

//  See Also
{
    heading: ' See Also',
    img: '../../../static/images/5.jpg',
    basicText :[' Dysmenorrhea; Menorrhagia (Heavy Menstrual Bleeding)','Algorithm: *Abnormal Uterine Bleeding*'],

  },

//Codes

{
    heading: 'Codes',
    img: '../../../static/images/6.jpg',
    firstHeader :"FisrtHeader",
    contentLIs: [
      {
        header:' ICD10',
        content:[' N93.9 Abnormal uterine and vaginal bleeding, unspecied.',
                  'N93.8 Other speci ed abnormal uterine and vaginal bleeding'],
      },
      {
        header: ' Clinical Pearls',
        content: [
          {
            header:' AUB is irregular uterine bleeding that occurs in the absence of pregnancy or pathology, making it adiagnosis of exclusion'
          },
          {
            header:' Anovulation accounts for 90% of AUB.'
          },
          {
            header: ' EMB should be performed in',
            content: ['Women aged >45 years with AUB',
                      'Women aged 18 to 45 years with AUB and a history of unopposed estrogen and failed medical management'],
          },
          
        ],
      },
      
      
    ],
  },
   
    ]


    const renderTextWithLinks = (text: string) => {
      const parts = text.split(/(\*.*?\*)/g); // Split by `*text*`
      return (
        <>
          {parts.map((part, index) =>
            part.startsWith('*') && part.endsWith('*') ? (
              <Link key={index} fontSize={15} underline='hover' href={`https://en.wikipedia.org/wiki/${part.slice(1, -1)}`} style={{ display: 'inline' }}>{part.slice(1, -1)}</Link>

            ) : (
              <span key={index} style={{ display: 'inline',fontSize:15 }}>{part}</span>
            )
          )}
        </>
      );
    };

const View = () => {
  const SubTitle = styled(Typography)(({}) => ({
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B82F6',
  }));

  const Hr = styled(Divider)(({}) => ({
    backgroundColor: '#3B82F6',
    width: '100%',
    color: '#3B82F6',
    padding: 1,
  }));

  const UnderTypo = styled(Typography)(({}) => ({
    fontSize: 15,
    color: '#babbbf',
    paddingLeft: 15,
    fontFamily: 'cursive',
  }));

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
      {Rough.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            maxHeight: 400,
            overflow: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            '&.Mui-expanded': {
                backgroundColor: '#2d2f33', 
              }, 
            
            
            
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
                position: 'sticky', // Keeps it fixed at the top of the Accordion
                top: 0,             // Sticks to the top of the Accordion container
                zIndex: 1,          // Ensures it stays above the content when scrolling
                backgroundColor: '#1b2337', // Optional: matches Accordion's background
                borderBottom: '1px solid #2d2f33',
                
                '&.Mui-expanded': {
      backgroundColor: '#2d2f33', 
    }, 
              }}
          >
            <Stack
              sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
            >
              <Avatar src={`${item.img}`} sx={{ mr: 2 }} />

              <Typography
                sx={{
                  color: '#EC4899',
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              >
                {item.heading}
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            {item.basicText && (
                item.basicText.map((i,idx)=>(<Typography key = {idx} fontSize={15}>{renderTextWithLinks(i)}</Typography>))
                
            )
                 }
            {item.contentLIs?.map((contentItem, idx) => (
              <Stack key={idx}>

                {(contentItem.header === 'ALERT' ||
                  contentItem.header === 'COMPLICATIONS') ? (
                  <Paper sx={{ bgcolor: '#f77979', p: 2, mt: 3 }}>
                    <Stack>
                      <SubTitle>{contentItem.header}</SubTitle>
                      <Hr />
                      <Stack gap={2} mt={2}>
                      {Array.isArray(contentItem.content) &&
                        contentItem.content?.map((subContent, i) => {
                          if (typeof subContent === 'object') {
                            return (
                              <Stack key={i} spacing={1}>
                                <Typography>{renderTextWithLinks(subContent.header)}</Typography>
                                {subContent.content &&
                                  subContent.content?.map((nested, j) => (
                                    <UnderTypo key={j}>{renderTextWithLinks(nested)}</UnderTypo>
                                  ))}
                              </Stack>
                            );
                          } else {
                            return (
                              <Typography key={i} fontSize={15}>
                                {renderTextWithLinks(subContent)}
                              </Typography>
                            );
                          }
                        })}
                    </Stack>
                    </Stack>
                  </Paper>
                ) : (
                  <Stack mt={3}>
                    <SubTitle>{contentItem.header}</SubTitle>
                    <Hr />
                    <Stack gap={2} mt={2}>
                      {Array.isArray(contentItem.content) &&
                        contentItem.content?.map((subContent, i) => {
                          if (typeof subContent === 'object') {
                            return (
                              <Stack key={i} spacing={1}>
                                <Typography>{renderTextWithLinks(subContent.header)}</Typography>
                                {subContent.content &&
                                  subContent.content?.map((nested, j) => (
                                    <UnderTypo key={j}>{renderTextWithLinks(nested)}</UnderTypo>
                                  ))}
                              </Stack>
                            );
                          } else {
                            return (
                              <Typography key={i} fontSize={15}>
                                {renderTextWithLinks(subContent)}
                              </Typography>
                            );
                          }
                        })}
                    </Stack>
                  </Stack>
                )}
              </Stack>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
    </Stack>
  );
};

export default View;
