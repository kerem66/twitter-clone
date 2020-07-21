import React from "react";
import Layout from "../components/layout";
import useWindowSize from "../hooks/useWindowSize";
import CONSTANTS from "../constants";

import ColSidebar from "../components/col-sidebar";
import ColMain from "../components/col-main";
import ColExtra from "../components/col-extra";

function HomePage() {
  const size = useWindowSize();

  return (
    <div>
      <Layout>
        <ColSidebar flat={size.width < CONSTANTS.TABLET_SIZE}>sidebar</ColSidebar>
        <ColMain>main</ColMain>
        {size.width> CONSTANTS.DESKTOP_SIZE ? <ColExtra>extra</ColExtra> : null}
      </Layout>
    </div>
  );
}

export default HomePage;
