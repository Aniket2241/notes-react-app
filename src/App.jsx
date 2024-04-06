import { useState } from "react";
import Notes from "./Components/Notes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Components/Add";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
