import React, { createRef } from "react";
import { SnackbarProvider } from "notistack";
import { IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const notistackRef = createRef();
const ActionSnack = (key) => (
  <IconButton
    color="inherit"
    size="medium"
    onClick={() => {
      notistackRef.current.closeSnackbar(key);
    }}
  >
    <CloseIcon fontSize="medium" />
  </IconButton>
);

// eslint-disable-next-line react/prop-types
export default function AppSnackBarProvider({ children }) {
  return (
    <SnackbarProvider
      ref={notistackRef}
      autoHideDuration={6000}
      maxSnack={1}
      action={ActionSnack}
      anchorOrigin={{
        vertical: "left",
        horizontal: "bottom",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
