import classes from "./Sidebar.module.css";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Sidebar({ projects, onShowProject, showProject }) {
  return (
    <section className={classes.navigation}>
      <h2>YOUR PROJECTS</h2>
      <Button onClick={() => onShowProject("input")}>+ Add Project</Button>
      <ul className={classes.projects}>
        {projects.map((project) => {
          return (
            <li
              className={showProject === project ? classes.active : undefined}
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
  projects: PropTypes.array,
  onShowProject: PropTypes.func,
  showProject: PropTypes.object,
};
