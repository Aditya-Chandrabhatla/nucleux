/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Add, KeyboardArrowRightOutlined, RestartAlt } from '@mui/icons-material';
import { Paper, Stack } from '@mui/material';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Minus } from 'lucide-react';



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({image,heading,decsription}) {
  const [open, setOpen] = React.useState(false);
  const [openCaption,setOpenCaption] = React.useState(true);

  
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Button variant="text" onClick={handleClickOpen}>
        <img src={image} alt='images' width={100}/>
      </Button>
      <Dialog
        fullScreen
        open={open}

        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>

          <Stack display={"flex"} flexDirection={"row"} justifyContent={"space-between"} p={2}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          
            <Button autoFocus variant='contained'  color="inherit" onClick={()=>(openCaption?setOpenCaption(false):setOpenCaption(true))}>
              <KeyboardArrowRightOutlined sx={{mr:2}}/> view caption
            </Button>
          </Stack>
        </AppBar>
        <Stack display={'flex'} overflow={{lg:"hidden"}} flexDirection={{lg:"row"}} justifyContent={'space-between'}>

            {/* <Stack maxHeight={'100%'}  sx={{overflowY:"hidden",backgroundColor:"transparent",display:"flex",
                justifyContent:"center",px:{md:`${openCaption?'6%' :'10%'}`}}} width={"100%"}>
                <img src={image} style={{maxHeight:'100%',maxWidth:"100%"}} alt='image'/>
             
            </Stack> */}
                    <Stack maxHeight={'100%'}  sx={{overflowY:"hidden",backgroundColor:"transparent",display:"flex",
                    flexDirection:"row",
                justifyContent:"center",alignItems:"center",px:{lg:`${openCaption?'6%' :'15%'}`}}} width={"100%"}>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent >
              <img
                src={image}
                alt="Zoomable"
                style={{
                  maxWidth: `100%`
                }}
              />
            </TransformComponent>

            {/* Floating Paper for Zoom Controls */}
            <Paper
              sx={{
                position: "absolute",
                bottom: 30, // Position at the bottom
                left:`${openCaption ?'40%':'50%'}`, // Center horizontally
                transform: "translateX(-50%)", // Adjust for centering
                display: {lg:"flex",xs:'none'},
                gap: 2,
                padding: 1,
                zIndex: 10, // Ensure it floats above the image
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
                boxShadow: 3,
              }}
            >
              <Button
                variant="text"
                onClick={() => zoomIn()}
              >
                <Add />
              </Button>
              <Button
                variant="text"
                onClick={() => zoomOut()}
              >
                <Minus />
              </Button>
              <Button
                variant="text"
                onClick={() => resetTransform()}
              >
                <RestartAlt />
              </Button>
            </Paper>
          </>
        )}
      </TransformWrapper>
    </Stack>

            <Stack  display={`${openCaption?'flex':'none'}`} >
                <Paper sx={{maxWidth:{lg:400},height:"100%",p:4,overflowY:"auto"}}  > 
                    <Typography fontSize={18}>{heading}</Typography>
                    <Typography fontSize={15} mt={3}>
                        {decsription}
                    </Typography>
                </Paper>


            </Stack>


        </Stack>
      </Dialog>
    </Stack>
  );
}
