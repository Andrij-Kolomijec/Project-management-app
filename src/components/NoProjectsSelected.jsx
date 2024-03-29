import classes from "./NoProjectsSelected.module.css";
import PropTypes from "prop-types";
import Button from "./Button";
import noProjects from "../assets/no-projects.png";

export default function NoProjectsSelected({ onStartAddProject }) {
  return (
    <section className={classes.details}>
      <img src={noProjects} alt="Empty Clipboard" />
      <h2>No project selected</h2>
      <p>Select a project or get started with a new one.</p>
      <Button onClick={onStartAddProject}>Create new project</Button>
    </section>
  );
}

NoProjectsSelected.propTypes = {
  onStartAddProject: PropTypes.func,
};
