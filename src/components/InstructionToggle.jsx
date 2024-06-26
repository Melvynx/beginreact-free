"use client";

import { cn } from "@/src/utils/cn";
import { useLocalStorageState } from "@/src/utils/useLocalStorage";

export const InstructionToggle = ({ children }) => {
  const [open, setOpen] = useLocalStorageState("open-instruction", false);

  return (
    <div
      className={cn("pt-2 px-4 flex flex-col overflow-auto max-lg:hidden", {
        "flex-1 border-r border-r-neutral": open,
        "absolute left-4 top-2": !open,
      })}
      style={{
        maxHeight: "calc(100vh - 49px)",
      }}
    >
      <div className="m-2 flex items-start">
        <input
          type="checkbox"
          id="toggle-instructions"
          className="toggle"
          checked={open}
          onChange={(e) => {
            setOpen(e.target.checked);
          }}
        />
      </div>
      {open ? children : null}
    </div>
  );
};
