/**
 * Make all properties in T optional
 */
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export interface AppContext {
  rotationSpeed: number;
}
