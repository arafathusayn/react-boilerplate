import { AppContext } from "../../typings";

const getDefaultAppContext = (): AppContext =>
  JSON.parse(localStorage.getItem("app-context") ?? "null") ?? {
    rotationSpeed: 25,
  };

export default getDefaultAppContext;
