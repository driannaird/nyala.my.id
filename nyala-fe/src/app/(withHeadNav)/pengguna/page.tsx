// import Post from "ln/components/block/post";
import UserCard from "ln/components/block/user-card";
import LableButton from "ln/components/fragments/lable-button";
import { auth } from "ln/lib/auth";
import React from "react";

const PenggunaPage = async () => {
  const session = await auth();
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col gap-2 p-4 m-4 rounded-lg bg-[url('https://images.unsplash.com/photo-1728388939226-3fc095526a91')] bg-cover bg-center">
        <UserCard />
        <h2 className="text-lg font-semibold text-white">
          {session?.user?.name}
        </h2>
        <span className="text-white">@ponyo</span>
        <div>
          <LableButton type="inactive" className="">
            Edit Profil
          </LableButton>
        </div>
      </div>

      <div className="mb-[58px] px-4">
        <h2 className="text-neutral font-bold">Postingan anda</h2>
        {/* <Post />
        <Post /> */}
      </div>
    </div>
  );
};

export default PenggunaPage;
