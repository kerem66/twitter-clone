import React from "react";
import styles from "./navigation.module.css";
import NavigationButton from "./navigation-button";
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

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton>
        <Home />
        <span>Home</span>
      </NavigationButton>

      <NavigationButton>
        <Explore />
        <span>Explore</span>
      </NavigationButton>

      <NavigationButton>
        <Notification />
        <span>Notifications</span>
      </NavigationButton>

      <NavigationButton>
        <Messages />
        <span>Messages</span>
      </NavigationButton>

      <NavigationButton>
        <Bookmark />
        <span>Bookmark</span>
      </NavigationButton>

      <NavigationButton>
        <Lists />
        <span>List</span>
      </NavigationButton>

      <NavigationButton>
        <Profile />
        <span>Profile</span>
      </NavigationButton>

      <NavigationButton>
        <More />
        <span>More</span>
      </NavigationButton>
    </nav>
  );
}
export default Navigation;
