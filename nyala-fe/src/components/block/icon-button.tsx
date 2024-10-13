import { cn } from "ln/utils/cn";
import React, { FC, MouseEvent, ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: FC<IconButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn("p-2 rounded-lg hover:bg-hover text-icon", className)}>
      {children}
    </button>
  );
};

export default IconButton;
