import React, { Component, useState } from "react";
import {
    Grid,
    List,
    Box,
    ListItem,
    TextField,
    ListItemText,
    Tooltip,
    IconButton,
    Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CreateData from "./CreateData.jsx";
import DataLists from "./DataLists.jsx";
import { Edit as EditIcon } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BadgeIcon from "@mui/icons-material/Badge";
import Paper from "@mui/material/Paper";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

// new Incons
import PublicIcon from "@mui/icons-material/Public";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export default function Crud(props) {
    // console.log(props);
    const { value, onEditarClick } = props;

    return (
        <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs></Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <Item>
                        <Box>
                            <Button
                                variant="contained"
                                color="success"
                                href={route("mapa")}
                                startIcon={<PublicIcon />}
                                sx={{ml:2}}
                            >
                                Buscar Clinica
                            </Button>

                            <Button
                                variant="contained"
                                color="success"
                                // href={route("mapa")}
                                onClick={() => onEditarClick(value)}
                                startIcon={<EditIcon />}
                                sx={{ml:2}}
                            >
                                Editar
                            </Button>

                            <List
                                sx={{
                                    width: "100%",
                                    mt: 3,
                                    maxWidth: 360,
                                    bgcolor: "background.paper",
                                }}
                            >
                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PersonIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={value.name}
                                        secondary="Nome"
                                    />

                                </ListItem>

                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <BadgeIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={value.cpf}
                                        secondary="CPF"
                                    />

                                </ListItem>
                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <EmailIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={value.email}
                                        secondary="Email"
                                    />

                                </ListItem>
                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CalendarMonthIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={value.dt_nascimento}
                                        secondary="Data de Nascimento"
                                    />

                                </ListItem>
                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <SmartphoneIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={value.telefone}
                                        secondary="Telefone"
                                    />

                                </ListItem>
                            </List>
                        </Box>
                    </Item>
                </Grid>

                <Grid item xs></Grid>
            </Grid>
        </Box>
        // 'oi'
        // <Grid  container spacing={2}>
        // <List sx={{ width: '100%'}}>
        //     <ListItem style={{ textAlign:"center" }}>
        //         <Grid container
        //                     spacing={1}
        //                     sx={{ p: {  sm: 5, xs: 4 } }}>
        //             <TextField style={{width:'90%', }}
        //                 label= {<PersonIcon style={{fontSize:"35px",}}/>}
        //                 defaultValue={value.name}
        //                 InputProps={{
        //                 readOnly: true,
        //                 }}
        //                 />
        //         </Grid>
        //     </ListItem>
        //     <ListItem style={{ textAlign:"center" }}>
        //         <Grid container
        //                     spacing={1}
        //                     sx={{ p: {  sm: 5, xs: 4 } }}>
        //             <TextField style={{width:'90%', fontSize:"40px"}}
        //                 label= {<BadgeIcon style={{fontSize:"35px"}}/>}
        //                 defaultValue={value.cpf || "Nenhuma"}
        //                 InputProps={{
        //                 readOnly: true,
        //                 }}
        //                 />

        //         </Grid>
        //     </ListItem>
        //     <ListItem style={{ textAlign:"center" }}>
        //         <Grid container
        //                     spacing={1}
        //                     sx={{ p: {  sm: 5, xs: 4 } }}>
        //             <TextField style={{width:'90%', fontSize:"40px"}}
        //                 label= {<EmailIcon style={{fontSize:"35px"}}/>}
        //                 defaultValue={value.email || "Nenhum"}
        //                 InputProps={{
        //                 readOnly: true,
        //                 }}
        //                 />

        //         </Grid>
        //     </ListItem>
        //     <ListItem style={{ textAlign:"center" }}>
        //         <Grid container
        //                     spacing={1}
        //                     sx={{ p: {  sm: 5, xs: 4 } }}>
        //             <TextField style={{width:'90%', fontSize:"40px"}}
        //                 label= {<CalendarMonthIcon style={{fontSize:"35px"}}/>}
        //                 defaultValue={value.dt_nascimento || "Nenhuma"}
        //                 InputProps={{
        //                 readOnly: true,
        //                 }}
        //                 />
        //         </Grid>
        //     </ListItem>
        //     <ListItem style={{ textAlign:"center" }}>
        //         <Grid container
        //                     spacing={1}
        //                     sx={{ p: {  sm: 5, xs: 4 } }}>
        //             <TextField style={{width:'90%', fontSize:"40px"}}
        //                 label= {<SmartphoneIcon style={{fontSize:"35px"}}/>}
        //                 defaultValue={value.telefone || "Nenhum"}
        //                 InputProps={{
        //                 readOnly: true,
        //                 }}
        //                 />

        //         </Grid>
        //     </ListItem>
        //     <ListItem style={{ textAlign:"center" }}>
        //     <Grid container
        //                     spacing={1}
        //                     sx={{ p: {  sm: 5, xs: 4 } }}>
        //         <Tooltip placement="top" title="Editar" >
        //             <IconButton
        //                 onClick={() => onEditarClick(value)}

        //                 size="small"
        //                 color="inherit"
        //             >
        //                 <EditIcon style={{ fontSize:"40px", }}   color="inherit" />
        //             </IconButton>
        //             </Tooltip>
        //         </Grid>
        //     </ListItem>
        // </List>
        // <Grid/>
    );
    //   }
    // }
}
