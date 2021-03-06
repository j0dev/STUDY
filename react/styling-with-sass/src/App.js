import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button outline size="large">
          BUTTON
        </Button>
        <Button outline color="gray">
          BUTTON
        </Button>
        <Button outline color="pink" size="small">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button fullWidth size="large" className="customized-button">
          BUTTON1
        </Button>
        <Button fullWidth color="gray" size="large">
          BUTTON
        </Button>
        <Button
          fullWidth
          color="pink"
          size="large"
          onClick={() => {
            console.log("clicked!");
          }}
          onMouseMove={() => {
            console.log("onMouseMove!");
          }}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
