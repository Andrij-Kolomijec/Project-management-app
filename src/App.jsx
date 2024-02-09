import { useState } from "react";
import classes from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NoProjectsSelected from "./components/NoProjectsSelected";
import InputNewProject from "./components/InputNewProject";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [showedProject, setShowedProject] = useState(null);

  function handleAddProject() {
    setShowAddProject(true);
  }

  function handleShowProject(project) {
    setShowedProject(project);
    setShowAddProject(false);
  }

  return (
    <>
      <Sidebar
        onAddClick={handleAddProject}
        onShowProject={handleShowProject}
        showedProject={showedProject}
      />
      <section className={classes.main}>
        {showAddProject ? (
          <InputNewProject />
        ) : showedProject ? (
          <ProjectDetails project={showedProject} />
        ) : (
          <NoProjectsSelected />
        )}
      </section>
    </>
  );
}

export default App;
