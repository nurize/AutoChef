import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MapComponent = ({ locations }) => {
  const center = useMemo(() => ({
    lat: locations[0].lat,
    lng: locations[0].lng,
  }), [locations]);

  const markers = useMemo(() => locations.map((location, index) => (
    <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
  )), [locations]);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {markers}
      </GoogleMap>
    </LoadScript>
  );
};

MapComponent.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })).isRequired,
};

export default MapComponent;
