import styles from "./Asteroid.module.css";
import { AsteroidImage } from "../AsteroidImage/AsteroidImage";
import { Button, ButtonTheme } from "../../../Button/Button";
import { FC } from "react";
import { DistanceLine } from "../DistanceLine/DistanceLine";
import { TAsteroid } from "../../../../types/TAsteroids";

interface AsteroidProps {
  cart: TAsteroid[];
  id: string;
  asteroid: TAsteroid;
  name: string;
  estimatedDiameter: number;
  isPotentiallyHazardousAsteroid: boolean;
  closeApproachDateFull: string;
  missDistance: string;
  handleAddToCart: (asteroid: TAsteroid) => void;
}

export const Asteroid: FC<AsteroidProps> = (props) => {
  const {
    id,
    cart,
    asteroid,
    name,
    estimatedDiameter,
    isPotentiallyHazardousAsteroid,
    closeApproachDateFull,
    missDistance,
    handleAddToCart,
  } = props;
  return (
    <div className={styles.wrapper}>
      <p className={styles.date}>{closeApproachDateFull}</p>
      <div className={styles.content}>
        <DistanceLine distance={missDistance} />
        <div className={styles.info}>
          <AsteroidImage size={estimatedDiameter} />
          <div className={styles.sizes}>
            <p className={styles.name}>
              {name.replaceAll(/^[^(]*\(|\)$/g, "")}
            </p>
            <p>Ø {estimatedDiameter} м</p>
          </div>
        </div>
      </div>
      <div className={styles.additional}>
        <Button
          theme={ButtonTheme.SECONDARY}
          onClick={() => handleAddToCart(asteroid)}
          disabled={cart.some((item) => item?.id === id)}
        >
          {cart.some((item) => item?.id === id) ? "В корзине" : "Заказать"}
        </Button>
        {isPotentiallyHazardousAsteroid && (
          <p className={styles.warring}>
            <span className={styles.warning__icon}>⚠</span>
            Опасен
            {isPotentiallyHazardousAsteroid}
          </p>
        )}
      </div>
    </div>
  );
};
