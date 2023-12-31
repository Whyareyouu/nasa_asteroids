import { AsteroidsData, TAsteroids } from "@/types/TAsteroids";
import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Asteroid } from "../Asteroid/Asteroid";
import { formatDate } from "../../lib/timestampToValidDate/timestampToValidDate";
import { numberWithSpaces } from "../../lib/formatNumberWithSpaces/formatNumberWithSpaces";
import styles from "./AsteroidsList.module.css";
import { useCartDispatch } from "@/hooks/useCartDispatch";
import { ActionPoints } from "@/context/CartContext/types/action.enum";
import { useCartState } from "@/hooks/useCartState";
import axios from "axios";
import { START_TIME } from "@/lib/consts/consts";
import { increaseDateByOneDay } from "../../lib/increaseDateByOneDay/increaseDateByOneDay";
import { StateSchema } from "@/context/CartContext/types/stateSchema";

interface AsteroidsListProps {
  initialState: TAsteroids;
}

export enum MissDistanceUnit {
  "KILOMETERS" = "kilometers",
  "LUNAR" = "lunar",
}

export const AsteroidsList: FC<AsteroidsListProps> = ({ initialState }) => {
  const [asteroids, setAsteroids] = useState<TAsteroids>(initialState);
  const [page, setPage] = useState<string>(START_TIME);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [missDistanceUnit, setMissDistanceUnit] = useState<MissDistanceUnit>(
    MissDistanceUnit.KILOMETERS
  );

  const asteroidsList = useRef<HTMLDivElement>(null);
  const dispatch = useCartDispatch();
  const cart = useCartState();
  const handleAddToCart = useCallback(
    (asteroid: StateSchema) => {
      dispatch({ type: ActionPoints.ADDTOCART, payload: asteroid });
    },
    [dispatch]
  );

  const handleChangeDiameterUnitToKILOMETERS = () => {
    setMissDistanceUnit(MissDistanceUnit.KILOMETERS);
  };
  const handleChangeDiameterUnitToLunar = () => {
    setMissDistanceUnit(MissDistanceUnit.LUNAR);
  };

  const fetchAsteroids = useCallback(async () => {
    try {
      const incrPage = increaseDateByOneDay(page);
      const { data: asteroids } = await axios.get<AsteroidsData>(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${incrPage}&end_date=${incrPage}&api_key=${
          process.env.API_KEY || "DEMO_KEY"
        }`
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
        <div className={styles.changeUnit}>
          <p
            className={
              missDistanceUnit === MissDistanceUnit.KILOMETERS
                ? styles.active
                : ""
            }
            onClick={handleChangeDiameterUnitToKILOMETERS}
          >
            в километрах
          </p>
          <span>|</span>
          <p
            className={
              missDistanceUnit === MissDistanceUnit.LUNAR ? styles.active : ""
            }
            onClick={handleChangeDiameterUnitToLunar}
          >
            в лунных орбитах
          </p>
        </div>
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
                unit={missDistanceUnit}
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
                missDistance={numberWithSpaces(
                  missDistanceUnit === MissDistanceUnit.KILOMETERS
                    ? miss_distance.kilometers
                    : miss_distance.lunar
                )}
              />
            </Fragment>
          );
        })}
      {isLoading && <div>Загрузка...</div>}
    </div>
  );
};
