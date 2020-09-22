import { Action, AssignAction } from "xstate";

/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

export interface AppEvent {
  type: string;
  [key: string]: string;
}

export interface AppContext {
  rotationSpeed: number;
  lastUpdated: Date | null;
}

export interface AppState {
  context?: AppContext;
  on?: {
    [key: string]:
      | string
      | {
          target: string;
          actions?:
            | Action<AppContext, AppEvent>[]
            | Action<AppContext, AppEvent>
            | string;
        };
  };
  entry?: AssignAction<AppContext, AppEvent> | string[];
}
