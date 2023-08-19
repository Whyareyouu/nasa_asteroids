import { Fragment } from "react";
import { Asteroid } from "../components/AsteroidsList";
import { useCartState } from "../hooks/useCartState";
import { withLayout } from "../layout/main/Layout";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const cartState = useCartState();
  return (
    <div className={styles.Cart}>
      <h1>Заказ отправлен!</h1>
      <div className={styles.list}>
        {cartState.map((item) => (
          <Fragment key={item.id}>
            <Asteroid
              unit={item.unit}
              id={item.id}
              name={item.name}
              estimatedDiameter={item.estimatedDiameter}
              isPotentiallyHazardousAsteroid={
                item.isPotentiallyHazardousAsteroid
              }
              closeApproachDateFull={item.closeApproachDateFull}
              missDistance={item.missDistance}
              isCart={true}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default withLayout(Cart);
