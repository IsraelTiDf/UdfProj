import React, { Component,useState } from "react";
import { Grid, List, ListItem, ListItemText, Tooltip ,IconButton} from "@mui/material";
import CreateData from "./CreateData.jsx";
import DataLists from "./DataLists.jsx";
import {Edit as EditIcon,} from "@mui/icons-material";

export default function Crud(props) {
    console.log(props);
    const { value, onEditarClick } = props;

    return (
        <List>
            <ListItem>
                <ListItemText
                    primary="Nome"
                    secondary={value.name}
                />

                <ListItemText
                    primary="CPF"
                    secondary={value.cpf || "Nenhuma"}
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
                <Tooltip placement="top" title="Editar">
                    <IconButton
                        onClick={() => onEditarClick(value)}
                        size="small"
                        color="inherit"
                    >
                        <EditIcon fontSize="small" color="inherit" />
                    </IconButton>
                    </Tooltip>
            </ListItem>
        </List>
    );
    //   }
    // }
}
