import Html2React from "..";
import Component from "./libraries/html2react";
import parse from "./libraries/parse";

const html2react = (): Html2React => ({
  name: "@frontity/html2react",
  libraries: {
    html2react: {
      parse,
      Component
    }
  }
});

export default html2react;
