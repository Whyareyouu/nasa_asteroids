import { Fragment } from "react";
import { Asteroid } from "../components/AsteroidsList";
import { useCartState } from "../hooks/useCartState";

const Cart = () => {
  const cartState = useCartState();
  console.log(cartState);
  return (
    <div>
      <h1>Заказ отправлен!</h1>
      {cartState.map((item) => (
        <Fragment key={item.id}>
          <Asteroid
            id={item.id}
            name={item.name}
            estimatedDiameter={item.estimatedDiameter}
            isPotentiallyHazardousAsteroid={item.isPotentiallyHazardousAsteroid}
            closeApproachDateFull={item.closeApproachDateFull}
            missDistance={item.missDistance}
            isCart={true}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Cart;
