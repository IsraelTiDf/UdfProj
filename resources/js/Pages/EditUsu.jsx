/* eslint-disable react/prop-types */
import {
  Backdrop,
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import { cnpjMask, cpfMask } from "@/shared/utils/input-mask";
// import ResultadoInteressados from "./ResultadoInteressados";
import useUsuario from "./clinica/useUsuario";
// import { ErrorAlert } from "@/shared";

// eslint-disable-next-line react/prop-types
const Loader = ({ classes }) => (
  <>
    <Backdrop open invisible classes={classes} />
    <Box marginTop={4} display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  </>
);

const Alert = ({ message, onClose, classes }) => (
  <Dialog classes={classes} open={Boolean(message)}>
    <DialogContent>
      <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="text" onClick={onClose} color="primary">
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

function EditUsu() {
  const [alert, setAlert] = useState("");
  const { handleSubmit, reset, formState, control } = useForm({
    defaultValues: {
      id: "",
    //   cnpj: "",
      nome: "",
    //   email: "",
    },
  });
  const [{ error, loading, loaded, result }, dispatch, editar] =
  useUsuario();

  const { isDirty } = formState;

  const handleInputChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;

    // switch (name) {
    //   case "cpf":
    //     value = cpfMask(value);
    //     break;

    //   case "cnpj":
    //     value = cnpjMask(value);
    //     break;

    //   default:
    //     break;
    // }

    // eslint-disable-next-line no-param-reassign
    event.target.value = value;
  };

  const handleInputBlur = (event) => {
    const { value } = event.target;

    // eslint-disable-next-line no-param-reassign
    event.target.value = value.trim();
  };

  const handleFormSubmit = async (data, event) => {
    // event.preventDefault();

    // if (!isDirty) {
    //   return;
    // }

    await editar(data);
  };

  return (
    <>
      <form
      noValidate onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Controller
              name="nome"
              control={control}
              rules={{ minLength: 4 }}
              render={({ field: { onChange, ref, name, onBlur, value } }) => (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="medium"
                  label="Nome"
                  value={value}
                  name={name}
                  inputRef={ref}
                  onChange={onChange}
                  onBlur={(event) => {
                    handleInputBlur(event);
                    onBlur(event);
                  }}
                />
              )}
            />
          </Grid>

          <Box width="100%" />

          {/* cpf */}
          {/* <Grid item xs={12} md={2}>
            <Controller
              control={control}
              name="cpf"
              rules={{ minLength: 14 }}
              render={({ field: { onChange, onBlur, ref, name, value } }) => (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="medium"
                  label="CPF"
                  name={name}
                  value={value}
                  inputRef={ref}
                  onBlur={onBlur}
                  onChange={(event) => {
                    handleInputChange(event);
                    onChange(event);
                  }}
                />
              )}
            />
          </Grid> */}

          {/* cnpj */}
          <Grid item xs={12} md={2}>
            <Controller
              name="cnpj"
              control={control}
              render={({ field: { onChange, onBlur, name, ref, value } }) => (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="medium"
                  label="CNPJ"
                  value={value}
                  onBlur={onBlur}
                  inputRef={ref}
                  name={name}
                  onChange={(event) => {
                    handleInputChange(event);
                    onChange(event);
                  }}
                />
              )}
            />
          </Grid>

          <Box width="100%" />

          {/* email */}
          <Grid item xs={12} md={4}>
            <Controller
              name="email"
              control={control}
              render={({ field: { value, name, ref, onChange, onBlur } }) => (
                <TextField
                  type="email"
                  fullWidth
                  variant="outlined"
                  size="medium"
                  label="E-mail"
                  value={value}
                  inputRef={ref}
                  onChange={onChange}
                  name={name}
                  onBlur={(event) => {
                    handleInputBlur(event);
                    onBlur(event);
                  }}
                />
              )}
            />
          </Grid>
        </Grid>

        {/* submit */}
        <Box sx={{ mt: 3 }}>
          <Button
            type="submit"
            size="medium"
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
          <Button
            sx={{ ml: 2 }}
            type="button"
            variant="contained"
            size="medium"
            color="inherit"
            onClick={() => reset()}
          >
            Limpar campos
          </Button>
        </Box>
      </form>

      {/* {loading ? (
        <Loader />
      ) : (
        result.length > 0 && (
          <Box marginTop={10}>
            <Divider />
            <ResultadoInteressados result={result} dispatch={dispatch} />
          </Box>
        )
      )}

      {loaded && result.length === 0 && !error && (
        <Box marginTop={8}>
          <Typography variant="h5" color="textSecondary">
            Nenhum resultado encontrado.
          </Typography>
        </Box>
      )}

      {loaded && error && (
        <ErrorAlert variant="standard" error={error} sx={{ my: 2 }} />
      )}

      <Alert onClose={() => setAlert("")} message={alert} /> */}
    </>
  );
}

export default EditUsu;
