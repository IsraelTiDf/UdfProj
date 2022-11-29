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
    // console.log();

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
                style={{ backgroundColor: "#FFFFF5" }}
                component="form"
                onSubmit={handleSubmit}
            >
                <Grid
                    id="sobrenos"
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="right"
                    style={styles.img}
                >
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
                        {/* </Paper> */}
                        <Grid
                            container
                            spacing={1}
                            style={{ paddingTop: "100px" }}
                        >
                            <Grid item xs={6.5} style={{}}>
                                <Box
                                    style={{
                                        color: "#591010",
                                        fontSize: "50px",
                                        fontFamily: "inter",
                                        fontWeight: 900,
                                        color: "#591010",
                                        textAlign: "center",
                                    }}
                                >
                                    <text>Médico</text>
                                    <text style={{ color: "red" }}>
                                        {" "}
                                        na palma da sua mão
                                    </text>
                                </Box>
                            </Grid>

                            <Grid item xs={6.5}>
                                <Box
                                    style={{
                                        marginBottom: "15px",
                                        textAlign: "justify",
                                        color: "#591010",
                                        fontSize: "30px",
                                        fontWeight: 500,
                                    }}
                                >
                                    A ferramenta de busca de especialidades
                                    médicas tem o propósito de reunir e
                                    disponibilizar de maneira rápida e fácil a
                                    descrição simplificada das principais
                                    especialidades médicas que são
                                    regulamentadas no Brasil.
                                </Box>
                            </Grid>

                            <Grid item xs={6.5} style={{ marginLeft: "5px" }}>
                                <Box
                                    style={{
                                        textAlign: "justify",
                                        color: "#591010",
                                        marginBottom: "15px",
                                        fontSize: "30px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Além disso, a ferramenta localiza e traça
                                    uma rota entre você e a unidade médica mais
                                    próxima, ou a de sua preferência.
                                </Box>
                            </Grid>

                            <Grid item xs={6.5} style={{ marginLeft: "5px" }}>
                                <Box
                                    style={{
                                        textAlign: "justify",
                                        color: "#591010",
                                        fontSize: "30px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Atenção: A ferramenta localiza apenas as
                                    unidades médicas associadas ao nosso site.
                                </Box>
                            </Grid>

                            <Grid item xs={6.5} style={{ marginLeft: "5px" }}>
                                <Box
                                    style={{
                                        textAlign: "justify",
                                        color: "#591010",
                                        fontSize: "30px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Selecione a especialidade médica e localize
                                    a unidade credenciada mais próxima de você.
                                </Box>

                            </Grid>
                            <Grid item xs={3} style={{ marginLeft: "10px",
                                marginTop: "80px",
                                // marginBottom: "10px",
                                // padding: "10px",
                                 }}>
                                <Box
                                style={{
                                    backgroundColor: "red",
                                    textAlign: "center",
                                }}
                                >
                                <Button style={{ color: "white" }} href="#especialidade" >
                                    ir até ferramenta
                                </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid id="especialidade"></Grid> */}
                </Grid>

                <Grid
                    id="especialidade"
                    container
                    spacing={3}
                    style={{
                        marginTop: "220px",
                        marginBottom: "",
                        padding: "100px",
                    }}
                >
                    <Grid item xs={4} style={{}}>
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
                    <Grid
                        item
                        xs={2}
                        style={{ paddingTop: "32px", paddingRight: "100px" }}
                    >
                        <Box
                            style={{
                                backgroundColor: "red",
                                textAlign: "center",
                            }}
                        >
                            <Button
                                style={{ color: "white" }}
                                href={route("mapa")}
                            >
                                Buscar
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} style={{ margin: "-30px" }}>
                        <Box
                            style={{
                                fontFamily: "arial",
                                color: "#FF1010",
                                fontSize: "20px",
                                fontWeight: 600,
                                letterSpacing: ".1rem",
                            }}
                        >
                            VISÃO GERAL
                        </Box>
                        <Box
                            style={{
                                textIndent: "justify",
                                fontFamily: "calibri",
                                color: "#591010",
                                fontSize: "19px",
                                fontWeight: 600,
                                letterSpacing: ".1rem",
                            }}
                        >
                            {value}
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="right"
                    style={stylou.img}
                >
                    <Grid
                        id="emergencia"
                        container
                        spacing={1}
                        style={{ paddingTop: "170px" }}
                    >
                        <Grid item xs={12} style={{}}>
                            <Box
                                style={{
                                    color: "#591010",
                                    fontSize: "50px",
                                    fontFamily: "inter",
                                    fontWeight: 900,
                                    color: "#591010",
                                    textAlign: "center",
                                }}
                            >
                                <text>Transporte</text>
                                <text style={{ color: "red" }}>
                                    {" "}
                                    de urgência
                                </text>
                            </Box>
                        </Grid>

                        <Grid item xs={12} style={{ marginTop: "50px" }}>
                            <Box
                                style={{
                                    marginBottom: "15px",
                                    textAlign: "justify",
                                    color: "#591010",
                                    fontSize: "30px",
                                    fontWeight: 500,
                                    textAlign: "center",
                                }}
                            >
                                Precisa de uma ambulância para se locomover até
                                o serviço de urgência mais proximo?
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={{
                                paddingLeft: "150px",
                                paddingRight: "150px",
                            }}
                        >
                            <Box
                                style={{
                                    textAlign: "center",
                                    color: "#591010",
                                    marginBottom: "15px",
                                    fontSize: "30px",
                                    fontWeight: 500,
                                    textAlign: "center",
                                }}
                            >
                                Solicite o transporte de emergência, que é uma
                                ocorrência imprevista com ou sem risco potencial
                                à vida, onde o indivíduo necessita de
                                assistência médica imediata.
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                paddingTop: "32px",
                                width: "40%",
                                paddingLeft: "750px",
                                paddingRight: "750px",
                                marginTop: "20px",
                            }}
                        >
                            <Box
                                style={{
                                    backgroundColor: "red",
                                    textAlign: "center",
                                }}
                            >
                                <Button style={{ color: "white" }}>
                                    Solicite uma ambulância
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    id="contatos"
                    container
                    spacing={3}
                    style={{
                        paddingTop: "70px",
                        paddingLeft: "450px",
                        paddingRight: "200px",
                        paddingBottom: "150px",
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        style={{
                            marginLeft: "-160px",
                            fontSize: "45px",
                            textAlign: "center",
                            fontWeight: 700,
                            color: "#591010",
                            marginBottom: "30px",
                        }}
                    >
                        Contatos
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            href="https://www.facebook.com/"
                            target="_blank"
                        >
                            <FacebookIcon style={{ fontSize: "70px" }} />
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            href="https://www.whatsapp.com/"
                            target="_blank"
                        >
                            <WhatsAppIcon style={{ fontSize: "70px" }} />
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            href="https://www.instagram.com/"
                            target="_blank"
                        >
                            <InstagramIcon style={{ fontSize: "70px" }} />
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </FormProvider>
    );
}
