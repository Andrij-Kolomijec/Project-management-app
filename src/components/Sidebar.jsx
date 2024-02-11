import classes from "./Sidebar.module.css";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <section className={classes.navigation}>
      <h2>YOUR PROJECTS</h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className={classes.projects}>
        {projects.map((project) => {
          return (
            <li
              className={
                selectedProjectId === project.id ? classes.active : undefined
              }
              onClick={() => onSelectProject(project.id)}
              key={project.id}
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
  onStartAddProject: PropTypes.func,
  projects: PropTypes.array,
  onSelectProject: PropTypes.func,
  selectedProjectId: PropTypes.string,
};
