import { Box, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
// import {
//   celularMask,
//   cpfMask,
//   telefoneFixoMask,
// } from "@/shared/utils/input-mask";
import Modal from "../Layouts/Modal.jsx";

import useEditar from "./clinica/useEditar";

function InserirClinica({
  formValues,
  onClose,
  open,
  interessadoId,
  dispatch: resultDispatch,
}) {
  const { handleSubmit, reset, control, formState } = useForm({
    mode: "onChange",
    defaultValues: formValues,
  });
//   console.log(interessadoId);
  const [{ error }, editar] = useEditar();

  const { isSubmitting, isValid, isDirty } = formState;

  useEffect(() => {
    if (!error) {
      reset(formValues);
    }
  }, [reset, error, formValues]);

  const handleInputChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;

    switch (name) {
      case "cpf":
        value = cpfMask(value);
        break;
      case "celular":
        value = celularMask(value);
        break;
      case "telefone":
        value = telefoneFixoMask(value);
        break;
      default:
        break;
    }

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
    // alert('Ainda nao');

    await editar(interessadoId, data, resultDispatch, onClose);

    // await axios({
    //     method: "post",
    //     url: `/editar-usuario/${interessadoId}`,
    //     data: data,
    // });
    // });
  };

  return (
    <Modal
      open={open}
      title="Editar"
      maxWidth="sm"
      okButton="Salvar"
      onClose={onClose}
      onOk={handleSubmit(handleFormSubmit)}
    //   disableOkButton={!isValid || !isDirty}
    //   loading={isSubmitting}
    >
      <form
        // id="editar-form"
        // noValidate
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* {!isSubmitting && error && (
          <ErrorAlert error={error} variant="outlined" sx={{ mb: 2 }} />
        )} */}

        <Grid container spacing={2}>
          {/* nome */}
          <Grid item xs={12}>

          </Grid>
        </Grid>
      </form>
    </Modal>
  );
}



export default InserirClinica;
