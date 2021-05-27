import React from "react";
import ReactDOM from "react-dom";
import {
  Streamlit
} from "streamlit-component-lib";
import Datatable from "./Datatable";

// @ts-ignore
const resizeObserver = new ResizeObserver(() => {
  Streamlit.setFrameHeight()
})

resizeObserver.observe(document.body)

ReactDOM.render(
  <React.StrictMode>
    <Datatable />
  </React.StrictMode>,
  document.getElementById("root")
)
