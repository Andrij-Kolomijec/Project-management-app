import classes from "./ProjectDetails.module.css";
import NewProjectButton from "./NewProjectButton";
import noProjects from "../assets/no-projects.png";

export default function ProjectDetails() {
  return (
    <section className={classes.details}>
      <img src={noProjects} alt="Empty Clipboard" />
      <h2>No project selected</h2>
      <p>Select a project or get started with a new one</p>
      <NewProjectButton>Create new project</NewProjectButton>
    </section>
  );
}
