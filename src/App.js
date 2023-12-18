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
  Search,
  Upload,
  Location,
  Complete,
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
          <Route path="/search" element={<Search />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/complete" element={<Complete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
