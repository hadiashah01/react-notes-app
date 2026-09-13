import React from "react";
import { NotepadText } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between lg:px-15 p-4  border-b-[0.1px] border-b-[#4e4e4e] ">
      <div className="brand flex items-center gap-2">
        <NotepadText
          className="p-1 border border-[#0b3af8] rounded-lg bg-[#d4d5f9] "
          size={29}
          color="#0b3af8"
          strokeWidth={2.5}
        />
        <h2 className="text-[1.2rem] font-bold">NoteCraft</h2>
      </div>
      <h2 className="text-[1.1rem] font-bold bg-[#262a33] text-[c7c4d7] h-7 w-7 rounded-[10px] border border-[#a2a2a34d]  text-center">
        U
      </h2>
    </div>
  );
};

export default Navbar;
