import React from "react";
import Layout from "../components/layout";
import useWindowSize from "../hooks/useWindowSize";
import CONSTANTS from "../constants";

import ColSidebar from "../components/col-sidebar";
import ColMain from "../components/col-main";
import ColExtra from "../components/col-extra";

function ProfilePage() {
  const size = useWindowSize();

  return (
    <div>
      <Layout>Profile</Layout>
    </div>
  );
}

export default ProfilePage;
