import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../../components/Map/Map";
import Marker from "../../components/Map/Marker";
import LoadingPage from "../Loading/LoadingPage";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import styles from "../../pages/Location/Location.module.css";

const Location = () => {
  const [locationFlag, setLocationFlag] = useState(false);
  const { loc } = useGeoLocation();
  const [latLng, setLatLng] = useState();
  useEffect(() => {
    if (localStorage.getItem("lat") && localStorage.getItem("lng")) {
      setCenter({
        lat: localStorage.getItem("lat"),
        lng: localStorage.getItem("lng"),
      });
      setLocationFlag(true);
    }
    if (loc && loc.latitude && loc.longitude) {
      setCenter({
        lat: loc.latitude,
        lng: loc.longitude,
      });
      setLocationFlag(true);
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
    const latLng = e.latLng;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat, lng);
    setLatLng({ lat: lat, lng: lng });
  };

  const onIdle = (m) => {
    setZoom(m.getZoom());
    setCenter(m.getCenter());
  };
  const handleClick = (e) => {
    if (latLng) {
      localStorage.setItem("lat", latLng.lat);
      localStorage.setItem("lng", latLng.lng);
    } else {
      alert("위치를 지정해주세용!");
      e.preventDefault();
    }
  };

  return (
    <div>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        {locationFlag ? (
          <>
            {" "}
            <Map onClick={onClick} onIdle={onIdle} center={center} zoom={zoom}>
              {clicks.map((latLng, i) => (
                <Marker key={i} position={latLng} />
              ))}
            </Map>
            <div>
              <Link to="/upload" className={styles.locationButton}>
                <span className={styles.selectText} onClick={handleClick}>
                  위치 설정하기
                </span>
              </Link>
            </div>
          </>
        ) : (
          <LoadingPage title={"현재 위치를 파악중입니다."} />
        )}
      </Wrapper>
    </div>
  );
};

export default Location;
