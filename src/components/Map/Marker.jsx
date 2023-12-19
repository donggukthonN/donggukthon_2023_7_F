import React, { useEffect } from "react";

const Marker = (options) => {
  // console.log(options);
  const [marker, setMarker] = React.useState();
  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      marker.addListener("click", (e) => {
        const markerPosition = marker.getPosition();
        console.log(markerPosition);
        if (markerPosition) {
          const lat = markerPosition.lat();
          const lng = markerPosition.lng();
          console.log(`${lat}, ${lng}`);
        }
      });
    }
  }, [marker, options]);
  return null;
};

export default Marker;
