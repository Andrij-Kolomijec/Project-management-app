import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import PropTypes from "prop-types";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className={classes.modal}>
      {children}
      <form method="dialog">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

Modal.propTypes = {
  children: PropTypes.array,
  buttonCaption: PropTypes.string,
};

export default Modal;
