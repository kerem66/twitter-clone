import React from "react";
import styles from "./layout.module.css";
import cn from "classnames";
import ColSidebar from "./col-sidebar";
import CONSTANTS from "../constants";
import ColMain from "./col-main";
import ColExtra from "./col-extra";
import useWindowSize from "../hooks/useWindowSize";

function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className={cn([styles.layout])}>
      <ColSidebar flat={size.width < CONSTANTS.TABLET_SIZE}>sidebar</ColSidebar>
      <ColMain>{children}</ColMain>
      {size.width > CONSTANTS.DESKTOP_SIZE ? (
        <ColExtra>extra</ColExtra>
      ) : null}{" "}
    </div>
  );
}
export default Layout;
