import { TAsteroid, TAsteroids } from "../../../../types/TAsteroids";
import { FC, Fragment, useCallback } from "react";
import { Asteroid } from "../Asteroid/Asteroid";
import { formatDate } from "../../lib/timestampToValidDate";
import { numberWithSpaces } from "../../lib/formatNumberWithSpaces";
import styles from "./AsteroidsList.module.css";
import { useCartDispatch } from "../../../../hooks/useCartDispatch";
import { ActionPoints } from "../../../../context/CartContext/types/action.enum";
import { useCartState } from "../../../../hooks/useCartState";

interface AsteroidsListProps {
  asteroids: TAsteroids;
}

export const AsteroidsList: FC<AsteroidsListProps> = ({ asteroids }) => {
  const dispatch = useCartDispatch();
  const cart = useCartState();
  const handleAddToCart = useCallback(
    (asteroid: TAsteroid) => {
      dispatch({ type: ActionPoints.ADDTOCART, payload: asteroid });
    },
    [dispatch]
  );

  return (
    <div className={styles.asteroidsList}>
      {Object.values(asteroids)
        .flat()
        .map((asteroid) => {
          const {
            id,
            name,
            estimated_diameter,
            is_potentially_hazardous_asteroid,
            close_approach_data,
          } = asteroid;
          const { epoch_date_close_approach, miss_distance } =
            close_approach_data[0];
          return (
            <Fragment key={id}>
              <Asteroid
                id={id}
                cart={cart}
                asteroid={asteroid}
                handleAddToCart={handleAddToCart}
                name={name}
                estimatedDiameter={Math.round(
                  estimated_diameter.meters?.estimated_diameter_max
                )}
                isPotentiallyHazardousAsteroid={
                  is_potentially_hazardous_asteroid
                }
                closeApproachDateFull={formatDate(epoch_date_close_approach)}
                missDistance={numberWithSpaces(miss_distance.kilometers)}
              />
            </Fragment>
          );
        })}
    </div>
  );
};
