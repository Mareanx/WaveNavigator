import React from "react";
import { StyleGlobal } from "./style/Style";
import { UrlProvider } from "./contexts/search-context";
import Home from "./Home";

function App() {
  return (
    <>
      <StyleGlobal></StyleGlobal>
      <Home />
    </>
  );
}

export default App;
