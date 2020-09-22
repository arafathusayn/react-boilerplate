import React from "react";
import { useMachine } from "@xstate/react";
import appMachine from "../../statecharts/machines/app-machine";
import "./App.css";
import logo from "../../logo.svg";

const App = (): React.ReactElement => {
  const [currentState, sendEvent] = useMachine(appMachine);

  const { rotationSpeed = 25 } = currentState.event;

  return (
    <div className="app">
      <div className="container">
        <img
          style={{
            animation: `spin ${rotationSpeed}s linear infinite`,
          }}
          className="logo"
          width="250"
          height="auto"
          src={logo}
          alt="Logo"
        />
      </div>

      <div className="controls">
        <p
          style={{
            textAlign: "center",
          }}
        >
          {rotationSpeed}s
        </p>
        <button
          type="button"
          onClick={() =>
            sendEvent("ROTATION_SPEED_CHANGE", {
              rotationSpeed: Math.min(100, rotationSpeed + 1),
            })
          }
        >
          <span role="img" aria-label="plus">
            ➕
          </span>
        </button>
        <button
          type="button"
          onClick={() =>
            sendEvent("ROTATION_SPEED_CHANGE", {
              rotationSpeed: Math.max(1, rotationSpeed - 1),
            })
          }
        >
          <span role="img" aria-label="plus">
            ➖
          </span>
        </button>
      </div>

      <div
        role="button"
        onClick={() => {
          window.open("https://arafat.dev", "_blank");
        }}
        onKeyPress={() => {}}
        tabIndex={-1}
        className="main-footer"
      >
        Built with{" "}
        <span role="img" aria-label="laptop">
          💻
        </span>{" "}
        by Arafat
      </div>
    </div>
  );
};

export default App;
