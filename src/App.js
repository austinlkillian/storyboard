import React from "react";
import "./App.scss";

const slidesArr = ["1", "2", "3"];

function App() {
  const slides = slidesArr.map((slide, i) => {
    return (
      <div key={i}>
        <h2>{slide}</h2>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>this is the title of the page</h1>

      {slides}
    </div>
  );
}

export default App;
