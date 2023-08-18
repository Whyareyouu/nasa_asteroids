import {ActionPoints} from "./types/action.enum";
import {TActions} from "./types/actions";
import {TAsteroid} from "../../types/TAsteroids";

const reducer = (state: TAsteroid[], action: TActions):TAsteroid[] => {
    switch (action?.type) {
        case ActionPoints.ADDTOCART:
            return [...state, action.payload];
        case ActionPoints.DELETEFROMCART:
            return state
        default:
            return state;
    }
};
export default reducer;