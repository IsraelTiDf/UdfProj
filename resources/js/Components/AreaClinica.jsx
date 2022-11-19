import React, { Component,useState } from "react";
import { Grid, List, ListItem, ListItemText, Tooltip ,IconButton,Button
    ,Dialog ,DialogActions,DialogContent,DialogContentText,DialogTitle
} from "@mui/material";
import CreateData from "./CreateData.jsx";
import DataLists from "./DataLists.jsx";
import {Edit as EditIcon,} from "@mui/icons-material";
import {Delete as DeleteIcon,} from "@mui/icons-material";
import useExcluir from "../Pages/clinica/useExcluir";
// import DeleteIcon from '@mui/icons-material/Delete';
export default function Crud(props) {
    console.log(props);
    const { value, onEditarClick } = props;
    const clinicaId = props.value.id_clinica;

    const [excluir] = useExcluir();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    //   await editar(clinicaId);
    };

    console.log(clinicaId);

    // const handleExcluir = () => {
    //     excluir;
    //   };

    // const handleExcluir = async (data) => {

    //     // return useExcluir(clinicaId);

    //     // setOpen(false);

    //         await axios({
    //         method: "post",
    //         url: `/delete-clinica/${clinicaId}`,
    //         // data: data,
    //     });
    //     // });

    // };
    return (
        <List>
            <ListItem>
                <ListItemText
                    primary="Nome"
                    secondary={value.nome}
                />

                <ListItemText
                    primary="CNPJ"
                    secondary={value.cnpj || "Nenhuma"}
                />
                <ListItemText
                    primary="Data de nascimento"
                    secondary={value.dt_nascimento || "Nenhuma"}
                />
            </ListItem>

            <ListItem>
                <ListItemText
                    primary="Email"
                    secondary={value.email || "Nenhum"}
                />
                <ListItemText
                    primary="Telefone"
                    secondary={value.telefone || "Nenhum"}
                />
            </ListItem>

            <ListItem>

            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}

            <Tooltip placement="top" title="Editar">
                    <IconButton
                        onClick={handleClickOpen}
                        size="small"
                        color="inherit"
                    >
                        <DeleteIcon fontSize="small" color="inherit" />
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
                <DialogContent>

                </DialogContent>
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
            </ListItem>
        </List>
    );
    //   }
    // }
}
