import { Action, AnyEventObject, AssignAction } from "xstate";

/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

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
            | Action<AppContext, AnyEventObject>[]
            | Action<AppContext, AnyEventObject>
            | string;
        };
  };
  entry?: AssignAction<AppContext, AnyEventObject> | string[];
}
