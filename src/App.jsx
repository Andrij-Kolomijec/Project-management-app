import { useState } from "react";
import classes from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NoProjectsSelected from "./components/NoProjectsSelected";
import InputNewProject from "./components/InputNewProject";
import ProjectDetails from "./components/ProjectDetails";
import initialProjects from "./utils/projects";

function App() {
  const [showProject, setShowProject] = useState(null);
  const [projects, setProjects] = useState(initialProjects);

  return (
    <>
      <Sidebar
        projects={projects}
        onShowProject={setShowProject}
        showProject={showProject}
      />
      <section className={classes.main}>
        {showProject === "input" ? (
          <InputNewProject
            showProject={setShowProject}
            addNewProject={setProjects}
            projects={projects}
          />
        ) : showProject ? (
          <ProjectDetails
            project={showProject}
            onClick={setShowProject}
            projects={projects}
            setProjects={setProjects}
          />
        ) : (
          <NoProjectsSelected onAddClick={setShowProject} />
        )}
      </section>
    </>
  );
}

export default App;
