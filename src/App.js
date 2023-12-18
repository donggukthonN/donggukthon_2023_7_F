import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Init, Home, NotFound } from "./pages";

function App() {
  return (
    <div className="App">
      {/* Router라는 파일짜서 빼도 될듯 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />}></Route>
          <Route paht="/home" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
