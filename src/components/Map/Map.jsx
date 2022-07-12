import * as React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import {Paper, Typography, useMediaQuery} from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/lab'
import './styles.css'

const Map = () => {
  const isMobile = useMediaQuery('(min-width: 600px)');
  const coordinates = {lat: 0, lng: 0};

  return (
    <div className="mapContainer">
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyD4e_w3W7vUed9XAXiPrBd5EdDLQn348_s'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}>
      </GoogleMap>
      {/* <h1>Map</h1> */}
    </div>
  )
}

export default Map