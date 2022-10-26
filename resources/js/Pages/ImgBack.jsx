import React, {useState} from 'react';
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Container, Paper, Grid, Box, Typography, useMediaQuery, Tab, Tabs, TextField, Autocomplete  } from "@mui/material";

// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';

import Image from '/public/img/mapa.png';

// imports
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { GifBoxSharp } from '@mui/icons-material';

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

export default function Img(props) {
    const { handleSubmit, reset, setValue, control } = useForm();
    const [valueFodac, setValueFodac] = useState("");
    const dados = props.props.dados;
    // console.log();

    const handleChange = (data) => {
        console.log(data);


        setValueFodac(data.ds_especialidade);
    }

    const methods = useForm({
        mode: "all",
        shouldUnregister: false
    });

    return (
        <FormProvider {...methods}>
            <Box component="form" onSubmit={handleSubmit}>
                <Grid
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="right"
                    style={styles.img} >
                    <Grid item xs={12} sm={12} lg={12}>
                {/* <Paper
                sx={{
                    width: 300,
                    height: 300,
                    bgcolor: '#591010',
                    color: '#ffff',
                    '&:hover': {
                        backgroundColor: '#f1bbbb',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}> */}
                    {valueFodac}
                {/* </Paper> */}
                        <Controller
                            name="especialidade"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Autocomplete
                                {...field}
                                freeSolo
                                options={dados}
                                getOptionLabel={(option) => option.nome || ""}
                                isOptionEqualToValue={(option, value) => option.id_especialidade === value.id_especialidade}
                                renderInput={(params) => (
                                    <TextField
                                    {...params}
                                    label="Pesquisa as Especialidade"
                                    variant="outlined"
                                    />
                                    )}
                                    onChange={(_, data) => handleChange(data)}
                                    />
                                    )}
                                    />
                    </Grid>
                </Grid>
            </Box>

        </FormProvider>
    )

}
