import styles from "./Cart.module.css";
import { useCartState } from "../../../../hooks/useCartState";
import { declensionAsteroids } from "../../lib/declensionAsteroids";
import { Button } from "../../../Button/Button";

export const Cart = () => {
  const asteroids = useCartState();
  return (
    <div className={styles.cart}>
      <div>
        <h2>Корзина</h2>
        <p>{declensionAsteroids(asteroids.length)}</p>
      </div>
      <Button>Отправить</Button>
    </div>
  );
};
