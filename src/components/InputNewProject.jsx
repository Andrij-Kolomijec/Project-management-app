import classes from "./InputNewProject.module.css";
import Button from "./Button";

export default function InputNewProject() {
  return (
    <form id="input-form" className={classes.inputForm}>
      <div className={classes.buttons}>
        <Button bgColor="transparent" hoverColor="transparent" color="black">
          Cancel
        </Button>
        <Button bgColor="black" color="white" hoverColor="gray">
          Save
        </Button>
      </div>
      <label htmlFor="input-title">TITLE</label>
      <input id="input-title" type="text" name="title" />
      <label htmlFor="input-textarea">DESCRIPTION</label>
      <textarea name="" id="input-textarea" cols="30" rows="5"></textarea>
      <label htmlFor="input-due-date">DUE DATE</label>
      <input id="input-due-date" type="date" />
    </form>
  );
}
