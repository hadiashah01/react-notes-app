import React from "react";

import { RotateCcwClock, Pencil, Trash, Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import AddNotesCard from "./components/AddNotesCard";
import RecentNotes from "./components/RecentNotes";

const App = () => {
  return (
    <div className="h-100% lg:min-h-screen bg-[#0f131c] text-[#dfe2ee] pt-0.5 ">
      <Navbar />
      <div className=" px-3 wrapper lg:flex md:px-12">
        <div className="md:px-4 pt-14  lg:flex-1">
          <button className="flex items-center gap-2.5">
            <Plus size={20} color="#c0c1ff" />
            <h1 className="text-[21px] font-bold ">Add Notes</h1>
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className=" mt-2 flex flex-col border border-[#5555544d]  rounded-lg bg-[#181c24]"
          >
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
        <div className="md:px-4 pt-14 pb-4 lg:flex-1">
          <div className="flex items-center gap-2.5  mb-3">
            <RotateCcwClock size={20} color="#908fa0" />
            <h1 className="text-[21px] font-bold ">Recent Notes</h1>
          </div>
          <div className=" flex gap-4 lg:gap-0 flex-wrap ">
            <section className="lg:max-w-full pt-6 pb-5 mb-5 px-6 mt-2 flex flex-col border border-[#5555544d]  rounded-lg bg-[#181c24]  md:max-w-[47%]">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold">
                  Q3 Architecture Review
                </h4>
                <div className="text-[13px] tracking-widest">Just now</div>
              </div>
              <p className="leading-6 tracking-tight mb-5 text-[#c7c4d7] mt-3 flex-wrap">
                Finalize microservice boundaries for user auth and data
                pipelines. Ensure backwards compatibility with v2 API before
                canary release.
              </p>

              <div className=" border-t  border-t-[#5353534d]">
                <button className=" ml-auto mt-2 flex items-center gap-4 rounded-sm mr-3">
                  <Pencil
                    className=""
                    size={18}
                    strokeWidth={2}
                    color="#908fa0"
                  />
                  <Trash size={18} strokeWidth={2} color="#908fa0" />
                </button>
              </div>
            </section>
            <section className="lg:max-w-full pt-6 pb-5 mb-5 px-6 mt-2 flex flex-col border border-[#5555544d]  rounded-lg bg-[#181c24]  md:max-w-[47%]">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold">
                  Q3 Architecture Review
                </h4>
                <div className="text-[13px] tracking-widest">Just now</div>
              </div>
              <p className="leading-6 tracking-tight mb-5 text-[#c7c4d7] mt-3 flex-wrap">
                Finalize microservice boundaries for user auth and data
                pipelines. Ensure backwards compatibility with v2 API before
                canary release.
              </p>

              <div className=" border-t  border-t-[#5353534d]">
                <button className=" ml-auto mt-2 flex items-center gap-4 rounded-sm mr-3">
                  <Pencil
                    className=""
                    size={18}
                    strokeWidth={2}
                    color="#908fa0"
                  />
                  <Trash size={18} strokeWidth={2} color="#908fa0" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
