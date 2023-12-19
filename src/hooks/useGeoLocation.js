import { useState, useEffect, useCallback } from "react";

export const useGeoLocation = (options) => {
  const [loc, setLocation] = useState();
  const [error, setError] = useState("");

  const handleSuccess = useCallback((pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  }, []);

  const handleError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options, handleSuccess]);

  return { loc, error };
};
