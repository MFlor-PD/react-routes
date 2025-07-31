import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Link } from "react-router-dom";
import Home from "./paginas/Home";
import Projects from "./paginas/Projects";
import Resume from "./paginas/Resume";
import Form from "./paginas/Form";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
