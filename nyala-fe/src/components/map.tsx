"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

type Poi = { key: string; location: google.maps.LatLngLiteral };

const locations: Poi[] = [
  {
    key: "RS MIFTAHUS SURUR",
    location: { lat: -7.525515327566348, lng: 109.29340661999018 },
  },
];

const MapComponent: React.FC = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultZoom={18}
        defaultCenter={{ lat: -7.525373046087168, lng: 109.2934838969528 }}
        mapId={"28e88c9a12839eb8"}>
        <PoiMarkers pois={locations} />
      </Map>
    </APIProvider>
  );
};

const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
          <div
            style={{
              position: "absolute",
              transform: "translate(-50%, -100%)",
              backgroundColor: "white",
              padding: "2px 4px",
              borderRadius: "4px",
              border: "1px solid black",
              fontSize: "12px",
              color: "black",
            }}>
            {poi.key}
          </div>
        </AdvancedMarker>
        // <AdvancedMarker key={poi.key} position={poi.location}>
        //   <div>
        //     <h1 className="text-5xl text-black">{poi.key}</h1>
        //   </div>
        // </AdvancedMarker>
      ))}
    </>
  );
};

export default MapComponent;
