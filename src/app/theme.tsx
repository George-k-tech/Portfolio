"use client";
import { Syne } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: syne.style.fontFamily,
  },
  palette: {
    background: {
      default: "#fff",
    },
    primary: {
      main: "#fff",
      light: "#13766A",
      dark: "#24DCC5",
      contrastText: "#AEAEAE0D",
    },
    secondary: {
      main: "#F6CB02",
      light: "#C4C4C4",
      dark: "#818181",
      contrastText:"#52CA85"
    },

    text: {
      primary: "#DDDDDC",
      secondary: "#63EDAB",
      disabled: "#767475",

    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
