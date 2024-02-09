import classes from "./Sidebar.module.css";
import PropTypes from "prop-types";
import Button from "./Button";
import projects from "./projects";

export default function Sidebar({ onAddClick, onShowProject, showedProject }) {
  return (
    <section className={classes.navigation}>
      <h2>YOUR PROJECTS</h2>
      <Button onClick={onAddClick}>+ Add Project</Button>
      <ul className={classes.projects}>
        {projects.map((project) => {
          return (
            <li
              className={showedProject === project ? classes.active : undefined}
              onClick={() => onShowProject(project)}
              key={project.title}
            >
              {project.title}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Sidebar.propTypes = {
  onAddClick: PropTypes.func,
  onShowProject: PropTypes.func,
  showedProject: PropTypes.object,
};
