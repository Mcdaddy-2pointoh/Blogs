import React from "react";
import { Typography, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Copyright() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href={document.URL}>
          The Reader's Hut
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </ThemeProvider>
  );
}
