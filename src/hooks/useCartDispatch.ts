import {CartDispatchContext} from "../context/CartContext/CartContext";
import {useContext} from "react";

export const useCartDispatch = () => {
    const context = useContext(CartDispatchContext);
    if (context === undefined) {
        throw new Error('useCartDispatch must be used within a CartProvider');
    }
    return context;
};