import classes from "./ProjectDetails.module.css";
import PropTypes from "prop-types";
import Button from "./Button";
import Tasks from "./Tasks";

export default function ProjectDetails({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.due).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const projectTasks = tasks
    ? tasks.filter((i) => i.projectId === project.id)
    : undefined;

  return (
    <div className={classes.details}>
      <div className={classes.buttonContainer}>
        <h1>{project.title}</h1>
        <Button
          color="grey"
          bgColor="transparent"
          hoverColor="transparent"
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
      <p>{formattedDate}</p>
      <p className={classes.description}>{project.description}</p>
      <hr />
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={projectTasks} />
    </div>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func,
  onAddTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  tasks: PropTypes.array,
};
