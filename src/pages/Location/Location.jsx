import React, { useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../../components/Map/Map";
import Marker from "../../components/Map/Marker";

const Location = () => {
  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = React.useState(16); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 37.569227,
    lng: 126.9777256,
  });
  const onClick = (e) => {
    setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    setZoom(m.getZoom());
    setCenter(m.getCenter());
  };
  return (
    <div>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <Map onClick={onClick} onIdle={onIdle} center={center} zoom={zoom}>
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
    </div>
  );
};

export default Location;
