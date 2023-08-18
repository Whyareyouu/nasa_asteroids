import '../styles/globals.css'
import type {AppProps} from 'next/app'
import CartContext from "../src/context/CartContext/CartContext";

export default function App({Component, pageProps}: AppProps) {
    return (
        <CartContext>
            <Component {...pageProps} />
        </CartContext>
    )
}
