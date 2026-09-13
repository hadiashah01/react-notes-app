import React from "react";
import Navbar from "./components/Navbar";
import AddNotesCard from "./components/AddNotesCard";

const App = () => {
  return (
    <div className="h-screen bg-[#0f131c] text-[#dfe2ee] pt-0.5 ">
      <Navbar />
      <AddNotesCard />
    </div>
  );
};

export default App;
