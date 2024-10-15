import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { MapPin } from "lucide-react";
import Modal from "./modal";
import { useState } from "react";
import Link from "next/link";

type Poi = { key: string; id: string; location: google.maps.LatLngLiteral };

const PoiMarkers = (props: { pois: Poi[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postId, setPostId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setIsModalOpen(true);
    setPostId(id);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setPostId(null);
  };

  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          onClick={() => openModal(poi.id)}>
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
          <h1 className="text-lg leading-5">Lihat berita</h1>
          <p className="text-sm font-light text-text">
            Ingin melihat berita di titik ini secara detail?
          </p>
        </div>
        <Link
          href={`/posting/d/${postId}`}
          className="w-full text-neutral py-3 border-y border-border inline-block text-center">
          Lihat
        </Link>
        <button className="w-full text-neutral py-3" onClick={closeModal}>
          Batal
        </button>
      </Modal>
    </>
  );
};

export default PoiMarkers;
