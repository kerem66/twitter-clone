import React from "react";
import styles from "./col-main.module.css";
import cn from "classnames";

function ColMain({ children }) {
  return <div className={cn([styles.main])}>{children} </div>;
}
export default ColMain;
