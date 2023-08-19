import styles from "./Cart.module.css";
import { useCartState } from "@/hooks/useCartState";
import { declensionAsteroids } from "../../lib/declensionAsteroids";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";

export const Cart = () => {
  const asteroids = useCartState();
  const router = useRouter();
  const handleSendAsteroids = () => {
    router.push("/cart");
  };
  return (
    <div className={styles.cart}>
      <div>
        <h2>Корзина</h2>
        <p>{declensionAsteroids(asteroids.length)}</p>
      </div>
      <Button disabled={asteroids.length === 0} onClick={handleSendAsteroids}>
        Отправить
      </Button>
    </div>
  );
};
