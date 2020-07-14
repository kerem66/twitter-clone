import React from "react";
import styles from "./navigation-button.module.css";
import cn from 'classnames';
import Button from "./button";

function NavigationButton({ notify ,selected,children,...props }) {
  return (
    <Button className={cn(styles.navButton,selected && styles.navButtonSelected)} {...props} >


      {children}
      {notify && <span className={styles.notify}>{notify}</span> }
    </Button>
  );
}
export default NavigationButton;
