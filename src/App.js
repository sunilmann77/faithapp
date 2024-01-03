import React from "react";
import Instructor from "./Instructor";
import jsonData from "./data";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar data={jsonData} />
      <Instructor data={jsonData} />
    </div>
  );
}

export default App;
