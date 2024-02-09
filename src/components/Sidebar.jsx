import classes from "./Sidebar.module.css";
import NewProjectButton from "./NewProjectButton";

export default function Sidebar() {
  return (
    <section className={classes.navigation}>
      <h2>YOUR PROJECTS</h2>
      <NewProjectButton>+ Add Project</NewProjectButton>
    </section>
  );
}
