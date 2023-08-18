import { ActionPoints } from "./action.enum";
import { StateSchema } from "./stateSchema";

export type TActions =
  | { type: ActionPoints.ADDTOCART; payload: StateSchema }
  | { type: ActionPoints.DELETEFROMCART; payload: { id: string } };
