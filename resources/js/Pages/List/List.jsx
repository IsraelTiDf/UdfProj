import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select,createTheme,Tabs,Box } from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
// import useStyles from './styles.js';

const theme = createTheme();

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading,clinicas,onPlaceLocal }) => {
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

  return (
    <div className={classes.container}>
      <Typography variant="h4">Clinicas & Especialidades</Typography>
      <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 550 }}
      > 
      <Tabs
              orientation="vertical"
              variant="scrollable"
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >

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
              <Grid ref={elRefs[i]} key={i} item xs={10}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} clinica={clinica} onPlaceLocal={onPlaceLocal} />
              </Grid>
              ))}
          </Grid>
              
              
              
          
        </>
              </Tabs>
              </Box>

    </div>
  );
};

export default List;
