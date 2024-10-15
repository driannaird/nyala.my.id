import React from "react";
import LableButton from "../fragments/lable-button";

const HeaderCategory = () => {
  return (
    <div className="py-2 z-50 sticky top-[58px] bg-white max-w-2xl mx-auto">
      <ul className="flex gap-2 overflow-y-auto no-scrollbar px-4">
        <li>
          <LableButton type="active">Semua</LableButton>
        </li>
        <li>
          <LableButton type="inactive">Jalan Rusak</LableButton>
        </li>
        <li>
          <LableButton type="inactive">Kebakaran</LableButton>
        </li>
        <li>
          <LableButton type="inactive">Banjir</LableButton>
        </li>
        <li>
          <LableButton type="inactive">Pohon Tumbang</LableButton>
        </li>
        <li>
          <LableButton type="inactive">Lain lain</LableButton>
        </li>
      </ul>
    </div>
  );
};

export default HeaderCategory;
