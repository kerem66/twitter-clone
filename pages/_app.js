import React, {useContext, useEffect, useLayoutEffect, useState} from "react";

import "../styles/app.css";
import StoreContext from "../store";

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null);

  useLayoutEffect(()=> {
    const theme = localStorage.getItem("THEME") || "light";
    themeSet(theme);
  },[]);


  const changeTheme = (theme) => {
    themeSet(theme);
    localStorage.setItem("THEME", theme);
  };

  useEffect(() => {
    const $html = document.querySelector("html");
    $html.classList.remove("light");
    $html.classList.remove("dark");
    $html.classList.remove("dim");
    if(theme!== null){
      $html.classList.add(theme.toString());
    }

  }, [theme]);

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
