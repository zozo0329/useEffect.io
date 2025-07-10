import React from "react";
import ButtonStyle from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={ButtonStyle.defaultStyle}
      type={"submit" || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
