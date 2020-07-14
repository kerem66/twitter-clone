import React from "react";
import Button from "../components/button";
import TextTitle from "../components/text-title";

export default {
  title: "Typography",
};

export const Title = () => (
  <div>
    <TextTitle>Merhaba Dünya Bold</TextTitle>
    <TextTitle bold={false}>Merhaba Dünya not bold </TextTitle>
  </div>
);
