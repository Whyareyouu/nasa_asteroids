import { GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";
import EarthImage from "../assets/images/Earth.png";
import Image from "next/image";
import axios from "axios";
import { Cart } from "../components/Cart/ui/Cart/Cart";
import { AsteroidsList } from "../components/AsteroidsList";
import { AsteroidsData, TAsteroids } from "../types/TAsteroids";
import { withLayout } from "../layout/main/Layout";

function Home({ asteroids }: AsteroidProps) {
  return (
    <div className={styles.Home}>
      <AsteroidsList initialState={asteroids} />
      <Cart />
    </div>
  );
}
export default withLayout(Home);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: asteroids } = await axios.get<AsteroidsData>(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-08&end_date=2023-08-10&api_key=${
        process.env.API_KEY || "DEMO_KEY"
      }`
    );
    return {
      props: {
        asteroids: asteroids.near_earth_objects,
      },
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return {
      props: {
        asteroids: [],
      },
    };
  }
};

interface AsteroidProps extends Record<string, unknown> {
  asteroids: TAsteroids;
}
