/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Icons } from "../fragments/icons";

interface ImageUploaderProps {
  isActive: boolean;
  onImageUpload: (uploadedImages: string[]) => void;
}

export default function ImageUploader({
  isActive,
  onImageUpload,
}: ImageUploaderProps) {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images, reader.result as string];

        setImages(newImages);
        onImageUpload(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImageUpload(newImages);
  };

  return (
    <div className="p-4">
      {isActive ? (
        <>
          {images.length < 5 ? (
            <label
              htmlFor="image-upload"
              className="cursor-pointer relative border flex items-center gap-[6px] p-2 rounded-lg w-fit border-border text-icon">
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              <Icons.images strokeWidth={1.25} />
              <span className="text-sm">Upload gambar</span>
            </label>
          ) : null}
        </>
      ) : null}

      <div className="grid grid-cols-2 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Uploaded ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
            {isActive ? (
              <button
                className="absolute top-1 right-1 h-6 w-6 bg-danger text-white rounded-full"
                onClick={() => removeImage(index)}>
                <Icons.x strokeWidth={1.25} />
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
