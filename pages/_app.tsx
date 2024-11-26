import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // Set the default background color
      paper: "#1e1e1e",   // Set the background color for Paper components
    },
    text: {
      primary: "#ffffff", // Set text color for better contrast
      secondary: "#b0b0b0",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* Normalize CSS for consistent rendering */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
