import React from "react";
import { useGeoLocation } from "../../hooks/useGeoLocation";

const Home = () => {
  const { loc } = useGeoLocation({});

  return (
    <div>
      <p>
        Location: {loc ? `${loc.latitude}, ${loc.longitude}` : "Loading..."}
      </p>
    </div>
  );
};

export default Home;
