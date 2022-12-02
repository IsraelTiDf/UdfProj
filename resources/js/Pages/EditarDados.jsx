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

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];

function EditarDados({
    formValues,
    onClose,
    especialidade,
    open,
    interessadoId,
    dispatch: resultDispatch,
}) {
    const { handleSubmit, reset, control, formState } = useForm({
        mode: "onChange",
        defaultValues: formValues,
    });
      console.log(especialidade);
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

                {/* <Grid container spacing={2}>
          {/* nome */}
                <Grid item xs={12}>
                    <Box width="100%" />

                    {/* celular */}
                    <Grid item xs={6} sm={6} lg={6}>
                        <Controller
                            control={control}
                            name="id_especialidade"
                            defaultValue=""
                            rules={{
                                required: true,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <FormControl fullWidth>
                                    <InputLabel
                                        id="id_especialidade-label"
                                    >
                                        Especialidade
                                    </InputLabel>
                                    <Select
                                        {...field}
                                        fullWidth
                                        name="id_especialidade
                                        "
                                        labelId="id_especialidade
                                        -label"
                                        label="id_especialidade
                                        "
                                        defaultValue=""
                                        error={error !== undefined}
                                    >
                                        {especialidade.map((data, index) => (
                                            <MenuItem
                                                key={index}
                                                value={data.id_especialidade}
                                            >
                                                {data.nome}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </Grid>
                </Grid>
            </form>
        </Modal>
    );
}

export default EditarDados;
