import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Link } from "react-router-dom";
import Home from "./paginas/Home";
import Projects from "./paginas/Projects";
import Resume from "./paginas/Resume";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
