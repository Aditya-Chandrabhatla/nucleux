/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,

  Drawer,

  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  useTheme,
  Paper,
  LinearProgress,
  Divider,
  Stack,

  Link,
  IconButton,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Skeleton,
} from '@mui/material';

import { AddCircleOutline, ArrowBack, AudioFile, ExpandLess, ExpandMore, Highlight, MenuBook, Psychology, QuestionAnswer, RemoveCircleOutline, SyncAlt } from '@mui/icons-material';
import { Book, Share, Star } from 'lucide-react';
import FullScreenDialog from '@/src/components/Dialog';
import axios from 'axios';
// import rough from '@/utils/demo';

const MedicalNoteReader = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('');
  const [activeChunk, setActiveChunk] = useState('');
  const [sections, setSections] = useState([]);
  const [openChunks, setOpenChunks] = useState({});
  const [selectedChunk, setSelectedChunk] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [basicTextOverview,setBasicTextOverview] = useState("")
  const [loading,setLoading] = useState(true)



  const cleanText = (text: string): string => {  
    return text  
      .replace(/[*>_\-#]/g, '')  
      .replace(/\s+/g, ' ')  
      .trim();  
  };  
  
  const convertMarkdownToJSON = (markdown: string): TypeMarkdownProcessor => {  
    const lines = markdown.split('\n');  
    const currentStructure: TypeMarkdownProcessor = {  
      chapterTitle: '',  
      overview: '', 
      basicText:[], 
      sideBar: []  
    };  
  
    let currentPart: any = null;  
    let currentPartText: any = null; 
    let currentChunk: any = null;  
    let currentAccordion: any = null;  
    let currentTable: any = null;  
    let isInTable = false;  
  
    for (let i = 0; i < lines.length; i++) {  
      const line = lines[i];  
      const trimmedLine = line.trim();  
  
      // Detect chapter title
      if (trimmedLine.match(/^#\s/i)) {  
        currentPart = {  
          sidebarHeader: cleanText(trimmedLine),  
          sidebarContent: []  
        };  
        currentStructure.sideBar.push(currentPart);  
      }  
  
      else if (trimmedLine.match(/^#####\s+/)) {  
        currentPartText = {  
          BasicText: cleanText(trimmedLine),   
        };  
        currentStructure.basicText.push(currentPartText); 
   
      }  
      // Detect chunk title
      else if (trimmedLine.match(/^##\s+/)) {  
        currentChunk = {  
          chunkTitle: cleanText(trimmedLine),  
          chunkDescription: []  
        };  
        if (currentPart) {  
          currentPart.sidebarContent.push(currentChunk);  
        }  
      }  
      // Detect accordion
      else if (trimmedLine.match(/^###\s+/)) {  
        currentAccordion = {  
          AccordinHeading: cleanText(trimmedLine),  
          AccordinContent: [],  
          tables: [],  
          conceptImage: '',  
          imageHeading: '',  
          imageDescription: ''  
        };  
        if (currentChunk) {  
          currentChunk.chunkDescription.push(currentAccordion);  
        }  
      } 
  
    
      // Detect image content
      else if (trimmedLine.match(/!\[.*?\]\(.*?\)/)) {  
        const conceptImage = 'https://media-us.amboss.com/media/thumbs/big_5be0771c63768.jpg';  
        const imageHeading = 'Cranial anatomical terms of location and direction';  
        const imageDescription = 'In the human skull, anatomical terms of location and direction differ from those used for the torso with respect to their corresponding anatomical landmarks.';  
  
        if (currentAccordion) {  
          currentAccordion.conceptImage = conceptImage;  
          currentAccordion.imageHeading = imageHeading;  
          currentAccordion.imageDescription = imageDescription;  
        }  
      }  
      // Detect table rows
      else if (trimmedLine.startsWith('|')) {  
        if (!isInTable) {  
          isInTable = true;  
          currentTable = {  
            title: currentAccordion?.AccordinHeading || 'Table',  
            headers: trimmedLine  
              .split('|')  
              .filter(cell => cell.trim())  
              .map(cell => cleanText(cell)),  
            rows: []  
          };  
        } else if (!trimmedLine.includes('---')) {  
          const rowCells = trimmedLine  
            .split('|')  
            .filter(cell => cell.trim())  
            .map(cell => cleanText(cell));  
          if (rowCells.length > 0 && currentTable) {  
            currentTable.rows.push(rowCells);  
          }  
        }  
      }  
      // End of table
      else if (isInTable && trimmedLine === '') {  
        isInTable = false;  
        if (currentAccordion && currentTable && currentTable.rows.length > 0) {  
          currentAccordion.tables.push(currentTable);  
        }  
        currentTable = null;  
      }  
      // Generic content
      else if (trimmedLine !== '' && !isInTable && currentAccordion) {  
        const content = cleanText(trimmedLine);  
        if (content) {  
          currentAccordion.AccordinContent.push(content);  
        }  
      }  
    }  
  
    return currentStructure;  
  };  
  
  const processMarkdown = (markdown: string): TypeMarkdownProcessor => {  
    return convertMarkdownToJSON(markdown);  
  };


  
  useEffect(() => {

    const fetching= async ()=>{
      try{
      const response = await  axios.get('https://nucleux-puce.vercel.app/api/layerf/')
    const data = response.data
    if (response.status === 200){
      setLoading(false)
      const ansData = data[4].layer_f_note
      const parsedJSON = processMarkdown(ansData);
      const rough = [(parsedJSON)]
      const sidebarSections = rough.flatMap((item) => item.sideBar || []);
      setSections(sidebarSections);
      const ans = rough.flatMap((i)=>(i?.basicText[0]?.BasicText))
      setBasicTextOverview(ans)
    }

      }
      catch(error){
        console.error(error as Error.message)
        
      }finally{
        setLoading(false)
      }
    }
    fetching()
     
  }, []);


  

  const toggleChunk = (index) => {
    setOpenChunks((prev) => ({ ...prev, [index]: !prev[index] }));
  };
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


  const contentCheck = (text) =>{
      const parts = text?.split(':')
      if (parts.length !==0){
          const subContent = parts[1]?.split(';')
      return(
        <>
        {text.includes('http') ? (
         
          <a href={`${text}`} style={{color:'blue'}}>{text}</a>
        ) : (
          <>
            <p>{parts[0]}</p>
            {subContent?.map((i, index) => (
              <ul key={index} style={{ marginTop: 0 }}>
                {i.length > 0 && (
                  <li
                    style={{
                      fontSize: 15,
                      color: '#babbbf',
                      paddingLeft: 15,
                      fontFamily: 'cursive',
                    }}
                  >
                    {renderTextWithLinks(i)}
                  </li>
                )}
              </ul>
            ))}
          </>
        )}
      </>
      
      )
  }
  }
  // const SubTitle = styled(Typography)(({}) => ({
  //   fontWeight: 'bold',
  //   fontSize: 20,
  //   color: '#3B82F6',
  // }));

  // const Hr = styled(Divider)(({}) => ({
  //   backgroundColor: '#3B82F6',
  //   width: '100%',
  //   color: '#3B82F6',
  //   padding: 1,
  // }));
  const renderChunkContent = (chunk) => (
    <Paper elevation={3} sx={{  maxWidth: '100%', }}>
  {chunk.chunkDescription.map((desc, index) => (
    <>
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
        expandIcon={<ExpandMore />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: '#1b2337',
          borderBottom: '1px solid #2d2f33',
          '&.Mui-expanded': {
            backgroundColor: '#2d2f33',
          },
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: '#EC4899',
              fontFamily: 'serif',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            {desc?.AccordinHeading}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        
        {desc.AccordinContent?.map((content, idx) => (

          <Stack m={0} key={idx}>
            {contentCheck(content)}
          </Stack>
        ))}
        {desc.conceptImage && (
          <Stack
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'start'}
            gap={2}
            mt={2}
          >
            <FullScreenDialog
              image={desc?.conceptImage}
              heading={desc?.imageHeading}
              decsription={desc?.imageDescription}
            />
          </Stack>
        )}
        {desc.tables &&
          desc.tables.map((table, tableIndex) => (
            <TableContainer
              key={tableIndex}
              component={Paper}
              elevation={3}
              sx={{ mt: 2, maxWidth: '100%' }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  color: '#EC4899',
                  my: 1,
                  textAlign:"center"
                }}
              >
                {table.title}
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    {table.headers.map((header, headerIndex) => (
                      <TableCell
                        key={headerIndex}
                        sx={{
                          fontWeight: 'bold',
                          backgroundColor: '#1b2337',
                          color: 'white',
                        }}
                      >
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table.rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ))}
      </AccordionDetails>
    </Accordion>
    </>
  ))}
</Paper>

  );

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <Box sx={{ display: 'flex', flex: 1,'&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none'  }}>
        {/* Left Sidebar */}
        
 <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              bgcolor: 'background.paper',
              '&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none' 
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Button startIcon={<ArrowBack />} sx={{ mb: 3, color: 'text.secondary' }} href="/home">
              Back to Library
            </Button>

            <Typography
              variant="h5"
              sx={{
                mb: 3,
                background: theme.palette.primary.main,
                backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
              }}
            >
              Achalasia
            </Typography>

            {loading ?(
              <Stack gap={1}>
          <Skeleton variant="rectangular"  width={"100%"} height={60} />
          <Skeleton variant="rectangular"  width={"100%"} height={60} />
          <Skeleton variant="rectangular"  width={"100%"} height={60} />
          <Skeleton variant="rectangular"  width={"100%"} height={60} />
          <Skeleton variant="rectangular"  width={"100%"} height={60} />
          </Stack>
        ) : (<List component="nav">
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              <ListItemButton
                selected={activeSection === section?.sidebarHeader.toLowerCase()}
                onClick={() => setActiveSection(section?.sidebarHeader.toLowerCase(),toggleChunk(index))}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    bgcolor: 'action.selected',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'action.selected' },
                  },
                }}
              >
                <ListItemText primary={section?.sidebarHeader} />
                {section.sidebarContent ? (
                  openChunks[index] ? (
                    <ExpandLess onClick={() => toggleChunk(index)} />
                  ) : (
                    <ExpandMore onClick={() => toggleChunk(index)} />
                  )
                ) : null}
              </ListItemButton>
              {section.sidebarContent && (
                <Collapse in={openChunks[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {section.sidebarContent.map((chunk, chunkIndex) => (
                      <ListItemButton
                        key={chunkIndex}
                        sx={{ pl: 4 }}
                        selected={activeChunk === chunk?.chunkTitle?.toLowerCase()}
                        onClick={() => setActiveChunk(chunk?.chunkTitle?.toLowerCase(),setSelectedChunk(chunk))}
                        
                      >
                        <ListItemText primary={chunk?.chunkTitle} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>)}
            
          </Box>
        </Drawer>
       

        <Divider variant="fullWidth" flexItem orientation="vertical" />

        {/* Main Content Area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' ,}}>
        <Paper 
            elevation={0} 
            sx={{ 
              p: 2,
              borderBottom: 1,
              borderColor: 'divider'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton size="small">
                    <RemoveCircleOutline />
                  </IconButton>
                  <Typography>Text Size</Typography>
                  <IconButton size="small">
                    <AddCircleOutline />
                  </IconButton>
                </Box>
                <Divider orientation="vertical" flexItem />
                <IconButton>
                  <Highlight />
                </IconButton>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<Star />}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Share />}
                >
                  Share
                </Button>
              </Box>
            </Box>
          </Paper>
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab icon={<MenuBook />} label="Read" />
            <Tab icon={<AudioFile />} label="Listen" />
            <Tab icon={<Psychology />} label="Practice" />
            <Tab icon={<QuestionAnswer />} label="Discuss" />
          </Tabs>

          <Box sx={{ m: 4,overflowY:"scroll",'&::-webkit-scrollbar': { display: 'none' },
        '-ms-overflow-style': 'none', }}>
          
          {selectedChunk ? (
            <>
            <Stack mb={2}>
                <Typography fontSize={15}>{basicTextOverview}</Typography>

            </Stack>
            {renderChunkContent(selectedChunk)}
            </>
          ) : (
            <Typography variant="h4" color="text.secondary" 
            textTransform={"full-size-kana"} fontWeight={"bold"} textAlign={"center"}>
              Select a part to view its content
            </Typography>
          )}
          </Box>
        </Box>
      </Box>

      {/* Bottom Navigation Bar */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderTop: 1,
          borderColor: 'divider',
          ml: '15%',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button startIcon={<Book />}>Related Topics</Button>
            <Button startIcon={<Psychology />}>Flash Cards</Button>
            <Button startIcon={<SyncAlt />}>Practice MCQs</Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Reading Progress
            </Typography>
            <Box sx={{ width: 200 }}>
              <LinearProgress variant="determinate" value={45} />
            </Box>
            <Typography variant="body2" color="text.secondary">
              45%
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default MedicalNoteReader;
