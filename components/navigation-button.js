import React from "react";
import styles from "./navigation-button.module.css";
import cn from "classnames";
import Button from "./button";

function NavigationButton({
  href,
  notify,
  selected,
  children,
  className,
  ...props
}) {
  return (
    <Button
      {...props}
      className={cn(
        styles.navButton,
        selected && styles.navButtonSelected,
        className
      )}
      href={href}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
}
export default NavigationButton;
