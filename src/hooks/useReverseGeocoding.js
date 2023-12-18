import { useEffect, useState } from "react";
import axios from "axios";

export const useReverseGeocoding = (lat, lng) => {
  const [add, setAdd] = useState();
  useEffect(() => {
    const getAddress = async () => {
      try {
        if (lat && lng) {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
          );
          const address = response.data.results[0].formatted_address;
          setAdd(address);
          // console.log("Current Address:", address);
        }
        console.log(lat, lng);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    getAddress();
  }, [lat, lng]);
  return add;
};
