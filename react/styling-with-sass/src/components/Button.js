import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  //size: large, medium, small
  //color: blue, pink, gray
  console.log(rest);
  return (
    <button
      className={classNames(
        "Button",
        size,
        color,
        {
          outline,
          fullWidth
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue"
};

export default Button;
