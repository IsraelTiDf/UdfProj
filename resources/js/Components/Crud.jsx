import React, { Component,useState } from "react";
import { Grid, List, Box, ListItem, TextField, ListItemText, Tooltip ,IconButton} from "@mui/material";
import CreateData from "./CreateData.jsx";
import DataLists from "./DataLists.jsx";
import {Edit as EditIcon,} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeIcon from '@mui/icons-material/Badge';


export default function Crud(props) {
    console.log(props);
    const { value, onEditarClick } = props;

    return (
        <List style={{paddingLeft:"420px", paddingTop:"100px"}}>
            <ListItem style={{ textAlign:"center" }}>
                <Grid style={{ width:"70%", }}>
                    <TextField style={{width:'90%', }}
                        label= <PersonIcon style={{fontSize:"35px",}}/>
                        defaultValue={value.name}
                        InputProps={{
                        readOnly: true,
                        }}
                        />
                </Grid>
            </ListItem> 
            <ListItem style={{ textAlign:"center" }}>
                <Grid style={{width:"70%", marginTop:'30px',}}>
                    <TextField style={{width:'90%', fontSize:"40px"}}
                        label= <BadgeIcon style={{fontSize:"35px"}}/>
                        defaultValue={value.cpf || "Nenhuma"}
                        InputProps={{
                        readOnly: true,
                        }}
                        />
                    
                </Grid>
            </ListItem>  
            <ListItem style={{ textAlign:"center" }}>
                <Grid style={{width:"70%", marginTop:'30px',}}>
                    <TextField style={{width:'90%', fontSize:"40px"}}
                        label= <EmailIcon style={{fontSize:"35px"}}/>
                        defaultValue={value.email || "Nenhum"}
                        InputProps={{
                        readOnly: true,
                        }}
                        />
                    
                </Grid>
            </ListItem>
            <ListItem style={{ textAlign:"center" }}>           
                <Grid style={{width:"70%", marginTop:'30px',}}>
                    <TextField style={{width:'90%', fontSize:"40px"}}
                        label= <CalendarMonthIcon style={{fontSize:"35px"}}/>
                        defaultValue={value.dt_nascimento || "Nenhuma"}
                        InputProps={{
                        readOnly: true,
                        }}
                        />
                </Grid>
            </ListItem>   
            <ListItem style={{ textAlign:"center" }}>
                <Grid style={{width:"70%", marginTop:'30px',}}>
                    <TextField style={{width:'90%', fontSize:"40px"}}
                        label= <SmartphoneIcon style={{fontSize:"35px"}}/>
                        defaultValue={value.telefone || "Nenhum"}
                        InputProps={{
                        readOnly: true,
                        }}
                        />
                    
                </Grid>  
            </ListItem>
            <ListItem style={{ textAlign:"center" }}>
            <Grid style={{width:"70%", marginTop:'30px',}}>
                <Tooltip placement="top" title="Editar" >
                    <IconButton 
                        onClick={() => onEditarClick(value)}
                       
                        size="small"
                        color="inherit"
                    >
                        <EditIcon style={{ fontSize:"40px", }}   color="inherit" />
                    </IconButton>
                    </Tooltip>
                </Grid>
            </ListItem>
        </List>
    );
    //   }
    // }
}
