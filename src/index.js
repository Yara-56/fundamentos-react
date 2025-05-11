import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";

import Primeiro from "./components/basicos/primeiro";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <Primeiro></Primeiro>
  </div>
);
