import { ActionPoints } from "./action.enum";
import {TAsteroid} from "../../../types/TAsteroids";

export type TActions =
    | { type: ActionPoints.ADDTOCART; payload: TAsteroid }
    | { type: ActionPoints.DELETEFROMCART; payload: { id: string } }