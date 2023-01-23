import React from "react";
import "./index.css";
import TopNavBar from "./pages/TopNavBar/index";
import ContentRoute from "./Routers/index";

function App() {
  return (
    <>
    <header>
        <TopNavBar/>
    </header>
    <main>
      <ContentRoute/>
    </main>
    </>
  )
}

export default App;
