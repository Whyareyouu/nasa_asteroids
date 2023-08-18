import { ActionPoints } from "./types/action.enum";
import { TActions } from "./types/actions";
import { StateSchema } from "./types/stateSchema";

const reducer = (state: StateSchema[], action: TActions): StateSchema[] => {
  switch (action?.type) {
    case ActionPoints.ADDTOCART:
      return [...state, action.payload];
    case ActionPoints.DELETEFROMCART:
      return state;
    default:
      return state;
  }
};
export default reducer;
