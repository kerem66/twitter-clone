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

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavigationButton>

      <NavigationButton>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavigationButton>

      <NavigationButton>
        <Notification />
        <TitleBold>Notifications</TitleBold>
      </NavigationButton>

      <NavigationButton>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavigationButton>

      <NavigationButton>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavigationButton>

      <NavigationButton>
        <Lists />
        <TitleBold>List</TitleBold>
      </NavigationButton>

      <NavigationButton>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavigationButton>

      <NavigationButton>
        <More />
        <TitleBold>More</TitleBold>
      </NavigationButton>
    </nav>
  );
}
export default Navigation;
