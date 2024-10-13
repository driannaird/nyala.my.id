"use client";

import { cn } from "ln/utils/cn";
import { FC, MouseEvent, ReactNode } from "react";

interface LableButtonProps {
  children: ReactNode;
  className?: string;
  type: "inactive" | "active" | "custom";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const LableButton: FC<LableButtonProps> = ({
  children,
  className,
  type = "inactive",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-xs px-3 py-2 rounded-full whitespace-nowrap",
        type === "inactive"
          ? "text-neutral bg-hover hover:bg-border"
          : type === "active"
          ? "text-white bg-neutral hover:bg-text"
          : type === "custom"
          ? className
          : null
      )}>
      {children}
    </button>
  );
};

export default LableButton;
