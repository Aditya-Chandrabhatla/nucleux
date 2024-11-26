import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Button,
  LinearProgress,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import {
  BookOpen,
  Star,
  Clock,
  Activity,
  Target,
  Calendar,
  TrendingUp,
  Award,
  BarChart2,
  Bell,
  Settings,
  User,
  Brain,
  Book,
  FileText,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

// Mock data (same as before)
const weeklyStudyData = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3.0 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 4.0 },
  { day: 'Fri', hours: 2.0 },
  { day: 'Sat', hours: 3.5 },
  { day: 'Sun', hours: 2.0 }
];

const topicMasteryData = [
  { topic: 'GI Surgery', mastery: 75 },
  { topic: 'Cardiology', mastery: 60 },
  { topic: 'Neurology', mastery: 45 },
  { topic: 'Orthopedics', mastery: 80 }
];

const recentActivities = [
  {
    id: 1,
    type: 'topic',
    title: 'GERD Pathophysiology',
    timestamp: '2 hours ago',
    progress: 45
  },
  {
    id: 2,
    type: 'quiz',
    title: 'Gastrointestinal System MCQ',
    timestamp: '5 hours ago',
    score: 85
  },
  {
    id: 3,
    type: 'flashcard',
    title: 'Cranial Nerves Deck',
    timestamp: '1 day ago',
    cards: 50
  }
];

const upcomingTasks = [
  {
    id: 1,
    title: 'Complete Neurology Module',
    deadline: 'Tomorrow',
    type: 'study'
  },
  {
    id: 2,
    title: 'Cardiology Quiz Due',
    deadline: 'In 2 days',
    type: 'quiz'
  },
  {
    id: 3,
    title: 'Surgery Group Discussion',
    deadline: 'Next Week',
    type: 'discussion'
  }
];

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#EC4899'
    },
    secondary: {
      main: '#3B82F6'
    },
    background: {
      default: '#111827',
      paper: '#1F2937'
    }
  }
});

export default function Dashboard() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh' ,bgcolor:"black"}}>
        {/* Top Navigation */}
        <AppBar position="static" color="info" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={"bold"}
              sx={{
                flexGrow: 1,
                background: 'linear-gradient(45deg, #EC4899 30%, #3B82F6 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Bell />
            </IconButton>
            <IconButton color="inherit">
              <Settings />
            </IconButton>
            <IconButton color="inherit">
              <User />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {/* Progress Overview Card */}
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">Progress Overview</Typography>
                    <Activity color={theme.palette.primary.main} />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Overall Progress
                      </Typography>
                      <Typography variant="body2">65%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={65} color="primary" />
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Paper  sx={{ p: 2,bgcolor:'#1F2937'}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Star color={theme.palette.warning.main} size={20} />
                          <Typography variant="body2" color="text.secondary">
                            Study Streak
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ mt: 1 }}>
                          7 Days
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Clock color={theme.palette.info.main} size={20} />
                          <Typography variant="body2" color="text.secondary">
                            Today
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ mt: 1 }}>
                          2.5 hrs
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Quick Actions Card */}
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">Quick Actions</Typography>
                    <Target color={theme.palette.warning.main} />
                  </Box>
                  <Grid container spacing={2}>
                    {[
                      { icon: <Brain />, text: 'Resume Learning', color: theme.palette.primary.main },
                      { icon: <Book />, text: 'Create Flash Cards', color: theme.palette.info.main },
                      { icon: <FileText />, text: 'Practice Quiz', color: theme.palette.success.main },
                      {
                        icon: <MessageSquare />,
                        text: 'Join Discussion',
                        color: theme.palette.warning.main
                      }
                    ].map((action, index) => (
                      <Grid item xs={6} key={index}>
                        <Button
                          variant="contained"
                          sx={{
                            height: '100%',
                            width: '100%',
                            flexDirection: 'column',
                            gap: 1,
                            backgroundColor: 'background.paper',
                            '&:hover': {
                              backgroundColor: 'action.hover'
                            }
                          }}
                        >
                          <Box sx={{ color: action.color }}>{action.icon}</Box>
                          <Typography variant="body2">{action.text}</Typography>
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Upcoming Tasks Card */}
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">Upcoming Tasks</Typography>
                    <Calendar color={theme.palette.info.main} />
                  </Box>
                  <List>
                    {upcomingTasks.map(task => (
                      <ListItem
                        key={task.id}
                        sx={{
                          mb: 1,
                          backgroundColor: 'background.paper',
                          borderRadius: 1
                        }}
                      >
                        <ListItemIcon>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: 'primary.main'
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={task.title}
                          secondary={task.deadline}
                          primaryTypographyProps={{ variant: 'body2' }}
                          secondaryTypographyProps={{ variant: 'caption' }}
                        />
                        <ListItemSecondaryAction>
                          <ArrowRight size={16} />
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Weekly Study Chart */}
            <Grid item xs={12} lg={8}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">Weekly Study Hours</Typography>
                    <TrendingUp color={theme.palette.success.main} />
                  </Box>
                  <Box sx={{ height: 300 }}>
                    <ResponsiveContainer>
                      <LineChart data={weeklyStudyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="hours"
                          stroke={theme.palette.primary.main}
                          strokeWidth={2}
                          dot={{ fill: theme.palette.primary.main }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Topic Mastery */}
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">Topic Mastery</Typography>
                    <Award color={theme.palette.warning.main} />
                  </Box>
                  <Box sx={{ height: 300 }}>
                    <ResponsiveContainer>
                      <BarChart data={topicMasteryData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="topic" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="mastery" fill={theme.palette.primary.main} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Recent Activity */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">Recent Activity</Typography>
                    <BarChart2 color={theme.palette.primary.main} />
                  </Box>
                  <List>
                    {recentActivities.map(activity => (
                      <ListItem
                        key={activity.id}
                        sx={{
                          mb: 1,
                          backgroundColor: 'background.paper',
                          borderRadius: 1
                        }}
                      >
                        <ListItemIcon>
                          <Paper
                            sx={{
                              p: 1,
                              backgroundColor: 'background.default'
                            }}
                          >
                            {activity.type === 'topic' && (
                              <BookOpen color={theme.palette.primary.main} size={20} />
                            )}
                            {activity.type === 'quiz' && (
                              <FileText color={theme.palette.info.main} size={20} />
                            )}
                            {activity.type === 'flashcard' && (
                              <Brain color={theme.palette.success.main} size={20} />
                            )}
                          </Paper>
                        </ListItemIcon>
                        <ListItemText
                          primary={activity.title}
                          secondary={activity.timestamp}
                          primaryTypographyProps={{ variant: 'body2' }}
                          secondaryTypographyProps={{ variant: 'caption' }}
                        />
                        <ListItemSecondaryAction>
                          <Typography variant="body2" color="text.secondary">
                            {activity.progress && `${activity.progress}% complete`}
                            {activity.score && `Score: ${activity.score}%`}
                            {activity.cards && `${activity.cards} cards`}
                          </Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )}