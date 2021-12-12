import { useContext, SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import { default as MUISnackbar } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

import { styles } from "./styles";
import { SnackbarContext } from "../Snackbar/useSnackbar";

const Snackbar = () => {
  const { snackbar, setSnackbar } = useContext(SnackbarContext);

  const { open, button, message, severity, duration } = snackbar;

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ ...snackbar, open: false });
  };

  const action = (
    <>
      <Button sx={styles.button} size="small" onClick={handleClose}>
        {button}
      </Button>

      <IconButton
        size="small"
        aria-label={button}
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <MUISnackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        message={message}
        action={action}
        sx={styles.content}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={severity}
          action={action}
          sx={styles.alert}
        >
          {message}
        </MuiAlert>
      </MUISnackbar>
    </div>
  );
};

export default Snackbar;
