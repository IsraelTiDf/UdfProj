import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import PropTypes from "prop-types";

function Modal(props) {
  const {
    onClose,
    onOk,
    open,
    maxWidth,
    fullWidth,
    loading,
    title,
    okButton,
    disableOkButton,
    children,
    dividers,
  } = props;

  return (
    <Dialog
      open={open}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      onClose={onClose}
    >
      {loading && <LinearProgress color="primary" sx={{ height: 6 }} />}

      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {children && (
        <DialogContent dividers={dividers}>{children}</DialogContent>
      )}

      <DialogActions>
        <Button
          type="submit"
          form="tramitar-form"
          color="primary"
          variant="text"
          autoFocus
          disabled={loading || disableOkButton}
          onClick={onOk}
        >
          {okButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

Modal.defaultProps = {
  disableOkButton: false,
  maxWidth: "xs",
  fullWidth: true,
  loading: false,
  dividers: false,
  children: null,
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  okButton: PropTypes.string.isRequired,
  disableOkButton: PropTypes.bool,
  maxWidth: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  dividers: PropTypes.bool,
};

export default Modal;
