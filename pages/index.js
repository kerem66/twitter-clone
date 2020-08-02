import React from "react";
import Layout from "../components/layout";
import Tweet from "../components/tweet";

function HomePage() {
  return (
    <div>
      <Layout>
        <Tweet
    name="Kerem Harman"
    slug="keremharman66"
    datetime={new Date("2020-08-02")}
    text={`Merhaba Falan filan

           saas hop gg..`}
    />
      </Layout>
    </div>
  );
}

export default HomePage;
