import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { MapPin } from "lucide-react";
import Modal from "./modal";
import { useState } from "react";

type Poi = { key: string; location: google.maps.LatLngLiteral };

const PoiMarkers = (props: { pois: Poi[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          onClick={openModal}>
          <div
            style={{
              position: "absolute",
              transform: "translate(-50%, -100%)",
              backgroundColor: "white",
              padding: "2px 4px",
              borderRadius: "4px",
              border: "1px solid black",
            }}>
            Jalan Rusak
          </div>
          <div className="bg-danger rounded-full shadow text-white p-1">
            <MapPin />
          </div>
        </AdvancedMarker>
      ))}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-1 px-12 py-6 text-center">
          <h3 className="text-lg leading-5">Lihat berita</h3>
          <p className="text-sm font-light text-text">
            Ingin melihat berita di titik ini secara detail?
          </p>
        </div>
        <button className="w-full text-neutral py-3 border-y border-border">
          Lihat
        </button>
        <button className="w-full text-neutral py-3" onClick={closeModal}>
          Batal
        </button>
      </Modal>
    </>
  );
};

export default PoiMarkers;
