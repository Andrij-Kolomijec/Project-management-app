import { useState, useRef } from "react";
import classes from "./ProjectDetails.module.css";
import PropTypes from "prop-types";
import Button from "./Button";
import Modal from "./Modal";

export default function Tasks({ tasks, onAdd, onDelete }) {
  const [enteredTask, setEnteredTask] = useState("");

  const modal = useRef();

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid input</h2>
        <p>Please fill in the task text field.</p>
      </Modal>
      <h2>Tasks</h2>
      <form>
        <input type="text" value={enteredTask} onChange={handleChange} />
        <Button
          color="grey"
          bgColor="transparent"
          hoverColor="transparent"
          onClick={handleClick}
        >
          Add Task
        </Button>
      </form>
      <div className={classes.tasks}>
        {tasks.length === 0 ? (
          <p>This project does not have any tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={classes.task}>
              <p>{task.text}</p>
              <Button
                onClick={() => onDelete(task.id)}
                color="grey"
                bgColor="transparent"
                hoverColor="transparent"
              >
                Clear
              </Button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};
