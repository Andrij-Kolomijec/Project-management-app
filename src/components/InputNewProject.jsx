import { useRef } from "react";
import classes from "./InputNewProject.module.css";
import PropTypes from "prop-types";
import Button from "./Button";
import Modal from "./Modal";

export default function InputNewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const due = useRef();

  function handleSave(e) {
    e.preventDefault();
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDue = due.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDue.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      due: enteredDue,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid input</h2>
        <p>Please fill in all fields.</p>
      </Modal>
      <form id="input-form" className={classes.inputForm}>
        <div className={classes.buttons}>
          <Button
            onClick={onCancel}
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
        <input ref={title} id="input-title" type="text" name="title" required />

        <label htmlFor="input-textarea">DESCRIPTION</label>
        <textarea
          ref={description}
          name=""
          id="input-textarea"
          cols="30"
          rows="5"
          required
        ></textarea>

        <label htmlFor="input-due-date">DUE DATE</label>
        <input ref={due} id="input-due-date" type="date" required />
      </form>
    </>
  );
}

InputNewProject.propTypes = {
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};
