import * as React from 'react';
import { extendTheme } from '@mui/material/styles';

import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import {
  LayoutDashboard,
  Library,
  Brain,
  MessageSquare,
  GraduationCap,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
  User
} from 'lucide-react';
import Dashboard from './dashboard';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <LayoutDashboard />,
  },
  {
    segment: 'Library',
    title: 'Library',
    icon: <Library />,
  },
  {
    segment: 'Flash Cards',
    title: 'Flash Cards',
    icon: <Brain />,
  },
  {
    segment: 'Discussions',
    title: 'Discussions',
    icon: <MessageSquare />,
  },
  {
    segment: 'Progress',
    title: 'Progress',
    icon: <GraduationCap />,
  },
  {
    segment: 'Settings',
    title: 'Settings',
    icon: <Settings />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'LogOut',
    title: 'LogOut',
    icon: <LogOut />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}



export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>

          <Dashboard/>

      </DashboardLayout>
    </AppProvider>
  );
}
