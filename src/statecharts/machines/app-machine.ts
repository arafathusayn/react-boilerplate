import { Machine } from "xstate";
import { AppContext, AppState } from "../../typings";
import getDefaultAppContext from "../utils/get-default-app-context";
import changeRotationSpeed from "../actions/change-rotation-speed";

const persistedStates: string[] = [];

// const commonActions: string[] = ["persistContext"];

const states: { [key: string]: AppState } = {
  AppStarted: {
    on: {
      ROTATION_SPEED_CHANGE: {
        target: "RotationSpeedChanged",
        actions: ["changeRotationSpeed"],
      },
    },
  },
  RotationSpeedChanged: {
    on: {
      ROTATION_SPEED_CHANGE: {
        target: "RotationSpeedChanged",
        actions: ["changeRotationSpeed"],
      },
    },
  },
};

let previousState: string | null = null;

previousState = JSON.parse(localStorage.getItem("app-state") ?? "null");

const loadIntialState = (): string => previousState ?? "AppStarted";

let initialState = loadIntialState();

if (!persistedStates.includes(initialState)) {
  initialState = "AppStarted";
}

const appMachine = Machine<AppContext>(
  {
    id: "app",
    initial: initialState,
    states,
    on: {
      // Events Outside of This State Machine
    },
    context: getDefaultAppContext(),
  },
  {
    actions: {
      changeRotationSpeed,
    },
    services: {},
  },
);

export default appMachine;
