/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,
} from '@mui/material';
import {
  BookOpen,
  FileAudio,
  BrainCircuit,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Calendar,
  Settings,
  Home,
  Users,
  GraduationCap,
} from 'lucide-react';
import Library from '../src/components/library';
import Dashboard from '../src/components/dashboard';
import Profile from '../src/components/landing';
import { AccountCircle } from '@mui/icons-material';

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

const GradientText = styled(Typography)(({ theme }) => ({
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
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState('Dashboard'); // State for active component

  const drawerWidth = isSidebarOpen ? 240 : 73;

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Library':
        return <Library />;
      case 'Dashboard':
        return <Dashboard />;
        case 'Profile':
        return <Profile />;
      // Add more cases as needed
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
      <Drawer
  variant="permanent"
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      transition: (theme) =>
        theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      display: 'flex',
      flexDirection: 'column', // Ensures the content stacks vertically
      justifyContent: 'space-between', // Pushes content to top and bottom
    },
  }}
>
  <Box>
    <Box
      sx={{
        p: 2,
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {isSidebarOpen ? (
        <GradientText variant="h6" fontWeight="bold">
          MediLearn
        </GradientText>
      ) : (
        <GraduationCap size={24} color={darkTheme.palette.primary.main} />
      )}
      <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </IconButton>
    </Box>

    <List sx={{ px: 2 }}>
      <NavMenuItem
        icon={Home}
        label={isSidebarOpen ? 'Dashboard' : ''}
        isActive={activeComponent === 'Dashboard'}
        onClick={() => setActiveComponent('Dashboard')}
      />
      <NavMenuItem
        icon={BookOpen}
        label={isSidebarOpen ? 'Library' : ''}
        isActive={activeComponent === 'Library'}
        onClick={() => setActiveComponent('Library')

        }
      />
      <NavMenuItem
        icon={FileAudio}
        label={isSidebarOpen ? 'Audio Lectures' : ''}
      />
      <NavMenuItem icon={BrainCircuit} label={isSidebarOpen ? 'MCQs' : ''} />
      <NavMenuItem
        icon={MessageSquare}
        label={isSidebarOpen ? 'Discussions' : ''}
      />
      <NavMenuItem icon={Calendar} label={isSidebarOpen ? 'Calendar' : ''} />
      <NavMenuItem
        icon={Users}
        label={isSidebarOpen ? 'Study Groups' : ''}
      />
    </List>
  </Box>

  {/* Profile and Settings Section */}
  <Box>
    <Divider />
    <List sx={{ px: 2 }}>
      <NavMenuItem
        icon={AccountCircle}
        label={isSidebarOpen ? 'Profile' : ''}
        isActive={activeComponent === 'Profile'}
        onClick={() => setActiveComponent('Profile')}
      />
      <NavMenuItem
        icon={Settings}
        label={isSidebarOpen ? 'Settings' : ''}
      />
    </List>
  </Box>
</Drawer>


        {/* Render the active component */}
        <>{renderActiveComponent()}</>
      </Box>
    </ThemeProvider>
  );
};

export default CollapsibleLibrary;
