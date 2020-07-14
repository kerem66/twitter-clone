import React from "react";
import styles from "./profile-box.module.css";
import cn from "classnames";
import Photo from "./photo";
import ArrowBottom from "./icons/ArrowBottom";
import Button from "./button";
import TextBody from "./text-body";

function ProfileBox({ slug = "keremharman66", name = "Kerem Harman" }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo />
      <div className={styles.body}>
        <TextBody bold>{name}</TextBody>
        <TextBody className={styles.slug}>@{slug}</TextBody>
      </div>
      <ArrowBottom className={styles.icon}/>
    </Button>
  );
}
export default ProfileBox;
