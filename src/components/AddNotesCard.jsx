import React from "react";
import { Plus } from "lucide-react";

const AddNotesCard = () => {
  return (
    <div className="px-4 pt-14">
      <button className="flex items-center gap-2.5">
        <Plus size={20} color="#c0c1ff" strokeWidth={3} />
        <h1 className="text-lg font-bold ">Add Notes</h1>
      </button>
      <form className=" mt-2 flex flex-col border border-[#5555544d]  rounded-lg bg-[#181c24]">
        <input
          type="text "
          className=" outline-0 text-md font-semibold px-7 py-6 h-5"
          placeholder="Title..."
        />
        <textarea
          className="h-46  outline-0 mx-7 font-light border-b resize-none border-b-[#5353534d] "
          rows="5"
          cols="40"
          placeholder="Write your note..."
        ></textarea>
        <div className="btn">
          <button className="bg-[#c0c1ff] ml-auto flex items-center gap-2 py-2 px-5 font-semibold rounded-sm text-[#1000a9] mb-5 mr-5">
            <Plus size={14} color="#1000a9" strokeWidth={3} />
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotesCard;
