import { cn } from "ln/utils/cn";
import React, { FC, MouseEvent, ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn("p-2 rounded-lg hover:bg-hover text-icon", className)}>
      {children}
    </button>
  );
};

export default IconButton;
