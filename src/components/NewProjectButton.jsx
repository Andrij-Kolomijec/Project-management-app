import classes from "./NewProjectButton.module.css";
import PropTypes from "prop-types";

export default function NewProjectButton({ children }) {
  return <button className={classes.button}>{children}</button>;
}

NewProjectButton.propTypes = {
  children: PropTypes.string,
};
