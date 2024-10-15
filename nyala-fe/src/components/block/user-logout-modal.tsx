"use client";
import React, { FC, useState } from "react";
import User from "../fragments/user";
import Modal from "./modal";
import { signOut } from "next-auth/react";

interface UserLogoutModalProps {
  url: string;
}

const UserLogoutModal: FC<UserLogoutModalProps> = ({ url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>
        <User src={url} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-1 px-12 py-6 text-center">
          <h3 className="text-lg leading-5">Keluar akun</h3>
          <p className="text-sm font-light text-text">
            Anda yakin ingin keluar?
          </p>
        </div>
        <button
          onClick={() => signOut()}
          className="w-full text-danger py-3 border-y border-border">
          Keluar
        </button>
        <button className="w-full text-neutral py-3" onClick={closeModal}>
          Batal
        </button>
      </Modal>
    </>
  );
};

export default UserLogoutModal;
