import React from "react";
import styles from "./stack.module.css"
import cn from "classnames";

function Stack({gap=20,column=false,children}) {
    return <div className={cn([styles.stack,column && styles.column])}
    style={{"--gap": `${gap}px`}}>
        {children} </div>
}
export default Stack;