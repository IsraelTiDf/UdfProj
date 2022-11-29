import React, { Component, useState } from "react";
import {
    Box,
    Grid,
    List,
    ListItem,
    TextField,
    ListItemText,
    Tooltip,
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Modal,
    Typography,
    Autocomplete,
} from "@mui/material";
import { useForm, Controller, FormProvider} from "react-hook-form";
import CreateData from "./CreateData.jsx";
import DataLists from "./DataLists.jsx";
import { Edit as EditIcon } from "@mui/icons-material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import useExcluir from "../Pages/clinica/useExcluir";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BadgeIcon from "@mui/icons-material/Badge";
// import DeleteIcon from '@mui/icons-material/Delete';
export default function Crud(props) {
    // console.log(props);
    const { value, onEditarClick } = props;
    const dados = props.dados;
    // const clinicaId = props.value.id_clinica;

    const [excluir] = useExcluir();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        //   await editar(clinicaId);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const { handleSubmit, reset, setValue, control } = useForm();
    const methods = useForm({
        mode: "all",
        shouldUnregister: false,
    });

    // console.log(clinicaId);

    // const handleExcluir = () => {
    //     excluir;
    //   };

    const handleExcluir = async (data) => {
        const clinicaId = props.value.id_clinica;

        await axios({
            method: "post",
            url: `/delete-clinica/${clinicaId}`,
            // data: data,
        });
        window.location.reload();
        setOpen(false);
        // });
    };
    if(value === null){
        return (
            <List style={{ paddingLeft: "420px", paddingTop: "100px" }}>
                <ListItem style={{ textAlign: "center" }}>
                    <Grid style={{ width: "70%" }}>

                        {"Nenhuma"}

                        <Box>
                            <Button style={{backgroundColor:'Green',color:'Black'}} onClick={handleOpenModal}>Cadastrar Clinica</Button>
                        </Box>
                        <FormProvider {...methods}>
                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Especialidade
                            </Typography>
                            <Grid item xs={4} style={{}}>
                            <Box style={{ backgroundColor: "white" }}>
                                <Controller
                                    name="especialidade"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Autocomplete
                                            {...field}
                                            freeSolo
                                            options={dados}
                                            getOptionLabel={(option) =>
                                                option.nome || ""
                                            }
                                            isOptionEqualToValue={(option, value) =>
                                                option.id_especialidade ===
                                                value.id_especialidade
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Pesquisa as Especialidade"
                                                    variant="outlined"
                                                />
                                            )}
                                            onChange={(_, data) =>
                                                handleChange(data)
                                            }
                                        />
                                    )}
                                />
                            </Box>
                            </Grid>
                            </Box>
                        </Modal>
                    </FormProvider>
                    </Grid>
                </ListItem>
            </List>
                );

    }else{

        return (
            <List style={{ paddingLeft: "420px", paddingTop: "100px" }}>
            {/* <Grid> */}
                        <Box>
                            <Button style={{backgroundColor:'Green',color:'Black'}} href={route('mapa')}>Buscar Clinica</Button>
                        </Box>
                        <Grid style={{marginTop: "30px"}}/>
                        {/* <Box>
                            <Button style={{backgroundColor:'Green',color:'Black'}} onClick={handleOpenModal}>Cadastrar Clinica</Button>
                        </Box>
                        <FormProvider {...methods}>
                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Especialidade
                            </Typography>
                            <Grid item xs={4} style={{}}>
                            <Box style={{ backgroundColor: "white" }}>
                                <Controller
                                    name="especialidade"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Autocomplete
                                            {...field}
                                            freeSolo
                                            options={dados}
                                            getOptionLabel={(option) =>
                                                option.nome || ""
                                            }
                                            isOptionEqualToValue={(option, value) =>
                                                option.id_especialidade ===
                                                value.id_especialidade
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Pesquisa as Especialidade"
                                                    variant="outlined"
                                                />
                                            )}
                                            onChange={(_, data) =>
                                                handleChange(data)
                                            }
                                        />
                                    )}
                                />
                            </Box>
                            </Grid>
                            </Box>
                        </Modal>
                    </FormProvider> */}
            {/* </Grid> */}
                <ListItem style={{ textAlign: "center" }}>
                    <Grid style={{ width: "70%" }}>
                        <TextField
                            style={{ width: "90%" }}
                            label=<PersonIcon style={{ fontSize: "35px" }} />

                            defaultValue={value.nome || "Nenhuma"}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </ListItem>
                <ListItem style={{ textAlign: "center" }}>
                    <Grid style={{ width: "70%", marginTop: "30px" }}>
                        <TextField
                            style={{ width: "90%", fontSize: "40px" }}
                            label=<BadgeIcon style={{ fontSize: "35px" }} />
                            defaultValue={value.cnpj || "Nenhuma"}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </ListItem>

                <ListItem style={{ textAlign: "center" }}>
                    <Grid style={{ width: "70%", marginTop: "30px" }}>
                        <TextField
                            style={{ width: "90%", fontSize: "40px" }}
                            label=<EmailIcon style={{ fontSize: "35px" }} />
                            defaultValue={value.email || "Nenhum"}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </ListItem>

                <ListItem style={{ textAlign: "center" }}>
                    <Grid style={{ width: "70%", marginTop: "30px" }}>
                        <TextField
                            style={{ width: "90%", fontSize: "40px" }}
                            label=<CalendarMonthIcon style={{ fontSize: "35px" }} />
                            defaultValue={value.dt_nascimento || "Nenhuma"}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </ListItem>

                <ListItem style={{ textAlign: "center" }}>
                    <Grid style={{ width: "70%", marginTop: "30px" }}>
                        <TextField
                            style={{ width: "90%", fontSize: "40px" }}
                            label=<SmartphoneIcon style={{ fontSize: "35px" }} />
                            defaultValue={value.telefone || "Nenhum"}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </ListItem>

                <ListItem style={{ textAlign: "center" }}>
                    <Grid style={{ width: "70%", marginTop: "30px" }}>
                        {/* <Button variant="outlined" onClick={handleClickOpen}>
                    Open alert dialog
                </Button> */}

                        <Tooltip placement="top" title="Editar">
                            <IconButton
                                onClick={handleClickOpen}
                                size="small"
                                color="inherit"
                            >
                                <DeleteIcon
                                    style={{ fontSize: "40px" }}
                                    fontSize="small"
                                    color="inherit"
                                />
                            </IconButton>
                        </Tooltip>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Voçê realmente deseja deletar?"}
                            </DialogTitle>
                            <DialogContent></DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Não</Button>
                                <Button onClick={handleExcluir} autoFocus>
                                    Sim
                                </Button>
                            </DialogActions>
                        </Dialog>
                        {/* <Tooltip placement="top" title="Editar">
                        <IconButton
                            onClick={() => onEditarClick(value)}
                            size="small"
                            color="inherit"
                        >
                            <EditIcon fontSize="small" color="inherit" />
                        </IconButton>
                        </Tooltip> */}
                    </Grid>
                </ListItem>
            </List>
        );

    }

}
