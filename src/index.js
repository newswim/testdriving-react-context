import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif"
};

const App = () => (
  <table style={styles}>
    <tr>Hello</tr>
    <tr>World</tr>
  </table>
);

render(<App />, document.getElementById("root"));
