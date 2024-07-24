import React from "react";
import GoogleMapReact from 'google-map-react';

// Component for rendering a marker on the map
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  // Default properties for the map
  const defaultProps = {
    center: {
      lat: 10.99835602, // Default latitude
      lng: 77.01502627  // Default longitude
    },
    zoom: 11 // Default zoom level
  };

  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // Add your Google Maps API key here
        defaultCenter={defaultProps.center} // Center of the map
        defaultZoom={defaultProps.zoom} // Zoom level of the map
      >
        {/* Marker component with latitude, longitude, and text */}
        <AnyReactComponent
          lat={59.955413} // Latitude for the marker
          lng={30.337844} // Longitude for the marker
          text="My Marker" // Text to display in the marker
        />
      </GoogleMapReact>
    </div>
  );
}
