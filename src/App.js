import React from "react";
import Introduction from "./components/Introduction/Introduction";
import Details from "./components/Details/Details";
import Demo from "./components/Demo/DemoServiceFunctions";
import Demo2 from "./components/Demo/Demo2";
import Feedback from "./components/Feedback/Feedback";
import "./App.css"; // assuming you have general styles here

function App() {
  return (
    <div className="app">
      <Introduction />
      <Details />
      <Demo2 />
      <Feedback />
    </div>
  );
}

export default App;
