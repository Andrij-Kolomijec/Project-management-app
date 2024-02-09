import { useEffect, useState } from "react";
import classes from "./ProjectDetails.module.css";
import PropTypes from "prop-types";
import Button from "./Button";

export default function ProjectDetails({ project, onClick, setProjects }) {
  const [newTask, setNewTask] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    setForceUpdate(false);
  }, [forceUpdate]);

  function handleDelete(e) {
    e.preventDefault();
    onClick(null);
    setProjects((previousProjects) => {
      return previousProjects.filter((i) => i.title !== project.title);
    });
  }

  function handleAddTask(e) {
    e.preventDefault();
    if (!newTask) {
      alert("Cannot add an empty task!");
      return;
    }
    project.tasks.push(newTask);
    setNewTask("");
  }

  function handleDeleteTask(e, task) {
    e.preventDefault();
    project.tasks = project.tasks.filter((i) => i !== task);
    setForceUpdate(true);
  }

  return (
    <div className={classes.details}>
      <div className={classes.buttonContainer}>
        <h1>{project.title}</h1>
        <Button
          color="grey"
          bgColor="transparent"
          hoverColor="transparent"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
      <p>{project.due}</p>
      <p>{project.description}</p>
      <hr />
      <h2>Tasks</h2>
      <form>
        <input
          type="text"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          color="grey"
          bgColor="transparent"
          hoverColor="transparent"
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </form>
      <div className={classes.tasks}>
        {project.tasks.length === 0 ? (
          <p>This project does not have any tasks yet.</p>
        ) : (
          project.tasks.map((task) => {
            return (
              <div key={task} className={classes.task}>
                <p>{task}</p>
                <Button
                  onClick={(e) => handleDeleteTask(e, task)}
                  color="grey"
                  bgColor="transparent"
                  hoverColor="transparent"
                >
                  Clear
                </Button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.object,
  onClick: PropTypes.func,
  setProjects: PropTypes.func,
};
