import React from "react";
import { RotateCcwClock, Pencil, Trash } from "lucide-react";

const RecentNotes = () => {
  return (
    <div className="px-4 pt-14 pb-4 lg:flex-1">
      <div className="flex items-center gap-2.5  mb-3">
        <RotateCcwClock size={20} color="#908fa0" />
        <h1 className="text-[21px] font-bold ">Recent Notes</h1>
      </div>
      <div className=" flex gap-4 lg:gap-0 flex-wrap ">
        <section className="lg:max-w-full pt-6 pb-5 mb-5 px-6 mt-2 flex flex-col border border-[#5555544d]  rounded-lg bg-[#181c24]  max-w-[47%]">
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold">Q3 Architecture Review</h4>
            <div className="text-[13px] tracking-widest">Just now</div>
          </div>
          <p className="leading-6 tracking-tight mb-5 text-[#c7c4d7] mt-3 flex-wrap">
            Finalize microservice boundaries for user auth and data pipelines.
            Ensure backwards compatibility with v2 API before canary release.
          </p>

          <div className=" border-t  border-t-[#5353534d]">
            <button className=" ml-auto mt-2 flex items-center gap-4 rounded-sm mr-3">
              <Pencil className="" size={18} strokeWidth={2} color="#908fa0" />
              <Trash size={18} strokeWidth={2} color="#908fa0" />
            </button>
          </div>
        </section>
       
        <section className="lg:max-w-full pt-6 pb-5 mb-5 px-6 mt-2 flex flex-col border border-[#5555544d]  rounded-lg bg-[#181c24]  max-w-[47%]">
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold">Q3 Architecture Review</h4>
            <div className="text-[13px] tracking-widest">Just now</div>
          </div>
          <p className="leading-6 tracking-tight mb-5 text-[#c7c4d7] mt-3 flex-wrap">
            Finalize microservice boundaries for user auth and data pipelines.
            Ensure backwards compatibility with v2 API before canary release.
          </p>

          <div className=" border-t  border-t-[#5353534d]">
            <button className=" ml-auto mt-2 flex items-center gap-4 rounded-sm mr-3">
              <Pencil className="" size={18} strokeWidth={2} color="#908fa0" />
              <Trash size={18} strokeWidth={2} color="#908fa0" />
            </button>
          </div>
        </section>
       
      </div>
    </div>
  );
};

export default RecentNotes;
