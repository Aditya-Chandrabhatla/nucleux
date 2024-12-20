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
import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import { Paper, Stack } from '@mui/material';



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
    <React.Fragment>
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
        <Stack display={'flex'} flexDirection={{md:"row"}} justifyContent={'space-between'}>

            <Stack maxHeight={'100vh'}  sx={{overflowY:"hidden",backgroundColor:"transparent",display:"flex",
                justifyContent:"center",px:{md:6}}} width={"100%"}>
                <img src={image} width={'100%'} height={"100%"} alt='image'/>
             
            </Stack>

            <Stack  display={`${openCaption?'flex':'none'}`} >
                <Paper sx={{maxWidth:400,height:"100vh",p:4}}  > 
                    <Typography fontSize={18}>{heading}</Typography>
                    <Typography fontSize={15} mt={3}>
                        {decsription}
                    </Typography>
                </Paper>


            </Stack>


        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
