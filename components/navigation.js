import React from "react";
import {useRouter} from "next/router";
import cn from "classnames";
import {MENU} from "../constants";
import styles from "./navigation.module.css";

import NavigationButton from "./navigation-button";
import TextTitle from "./text-title";
import { Twitter} from "./icons";



function Navigation({ flat = false }) {
    const router = useRouter();

    return (
    <nav className={styles.nav}>
      {/*<NavigationButton>*/}
      {/*  <Twitter style={{fontSize:30}} />*/}
      {/*</NavigationButton>*/}

      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = router.pathname === menu.path;
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={cn(styles.navbutton , menu.key)}
          >
            { selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        );
      })}

      {/*<NavigationButton selected={selectedKey === "explore"}>*/}
      {/*  <Explore />*/}
      {/*  <TextTitle>Explore</TextTitle>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton selected={selectedKey === "notification"} notify={4}>*/}
      {/*  <Notification/>*/}
      {/*  <TextTitle>Notifications</TextTitle>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton selected={selectedKey === "messages"}>*/}
      {/*  <Messages />*/}
      {/*  <TextTitle>Messages</TextTitle>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton selected={selectedKey === "bookmark"}>*/}
      {/*  <Bookmark />*/}
      {/*  <TextTitle>Bookmark</TextTitle>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton selected={selectedKey === "list"}>*/}
      {/*  <Lists />*/}
      {/*  <TextTitle>List</TextTitle>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton selected={selectedKey === "profile"}>*/}
      {/*  <Profile />*/}
      {/*  <TextTitle>Profile</TextTitle>*/}
      {/*</NavigationButton>*/}

      {/*<NavigationButton selected={selectedKey === "more"}>*/}
      {/*  <More />*/}
      {/*  <TextTitle>More</TextTitle>*/}
      {/*</NavigationButton>*/}
    </nav>
  );
}
export default Navigation;
