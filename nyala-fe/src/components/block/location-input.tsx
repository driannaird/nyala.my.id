import React, { FC, useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";
import MapsProvider from "ln/providers/maps";

interface LocationInputProps {
  onSelectCoordinates: (coordinateArg: { lat: number; lng: number }) => void;
  center: { lat: number; lng: number };
}

const LocationInput: FC<LocationInputProps> = ({
  onSelectCoordinates,
  center,
}) => {
  const [markerPosition, setMarkerPosition] = useState(center);

  const handleMarkerDragEnd = (event: google.maps.MapMouseEvent) => {
    const newLat = event.latLng?.lat();
    const newLng = event.latLng?.lng();
    if (newLat && newLng) {
      setMarkerPosition({ lat: newLat, lng: newLng });
      onSelectCoordinates({ lat: newLat, lng: newLng });
    }
  };

  return (
    <div className="mt-4 rounded-lg overflow-hidden">
      <MapsProvider>
        <Map
          defaultCenter={center}
          defaultZoom={15}
          style={{ width: "100%", height: "400px" }}>
          <Marker
            position={markerPosition}
            draggable={true}
            onDragEnd={handleMarkerDragEnd}
          />
        </Map>
      </MapsProvider>
    </div>
  );
};

export default LocationInput;
