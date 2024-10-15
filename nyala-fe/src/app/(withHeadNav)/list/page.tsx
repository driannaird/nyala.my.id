"use client";

import { Map } from "@vis.gl/react-google-maps";
import MapsProvider from "ln/providers/maps";
import React, { useEffect, useState } from "react";
import PoiMarkers from "ln/components/block/poi-marker";
import { getLocations } from "ln/services/location";

type Poi = { key: string; id: string; location: google.maps.LatLngLiteral };

const ListPages = () => {
  const [locations, setLocations] = useState<Poi[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getLocations();

        setLocations(postData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <MapsProvider>
        <Map
          style={{ width: "100vw", height: "calc(100vh - 58px - 58px)" }}
          defaultZoom={14}
          defaultCenter={{ lat: -7.525373046087168, lng: 109.2934838969528 }}
          mapId={"28e88c9a12839eb8"}>
          <PoiMarkers pois={locations} />
        </Map>
      </MapsProvider>
    </div>
  );
};

export default ListPages;
