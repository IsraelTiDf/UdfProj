import React from 'react';

// import Paper from 'material-ui/Paper';
import { Container, Paper, Grid, Box, Typography, useMediaQuery, Tab, Tabs,TextField } from "@mui/material";

// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';

import Image from '/public/img/mapa.png';

// imports
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

// render


//   C:\laragon\www\UdfProj\public\img\mapa.png // Import using relative path


const styles = {
    img: {
        // height: 1356,
        backgroundImage: `url(${Image})`,
        height: 1000,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // width: `calc(100vw + 100px)`,
        width: '100%',
        margin: -1,
        padding: 100,
    }
};

export default class Home extends React.Component{
    render(){
        return(
            // <Paper style={styles.paperContainer}>
            //   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            // </Paper>
        <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="right"
        style={styles.img} >
        <Grid item>
        <TextField
            label="Pesquisa as Especialidade"
            InputProps={{
                endAdornment: (
                <InputAdornment>
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
            }}
            />

        </Grid>
        </Grid>
            // <div className="px-6 ">{"oi"}</div>
            // <IconButton></IconButton>
        )
    }
}
