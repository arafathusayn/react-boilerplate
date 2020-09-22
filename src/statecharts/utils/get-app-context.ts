import { AppContext } from "../../typings";

const getAppContext = (): AppContext =>
  JSON.parse(localStorage.getItem("app-context") ?? "{}");

export default getAppContext;
