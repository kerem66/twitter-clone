import React from "react";
import styles from "./navigation-button.module.css";
import cn from "classnames";
import Button from "./button";

function NavigationButton({ notify, selected, children, ...props }) {
  return (
    <Button
      {...props}
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
}
export default NavigationButton;
