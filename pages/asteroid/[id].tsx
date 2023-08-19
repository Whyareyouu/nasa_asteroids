import { GetServerSideProps } from "next";
import axios from "axios";
import { AsteroidData } from "@/types/TAsteroids";
import styles from "../../styles/Asteroid.module.css";
import * as process from "process";

const Asteroid = ({ asteroid }: AsteroidProps) => {
  return (
    <div className={styles.asteroidContainer}>
      <h1 className={styles.title}>{asteroid.name}</h1>
      <p className={styles.asteroidDesignation}>
        Обозначение: {asteroid.designation}
      </p>
      <div className={styles.asteroidDetails}>
        <p>⚠ Опасен</p>
        <h2>Диаметр</h2>
        <p>
          Максимальный:{" "}
          {Math.round(
            asteroid.estimated_diameter.meters.estimated_diameter_min
          )}{" "}
          м Минимальный:{" "}
          {Math.round(
            asteroid.estimated_diameter.meters.estimated_diameter_max
          )}{" "}
          м
        </p>
      </div>
      <div className={styles.closeApproachList}>
        <h2>Close Approaches</h2>
        <ul>
          {asteroid.close_approach_data.map((approach) => (
            <li key={approach.epoch_date_close_approach}>
              <p>Date: {approach.close_approach_date_full}</p>
              <p>
                Relative Velocity:{" "}
                {approach.relative_velocity.kilometers_per_hour} km/h
              </p>
              <p>Miss Distance: {approach.miss_distance.kilometers} km</p>
              <p>Orbiting Body: {approach.orbiting_body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const { data: asteroid } = await axios.get<AsteroidData>(
    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${
      process.env.API_KEY || "DEMO_KEY"
    }`
  );

  return {
    props: {
      asteroid,
    },
  };
};

export default Asteroid;
interface AsteroidProps extends Record<string, unknown> {
  asteroid: AsteroidData;
}
