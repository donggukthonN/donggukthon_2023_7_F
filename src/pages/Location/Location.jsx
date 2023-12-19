import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../../components/Map/Map";
import Marker from "../../components/Map/Marker";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import styles from "../../pages/Location/Location.module.css";

const Location = () => {
  const { loc } = useGeoLocation();
  useEffect(() => {
    if (loc && loc.latitude && loc.longitude) {
      setCenter({
        lat: loc.latitude,
        lng: loc.longitude,
      });
    }
  }, [loc]);
  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = useState(16);
  const [center, setCenter] = useState({
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
      <Link to="/upload" className={styles.LocationButton}><p>설정하기</p></Link>
    </div>
  );
};

export default Location;
