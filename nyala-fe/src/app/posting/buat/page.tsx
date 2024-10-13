"use client";

import Dropdown from "ln/components/block/dropdown";
import ImageUploader from "ln/components/block/image-uploader";
import LocationInput from "ln/components/block/location-input";
import Modal from "ln/components/block/modal";
import User from "ln/components/fragments/user";
import HeaderPost from "ln/components/sections/header-post";
import { useRouter } from "next/navigation";
import { useState } from "react";

const center = {
  lat: -7.525596834962032,
  lng: 109.29386582626485,
};

const CreatePostPage = () => {
  const router = useRouter();

  const [images, setImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [coordinates, setCoordinates] = useState(center);
  const [description, setDescription] = useState<string | null>("");

  const categories = ["Jalan Rusak", "lain", "Kategori 3"];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [position, setPosition] = useState<
    "image" | "locationcategory" | "description"
  >("image");

  const handleImageUpload = (uploadedImages: string[]) => {
    setImages(uploadedImages);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCoordinates = (coordinateArg: { lat: number; lng: number }) => {
    setCoordinates(coordinateArg);
  };

  const handleSubmit = () => {
    console.log(images, coordinates, selectedCategory, description);
  };

  return (
    <>
      <HeaderPost
        onClickBack={
          position === "image"
            ? images.length === 0
              ? () => router.push("/")
              : openModal
            : position === "description"
            ? () => setPosition("locationcategory")
            : () => setPosition("image")
        }
        onClick={() =>
          position !== "description"
            ? setPosition(
                position === "image"
                  ? "locationcategory"
                  : position === "locationcategory"
                  ? "description"
                  : "image"
              )
            : handleSubmit()
        }
        withButton={
          position === "image"
            ? images.length === 0
              ? false
              : true
            : position === "locationcategory"
            ? selectedCategory === ""
              ? false
              : true
            : description === null || description === ""
            ? false
            : true
        }
        text={position === "locationcategory" ? "Selanjutnya" : "Unggah"}
      />

      <div className="px-4 pt-2 flex items-center gap-2">
        <User src="/user.png" />
        <span>Ponyo</span>
      </div>

      {position === "description" ? (
        <div className="px-4">
          <textarea
            name="description"
            id="description"
            value={description as string}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-4 border w-full rounded-lg p-2 text-sm text-neutral focus:outline-none h-40"
            placeholder="Ketik deskripsi ..."></textarea>
        </div>
      ) : null}

      {position === "locationcategory" || position === "description" ? (
        <div className="mx-4 mt-4">
          <Dropdown
            options={categories}
            onSelect={handleCategorySelect}
            selectedOption={selectedCategory}
            placeholder="Pilih kategori"
          />
          <LocationInput
            onSelectCoordinates={handleCoordinates}
            center={coordinates}
          />
        </div>
      ) : null}

      <ImageUploader
        isActive={position === "image" ? true : false}
        onImageUpload={handleImageUpload}
      />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-1 px-12 py-6 text-center">
          <h3 className="text-lg leading-5">Hapus postingan?</h3>
          <p className="text-sm font-light text-text">
            Jika keluar, otomatis tidak akan tersimpan
          </p>
        </div>
        <button
          onClick={() => router.push("/")}
          className="w-full text-danger py-3 border-y border-border">
          Buang
        </button>
        <button className="w-full text-neutral py-3" onClick={closeModal}>
          Batal
        </button>
      </Modal>
    </>
  );
};

export default CreatePostPage;
