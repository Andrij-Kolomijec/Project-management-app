import { useState } from "react";
import classes from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({
  bgColor = "dimgray",
  color = "#d8d8d8",
  hoverColor = "#818181",
  children,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    backgroundColor: isHovered ? hoverColor : bgColor,
    color,
  };

  return (
    <button
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes.button}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  children: PropTypes.string,
};
