import React, { useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import {
    Container,
    Paper,
    Button,
    Grid,
    Box,
    Typography,
    useMediaQuery,
    Tab,
    Tabs,
    TextField,
    Autocomplete,
} from "@mui/material";
import gpsAmb from '../../../public/img/gps-ambulancia.png';

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';

import Image from "/public/img/mapa.png";
import Imagem from "/public/img/amb.png";

// imports
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { GifBoxSharp } from "@mui/icons-material";

// render

//   C:\laragon\www\UdfProj\public\img\mapa.png // Import using relative path

const styles = {
    img: {
        // height: 1356,
        backgroundImage: `url(${Image})`,
        height: 930,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // width: `calc(100vw + 100px)`,
        width: "100%",
        margin: -1,
        padding: 100,
    },
};

const stylou = {
    img: {
        // height: 1356,
        backgroundImage: `url(${Imagem})`,
        height: 900,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // width: `calc(100vw + 100px)`,
        width: "100%",
        margin: -1,
        marginTop: 250,
    },
};

export default function Img(props) {
    const { handleSubmit, reset, setValue, control } = useForm();
    const [value, setValueP] = useState("");
    const dados = props.props.dados;

    const handleChange = (data) => {
        console.log(data);

        setValueP(data.ds_especialidade);
    };

    const methods = useForm({
        mode: "all",
        shouldUnregister: false,
    });

    return (

        <FormProvider {...methods}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ paddingTop: { lg: '150px', md: '130px', sm: '100px', xs: '100px' }, backgroundColor: "#FFEFE7" }}
            >
                <Grid id="sobrenos" container spacing={2}>
                    <Grid item xs={12} sm={12} lg={6} >
                        <Grid
                            container
                            spacing={2}
                            sx={{ p: { md: 10, sm: 5, xs: 4 } }}
                        >
                            <Grid item xs={12}>
                                <Box
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "50px",
                                        fontFamily: "inter",
                                        fontWeight: 900,
                                        color: "#591010",
                                        // textAlign: "center",
                                    }}
                                >
                                    <Typography sx={{ typography: { sm: 'h4', xs: 'h5' }, mr: 1 }} >
                                        Médico
                                    </Typography>
                                    <Typography sx={{ typography: { sm: 'h4', xs: 'h5' }, color: '#ea1212' }}>
                                        na palma da sua mão
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box
                                    style={{
                                        marginBottom: "15px",
                                        textAlign: "justify",
                                        color: "#591010",
                                        fontSize: "30px",
                                        fontWeight: 500,
                                    }}
                                >
                                    <Typography sx={{ typography: { md: 'h5', sm: 'h6', xs: 'subtitle1' } }}>
                                        A ferramenta de busca de especialidades
                                        médicas tem o propósito de reunir e
                                        disponibilizar de maneira rápida e fácil a
                                        descrição simplificada das principais
                                        especialidades médicas que são
                                        regulamentadas no Brasil.
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box
                                    style={{
                                        textAlign: "justify",
                                        color: "#591010",
                                        marginBottom: "15px",
                                        fontSize: "30px",
                                        fontWeight: 500,
                                    }}
                                >
                                    <Typography sx={{ typography: { md: 'h5', sm: 'h6', xs: 'subtitle1' } }}>
                                        Além disso, a ferramenta localiza e traça
                                        uma rota entre você e a unidade médica mais
                                        próxima, ou a de sua preferência.
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box
                                    style={{
                                        textAlign: "justify",
                                        color: "#591010",
                                        fontSize: "30px",
                                        fontWeight: 500,
                                    }}
                                >
                                    <Typography sx={{ typography: { md: 'h5', sm: 'h6', xs: 'subtitle1' } }}>
                                        Selecione a especialidade médica e localize
                                        a unidade credenciada mais próxima de você.
                                    </Typography>
                                </Box>

                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid xs>
                                    </Grid>
                                    <Grid xs={10} md={8} lg={6}>
                                        <Button style={{ color: "white", backgroundColor: '#ea1212', width: '100%' }} href="#especialidade" >
                                            ir até ferramenta
                                        </Button>
                                    </Grid>
                                    <Grid xs>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} sx={{ mt: 7 }}>
                        <Box sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'center', height: 500 }}>
                            <img src={gpsAmb} alt="gps-amb" />;
                        </Box>
                    </Grid>
                </Grid>

                <Grid
                    id="especialidade"
                    container
                    spacing={3}
                    sx={{ p: { md: 10, sm: 5, xs: 4 }, mt: { md: 10, sm: 1, xs: 1 } }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box
                            style={{
                                display: "flex",
                                alignContent: "center",
                                justifyContent: "center",
                                fontSize: "50px",
                                fontFamily: "inter",
                                fontWeight: 900,
                            }}
                        >
                            <Typography sx={{ typography: { sm: 'h4', xs: 'h5' }, color: '#ea1212', mb: { md: 20, sm: 10, xs: 5 } }}>
                                Busque uma especialidade
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9} md={4} lg={4}>
                        <Box style={{ backgroundColor: "white" }}>
                            <Controller
                                name="especialidade"
                                // control={control}
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
                                                helperText="Atenção: A ferramenta localiza apenas as
                                                unidades médicas associadas ao nosso site."
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
                    <Grid item xs={12} sm={3} md={2} lg={2} sx={{ mt: 1 }}>
                        <Button style={{ color: "white", backgroundColor: '#ea1212', width: '100%' }} href={route("mapa")} >
                            Buscar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box
                            style={{

                                fontFamily: "arial",
                                color: "#FF1010",
                                fontWeight: 600,
                            }}
                        >
                            {
                                value != "" &&
                                <Typography sx={{
                                    typography: { md: 'h5', sm: 'h6', xs: 'subtitle1' }, display: { md: 'inherit', sm: 'flex', xs: 'flex' },
                                    justifyContent: { md: 'start', sm: 'center', xs: 'center' },
                                }}>
                                    VISÃO GERAL
                                </Typography>
                            }
                        </Box>
                        <Box
                            style={{
                                textAlign: "justify",

                            }}
                        >
                            <Typography sx={{
                                typography: { md: 'h6', sm: 'subtitle1', xs: 'subtitle1' }, fontFamily: "calibri", color: "#591010", fontWeight: 600,
                            }}>
                                {value}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid
                    container
                >
                    <Grid
                        id="emergencia"
                        container
                        spacing={1}
                        style={{ paddingTop: "170px" }}
                    >
                        <Grid item xs={12}>
                            <Box
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontSize: "50px",
                                    fontFamily: "inter",
                                    fontWeight: 900,
                                    color: "#591010",
                                    // textAlign: "center",
                                }}
                            >
                                <Typography sx={{ typography: { sm: 'h4', xs: 'h5' }, mr: 1 }} >
                                    Transporte
                                </Typography>
                                <Typography sx={{ typography: { sm: 'h4', xs: 'h5' }, color: '#ea1212' }}>
                                    de urgência
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} style={{ marginTop: "50px" }}>
                            <Box
                                style={{
                                    marginBottom: "15px",
                                    color: "#591010",
                                    fontSize: "30px",
                                    fontWeight: 500,
                                    textAlign: "center",
                                }}
                            >
                                <Typography sx={{ typography: { md: 'h5', sm: 'h6', xs: 'subtitle1' } }}>
                                    Precisa de uma ambulância para se locomover até
                                    o serviço de urgência mais proximo?
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}

                        >
                            <Box
                                style={{
                                    color: "#591010",
                                    marginBottom: "15px",
                                    fontSize: "30px",
                                    fontWeight: 500,
                                    textAlign: "center",
                                }}
                            >
                                <Typography sx={{ typography: { md: 'h5', sm: 'h6', xs: 'subtitle1' } }}>
                                    Solicite o transporte de emergência, que é uma
                                    ocorrência imprevista com ou sem risco potencial
                                    à vida, onde o indivíduo necessita de
                                    assistência médica imediata.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{ mt: 5 }}
                        >
                            <Grid container spacing={2}>
                                <Grid xs>
                                </Grid>
                                <Grid xs={10} md={6} lg={4}>
                                    <Button style={{ color: "white", backgroundColor: '#ea1212', width: '100%' }}>
                                        Solicite uma ambulância
                                    </Button>
                                </Grid>
                                <Grid xs>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    id="contatos"
                    container
                    spacing={3}

                >
                    <Grid
                        item
                        xs={12} sm={12} lg={12}
                        sx={{ display: 'flex', justifyContent: 'center', mt: 15, mb: 3 }}
                    >
                        <Typography sx={{ typography: { sm: 'h4', xs: 'h5' }, color: "#1976D2 " }}>
                            Contatos
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            href="https://www.facebook.com/"
                            target="_blank"
                        >
                            <FacebookIcon style={{ fontSize: "70px" }} />
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            href="https://www.whatsapp.com/"
                            target="_blank"
                        >
                            <WhatsAppIcon style={{ fontSize: "70px" }} />
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            href="https://www.instagram.com/"
                            target="_blank"
                        >
                            <InstagramIcon style={{ fontSize: "70px" }} />
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </FormProvider >
    );
}

