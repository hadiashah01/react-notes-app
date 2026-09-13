import React from "react";
import Navbar from "./components/Navbar";
import AddNotesCard from "./components/AddNotesCard";
import RecentNotes from "./components/RecentNotes";

const App = () => {
  return (
    <div className="h-100% lg:min-h-screen bg-[#0f131c] text-[#dfe2ee] pt-0.5 ">
      <Navbar />
      <div className=" px-3 wrapper lg:flex md:px-12">
      <AddNotesCard />
      <RecentNotes /></div>
    </div>
  );
};

export default App;
