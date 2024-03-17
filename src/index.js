// the module name need to be exactly "index.js" because the webpack bundler expects an entry point module called "index.js"

import React from "react";
import { createRoot } from "react-dom/client";

function App(params) {
  return <h1>Hello! React</h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
