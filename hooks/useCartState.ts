import {CartStateContext} from "../context/CartContext/CartContext";
import {useContext} from "react";

export const useCartState = () => {
    const context = useContext(CartStateContext);
    if (context === undefined) {
        throw new Error('useCartState must be used within a CartProvider');
    }
    return context;
};