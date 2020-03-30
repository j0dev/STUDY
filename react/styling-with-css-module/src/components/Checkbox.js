import React from "react";
import styles from "./Checkbox.module.scss";
import classNames from "classnames/bind";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const cx = classNames.bind(styles);
function Checkbox({ checked, children, ...rest }) {
  return (
    <div className={cx("checkbox")}>
      <label>
        <input {...rest} checked={checked} type="checkbox" />
        <div className={cx("icon")}>
          {checked ? (
            <MdCheckBox className={cx("checked")} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default Checkbox;
