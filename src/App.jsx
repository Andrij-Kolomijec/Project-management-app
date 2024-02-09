import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.module.css";
import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <>
      <Sidebar />
      <ProjectDetails />
    </>
  );
}

export default App;
