import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/lab/Rating';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PlaceIcon from '@mui/icons-material/Place';

// import useStyles from './styles.js';
import Imagem from '/public/img/clinica.jpg';
// import Imagem from '/public/img/amb.png';

const PlaceDetails = ({ place, selected, refProp,clinica,onPlaceLocal }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = {
      chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },};

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 150 }}
        image={Imagem}
        title={clinica.nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{clinica.nome}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(5)} readOnly />
          <Typography component="legend">{''}  {''}</Typography>
        </Box>
        {/* <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {''}
          </Typography>
        </Box> */}


        {clinica.email && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{clinica.email}
          </Typography>
        )}
        {clinica.telefone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {clinica.telefone}
          </Typography>
        )}

        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <LocalHospitalIcon /> {clinica.especialidade.nome}
        </Typography>

        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PlaceIcon /> {clinica.endereco}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{onPlaceLocal(clinica.latitude,clinica.longitude)}}>
          Local
        </Button>
        {/* <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
