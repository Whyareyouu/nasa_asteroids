import { AsteroidsData, TAsteroids } from "../../../../types/TAsteroids";
import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Asteroid } from "../Asteroid/Asteroid";
import { formatDate } from "../../lib/timestampToValidDate";
import { numberWithSpaces } from "../../lib/formatNumberWithSpaces";
import styles from "./AsteroidsList.module.css";
import { useCartDispatch } from "../../../../hooks/useCartDispatch";
import { ActionPoints } from "../../../../context/CartContext/types/action.enum";
import { useCartState } from "../../../../hooks/useCartState";
import axios from "axios";
import { START_TIME } from "../../../../lib/consts/consts";
import { increaseDateByOneDay } from "../../lib/increaseDateByOneDay";
import { StateSchema } from "../../../../context/CartContext/types/stateSchema";

interface AsteroidsListProps {
  initialState: TAsteroids;
}

export const AsteroidsList: FC<AsteroidsListProps> = ({ initialState }) => {
  const [asteroids, setAsteroids] = useState<TAsteroids>(initialState);
  const [page, setPage] = useState<string>(START_TIME);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const asteroidsList = useRef<HTMLDivElement>(null);
  const dispatch = useCartDispatch();
  const cart = useCartState();
  const handleAddToCart = useCallback(
    (asteroid: StateSchema) => {
      dispatch({ type: ActionPoints.ADDTOCART, payload: asteroid });
    },
    [dispatch]
  );

  const fetchAsteroids = useCallback(async () => {
    try {
      const incrPage = increaseDateByOneDay(page);
      const { data: asteroids } = await axios.get<AsteroidsData>(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${incrPage}&end_date=${incrPage}&api_key=DEMO_KEY`
      );
      if (asteroids.near_earth_objects) {
        //@ts-ignore
        setAsteroids((prev) => ({ ...prev, ...asteroids.near_earth_objects }));
      }
      setPage(incrPage);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [page]);

  const handleScroll = useCallback(() => {
    const element = asteroidsList.current;
    if (
      element &&
      element.scrollTop + element.clientHeight >= element.scrollHeight
    ) {
      setIsLoading(true);
      fetchAsteroids();
    }
  }, [asteroidsList, fetchAsteroids]);

  useEffect(() => {
    if (asteroidsList.current) {
      asteroidsList.current?.addEventListener("scroll", handleScroll);
    }
    return () =>
      asteroidsList.current?.removeEventListener("scroll", handleScroll);
  }, [handleScroll, asteroidsList]);

  return (
    <div className={styles.asteroidsList} ref={asteroidsList}>
      <div>
        <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
        <p>в километрах | в лунных орбитах</p>
      </div>
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
      {isLoading && <p>Загрузка...</p>}
    </div>
  );
};
