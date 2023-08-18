import styles from "./Asteroid.module.css";
import { AsteroidImage } from "../AsteroidImage/AsteroidImage";
import { Button, ButtonTheme } from "../../../Button/Button";
import { FC, memo } from "react";
import { DistanceLine } from "../DistanceLine/DistanceLine";
import { StateSchema } from "../../../../context/CartContext/types/stateSchema";
import Link from "next/link";

interface AsteroidProps {
  cart?: StateSchema[];
  isCart?: boolean;
  id: string;
  name: string;
  estimatedDiameter: number;
  isPotentiallyHazardousAsteroid: boolean;
  closeApproachDateFull: string;
  missDistance: string;
  handleAddToCart?: (asteroid: StateSchema) => void;
}

export const Asteroid: FC<AsteroidProps> = memo((props) => {
  const {
    id,
    cart,
    name,
    estimatedDiameter,
    isPotentiallyHazardousAsteroid,
    closeApproachDateFull,
    missDistance,
    handleAddToCart,
    isCart = false,
  } = props;
  const asteroid: StateSchema = {
    id,
    name,
    estimatedDiameter,
    isPotentiallyHazardousAsteroid,
    closeApproachDateFull,
    missDistance,
  };
  return (
    <Link href={`/asteroid/${id}`} className={styles.wrapper}>
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
        {!isCart && (
          <Button
            theme={ButtonTheme.SECONDARY}
            onClick={() => handleAddToCart && handleAddToCart(asteroid)}
            disabled={cart && cart.some((item) => item?.id === id)}
          >
            {cart && cart.some((item) => item?.id === id)
              ? "В корзине"
              : "Заказать"}
          </Button>
        )}

        {isPotentiallyHazardousAsteroid && (
          <p className={styles.warring}>
            <span className={styles.warning__icon}>⚠</span>
            Опасен
            {isPotentiallyHazardousAsteroid}
          </p>
        )}
      </div>
    </Link>
  );
});
Asteroid.displayName = "Asteroid";
