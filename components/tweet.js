import React from "react";
import dateFormat from "date-fns/formatDistanceToNowStrict";

import styles from "./tweet.module.css";
import Photo from "./photo";
import IconButton from "./icon";
import * as Icon from "./icons";

function Tweet({ name, slug, datetime, text, children }) {
  return (
    <article className={styles.tweet}>
      {/*avatar*/}
      <div className={styles.avatar}>
        <Photo />
      </div>

      {/*body*/}
      <div className={styles.body}>
        <header className={styles.header}>
            <span className={styles.name}>{name}</span>
            <span className={styles.slug}>@{slug}</span>
            <span className={styles.time}> · {dateFormat(datetime)}</span>
        </header>

        <div className={styles.content}>{text}</div>

        <footer className={styles.footer}>
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Reply/>

                </IconButton>
                <span>12</span>
            </div>
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Retweet/>

                </IconButton>
                <span>17</span>
            </div>
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Like/>

                </IconButton>
                <span>128</span>
            </div>
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Share/>
                </IconButton>
            </div>
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Question/>
                </IconButton>
            </div>
        </footer>
      </div>
      {children}
    </article>
  );
}
export default Tweet;
