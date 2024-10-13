import { APIProvider } from "@vis.gl/react-google-maps";
import React, { ReactNode } from "react";

const MapsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      {children}
    </APIProvider>
  );
};

export default MapsProvider;
