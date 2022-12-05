import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Grid } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/lab/Rating";

// import mapStyles from '../../mapStyles';
// import useStyles from './styles.js';
const styles = {
    paper: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100px",
    },
    mapContainer: {
        height: "85vh",
        width: "100%",
    },
    markerContainer: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        "&:hover": { zIndex: 2 },
    },
    pointer: {
        cursor: "pointer",
    },
};

const Map = ({
    coords,
    places,
    setCoords,
    setBounds,
    setChildClicked,
    weatherData,
    clinicas,
}) =>
    //
    {
        const matches = useMediaQuery("(min-width:600px)");
        const classes = styles;

        // const coords = { lat: -15.7801, lng: -47.9292 };
        return (
            <Grid style={styles.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyA2_M--Caf9AX6x-3RFtOOaaypLvOxR4yk",
                    }}
                    defaultCenter={coords}
                    center={coords}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                    onChange={(e) => {
                        setCoords({ lat: e.center.lat, lng: e.center.lng });
                        setBounds({
                            ne: e.marginBounds.ne,
                            sw: e.marginBounds.sw,
                        });
                    }}
                    onChildClick={(child) => setChildClicked(child)}
                    // options = {''}
                    // onChange = {''}
                    // onClick = {''}

                >
                    {
                        clinicas.map((clinica, i) => (
                            <div
                            className={classes.markerContainer}
                            lat={Number(clinica.latitude)}
                            lng={Number(clinica.longitude)}
                            key={i}
                            >
                              {console.log(clinica)}
                            {!matches
                              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                              : (
                                <Paper elevation={3} sx={{padding: "10px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "100px",}} >
                                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {clinica.nome}</Typography>
                                  <img
                                    className={classes.pointer}
                                    src=''
                                  />
                                  <Rating name="read-only" size="small" value={Number(5)} readOnly />
                                </Paper>
                              )}
                          </div>
                        ))}

                </GoogleMapReact>
            </Grid>
        );
    };

export default Map;
