import React from "react";
import styles from "./photo.module.css"
import cn from "classnames";

function Photo({src="https://pbs.twimg.com/profile_images/1259183857649299456/FvX31CSP_400x400.jpg",alt}) {
    return <div className={cn([styles.photo])}>
        <img src={src} alt={alt} className={styles.img}/>
    </div>
}
export default Photo;