import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select,createTheme } from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
// import useStyles from './styles.js';

const theme = createTheme();

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading,clinicas }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = {
    formControl: {
        margin: theme.spacing(1), minWidth: 100, marginBottom: '30px',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      },
      container: {
        padding: '15px',
      },
      marginBottom: {
        marginBottom: '30px',
      },
      list: {
        height: '60vh', overflow: 'auto',
      },
  };

  useEffect(() => {
    setElRefs((refs) => Array(clinicas.length).fill().map((_, i) => refs[i] || createRef()));
  }, [clinicas]);

  console.log(places);
  return (
    <div className={classes.container}>
      <Typography variant="h4">Clinicas & Especialidades</Typography>

        <>
          {/* <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl> */}
          <Grid container spacing={3} className={classes.list}>
            {clinicas?.map((clinica, i) => (
                // console.log(clinicas)
              <Grid ref={elRefs[i]} key={i} item xs={8}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} clinica={clinica} />
              </Grid>
            ))}
          </Grid>
        </>

    </div>
  );
};

export default List;
