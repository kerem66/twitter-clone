import React from "react";
import styles from "./navigation.module.css";
import NavigationButton from "./navigation-button";
import TitleBold from "./title-bold";
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
} from "./icons";

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton selected={selectedKey === "home"}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "explore"}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "notification"} notify={4}>
        <Notification />
        <TitleBold>Notifications</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "messages"}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "bookmark"}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "list"}>
        <Lists />
        <TitleBold>List</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "profile"}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "more"}>
        <More />
        <TitleBold>More</TitleBold>
      </NavigationButton>
    </nav>
  );
}
export default Navigation;
