import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import { createRoot } from "react-dom/client";

// import "./index.css";

// const container = document.querySelector("#root");
// const root = createRoot(container);

// const el1 = <span>Hello</span>;
// const el2 = <span>World</span>;
// const el = (
//   <div>
//     {el1} {el2}
//   </div>
// );

// console.log(el);

// root.render(el);
