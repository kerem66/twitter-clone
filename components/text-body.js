import React from "react";
import styles from "./text-body.module.css";
import cn from "classnames";

function TextBody ({ bold = false,start= false,lighter=false,className, children, ...props }) {
  return (
    <span
      className={cn([styles.body, bold && styles.bold,lighter && styles.lighter,start && styles.start, className])}
      {...props}
    >
      {children}
    </span>
  );
}
export default TextBody;
