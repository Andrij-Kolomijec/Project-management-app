import { useState } from "react";
import classes from "./InputNewProject.module.css";
import PropTypes from "prop-types";
import Button from "./Button";

export default function InputNewProject({
  showProject,
  addNewProject,
  projects,
}) {
  const [newProject, setNewProject] = useState({
    title: null,
    description: null,
    due: null,
    tasks: [],
  });

  function handleSave(e) {
    e.preventDefault();
    if (!newProject.title || !newProject.description || !newProject.due) {
      alert("Please fill in all required fields.");
      return;
    }
    addNewProject([...projects, newProject]);
    showProject(newProject);
  }

  return (
    <form id="input-form" className={classes.inputForm}>
      <div className={classes.buttons}>
        <Button
          onClick={() => showProject(null)}
          bgColor="transparent"
          hoverColor="transparent"
          color="black"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          bgColor="black"
          color="white"
          hoverColor="gray"
        >
          Save
        </Button>
      </div>

      <label htmlFor="input-title">TITLE</label>
      <input
        id="input-title"
        type="text"
        name="title"
        required
        onChange={(e) =>
          setNewProject({ ...newProject, title: e.target.value })
        }
      />

      <label htmlFor="input-textarea">DESCRIPTION</label>
      <textarea
        name=""
        id="input-textarea"
        cols="30"
        rows="5"
        required
        onChange={(e) =>
          setNewProject({ ...newProject, description: e.target.value })
        }
      ></textarea>

      <label htmlFor="input-due-date">DUE DATE</label>
      <input
        id="input-due-date"
        type="date"
        required
        onChange={(e) => setNewProject({ ...newProject, due: e.target.value })}
      />
    </form>
  );
}

InputNewProject.propTypes = {
  showProject: PropTypes.func,
  addNewProject: PropTypes.func,
  projects: PropTypes.array,
};
