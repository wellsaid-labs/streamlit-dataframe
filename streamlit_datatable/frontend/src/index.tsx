import React from "react";
import ReactDOM from "react-dom";
import {
  Streamlit
} from "streamlit-component-lib";
import Datatable from "./Datatable";

window.addEventListener('load', () => {
  Streamlit.setFrameHeight();
});

ReactDOM.render(
  <React.StrictMode>
    <Datatable />
  </React.StrictMode>,
  document.getElementById("root")
)
