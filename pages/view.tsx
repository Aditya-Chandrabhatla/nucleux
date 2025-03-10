/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Divider,
  Link,
  Paper,
  Skeleton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import FullScreenDialog from '@/src/components/Dialog';

import axios from 'axios';

import { text } from 'stream/consumers';





  const renderTextWithLinks = (text: string) => {
      const parts = text?.split(/(\*.*?\*)/g); 
      return (
        <>
          {parts?.map((part, index) =>
            part?.startsWith('*') && part.endsWith('*') ? (
              <Link key={index} fontSize={15} underline='hover' href={`https://en.wikipedia.org/wiki/${part.slice(1, -1)}`} style={{ display: 'inline' }}>{part.slice(1, -1)}</Link>

            ) : (
              <span key={index} style={{ display: 'inline',fontSize:15 }}>{part}</span>
            )
          )}
        </>
      );
    };

    const headCheck = (text)=>{
        const parts = text?.split(':')
        return(
            <>
            <span>{parts[1]}</span>
            </>
        )
    }
    const contentCheck = (text) =>{
        const parts = text?.split(':')
        if (parts.length !==0){
            const subContent = parts[1]?.split(';')
        return(
            <>
            <p>{parts[0]}</p>
            {subContent?.map((i,index)=>(
            <ul key = {index}  style={{marginTop:0}}>
                    <li style={{ fontSize: 15,
                color: '#babbbf',
                paddingLeft: 15,
                fontFamily: 'cursive',}}>{renderTextWithLinks(i)}</li>
                </ul>
            ))}
            </>
        )
    }
    }

const View = () => {

  const querying = useRouter()
  const subsubtopic = querying.query
  const [Rough,setRough] = useState([])
  const [waiting,setWaiting] = useState(true)



  useEffect(()=>{
    const fetching = async ()=>{

      try{
        
        const response = await axios.get('https://nucleux-puce.vercel.app/api/layerf/')
        const data = response.data
        if(response.status === 200){
          setWaiting(false)
        setRough(data[5].layer_f_note)
        // console.log(data[5].layer_f_note)
        }

      }catch(e){

        console.log(`${e}`)
        setWaiting(false)
      }

    }
    fetching()
  },[])
  

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



  return (
        <Stack p={3} >
          <Stack display={"flex"} flexDirection={"row"} justifyContent={"start"}>
          <Button href='/home' sx={{border:1,mb:2}} >Back to library</Button>
          </Stack>
        
        <Stack display={'flex'} 
        justifyContent={{md:'space-between',xs:"flex-start"}}
        flexDirection={{md:'row',xs:'column'}}
        alignItems={{md:"center",xs:'flex-start'}}>
        <Typography fontWeight={"bold"} fontSize={28} >
        {subsubtopic.w}
        </Typography>
    
        <Typography fontSize={13}>
        Last edited: Oct 01, 2024
        </Typography>
        </Stack>
    <Stack mt={4} display={"flex"} 
            flexDirection={"column"}
            justifyContent={"center"} mx={{md:'10%'}}>
     {waiting  &&
      <Stack >
        <Skeleton variant="rectangular" width={'100%'} height={60} />
        <Divider orientation='horizontal' flexItem />
                <Skeleton variant="rectangular" width={'100%'} height={60} />
                <Divider orientation='horizontal' flexItem />
        <Skeleton variant="rectangular" width={'100%'} height={60} />
        <Divider orientation='horizontal' flexItem />
                <Skeleton variant="rectangular" width={'100%'} height={60} />
                <Divider orientation='horizontal' flexItem />
        <Skeleton variant="rectangular" width={'100%'} height={60} />
        </Stack>
     } 

{Rough?.map((i,index)=>(

    <>
   <Stack key={index} direction={"column"} justifyContent={"center"} mb={4} gap={2}>
    <Typography  fontSize={20}>{i.overview}</Typography>
   </Stack>
   {(i.chunks).map((i,index)=>(
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
       sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column',gap:2 }}
     >
       <Typography
         sx={{
           color: '#EC4899',
           fontFamily: 'serif',
           fontWeight: 'bold',
           fontSize: 20,
         }}
       >
         {i.chunkTitle}
       </Typography>
      
     </Stack>
   </AccordionSummary>
   <AccordionDetails>
     
     {i.sections?.map((contentItem, idx) => (
       <Stack key={idx}>

    
           <Stack mt={3}>
             <SubTitle>{contentItem.sectionTitle}</SubTitle>
             <Hr />
             <Stack>
               {(contentItem.details)?.map((i,index)=>(
                <Stack  m={0} key = {index}>{contentCheck(i)} </Stack>
               ))}
             </Stack>
             {contentItem.conceptImage&&<Stack display={"flex"} flexDirection={"row"} justifyContent={"start"} gap={2} mt={2}>
         <FullScreenDialog image = {contentItem.conceptImage}  heading={contentItem.imageHeading} decsription={contentItem.imageDescription} />
         </Stack>}
           </Stack>

         
       </Stack>
     ))}
   </AccordionDetails>
 </Accordion>
   ))}

   </>

   
))}
     
      
    </Stack>
    </Stack>
  );
};

export default View;
