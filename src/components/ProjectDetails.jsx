import classes from "./ProjectDetails.module.css";
import PropTypes from "prop-types";
import Button from "./Button";

export default function ProjectDetails({ project, onClick }) {
  return (
    <div className={classes.details}>
      <div className={classes.buttonContainer}>
        <h1>{project.title}</h1>
        <Button color="grey" bgColor="transparent" hoverColor="transparent">
          Delete
        </Button>
      </div>
      <p>{project.due}</p>
      <p>{project.description}</p>
      <hr />
      <h2>Tasks</h2>
      <div>
        <input type="text" />
        <Button color="grey" bgColor="transparent" hoverColor="transparent">
          Add Task
        </Button>
      </div>
      <div className={classes.tasks}>
        {project.tasks.length === 0 ? (
          <p>This project does not have any tasks yet.</p>
        ) : (
          project.tasks.map((task) => {
            return (
              <div key={task} className={classes.task}>
                <p>{task}</p>
                <Button
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
};
