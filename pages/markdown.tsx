/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


import React, { useState } from "react";

import {
  TextField,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Table,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TypeMarkdownProcessor } from './types';
// import { table } from "console";
// import axios from "axios";
import MedicalNoteReader from "./demo";



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



 
  
interface TypeMarkdownProcessor {  
  chapterTitle: string;  
  overview: string; 
  basicText:Array<{
    BasicText:string
  }>; 
  sideBar: Array<{  
   sidebarHeader: string;  
   sidebarContent?: Array<{  
    chunkTitle: string;  
    chunkDescription: Array<{  
      AccordinHeading: string;  
      AccordinContent: string[];  
      tables: Array<{  
       title: string;  
       headers: string[];  
       rows: string[][];  
      }>;  
    }>;  
   }>;  
  }>;  
}  
  








// React Component
const App: React.FC = () => {
  const [markdownInput, setMarkdownInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState<any>(null);

  const handleProcessMarkdown = () => {

    // const response =  axios.get('https://nucleux-puce.vercel.app/api/layerf/')
    // const data = response.data
    // const ans = data[0].layer_f_note
    const parsedJSON = processMarkdown(markdownInput);
    setJsonOutput(parsedJSON);

  };

  if(jsonOutput){
    return <MedicalNoteReader parsedJSON={jsonOutput}/>
  }
  return (
    (<Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Markdown to JSON Processor
      </Typography>
      <TextField
        label="Paste Markdown Content"
        multiline
        rows={10}
        fullWidth
        variant="outlined"
        value={markdownInput}
        onChange={(e) => setMarkdownInput(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleProcessMarkdown}>
        Convert to JSON
      </Button>
      <Box sx={{ mt: 4 }}>
        {jsonOutput && (
          <Box>
            <Typography variant="h5" gutterBottom>
              JSON Output Structure
            </Typography>
            {jsonOutput.sideBar.map((part: any, index: number) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{part.sidebarHeader}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {part.sidebarContent.map((chunk: any, chunkIndex: number) => (
                    <Box key={chunkIndex} sx={{ mb: 2 }}>
                      <Typography variant="h6">{chunk.chunkTitle}</Typography>
                      {chunk.chunkDescription.map((section: any, sectionIndex: number) => (
                        <Box key={sectionIndex} sx={{ mt: 2 }}>
                          <Typography variant="subtitle1">{section.AccordinHeading}</Typography>
                          <Box>
                            {section.AccordinContent.map((content: string, contentIndex: number) => (
                              <Typography key={contentIndex}>- {content}</Typography>
                            ))}
                          </Box>
                          {section.tables.map((table: any, tableIndex: number) => (
                            <Box key={tableIndex} sx={{ mt: 2 }}>
                              <Typography variant="subtitle2">Table: {table.title}</Typography>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    {table.headers.map((header: string, headerIndex: number) => (
                                      <TableCell key={headerIndex}>{header}</TableCell>
                                    ))}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {table.rows.map((row: string[], rowIndex: number) => (
                                    <TableRow key={rowIndex}>
                                      {row.map((cell: string, cellIndex: number) => (
                                        <TableCell key={cellIndex}>{cell}</TableCell>
                                      ))}
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Box>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
      </Box>
    </Box>)
  );
};


export default App