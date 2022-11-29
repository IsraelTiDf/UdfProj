// import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Img from "/resources/js/Pages/ImgBack.jsx";
import NavBar from "/resources/js/Pages/NavBar.jsx";
import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "@/api/travelAdvisorAPI";
import Header from "../Header/Header";
import List from "../List/List";
import Map from "../Map/Map";
// C:\laragon\www\UdfProj\resources\js\Components\Header
// C:\laragon\www\UdfProj\resources\js\Components\Header\Header.js

export default function MapView(props) {
    const clinicas = props.clinca;
    console.log(clinicas);
const [type, setType] = useState("restaurants");
const [rating, setRating] = useState("");

const [coords, setCoords] = useState({});
const [bounds, setBounds] = useState(null);

const [weatherData, setWeatherData] = useState([]);
const [filteredPlaces, setFilteredPlaces] = useState([]);
const [places, setPlaces] = useState([]);

const [autocomplete, setAutocomplete] = useState(null);
const [childClicked, setChildClicked] = useState(null);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        }
    );
}, []);

useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    console.log(filtered);
    setFilteredPlaces(filtered);
}, [rating]);

useEffect(() => {
    if (bounds) {
        setIsLoading(true);

        // getWeatherData(coords.lat, coords.lng).then((data) =>
        //     setWeatherData(data)
        // );
        // console.log(coords,bounds);

        getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
            setPlaces(
                data.filter((place) => place.name && place.num_reviews > 0)
            );
            setFilteredPlaces([]);
            setRating("");
            setIsLoading(false);
        });
    }
}, [bounds, type]);

const onLoad = (autoC) => setAutocomplete(autoC);

const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    // console.log(lat,lng);
    setCoords({ lat, lng });
};
    console.log(coords);
    return (
        <>
            <>
                <CssBaseline />
                <Header
                onPlaceChanged={onPlaceChanged} onLoad={onLoad}
                />
                <Grid container spacing={3} style={{ width: "100%" }}>
                    <Grid item xs={12} md={3}>
                        <List
                            isLoading={isLoading}
                            childClicked={childClicked}
                            clinicas={clinicas}
                            type={type}
                            setType={setType}
                            rating={rating}
                            setRating={setRating}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <Map
                            setChildClicked={setChildClicked}
                            setBounds={setBounds}
                            setCoords={setCoords}
                            coords={coords}
                            clinicas={clinicas}
                            places={
                                filteredPlaces.length ? filteredPlaces : places
                            }
                            weatherData={weatherData}
                        />
                    </Grid>
                </Grid>
            </>
        </>
    );
}


