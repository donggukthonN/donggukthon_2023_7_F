import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Init,
  NotFound,
  Detail,
  Delete,
  Home,
  End,
  Upload,
  Location,
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/delete" element={<Delete />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/end" element={<End />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
