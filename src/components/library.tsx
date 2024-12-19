/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState, useEffect } from 'react';  
import {  
  Box,  
  Button,  
  InputAdornment,  
  List,  
  ListItemButton,  
  ListItemIcon,  
  ListItemText,  
  TextField,  
  Typography,  
  styled,  
  useTheme,  
  ThemeProvider,  
  createTheme,  
  CssBaseline,  
  Collapse,  
  Paper,  
  Stack,  
  Skeleton,
  Divider,  
} from '@mui/material';  
import {  
  ChevronRight,  
  Search,    
  Folder,  
  AlertCircle,  
  PlusCircle,
  Clock,
  Star,
  File,  
} from 'lucide-react';  
import axios from 'axios';  
import CustomSeparator from './BreadCrumb';
import { useRouter } from 'next/router';
  
const darkTheme = createTheme({  
  palette: {  
   mode: 'dark',  
   primary: {  
    main: '#ec4899',  
   },  
   secondary: {  
    main: '#f97316',  
   },  
   background: {  
    default: '#111827',  
    paper: '#111827',  
   },  
  },  
  components: {  
   MuiButton: {  
    styleOverrides: {  
      root: {  
       textTransform: 'none',  
      },  
    },  
   },  
  },  
});  
  
const GradientText = styled(Typography)(({ /* props */ }) => ({  
  background: 'linear-gradient(45deg, #ec4899, #f97316, #3b82f6)',  
  WebkitBackgroundClip: 'text',  
  WebkitTextFillColor: 'transparent',  
  backgroundClip: 'text',  
}));  
  
const NavMenuItem = ({ icon: Icon, label, isActive = false, onClick, hasSubitems = false }) => {  
  const theme = useTheme();  
  
  return (  
   <ListItemButton  
    onClick={onClick}  
    sx={{  
      borderRadius: 2,  
      mb: 1,  
      color: isActive ? 'primary.main' : 'text.secondary',  
      '&:hover': {  
       backgroundColor: 'action.hover',  
      },  
    }}  
   >  
    <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>  
      <Icon size={20} />  
    </ListItemIcon>  
    <ListItemText primary={label} />  
    {hasSubitems && (  
      <ChevronRight  
       size={16}  
       style={{  
        transform: isActive ? 'rotate(90deg)' : 'none',  
        transition: theme.transitions.create('transform'),  
       }}  
      />  
    )}  
   </ListItemButton>  
  );  
};  
  
const CollapsibleLibrary = () => {  
  const [selectedSection, setSelectedSection] = useState(null);  
  const [selectedSubsection, setSelectedSubsection] = useState(null);  
  const [selectedTopic, setSelectedTopic] = useState(null);  
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);  
  const [selectedSubsubtopic, setSelectedSubsubtopic] = useState(null);  
  const [searchQuery, setSearchQuery] = useState('');  
  const [librarySections, setLibrarySections] = useState({});  
  const [loading, setLoading] = useState(true); 
  const navigate = useRouter() 
  
  useEffect(() => {  
   const fetchLibrarySections = async () => {  
    try {  
      const response = await axios.get('https://nucleux-puce.vercel.app/api/layera/');  
      const data = response.data;  
      const transformedData = transformData(data);  
      setLibrarySections(transformedData);  
      setLoading(false);  
    } catch (error) {  
      console.error(error.message);  
      setLoading(false);  
    }  
   };  
  
   fetchLibrarySections();  
  }, []);  
  
  function transformData(data) {  
   const transformed = {};  
  
   data.forEach((layerA) => {  
    const layerAName = layerA.layer_a_name;  
    transformed[layerAName] = {};  
  
    layerA.layer_bs.forEach((layerB) => {  
      const layerBName = layerB.layer_b_name;  
      transformed[layerAName][layerBName] = {};  
  
      layerB.layer_cs.forEach((layerC) => {  
       const layerCName = layerC.layer_c_name;  
       transformed[layerAName][layerBName][layerCName] = {};  
  
       layerC.layer_ds.forEach((layerD) => {  
        const layerDName = layerD.layer_d_name;  
  
        transformed[layerAName][layerBName][layerCName][layerDName] =  
          layerD.layer_es && layerD.layer_es.length > 0  
           ? layerD.layer_es.map((layerE) => layerE.layer_e_name || "Unknown")  
           : null;  
       });  
      });  
    });  
   });  
  
   return transformed;  
  }  
  
  const handleSectionClick = (section) => {  
   setSelectedSection(section === selectedSection ? null : section);  
   setSelectedSubsection(null);  
   setSelectedTopic(null);  
   setSelectedSubtopic(null);  
   setSelectedSubsubtopic(null);  
  };  
  
  const handleSubsectionClick = (subsection) => {  
   setSelectedSubsection(subsection === selectedSubsection ? null : subsection);  
   setSelectedTopic(null);  
   setSelectedSubtopic(null);  
   setSelectedSubsubtopic(null);  
  };  
  
  const handleTopicClick = (topic) => {  
   setSelectedTopic(topic === selectedTopic ? null : topic);  
   setSelectedSubtopic(null);  
   setSelectedSubsubtopic(null);  
  };  
  
  const handleSubtopicClick = (subtopic) => {  
   setSelectedSubtopic(subtopic === selectedSubtopic ? null : subtopic);  
   setSelectedSubsubtopic(null);  
  };  

  console.log(selectedSection,selectedSubsection,selectedSubsubtopic,selectedSubtopic,selectedTopic)
  
  return (  
   <ThemeProvider theme={darkTheme}>  
    <CssBaseline />  
  
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>  
      <Paper sx={{ p: 2, bgcolor: "#111827" }}>  
       <Stack direction="row" spacing={2}>  
        <TextField  
          fullWidth  
          placeholder="Search library..."  
          value={searchQuery}  
          onChange={(e) => setSearchQuery(e.target.value)}  
          InputProps={{  
           startAdornment: (  
            <InputAdornment position="start">  
              <Search size={20} />  
            </InputAdornment>  
           ),  
          }}  
        />  
        <Button  
          variant="contained"  
          startIcon={<PlusCircle size={20} />}  
          sx={{  
           background: 'linear-gradient(45deg, #ec4899, #f97316, #3b82f6)',  
           color: 'black',  
           '&:hover': {  
            opacity: 0.9,  
           },  
          }}  
        >  
          New Note  
        </Button>  
       </Stack>  
      </Paper>  
  
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>  
       <Paper sx={{ width: 240, overflow: 'auto','&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none' }}>  
        {loading ? (  
          <List>  
           {[1, 2, 3, 4, 5].map((index) => (  
            <ListItemButton key={index}>  
              <ListItemIcon>  
               <Skeleton variant="circular" width={20} height={20} />  
              </ListItemIcon>  
              <ListItemText primary={<Skeleton width={100} />} />  
            </ListItemButton>  
           ))}  
          </List>  
        ) : (  
          <List>  
           {Object.keys(librarySections).map((section) => (  
            <React.Fragment key={section}>  
              <NavMenuItem  
               icon={Folder}  
               label={section}  
               isActive={selectedSection === section}  
               onClick={() => handleSectionClick(section)}  
               hasSubitems={true}  
              />  
              <Collapse in={selectedSection === section}>  
               <List sx={{ pl: 2 }}>  
                {Object.keys(librarySections[section]).map((subsection) => (  
                  <NavMenuItem  
                   key={subsection}  
                   icon={Folder}  
                   label={subsection}  
                   isActive={selectedSubsection === subsection}  
                   onClick={() => handleSubsectionClick(subsection)}  
                   hasSubitems={true}  
                  />  
                ))}  
               </List>  
              </Collapse>  
            </React.Fragment>  
           ))}  
          </List>  
        )}  
       </Paper>  
       <Divider orientation="vertical" flexItem />
  
       {selectedSection && selectedSubsection && (  
        <Paper sx={{ width: 240, overflow: 'auto','&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none' }}>  
          {loading ? (  
           <List>  
            {[1, 2, 3, 4, 5].map((index) => (  
              <ListItemButton key={index}>  
               <ListItemIcon>  
                <Skeleton variant="circular" width={20} height={20} />  
               </ListItemIcon>  
               <ListItemText primary={<Skeleton width={100} />} />  
              </ListItemButton>  
            ))}  
           </List>  
          ) : (  
           <List>  
            {Object.keys(librarySections[selectedSection][selectedSubsection]).map((topic) => (  
              <React.Fragment key={topic}>  
               <NavMenuItem  
                icon={Folder}  
                label={topic}  
                isActive={selectedTopic === topic}  
                onClick={() => handleTopicClick(topic)}  
                hasSubitems={librarySections[selectedSection][selectedSubsection][topic] && typeof librarySections[selectedSection][selectedSubsection][topic] === 'object'}  
               />  
               <Collapse in={selectedTopic === topic}>  
                <List sx={{ pl: 2 }}>  
                  {librarySections[selectedSection][selectedSubsection][topic] && typeof librarySections[selectedSection][selectedSubsection][topic] === 'object' && Object.keys(librarySections[selectedSection][selectedSubsection][topic]).map((subtopic) => (  
                    
                    <ListItemButton  
                    key ={subtopic} 
                      icon={File}  
                      label={subtopic}  
                      selected={selectedSubtopic === subtopic}  
                      onClick={() => handleSubtopicClick(subtopic)}

                    >
                      <ListItemText primary={subtopic} /> 
                    </ListItemButton>  
                    
                  ))}  
                </List>  
               </Collapse>  
              </React.Fragment>  
            ))}  
           </List>  
          )}  
        </Paper>  
       )}  
  
       <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>  
        { selectedSubtopic ? (  
          <Box>  
            <CustomSeparator selectedSection={selectedSection} selectedSubsection={selectedSubsection} selectedTopic={selectedTopic} 
            selectedSubtopic={selectedSubtopic}  />

           <GradientText variant="h4" gutterBottom fontWeight="bold" mt={5}  >  
            {selectedSubtopic}  
           </GradientText>  
           <Stack direction="row" spacing={3} sx={{ mb: 3 }}>  
            <Stack direction="row" alignItems="center" spacing={1}>  
              <Clock size={16} />  
              <Typography variant="body2" color="text.secondary">  
               15 min read  
              </Typography>  
            </Stack>  
            <Stack direction="row" alignItems="center" spacing={1}>  
              <Star size={16} />  
              <Typography variant="body2" color="text.secondary">  
               Save for later  
              </Typography>  
            </Stack>  
           </Stack> 

                      <Stack display={'flex'} flexDirection={'row'} gap={4}>
           {librarySections[selectedSection][selectedSubsection][selectedTopic][selectedSubtopic].map((subsubtopic) => (
              <Button key = {subsubtopic} onClick={()=>{navigate.push(`/view/?w=${subsubtopic}`)}}   sx={{border:1}}>{subsubtopic}</Button>
            ))}
           </Stack> 
           <Typography color="text.secondary" mt={3}>  
            Select a topic to start learning.  
           </Typography>  


          </Box>  
        ) : (  
          <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>  
           <Stack alignItems="center" spacing={2}>  
            <AlertCircle size={48} color={darkTheme.palette.text.disabled} />  
            <Typography color="text.secondary">  
              Select a topic to start learning  
            </Typography>  
           </Stack>  
          </Box>  
        ) } 
       </Box>  
      </Box>  
    </Box>  
   </ThemeProvider>  
  );  
};  
  
export default CollapsibleLibrary;
