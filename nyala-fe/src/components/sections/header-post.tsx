"use client";

import React, { FC, MouseEvent } from "react";
import LableButton from "../fragments/lable-button";
import IconButton from "../block/icon-button";
import { Icons } from "../fragments/icons";

interface HeaderPostProps {
  withButton?: boolean;
  text?: string;
  onClickBack?: (e: MouseEvent<HTMLButtonElement>) => void;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const HeaderPost: FC<HeaderPostProps> = ({
  withButton = true,
  text,
  onClickBack,
  onClick,
}) => {
  return (
    <div className="sticky z-50 top-0 bg-white flex justify-between px-4 items-center h-[58px] max-w-2xl mx-auto">
      <div className="">
        <IconButton onClick={onClickBack}>
          <Icons.back strokeWidth={1.25} />
        </IconButton>
      </div>
      {withButton ? (
        <div>
          <LableButton
            onClick={onClick}
            type="custom"
            className="bg-primary text-white hover:bg-green-500">
            {text}
          </LableButton>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderPost;
