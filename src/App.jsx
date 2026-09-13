import React from "react";
import Navbar from "./components/Navbar";
import AddNotesCard from "./components/AddNotesCard";
import RecentNotes from "./components/RecentNotes";

const App = () => {
  return (
    <div className="h-100% bg-[#0f131c] text-[#dfe2ee] pt-0.5 ">
      <Navbar />
      <div className="px-12">
      <AddNotesCard />
      <RecentNotes /></div>
    </div>
  );
};

export default App;
