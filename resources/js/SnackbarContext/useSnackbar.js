import { useSnackbar as useSnackbarNotistack } from "notistack";

// TODO custom snackbar
export default function useSnackbar() {
  const { enqueueSnackbar: enqueueSnackbarNotistack, closeSnackbar } =
    useSnackbarNotistack();

  function enqueueSnackbar(message, options = null) {
    enqueueSnackbarNotistack(message, options);
  }

  return { enqueueSnackbar, closeSnackbar };
}
