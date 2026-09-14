import React, { useState } from "react";

import { RotateCcwClock, Pencil, Trash, Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import AddNotesCard from "./components/AddNotesCard";
import RecentNotes from "./components/RecentNotes";

const App = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [task, setTask] = useState([]);
  function deleteTask(key) {
    const newTask = [...task];
    newTask.splice(key, 1);
    setTask(newTask);
  }
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
              const newTask = [...task];
              newTask.push({ title, notes });
              setTask(newTask);
              setTitle("");
              setNotes("");
            }}
            className=" mt-2 flex flex-col border border-[#5555544d]  rounded-lg bg-[#181c24]"
          >
            <input
              type="text "
              className=" outline-0 text-md font-semibold px-7 py-6 h-5"
              placeholder="Title..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              className="h-46 overflow-y-scroll scrollbar-none  outline-0 mx-7 font-light border-b resize-none border-b-[#5353534d] "
              rows="5"
              cols="40"
              value={notes}
              placeholder="Write your note..."
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            ></textarea>
            <div className="btn">
              <button className="bg-[#c0c1ff] ml-auto active:scale-x-95 flex items-center gap-2 py-2 px-5 font-semibold rounded-sm text-[#1000a9] mb-5 mr-5">
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
          <div className=" flex items-start gap-4 lg:gap-0 flex-wrap min-h-[29vh]">
            {task.length > 0 ? (
              task.map((elem, idx) => {
                return (
                  <section
                    key={idx}
                    className="lg:min-w-full sm:min-w-full pt-6 pb-5 mb-5 px-6 mt-2 flex flex-col border border-[#5555544d]  rounded-lg bg-[#181c24]  md:min-w-[47%] md:max-w-[47%]"
                  >
                    <div className="flex gap-2 items-center">
                      <h4 className="text-lg font-semibold flex-wrap text-wrap ">
                        {elem.title}
                      </h4>
                      <div className="text-[13px] text-nowrap tracking-widest ml-auto">
                        Just now
                      </div>
                    </div>
                    <p className="leading-6 tracking-tight mb-5 text-[#c7c4d7] mt-3 flex-wrap">
                      {elem.notes}
                    </p>

                    <div className=" border-t  border-t-[#5353534d]">
                      <button className=" ml-auto mt-2 flex items-center gap-4 rounded-sm mr-3">
                        <Pencil
                          className=""
                          size={18}
                          strokeWidth={2}
                          color="#908fa0"
                        />
                        <Trash
                          onClick={(key) => {
                            deleteTask(key);
                          }}
                          className="active:scale-y-125 "
                          size={18}
                          strokeWidth={2}
                          color="#908fa0"
                        />
                      </button>
                    </div>
                  </section>
                );
              })
            ) : (
              <div className="text-gray-500 ml-6 ">No tasks available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
