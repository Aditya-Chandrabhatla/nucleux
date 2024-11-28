/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Drawer,
  IconButton,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import {
  ArrowBack,
  BookmarkBorder,
  Psychology,
  QuestionAnswer,
  AudioFile,
  Star,
  Share,
  RemoveCircleOutline,
  AddCircleOutline,
  Highlight,
  VolumeUp,
  AccessTime,
  CheckCircle,
  Close,
  MenuBook,
  Book,
  SyncAlt
} from '@mui/icons-material';

// Term definitions database
const medicalTerms = {
  'achalasia': {
    term: 'Achalasia',
    definition: 'A disorder in which the esophagus (food pipe) loses its ability to move food down and the muscle at the lower end fails to relax properly to let food enter the stomach.',
    related: ['dysphagia', 'LES']
  },
  'LES': {
    term: 'Lower Esophageal Sphincter (LES)',
    definition: 'A ring of muscle fibers that functions as a valve between the esophagus and stomach.',
    related: ['achalasia', 'peristalsis']
  },
  'dysphagia': {
    term: 'Dysphagia',
    definition: 'Difficulty or discomfort in swallowing.',
    related: ['achalasia']
  },
  'peristalsis': {
    term: 'Peristalsis',
    definition: 'The coordinated contraction of muscles that propels food through the digestive tract.',
    related: ['LES']
  },
  'manometry': {
    term: 'Manometry',
    definition: 'A test that measures pressure and muscle contractions in the esophagus.',
    related: ['achalasia', 'LES']
  }
};

// Term Preview Popup Component
const TermPreview = ({ term, anchorEl, onClose }) => {
  const theme = useTheme();
  
  if(!term){
    return null
  }
  
  return (
    <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom-start" style={{ zIndex: 1300 }}>
      <Paper 
        sx={{ 
          width: 300, 
          bgcolor: 'background.paper',
          boxShadow: theme.shadows[10]
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1" color="primary">{term.term}</Typography>
          <IconButton size="small" onClick={onClose}>
            <Close fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="body2">{term.definition}</Typography>
          {term.related.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">Related terms:</Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mt: 0.5 }}>
                {term.related.map(relatedTerm => (
                  <Chip
                    key={relatedTerm}
                    label={relatedTerm}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
    </Popper>
  );
};

const MedicalNoteReader = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('summary');
  const [activeTab, setActiveTab] = useState(0);
  const [termPreview, setTermPreview] = useState({ term: null, anchorEl: null });

  const sections = [
    'Summary', 
    'Definitions', 
    'Epidemiology', 
    'Etiology', 
    'Pathophysiology', 
    'Clinical Features', 
    'Diagnosis', 
    'Differential Diagnosis', 
    'Treatment', 
    'Complications', 
    'References'
  ];

  const handleTermClick = (term, event) => {
    event.preventDefault();
    setTermPreview({
      term: medicalTerms[term.toLowerCase()],
      anchorEl: event.currentTarget
    });
  };

  const createLinkedText = (text) => {
    const words = text.split(/\b/);
    return words.map((word, index) => {
      const term = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      if (medicalTerms[term]) {
        return (
          <Button
            key={index}
            onClick={(e) => handleTermClick(term, e)}
            sx={{ 
              p: 0, 
              minWidth: 'auto', 
              color: 'primary.main',
              textTransform: 'none',
              '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
            }}
          >
            {word}
          </Button>
        );
      }
      return word;
    });
  };

  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'background.default'
    }}>
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Left Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              border: 'none',
              bgcolor: 'background.paper'
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Button
              startIcon={<ArrowBack />}
              sx={{ mb: 3, color: 'text.secondary' }}
              href='/sidebar'
            >
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
                fontWeight: 'bold'
              }}
            >
              Achalasia
            </Typography>
            
            <List component="nav">
              {sections.map((section) => (
                <ListItemButton
                  key={section}
                  selected={activeSection === section.toLowerCase()}
                  onClick={() => setActiveSection(section.toLowerCase())}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    '&.Mui-selected': {
                      bgcolor: 'action.selected',
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'action.selected',
                      },
                    },
                  }}
                >
                  <ListItemText primary={section} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Main Content Area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Top Navigation Bar */}
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

          {/* Content Tabs */}
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

          {/* Main Content */}
          <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
            <Card elevation={0}>
              <CardContent>
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography 
                    variant="h4"
                    sx={{ 
                      background: theme.palette.primary.main,
                      backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold'
                    }}
                  >
                    Achalasia
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                      <AccessTime sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body2">15 min read</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                      <CheckCircle sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body2">Last updated: Oct 2023</Typography>
                    </Box>
                  </Box>
                </Box>

                <Paper sx={{ p: 2, mb: 3, bgcolor: 'action.hover' }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>Quick Facts</Typography>
                  <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    <li>{createLinkedText("Failure of LES to relax")}</li>
                    <li>{createLinkedText("Primary symptom is dysphagia to both solids and liquids")}</li>
                    <li>{createLinkedText("Diagnosis confirmed by manometry")}</li>
                    <li>Treatment includes medical and surgical options</li>
                  </List>
                </Paper>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>Definition</Typography>
                  <Typography>
                    {createLinkedText(
                      "Achalasia is a primary esophageal motility disorder characterized by insufficient LES relaxation and loss of peristalsis. This results in impaired passage of food and liquids into the stomach."
                    )}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Bottom Quick Links */}
      <Paper 
        elevation={0}
        sx={{ 
          p: 2,
          borderTop: 1,
          borderColor: 'divider'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button startIcon={<Book />}>Related Topics</Button>
            <Button startIcon={<Psychology />}>Flash Cards</Button>
            <Button startIcon={<SyncAlt />}>Practice MCQs</Button>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">Reading Progress</Typography>
            <Box sx={{ width: 200 }}>
              <LinearProgress variant="determinate" value={45} />
            </Box>
            <Typography variant="body2" color="text.secondary">45%</Typography>
          </Box>
        </Box>
      </Paper>

      {/* Term Preview Popup */}
      <TermPreview
        term={termPreview.term}
        anchorEl={termPreview.anchorEl}
        onClose={() => setTermPreview({ term: null, anchorEl: null })}
      />
    </Box>
  );
};

export default MedicalNoteReader;