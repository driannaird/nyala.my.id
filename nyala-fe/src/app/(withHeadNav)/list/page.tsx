"use client";

import { Map } from "@vis.gl/react-google-maps";
import MapsProvider from "ln/providers/maps";
import React from "react";
import { locations } from "./locationdummy";
import PoiMarkers from "ln/components/block/poi-marker";

const ListPages = () => {
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
