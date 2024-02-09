import classes from "./NoProjectsSelected.module.css";
import Button from "./Button";
import noProjects from "../assets/no-projects.png";

export default function NoProjectsSelected() {
  return (
    <section className={classes.details}>
      <img src={noProjects} alt="Empty Clipboard" />
      <h2>No project selected</h2>
      <p>Select a project or get started with a new one.</p>
      <Button>Create new project</Button>
    </section>
  );
}
