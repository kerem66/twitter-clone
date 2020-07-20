import React from "react";
import styles from "./photo.module.css";
import cn from "classnames";

function Photo({
  src = "https://pbs.twimg.com/profile_images/1259183857649299456/FvX31CSP_400x400.jpg",
  alt,
  size = 47,
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
}
export default Photo;
