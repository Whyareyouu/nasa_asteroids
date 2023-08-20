import React, { useReducer } from "react";
import { TActions } from "./types/actions";
import reducer from "./reducer";
import { StateSchema } from "./types/stateSchema";

export const CartStateContext = React.createContext<StateSchema[] | undefined>(
  undefined
);
export const CartDispatchContext = React.createContext<
  React.Dispatch<TActions> | undefined
>(undefined);

type CartProviderProps = {
  children: React.ReactNode;
  stateForTests?: StateSchema[];
};

const initialState: StateSchema[] = [];

function CartProvider({
  children,
  stateForTests,
}: CartProviderProps): React.JSX.Element {
  const [state, dispatch] = useReducer(reducer, stateForTests || initialState);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export default CartProvider;
