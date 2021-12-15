import ReactDOM from "react-dom";
import { Suspense } from "react";
import { App } from "./App";
import { Underlay, Overlay } from "./FigmaExport";
import "./styles.css";

ReactDOM.render(
  <>
    <Underlay />
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>,
  document.getElementById("root")
);
