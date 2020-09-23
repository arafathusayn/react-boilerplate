import { AnyEventObject, assign } from "xstate";
import { AppContext } from "../../typings";

export default assign<AppContext>((_context, event: AnyEventObject) => ({
  rotationSpeed: event.rotationSpeed,
}));
