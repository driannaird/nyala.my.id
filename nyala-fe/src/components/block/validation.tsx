import React from "react";
import { Icons } from "../fragments/icons";

const Validation = () => {
  return (
    <div className="flex">
      {/* Valid */}
      <button className="flex items-center gap-1 bg-[#F7F7F7] border border-border px-3 py-[3px] rounded-l-full">
        <Icons.up strokeWidth={1.25} className="text-icon" />
        <div className="flex items-center gap-1">
          <span className="text-neutral text-sm">Valid</span>
          <span className="text-text-drop text-sm">•</span>
          <span className="text-text-drop text-sm">120</span>
        </div>
      </button>

      {/* Invalid */}
      <button className="flex items-center gap-1 bg-[#F7F7F7] border-r border-y border-border px-3 py-[3px] rounded-r-full">
        <Icons.down strokeWidth={1.25} className="text-icon" />
        <div className="flex items-center gap-1">
          <span className="text-text-drop text-sm">•</span>
          <span className="text-text-drop text-sm">120</span>
        </div>
      </button>
    </div>
  );
};

export default Validation;
